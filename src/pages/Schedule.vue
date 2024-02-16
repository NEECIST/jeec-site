

<template>
  <div>
    <HollowDotsSpinner class="loading-spinner" :class="{invisible: !loading_activities}"
      :animation-duration="1250"
      :size="65"
      :color="'white'"
    />
    <div v-if="loading_activities" class="loading-spacer">

    </div>
    <div class="activities" :class="{ invisible: loading_activities }">
      <div style="margin-top: 4vh">
          <div class="carousel" style="margin-bottom: 110px;">
            <Carousel ref="schedule_carousel" :mouseDrag="false" :touchDrag="false" :itemsToShow="2.5" :wrapAround="true" :transition="500">
              <Slide v-for="(weekday, index) in weekdays" :key="index">
                  <button class="main-button radient-border-passthrough" :class="weekday.toLowerCase()" style="cursor: pointer; margin-bottom: 10px;" @click="carouselSlideEvent($event.target.parentElement.parentElement)">
                    <div class="weekday">
                      <p style="pointer-events: none;">{{ weekday }}</p>
                    </div>
                  </button>

                  
                  <div class="carousel_item">
                    <div class="schedule">
                      <div class="line"></div>
                      <div v-for="(event, index) in activities" :key="event" class="event">
                        <Event v-if="getWeekday(event.day) == weekday" color="aliceblue" :event="event" :index="weekday+index" link="/home"></Event>
                      </div>
                    </div> 
                  </div>
              </Slide>
              <div class="spacer"></div>
            </Carousel> 
            
          </div>
          
      </div>

    </div>
  </div>
  
</template>

<script>
import Event from "@/components/Event.vue";
import { Carousel,Slide } from 'vue3-carousel'
import { HollowDotsSpinner } from 'epic-spinners'
import axios from "axios";

import 'vue3-carousel/dist/carousel.css'

export default {
  name: "Schedule",
  components: {
    HollowDotsSpinner,
    Event,
    Carousel,
    Slide
  },
  data: function () {
    return {
      button: "all",
      model: 0,
      event_dates: [],
      activities: [],
      weekdays: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      loading_activities: true,
    };
  },
  methods: {
    // get weekday from string format "dd mm yyyy, weekday"
    getWeekday(date) {
      return date.split(", ")[1];
    },
    // onClick weekday element event
    carouselSlideEvent(target) {
      // if clicked element is "next"
      if(target.classList.contains("carousel__slide--next")){
        // go to next slide
        this.$refs.schedule_carousel.next()

        // make active slide (soon to be prev slide) pointable
        const active_slide = document.querySelector(".carousel__slide--active");
        if (active_slide) {
          active_slide.firstChild.style.pointerEvents = "all";
        }

        // update slide pointer events after transition
        setTimeout(() => {
          const new_active_slide = document.querySelector(".carousel__slide--active");
          if (new_active_slide) {
            new_active_slide.style.pointerEvents = "all";
            new_active_slide.firstChild.style.pointerEvents = "none";
            const next_slide = document.querySelector(".carousel__slide--next");
            if (next_slide) {
              next_slide.style.pointerEvents = "none";
              next_slide.firstChild.style.pointerEvents = "all";
            }

            const weekday = new_active_slide.firstChild.innerText;
            console.log(weekday)
            if (weekday.includes("Friday")) {
              console.log("Friday")
              next_slide.firstChild.style.pointerEvents = "none";
            }
          }
        }, 550);
      // if clicked element is "prev"  
      } else if(target.classList.contains("carousel__slide--prev")){
        // go to prev slide
        this.$refs.schedule_carousel.prev()


        // make active slide (soon to be next slide) pointable
        const active_slide = document.querySelector(".carousel__slide--active");
        if (active_slide) {
          active_slide.firstChild.style.pointerEvents = "all";
        }
        
        // update slide pointer events after transition
        setTimeout(() => {
          const new_active_slide = document.querySelector(".carousel__slide--active");
          if (new_active_slide) {
            new_active_slide.style.pointerEvents = "all";
            new_active_slide.firstChild.style.pointerEvents = "none";
            const next_slide = document.querySelector(".carousel__slide--next");
            if (next_slide) {
              next_slide.style.pointerEvents = "none";
              next_slide.firstChild.style.pointerEvents = "all";
            }            
          }
        }, 550);
      }
    }
  },
 
  mounted() {
   
    // make active slide non pointer
    const active_slide = document.querySelector(".carousel__slide--active");
    if (active_slide) {
      active_slide.firstChild.style.pointerEvents = "none";
    }

    // workaround to make add-to-calendar icon pointable
    const next_slide = document.querySelector(".carousel__slide--next");
    if (next_slide) {
      next_slide.style.pointerEvents = "none";
      next_slide.firstChild.style.pointerEvents = "all";
    }

    // make non loopable slides
    const slide_clones = document.querySelectorAll(".carousel__slide--clone");
    for (let i = 0; i < slide_clones.length; i++) {
      if (slide_clones[i].innerText.includes( "Friday" ) || slide_clones[i].innerText.includes("Monday")) {
        slide_clones[i].style.opacity = 0;
        slide_clones[i].style.pointerEvents = "none";
      }
    }
    
    // get activities
    axios
      .get(
        process.env.VUE_APP_JEEC_WEBSITE_API_URL +
          "/activities_website",
        {
          auth: {
            username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
            password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
          },
        }
      )
      .then((response) => {
        this.activities = response.data.data;
        console.log(this.activities)
      }).finally(() => {
      this.loading_activities = false;
      const activities = document.querySelector('.activities');

      const loading_spinner = document.querySelector('.loading-spinner');
      const active_slide = document.querySelector(".carousel__slide--active");

     
    })
  },
};
</script>

