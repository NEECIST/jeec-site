<template>
  <div>
    <h1 class="page__title">PARTNERS</h1>
    <p class="page__description">Partners are companies appearing in the fair (tech companies, banks, etc). Coordinationis to write a better description. </p>
    <section class="page__section">
      <PartnerTier tier="gold" :partners="partners.gold"></PartnerTier>
    </section>
    <section class="page__section">
      <PartnerTier tier="silver" :partners="partners.silver"></PartnerTier>
    </section>
    <section class="page__section">
      <PartnerTier tier="bronze" :partners="partners.bronze"></PartnerTier>
    </section>
  </div>
</template>
<script>
import PartnerTier from "@/components/PartnerTier.vue"
import { mapState } from 'pinia'
import { usePartnersStore } from '@/stores/modules/PartnersStore'

export default {
  components: { PartnerTier, },
  computed: {
    ...mapState(usePartnersStore, ['partners'])
  }
}
</script>