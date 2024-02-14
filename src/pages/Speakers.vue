<template>
  <div>
    <h1 class="page__title" style="width:auto">Main Speakers</h1>
    <section class="page__section">
      <div class="carousel__wrapper">
        <Carousel v-if="!recalculateCarousel" ref="carousel" :autoplay="2000" :wrap-around="true" :transition="500" :breakpoints="carousel_breakpoints">
          <Slide v-for="speaker in main_speakers" :key="speaker">
            <button @click="openPopup(speaker)" class="speaker__card">
              <img class="speaker__image" :src="jeec_api_url + speaker.image" :alt="'Speaker ' + speaker.name + ' image'">
              <p class="speaker__name">Meet {{ speaker.name.split(" ")[0] }}</p>
              <div class="company__logo__wrapper gradient-border">
                <img class="company__logo" :src="jeec_api_url + speaker.company_logo" alt="">
              </div>
            </button>
          </Slide>
        </Carousel>
        <button class="carousel__prev" @click="carouselPrev">
          <img src="@/assets/caret-left.svg">
        </button>
        <button class="carousel__next" @click="carouselNext">
          <img src="@/assets/caret-right.svg">
        </button>
      </div>
    </section>
    <section class="page__section">
      <div :class="{open: popupOpen}" ref="popup" class="speaker__popup">
        <img :src="popupSpeakerImg" :alt="popupSpeakerImgAlt" class="popup__image">
        <div class="popup__info">
          <div class="popup__company">
            <img :src="popupCompanyImg">
          </div>
          <div class="popup__speaker">
            <div class="popup__speaker__top">
              <p> {{ popupSpeakerName }} </p>
              <a :href="popupSpeakerLinkedin">
                <img src="@/assets/socials/linkedin-logo-blue.svg" alt="Linkedin Logo">
              </a>
            </div>
            <p class="popup__speaker__position">{{ popupSpeakerPosition }}</p>
          </div>
        </div>
        <p class="popup__speaker__bio">{{ popupSpeakerBio }}</p>
      </div>
    </section>

    <h1 class="page__title" style="width:auto">Panel Members and Alumni</h1>
    <section class="page__section">
      <div class="carousel__wrapper">
        <Carousel v-if="!recalculateCarousel2" ref="carousel2" :autoplay="2000" :wrap-around="true" :transition="500" :breakpoints="carousel_breakpoints">
          <Slide v-for="speaker in other_speakers" :key="speaker">
            <button @click="openPopup2(speaker)" class="speaker__card">
              <img class="speaker__image" :src="jeec_api_url + speaker.image" :alt="'Speaker ' + speaker.name + ' image'">
              <p class="speaker__name">Meet {{ speaker.name.split(" ")[0] }}</p>
              <div class="company__logo__wrapper gradient-border">
                <img class="company__logo" :src="jeec_api_url + speaker.company_logo" alt="">
              </div>
            </button>
          </Slide>
        </Carousel>
        <button class="carousel__prev" @click="carouselPrev2">
          <img src="@/assets/caret-left.svg">
        </button>
        <button class="carousel__next" @click="carouselNext2">
          <img src="@/assets/caret-right.svg">
        </button>
      </div>
    </section>
    <section class="page__section">
      <div :class="{open: popupOpen2}" ref="popup2" class="speaker__popup">
        <img :src="popupSpeakerImg2" :alt="popupSpeakerImgAlt2" class="popup__image">
        <div class="popup__info">
          <div class="popup__company">
            <img :src="popupCompanyImg2">
          </div>
          <div class="popup__speaker">
            <div class="popup__speaker__top">
              <p> {{ popupSpeakerName2 }} </p>
              <a :href="popupSpeakerLinkedin2">
                <img src="@/assets/socials/linkedin-logo-blue.svg" alt="Linkedin Logo">
              </a>
            </div>
            <p class="popup__speaker__position">{{ popupSpeakerPosition2 }}</p>
          </div>
        </div>
        <p class="popup__speaker__bio">{{ popupSpeakerBio2 }}</p>
      </div>
    </section>
    
  </div>
</template>

<script>
import { useSpeakersStore } from '@/stores/SpeakersStore';
import { mapWritableState } from 'pinia';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

