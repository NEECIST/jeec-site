<template>
    <div class="event">
  
      <div class="hour-info">
        <div id="circle"></div>
        <div class="hour">
          <p>{{ event.time }}</p>
        </div>
      </div>
  
      <div class="item radient-border-passthrough"
        :class="'type-' + event.type.replace(/\s/g, '').replace(/\W/g, '').toLowerCase()">
        <div class="main" :class="{ 'desc-open': showDesc }">
          <h2 id="title">
            {{ event.type }}
          </h2>
  
          <h3 id="text">
            {{ event.name }}
          </h3>
  
          <div id="description" v-bind:class="{ 'desc-open': showDesc }">
            <br>
            <p>{{ event.description }}</p>
            <br>
          </div>
  
          <div v-if="event.description != '' " id="info">
            <a @click="toggleDesc()"> {{ showmore_text }} </a>
          </div>
        </div>
  
        <div class="add" @click="addToCalendar()">
          <a class="atcb-button">
            <svg id="symbol" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1105_545)">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M4.375 0C4.54076 0 4.69973 0.065848 4.81694 0.183058C4.93415 0.300269 5 0.45924 5 0.625V1.25H15V0.625C15 0.45924 15.0658 0.300269 15.1831 0.183058C15.3003 0.065848 15.4592 0 15.625 0C15.7908 0 15.9497 0.065848 16.0669 0.183058C16.1842 0.300269 16.25 0.45924 16.25 0.625V1.25H17.5C18.163 1.25 18.7989 1.51339 19.2678 1.98223C19.7366 2.45107 20 3.08696 20 3.75V17.5C20 18.163 19.7366 18.7989 19.2678 19.2678C18.7989 19.7366 18.163 20 17.5 20H2.5C1.83696 20 1.20107 19.7366 0.732233 19.2678C0.263392 18.7989 0 18.163 0 17.5V3.75C0 3.08696 0.263392 2.45107 0.732233 1.98223C1.20107 1.51339 1.83696 1.25 2.5 1.25H3.75V0.625C3.75 0.45924 3.81585 0.300269 3.93306 0.183058C4.05027 0.065848 4.20924 0 4.375 0V0ZM2.5 4.375C2.5 4.03 2.805 3.75 3.18125 3.75H16.8188C17.1938 3.75 17.5 4.03 17.5 4.375V5.625C17.5 5.97 17.195 6.25 16.8175 6.25H3.18125C2.80625 6.25 2.5 5.97 2.5 5.625V4.375ZM10.625 10.625C10.625 10.4592 10.5592 10.3003 10.4419 10.1831C10.3247 10.0658 10.1658 10 10 10C9.83424 10 9.67527 10.0658 9.55806 10.1831C9.44085 10.3003 9.375 10.4592 9.375 10.625V12.5H7.5C7.33424 12.5 7.17527 12.5658 7.05806 12.6831C6.94085 12.8003 6.875 12.9592 6.875 13.125C6.875 13.2908 6.94085 13.4497 7.05806 13.5669C7.17527 13.6842 7.33424 13.75 7.5 13.75H9.375V15.625C9.375 15.7908 9.44085 15.9497 9.55806 16.0669C9.67527 16.1842 9.83424 16.25 10 16.25C10.1658 16.25 10.3247 16.1842 10.4419 16.0669C10.5592 15.9497 10.625 15.7908 10.625 15.625V13.75H12.5C12.6658 13.75 12.8247 13.6842 12.9419 13.5669C13.0592 13.4497 13.125 13.2908 13.125 13.125C13.125 12.9592 13.0592 12.8003 12.9419 12.6831C12.8247 12.5658 12.6658 12.5 12.5 12.5H10.625V10.625Z"
                  fill="#E7E7E7" />
              </g>
              <!-- <defs>
                <clipPath id="clip0_1105_545">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs> -->
            </svg>
          </a>
        </div>
        <div class="div-foto">
  
          <div v-if="speakers_image_list.length > 0">
  
            <div v-if="loadImg" id="foto" class="radient-border-passthrough">
              <FadeLoop :image_list="speakers_image_list" :index="index"></FadeLoop>
            </div>
            <div v-if="companies_image_list.length > 0" id="small-foto" class="radient-border-passthrough">
              <FadeLoop :image_list="companies_image_list" :index="index"></FadeLoop>
            </div>
  
          </div>
  
          <div v-else-if="speakers_image_list.length == 0 && companies_image_list.length > 0">
            <div v-if="loadImg" id="foto" class="radient-border-passthrough">
              <FadeLoop :image_list="companies_image_list" :index="index"></FadeLoop>
            </div>
          </div>
  
          <div v-else>
            <div v-if="loadImg" id="foto" class="radient-border-passthrough" style="background-color: darkgray;">
              <img style="border-radius: 0%;height: 70%; width: 70%;" src="@/assets/jeec_mobile_white.svg" alt="JEEC">
            </div>
          </div>
  
        </div>
      </div>
      <div class="hour-info">
        <div id="circle"></div>
        <div class="hour">
          <p>{{ event.end_time }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import FadeLoop from './FadeLoop.vue';
  import { Carousel, Slide } from 'vue3-carousel';
  import { atcb_action } from 'add-to-calendar-button';
  
  export default {
    name: "Event",
    components: {
      FadeLoop,
      Carousel,
      Slide
    },
    props: {
      event: Object,
      color: String,
      foto: Object,
      link: String,
      index: String
    },
    methods: {
      addEvent() {
   
      },
  
      formatToCalendarDate() {
        const date = this.event.day.split(',')[0];
        const date_components = date.split(' ');
        const calendarDate = date_components[2] + '-' + date_components[1] + '-' + date_components[0];
        return calendarDate;
      },
  
      addToCalendar() {
        const atcb_button = document.querySelector(".add");
        atcb_action(this.atcb_config, atcb_button)
      },
  
      getCompaniesImageList(event) {
        let image_list = [];
        for (let i = 0; i < event.companies.data.length; i++) {
          image_list.push(process.env.VUE_APP_JEEC_BRAIN_URL + event.companies.data[i].logo);
        }
        return image_list;
      },
  
      getSpeakersImageList(event) {
        let image_list = [];
        for (let i = 0; i < event.speakers.data.length; i++) {
          image_list.push(process.env.VUE_APP_JEEC_BRAIN_URL + event.speakers.data[i].image);
        }
        return image_list;
      },
  
      toggleDesc() {
  
        if (this.showDesc == false) {
          this.showDesc = true;
          this.hideDesc = false;
          this.showmore_text = "- info"
        } else {
          this.showDesc = false;
          this.hideDesc = true;
          this.showmore_text = "+ info"
        }
      }
    },
    data: function () {
      return {
        companies_image_list: this.getCompaniesImageList(this.event),
        speakers_image_list: this.getSpeakersImageList(this.event),
        loadImg: false,
        showDesc: false,
        hideDesc: true,
        showmore_text: "+ info",
        atcb_config: {
          customLabels: { "apple": "Apple Calendar", "google": "Google Calendar", "outlookcom": "Outlook Calendar" },
          name: "[JEEC] " + this.event.name,
          description: this.event.description,
          startDate: this.formatToCalendarDate(),
          startTime: this.event.time,
          location: this.event.location,
          endTime: this.event.end_time,
          options: ["Google", "Apple", "Outlook.com"],
        }
      };
    },
    mounted() {
      this.loadImg = true;
    }
  
  };
  </script>
  
  <style scoped>
  .event {
    width: 100%;
    min-height: 110px;
    margin-top: 10px;
  }
  
  .hour-info {
    display: flex;
    height: 10px;
    align-items: center;
    margin-bottom: 0px;
    line-height: 0px;
  }
  
  .hour {
    margin-left: 10px;
    font-size: 10pt;
    font-weight: bolder;
  }
  
  .item {
    --border-radius: 0 60px 60px 40px;
    --border-width: 2px;
    --background: var(--background_, radial-gradient(ellipse 150% 150% at 15% 0%, rgba(76, 202, 240, 0.14) 0%, rgba(76, 202, 240, 0.08) 70%, rgba(76, 202, 240, 0) 100%));
    --border-background: var(--border-background_, linear-gradient(165deg, #605ED0 0%, #4CC9F0 40%, #7209B7 100%));
  
    --color: white;
  
    margin-left: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
    min-height: 80px;
    display: flex;
    align-items: center;
  }
  
  .item::before {
    content: "";
  }
  
  .item.type-insidetalks {
    --color: #f72585;
    --background_: radial-gradient(ellipse 250% 200% at 0% 0%, rgba(247, 37, 132, 0.14), rgba(247, 37, 132, 0.08) 60%, rgba(247, 37, 132, 0));
    --border-background_: linear-gradient(165deg, #A414A4, #F72585 40%, #7209B7);
  }
  
  .item.type-workshop {
    --color: #4cc9f0;
    --background_: radial-gradient(ellipse 250% 200% at 0% 0%, rgba(76, 201, 240, 0.18), rgba(76, 201, 240, 0.12) 60%, rgba(76, 201, 240, 0));
    --border-background_: linear-gradient(165deg, #605ED0, #4CC9F0 40%, #7209B7);
  }
  
  .item.type-1515 {
    --color: #a428f6;
    --background_: radial-gradient(ellipse 250% 200% at 0% 0%, rgba(114, 9, 183, 0.14), rgba(114, 9, 183, 0.08) 60%, rgba(114, 9, 183, 0));
    --border-background_: linear-gradient(165deg, #7209B7, #A414A4 40%, #7209B7);
  }
  
  .item.type-mainspeaker,
  .item.type-discussionpanel {
    --color: rgb(96, 94, 208);
    --background_: radial-gradient(ellipse 250% 200% at 0% 0%, rgba(96, 94, 208, 0.14), rgba(96, 94, 208, 0.08) 60%, rgba(96, 94, 208, 0));
    --border-background_: linear-gradient(165deg, #605ED0, #7a57ea 40%, #7209B7);
  }
  
  .item.type-cerimony {
    --color: #1a9cd8;
    --background_: radial-gradient(ellipse 250% 200% at 0% 0%, rgba(26, 156, 216, 0.14), rgba(26, 156, 216, 0.08) 60%, rgba(26, 156, 216, 0));
    --border-background_: linear-gradient(165deg, #1a9cd8, #5499ed 40%, #7209B7);
  }
  
  .item.type-fastmeeting {
    --color: rgb(221, 64, 221);
    --background_: radial-gradient(ellipse 250% 200% at 0% 0%, rgba(221, 64, 221, 0.14), rgba(221, 64, 221, 0.08) 60%, rgba(221, 64, 221, 0));
    --border-background_: linear-gradient(165deg, #A414A4, #F72585 40%, #7209B7);
  }
  
  .main {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: flex-start;
    padding-top: 6px;
    padding-left: 15px;
    overflow-wrap: break-word;
    min-width: 0;
  }
  
  .add {
    height: 100%;
    margin: 0px;
    align-self: flex-end;
    margin-bottom: 8px;
    margin-right: 5px;
  }
  .add a {
    width: 100%;
    cursor: pointer !important;
  }

 .add a g path {
    fill: #E7E7E7;
    /* fill: #a73b3b; */
  }

  .add a:hover g path {
    fill: white;

  }
  
  .div-foto {
    position: relative;
    margin: 7px 0;
    margin-right: 7px;
  }
  
  #circle {
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
  }
  
  #title {
    margin-top: 5px;
    /* font-size: 15pt; */
    font-weight: bolder;
    text-align: start;
    font-size: 1.3rem;
    color: var(--color);
    font-family: 'Lexend Exa';
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  
  #text {
    flex: 1;
    /* font-size: 15pt; */
    height: 40%;
    font-size: 1rem;
    letter-spacing: 1px;
    font-weight: bolder;
    text-align: start;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    
  }
  
  .main.desc-open #text {
    white-space: normal;
  }
  
  #info {
    display: flex;
    font-size: 0.7rem;
    margin: 8px 0;
    margin-left: 20px;
  }
  #info a {
    text-decoration-line: underline;
    pointer-events: all;
    cursor: pointer;
    z-index: 100;
    color: var(--color);
  }
  
  #description {
    margin-left: 15px;
    text-align: start;
    padding-bottom: 5px;
    max-width: 600px;
    font-size: 0.9rem;
  }
  
  #description {
    max-height: 0;
    opacity: 0;
    transition: all 500ms ease-in-out;
  }
  
  #description.desc-open {
    max-height: 1000px;
    opacity: 1;
    transition: all 500ms ease-in-out;
  }
  
  #symbol {
    width: 20px;
    height: 20px;
  }
  
  #foto {
    --border-radius: 50%;
    --border-width: 2px;
    --background: var(--background_, radial-gradient(ellipse 150% 150% at 15% 0%, rgba(76, 202, 240, 0.14) 0%, rgba(76, 202, 240, 0.08) 70%, rgba(76, 202, 240, 0) 100%));
    --border-background: var(--border-background_, linear-gradient(165deg, #605ED0 0%, #4CC9F0 40%, #7209B7 100%));
  
    width: 78px;
    aspect-ratio: 1;
    background: rgb(255, 255, 255);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  #foto::before {
    content: "";
  }
  
  #small-foto {
    --border-radius: 50%;
    --border-width: 1px;
    --background: var(--background_, radial-gradient(ellipse 150% 150% at 15% 0%, rgba(76, 202, 240, 0.14) 0%, rgba(76, 202, 240, 0.08) 70%, rgba(76, 202, 240, 0) 100%));
    --border-background: var(--border-background_, linear-gradient(165deg, #605ED0 0%, #4CC9F0 40%, #7209B7 100%));
  
    width: 30px;
    aspect-ratio: 1;
    background: white;
    position: absolute;
    left: 5px;
    bottom: 0px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  #small-foto::before {
    content: "";
  }
  
  #small-foto > * {
    width: 90%;
    height: 90%;
  }
  </style>
  