<template>
  <div>
    <h1 class="page__title">PARTNERS</h1>
    <p class="page__description">Get to know our amazing partners present during the week, be it with a stand at the job fair or with a soft-skills workshop!</p>
    <section class="page__section">
      <CompanyTier type="Partners" tier="gold" :companies="partners.gold"></CompanyTier>
    </section>
    <section class="page__section">
      <CompanyTier type="Partners" tier="silver" :companies="partners.silver"></CompanyTier>
    </section>
    <section class="page__section">
      <CompanyTier type="Partners" tier="bronze" :companies="partners.bronze"></CompanyTier>
    </section>
  </div>
</template>
<script>
import CompanyTier from "@/components/CompanyTier.vue"
import { mapWritableState } from 'pinia'
import { usePartnersStore } from '@/stores/PartnersStore'

export default {
  components: { CompanyTier, },
  computed: {
    ...mapWritableState(usePartnersStore, ['partners'])
  }
}
</script>