export default {
  components: { Carousel, Slide,},
  data() {
    return {
      jeec_api_url: process.env.VUE_APP_JEEC_BRAIN_URL,
      carousel_breakpoints: {
        0: { itemsToShow: 1.4 },
        390: { itemsToShow: 1.6 },
        510: { itemsToShow: 2 },
        720: { itemsToShow: 2.4 },
        800: { itemsToShow: 2.6 },
        900: { itemsToShow: 3 },
        1007: { itemsToShow: 3 }
      },
      popupOpen: false,
      popupOpen2: false,
      popupSpeaker: "",
      popupSpeakerImg: "",
      popupSpeakerImgAlt: "",
      popupCompanyImg: "",
      popupSpeakerName: "",
      popupSpeakerLinkedin: "",
      popupSpeakerPosition: "",
      popupSpeakerBio: "",
      popupSpeakerImg2: "",
      popupSpeakerImgAlt2: "",
      popupCompanyImg2: "",
      popupSpeakerName2: "",
      popupSpeakerLinkedin2: "",
      popupSpeakerPosition2: "",
      popupSpeakerBio2: "",
      recalculateCarousel: false,
      recalculateCarousel2: false,
    }
  }, computed: {
    ...mapWritableState(useSpeakersStore, ['main_speakers']),
    ...mapWritableState(useSpeakersStore, ['other_speakers']),
  }, watch: {
    main_speakers() {
      this.recalculateCarousel2 = true
      this.$nextTick(() => {
        this.recalculateCarousel2 = false
      })
    },
    other_speakers() {
      this.recalculateCarousel = true
      this.$nextTick(() => {
        this.recalculateCarousel = false
      })
    }
  }, methods: {
    openPopup(speaker) {
      if (this.popupOpen == true && this.popupSpeaker == speaker.name) {
        this.popupOpen = false
        scrollTo ({
          top: 0,
          left: 0,
        })
      } else {
        this.popupOpen = true
        this.popupSpeaker = speaker.name
        
        setTimeout(() => {
          let scrollPos = this.$refs.popup.getBoundingClientRect().top + window.scrollY
          scrollTo({
            top: scrollPos - 80,
            left: 0,
            behavior: 'smooth',
          })    
        }, 10);

        this.popupSpeakerImg = this.jeec_api_url + speaker.image
        this.popupSpeakerImgAlt = "Speaker " + speaker.name + " image"
        this.popupCompanyImg = this.jeec_api_url + speaker.company_logo
        this.popupSpeakerName = speaker.name
        this.popupSpeakerLinkedin = speaker.linkedin_url
        this.popupSpeakerPosition = speaker.position
        this.popupSpeakerBio = speaker.bio
        
      }
    }, carouselNext() {
      this.$refs.carousel.next()
    }, carouselPrev() {
      this.$refs.carousel.prev()
    },
    openPopup2(speaker) {
      if (this.popupOpen2 == true && this.popupSpeaker2 == speaker.name) {
        this.popupOpen2 = false
        scrollTo ({
          top: 0,
          left: 0,
        })
      } else {
        this.popupOpen2 = true
        this.popupSpeaker2 = speaker.name
        
        setTimeout(() => {
          let scrollPos = this.$refs.popup2.getBoundingClientRect().top + window.scrollY
          scrollTo({
            top: scrollPos - 80,
            left: 0,
            behavior: 'smooth',
          })    
        }, 10);

        this.popupSpeakerImg2 = this.jeec_api_url + speaker.image
        this.popupSpeakerImgAlt2 = "Speaker " + speaker.name + " image"
        this.popupCompanyImg2 = this.jeec_api_url + speaker.company_logo
        this.popupSpeakerName2 = speaker.name
        this.popupSpeakerLinkedin2 = speaker.linkedin_url
        this.popupSpeakerPosition2 = speaker.position
        this.popupSpeakerBio2 = speaker.bio
        
      }
    }, carouselNext2() {
      this.$refs.carousel2.next()
    }, carouselPrev2() {
      this.$refs.carousel2.prev()
    }
  },
}
</script>

<style scoped>
/* #region Carousel */
.carousel__wrapper {
  max-width: 930px;
  margin: 0 auto;
  position: relative;
  padding: 0 70px;
}

.carousel__prev,
.carousel__next {
  width: 70px;
  height: 70px;
  padding: 0;
  margin: 0;
}

