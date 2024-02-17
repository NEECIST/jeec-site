<template>
  <div>
    <h1 class="page__title">SPONSORS</h1>
    <p class="page__description">Our sponsors help us improve JEEC and without them the whole experience wouldn’t be as good as it is. Don’t forget to look for merchandising and gifts!</p>
    <section class="page__section">
      <CompanyTier type="sponsors" tier="platinum" :companies="sponsors.platinum"></CompanyTier>
    </section>
    <section class="page__section">
      <CompanyTier type="sponsors" tier="gold" :companies="sponsors.gold"></CompanyTier>
    </section>
    <section class="page__section">
      <CompanyTier type="sponsors" tier="silver" :companies="sponsors.silver"></CompanyTier>
    </section>
    <section class="page__section">
      <CompanyTier type="sponsors" tier="bronze" :companies="sponsors.bronze"></CompanyTier>
    </section>
  </div>
</template>

<script>
import CompanyTier from "@/components/CompanyTier.vue"
import { mapState } from 'pinia'
import { usePartnersStore } from '@/stores/PartnersStore'

export default {
  components: { CompanyTier, },
  computed: {
    ...mapState(usePartnersStore, ['sponsors'])
  }
}
</script>