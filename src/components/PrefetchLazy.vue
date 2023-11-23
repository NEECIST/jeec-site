<template>
  <div id="prefetch" aria-hidden="true">
    <Team></Team>
    <Partners></Partners>
    <Schedule></Schedule>
    <Speakers></Speakers>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useScheduleStore } from '@/stores/ScheduleStore'
import { useSpeakersStore } from '@/stores/SpeakersStore'
import { usePartnersStore } from '@/stores/PartnersStore'
import { useTeamStore } from '@/stores/TeamStore'
import Schedule from '@/pages/Schedule.vue'
import Speakers from '@/pages/Speakers.vue'
import Partners from '@/pages/Partners.vue'
import Team from '@/pages/Team.vue'

export default {
  components: { Schedule, Speakers, Partners, Team },
  methods: {
    ...mapActions(useScheduleStore, { scheduleFill: 'fill' }),
    ...mapActions(useSpeakersStore, { speakersFill: 'fill' }),
    ...mapActions(usePartnersStore, { partnersFill: 'fill' }),
    ...mapActions(useTeamStore, { teamFill: 'fill' }),
  },
  mounted() {
    this.scheduleFill()
    this.speakersFill()
    this.partnersFill()
    this.teamFill()
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