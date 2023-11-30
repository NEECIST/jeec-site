<template>
  <header>
    <nav>
      <router-link id="header__logo" to="/">
        <img class="classfied" src="@/assets/jeec-logo-dark.svg" alt="JEEC Logo">
      </router-link>


      <div class="left" style="margin-left: 30px;">
        {{ event_default }}
        <div class="sub_section-title">Events</div>
        <form class="col s12" id="event_form" method="get">
          <select v-model="selected_event_id" @change="EventSetter(selected_event_id)" name="event" id="event" class="form-control" style="width: 200px; display: block;" required>
            <option value="" disabled></option>
            <option v-for="_event in events" :key="_event.id" :value="_event.external_id">{{ _event.name }}</option>
          </select>
        </form>
        {{event_id}}
        
      </div>
  
      


      <div class="header__right">
        <div class="nav__links">
          
          <router-link v-if="selected_event_id==event_default.external_id" to="schedule">Schedule</router-link>
          <router-link to="partners">Partners</router-link>
          <router-link v-if="selected_event_id==event_default.external_id" to="sponsors">Sponsors</router-link>
          <router-link to="speakers">Speakers</router-link>
          <router-link to="team">Team</router-link>
        </div>
        <WebAppButton></WebAppButton>
        <NavHamburguer></NavHamburguer>
        <NavCollapsable></NavCollapsable>
      </div>
    </nav>
  </header>
</template>

<script>
import NavHamburguer from '@/components/NavHamburguer.vue';
import WebAppButton from '@/components/WebAppButton.vue';
import NavCollapsable from '@/components/NavCollapsable.vue';
import { useEventStore } from '@/stores/EventStore'
import axios from "axios";
import { mapWritableState, mapActions} from 'pinia'
import { usePartnersStore } from '@/stores/PartnersStore'
import { useTeamStore } from '@/stores/TeamStore'
import { useSpeakersStore } from '@/stores/SpeakersStore';


export default {
  
  components: { NavHamburguer, WebAppButton, NavCollapsable},
  data() {
    return {
      selected_event_id: '',
      events: [],
      event: {},
      event_default: {}
      
    }
  }, 
  methods: {
    ...mapActions(usePartnersStore, { updatePartners: 'fill' }),
    ...mapActions(useSpeakersStore, { updateSpeakers: 'fill' }),
    ...mapActions(useTeamStore, { updateTeam: 'fill' }),
    
    EventSetter(id) {
        this.event_id = id;
        this.updateSpeakers(id);
        this.updatePartners(id);
        this.updateTeam(id);
    } 
    

    
  },
  computed: {
    ...mapWritableState(useEventStore, ['event_id', 'event_default']),
    
  },
    mounted() {
    console.log(this.event_id)
    axios
      .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + "/event_vue", {
        auth: {
          username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
          password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
        },
        event_id: this.event_id
      })
      .then((response) => {
        (this.event = response.data.data)
        this.selected_event_id = this.event.external_id,
        this.loaded = true},
        this.event_id = this.selected_event_id);

    axios
      .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + "/event_vue", {
        auth: {
          username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
          password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
        },
        event_id: ''
      })
      .then((response) => {
        (this.event_default = response.data.data)
        // this.selected_event_id = this.event.external_id,
        // this.loaded = true
      },
        // this.event_id = this.selected_event_id
        );


    axios
      .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + "/events/vue", {
        auth: {
          username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
          password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
        },
      })
      .then((response) => {
        (this.events = response.data.events)
        });

      console.log(this.event)
      
      console.log(this.events)
  },
  


}
</script>

<style>
header {
  z-index: 9999;
  position: fixed;
  width: 100%;

}

nav {
  background-color: var(--color-header-dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 10px 0;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.27);
  width: 100%;
  border-radius: 0px 0px 5px 5px;
}

#header__logo {
  margin-left: 10px;
}

#header__logo img{
  height: 50px;
}

.header__right {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  gap: 30px;
  position: relative;
  z-index: 0;
  height: 100%;
  width: auto;
}

.nav__links {
  display: flex;
  gap: 20px;
}

.nav__links > a {
  font-family: "Russo One";
  text-decoration: none;
  font-size: 1.1rem;
  padding: .7rem .5rem;
  border-radius: 5px;
}

.nav__links > :is(a:hover, a:focus-visible) {
  background-color: rgba(255, 255, 255, 0.1);
}

.webapp-btn {
  height: 38px;
  background: linear-gradient(230deg, #F72585, #7209B7 90%);
  border: none;
  font-size: 0.9rem;
  color: white;
  border-radius: 18px;
  cursor: pointer;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.nav__toggle {
  border: none;
  background: none;
  width: 32px;
  height: 23px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  display: none;
}

.nav__toggle span {
  background-color: #F72585;
  width: 100%;
  height: 3px;
  display: block;
  position: absolute;
  border-radius: 3px;
  rotate: 0;
  box-shadow: 0px 0px 3px #F72585;
  transition: all 0.5s, box-shadow 0s;
}

.nav__collapsable {
  position: absolute;
  right: 0;
  top: -10px;
  transform: translateY(-100%);
  width: 100%;
  display: none;
  flex-direction: column;  
  align-items: center;
  padding: 60px 0 20px 0;
  transition: transform .4s;
  z-index: -1;
  border-radius: var(--border-radius-default);
  overflow: hidden;
}

.nav__collapsable::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  /* background: radial-gradient(
    150% 300% at top left,
    rgba(76, 201, 240, 0.35) 0%,
    rgba(16, 137, 255, 0.07) 82.6%,
    rgba(70, 144, 212, 0.20)); */
  background: radial-gradient(147.72% 126.93% at 16.43% 20.07%, rgba(76, 201, 240, 0.35) 0%, rgba(16, 137, 255, 0.07) 82.6%, rgba(70, 144, 212, 0.00) 100%); 
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
}

.nav__toggle.active ~ .nav__collapsable{
  transform: translateY(0%);
  transition: transform ease-out .5s;
}

.nav__collapsable > .webapp-btn {
  display: none;
  position: absolute;
  height: 38px;
  background: linear-gradient(230deg, #F72585, #7209B7 90%);
  border: none;
  font-size: 0.9rem;
  color: white;
  border-radius: 18px;
  cursor: pointer;
  padding: 0 2rem;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  left: 20px;
  top: 20px;
  width: auto;
}

.nav__collapsable > a{
  font-size: 1.5rem;
  text-decoration: none;
  font-family: "Russo One";
  width: 80%;
  text-align: center;
  padding: 0.5rem 0;
  border-radius: 10px;
  opacity: 0;
  transition: all 0.5s;
}

.nav__toggle.active ~ .nav__collapsable > a {
  opacity: 1;
  transition: all 0.5s;
}

.nav__collapsable > :is(a:hover, a:focus-visible){
  background: radial-gradient(
    150% 300% at top left,
    rgba(40, 40, 40, 0.35),
    rgba(0, 0, 0, 0.35));
}

@media screen and (max-width: 1007px){
  .header__right{
    width: 260px;
  }
  .nav__toggle {
    position: relative;
    display: inline;
  }
  .nav__links {
    position: absolute;
    display: none;
  }
  .nav__collapsable {
    display: flex;
  }
}

@media screen and (max-width: 640px) {
  .header__right {
    justify-content: end;
  }
  .webapp-btn {
    position: absolute;
    display: none;
  }
  .nav__collapsable {
    width: 100vw;
  }
  .nav__collapsable > .webapp-btn {
    display: flex;
  }
}
</style>