<style scoped>


.main-button{
  width: calc(100% - 10px);
  margin-left: 5px;
  font-size: 1.3rem;
  padding: 0.3rem;
  border: none;
  cursor: pointer;
  --background: none;
  --border-width: 2px 0 0 0;
  --border-radius: 0 0 0 0;
  height: 40px;
}
.carousel__slide--active .main-button {
  font-size: 1.4rem;
  font-weight: 700;
  --background: radial-gradient(ellipse 60% 120% at 50% 0, #4ccaf032, #7109b70e 90%, #7109b700);
}
.main-button::before {
  content: "";
}
.main-button.monday {
  --border-background: linear-gradient(100deg, #4CC9F0, #5B7EDA);
  --border-radius: 20px 0 0 0;
}
.main-button.tuesday {
  --border-background: linear-gradient(100deg, #5B7EDA, #6A33C3);
}
.main-button.wednesday {
  --border-background: linear-gradient(100deg, #6A33C3, #890EAE);
}
.main-button.thursday {
  --border-background: linear-gradient(100deg, #890EAE, #C11A99);
}
.main-button.friday {
  --border-background: linear-gradient(100deg, #C11A99, #F72585);
  --border-radius: 0 20px 0 0;
}

.loading-spacer{
  height: 100svh;
}
.activities {
  background-color: #e6e6e600;
  align-items: start;
  overflow-x: visible;
  opacity: 1;
  transition: 1s;
}

.activities.invisible{
  opacity: 0;
}

.activities.visible{
  opacity: 1;
  transition: 1s;
}

.loading-spinner {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;

}

.loading-spinner.invisible{
  opacity: 0;
  transition: 0.01s;
}

.carousel{
  /* height: 90vh; */
  width: 100%;
  overflow-y: hidden;
}

.carousel__item {
  min-height: 30px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 14px;
  border-radius: 0px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}
.carousel__item  .schedule{
  position: relative;
}

.line {
  height: 100%;
  width: 2px;
  position: fixed;
  background-color: white;
  margin-left: 4px;
  margin-top: 1vh;
  opacity: 0;
}

.carousel__slide {
  padding: 0px;
  align-items: start;
  justify-content: start;
  display: flex;
  flex-direction: column;;
  transform: rotateY(0);

}
.carousel__track{
  justify-content:safe center;

}

.carousel__icon{
  fill: none;
}

.carousel__slide--prev {
  transform: rotateY(0);
}

.carousel__slide--next {
  transform: rotateY(0);
}



.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

/*  */
.weekday{
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.schedule{
  opacity: 0;

}

.carousel__slide{
  height: 0;
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
  transition: 0.5s;
  align-items: center;
  height: auto;
}
.carousel__slide--active .schedule {
  transition: 0.5s;
  opacity: 1;
  width: 85vw;
  max-width: 800px;
  /* height: 65vh; */
  overflow-x: hidden;
  overflow: visible;
}

.carousel__slide--active .line{
  opacity: 1;
}

.carousel__slide--active .spacer{
  height: 100px;
  flex-direction: column;
  flex: 1;
}

</style>