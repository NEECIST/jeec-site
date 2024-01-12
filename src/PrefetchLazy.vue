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
import { mapState, mapActions } from 'pinia'
import { useEventStore } from "@/stores/EventStore";
import Schedule from '@/pages/Schedule.vue'
import Speakers from '@/pages/Speakers.vue'
import Partners from '@/pages/Partners.vue'
import Sponsors from '@/pages/Sponsors.vue'
import Team from '@/pages/Team.vue'

export default {
  components: { Schedule, Speakers, Partners, Sponsors, Team },
  methods: {
    ...mapActions(useEventStore, ['setEvent', 'fill']),
  },
  computed: {
    ...mapState(useEventStore, ['event_default_id'])
  },
  mounted() {
    this.fill()
    
    setTimeout(() => {
      this.setEvent(this.event_default_id)
    }, 2000);

    setTimeout(() => {
      document.getElementById("prefetch").innerHTML = ""
    }, 4000)
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