.carousel__slide {
  padding: 0 10px;
}

.carousel__prev > img,
.carousel__next > img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.speaker__card {
  height: 400px;
  width: 230px;
  background: radial-gradient(130% 160% at 90% 80%, rgba(76, 201, 240, 0.6) 0%, rgba(16, 147, 188, 0.55) 58.9%, rgba(76, 201, 240, 0.00) 100%);
  border: none;
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.speaker__image {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 20px;
}

.speaker__card > p {
  text-transform: uppercase;
  font-family: Lexend;
  font-weight: 700;
  font-size: 1.2rem;
}

.company__logo__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 210px;
  height: 100px;
  border-radius: 20px;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3));
  margin-bottom: 10px;
}

.company__logo__wrapper::before {
  background: white;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  border-radius: 15px;
}

.company__logo {
  width: 80%;
  height: 80%;
  object-fit: contain;
}

/* #endregion */

.speaker__popup {
  display: none;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.speaker__popup.open {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.popup__image {
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: 40px 40px 0 0;
}

.popup__info {
  width: 70%;
  height: 120px;
  background: radial-gradient(190% 200% at 0% 0%, rgba(76, 201, 240, 0.35) 0%, rgba(76, 201, 240, 0.20) 56.05%, rgba(76, 201, 240, 0.00) 100%);
  backdrop-filter: blur(40px);
  margin-top: -10px;
  border-radius: 20px;
  border: 3px solid #0c8de980;
  display: flex;
  justify-content: space-between;
}

.popup__company {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 50%;
  height: 100%;
  border-radius: 20px 0 0 20px;
  background: radial-gradient(120% 200% at 0% 20%, white, rgba(255, 255, 255, 0.8) 70%, rgba(255, 255, 255, 0) 80%);
  padding-left: 50px;
}

.popup__company > img{
  width: auto;
  max-width: 80%;
  height: 80%;
  margin-right: 100px;
  object-fit: contain;
}

.popup__speaker {
  padding-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}

.popup__speaker__top {
  display: flex;
  align-items: center;
  max-height: 50%;
}

.popup__speaker__top > p {
  font-family: Russo One;
  font-size: 200%;
  white-space: nowrap;
}

.popup__speaker__top > a {
  height: 38px;
  width: 38px;
  padding-left: 10px;
  flex-shrink: 0;
}

.popup__speaker__top > a > img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.popup__speaker__position {
  font-family: 'Lexend Exa';
  font-size: 150%;
  color: #4CC9F0;
}

.popup__speaker__bio {
  padding-top: 2rem;
  color: #E7E7E7;
  font-size: 1.3rem;
  line-height: 2rem;
  padding-bottom: 3rem;
  max-width: 60%;
  text-align: center;
  margin: 0 auto;
}

@media screen and (max-width: 1007px){
  .carousel__wrapper {
    max-width: 890px;
    width: 100%;
    padding: 0 50px;
  }
  .carousel__next,
  .carousel__prev {
    width: 50px;
    height: 50px;
  }
  .popup__image {
    width: 300px;
    height: 300px;
  }
  .popup__info {
    width: 85%;
    height: 140px;
  }
  .popup__company {
    padding-left: 30px;
  }
  .popup__company > img {
    margin-right: 60px;
  }
  .popup__speaker__top > p {
    font-size: 175%;
  }
  .popup__speaker__position {
    font-size: 125%;
  }
  .popup__speaker__bio {
    max-width: 80%;
  }
}

@media screen and (max-width: 640px) {
  .page__section {
    padding-left: 0;
    padding-right: 0;
  }

  .carousel__next,
  .carousel__prev {
    display: none;
    visibility: collapse;
  }
  .carousel__wrapper {
    width: 100%;
    padding: 0 0;
  }
  .popup__image {
    width: 250px;
    height: 250px;
  }
  .popup__info {
    width: 95%;
    height: 140px;
  }
  .popup__company {
    padding-left: 10px;
  }
  .popup__company > img {
    margin-right: 20px;
  }
  .popup__speaker {
    padding-right: 10px;
  }
  .popup__speaker__top > p {
    font-size: 170%;
    white-space: normal;
  }
  .popup__speaker__position {
    font-size: 125%;
  }
  .popup__speaker__bio {
    max-width: 90%;
    font-size: 1.2rem;
  }
}
</style>