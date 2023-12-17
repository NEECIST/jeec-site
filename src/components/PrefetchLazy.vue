<template>
  <div id="prefetch" aria-hidden="true">
    <Team></Team>
    <Partners></Partners>
    <Sponsors></Sponsors>
    <Schedule></Schedule>
    <Speakers></Speakers>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useScheduleStore } from '@/stores/ScheduleStore'
import { useSpeakersStore } from '@/stores/SpeakersStore'
import { usePartnersStore } from '@/stores/PartnersStore'
import { useSponsorsStore } from '@/stores/SponsorsStore'
import { useTeamStore } from '@/stores/TeamStore'
import Schedule from '@/pages/Schedule.vue'
import Speakers from '@/pages/Speakers.vue'
import Partners from '@/pages/Partners.vue'
import Sponsors from '@/pages/Sponsors.vue'
import Team from '@/pages/Team.vue'

export default {
  components: { Schedule, Speakers, Partners, Sponsors, Team },
  methods: {
    ...mapActions(useScheduleStore, { scheduleFill: 'fill' }),
    ...mapActions(useSpeakersStore, { speakersFill: 'fill' }),
    ...mapActions(usePartnersStore, { partnersFill: 'fill' }),
    ...mapActions(useSponsorsStore, { sponsorsFill: 'fill'}),
    ...mapActions(useTeamStore, { teamFill: 'fill' }),
  },
  mounted() {
    this.scheduleFill()
    this.speakersFill()
    this.partnersFill()
    // this.sponsorsFill()
    this.teamFill()

    setTimeout(() => {
      document.getElementById("prefetch").innerHTML = ""
    }, 2000)
  },
}
</script>

<style>
#prefetch {
  position: absolute !important;
  opacity: 0 !important;
  z-index: -9999 !important;
  overflow: hidden !important;
  height: 0 !important;
  width: 0 !important;
}
</style>