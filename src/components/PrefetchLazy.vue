<template>
  <div id="prefetch" aria-hidden="true">
    <Team></Team>
    <Partners></Partners>
  </div>
</template>

<script>
import Partners from '@/pages/Partners.vue'
import Team from '@/pages/Team.vue'
import { mapActions } from 'pinia'
import { usePartnersStore } from '@/stores/PartnersStore'
import { useTeamStore } from '@/stores/TeamStore'

export default {
  components: { Partners, Team },
  methods: {
    ...mapActions( useTeamStore, {teamFill: 'fill'}),
    ...mapActions( usePartnersStore, {partnersFill: 'fill'}),
  },
  mounted() {
    this.teamFill()
    this.partnersFill()
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