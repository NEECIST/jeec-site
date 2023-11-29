<template>
  <div>
    <h1 class="page__title">SCHEDULE</h1>

    <section class="page__section">
      <div class="schedule__wrapper">
        <button class="schedule__buttons" @click="showSchedule(days.week_day)" v-for="days in event_days" :key="days">
          {{ days.week_day }}
        </button>
      </div>
      <div class="schedule__activities__wrapper" :class="{ active: weekDay[0].isShowing }" v-for="weekDay in activities">
        <div class="schedule__activity" v-for="activity in weekDay[1]">
          <div>
            <h3>{{ activity.type }}</h3>
            <h4>{{ activity.name }}</h4>
          </div>
          <div v-for="data in activity.companies.data">
            <img class="activity__company-logo" :src="jeec_api_url + data.logo" alt="" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useScheduleStore } from "@/stores/modules/ScheduleStore";

export default {
  computed: {
    ...mapState(useScheduleStore, ["activities"]),
  },
  data() {
    return {
      jeec_api_url: process.env.VUE_APP_JEEC_BRAIN_URL,
      event_days: [
        { week_day: "monday", date: "06/03" },
        { week_day: "tuesday", date: "07/03" },
        { week_day: "wednesday", date: "08/03" },
        { week_day: "thursday", date: "09/03" },
        { week_day: "friday", date: "10/03" },
      ],
    };
  },
  methods: {
    showSchedule(week) {
      this.activities.monday[0].isShowing = false;
      this.activities.tuesday[0].isShowing = false;
      this.activities.wednesday[0].isShowing = false;
      this.activities.thursday[0].isShowing = false;
      this.activities.friday[0].isShowing = false;

      this.activities[week][0].isShowing = true;
    },
  },
  mounted() {
    console.log(this.activities);
    console.log(this.activities.monday[1]);
  },
};
</script>

<style>
.schedule__activities__wrapper {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.schedule__activities__wrapper.active{
  position: static;
  opacity: 1;
  pointer-events: all;
}

</style>
