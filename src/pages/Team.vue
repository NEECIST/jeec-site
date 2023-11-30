<template>
  <div>
    <h1 class="page__title">TEAM</h1>
    <section class="page__section">
      <div class="meet__wrapper">
        <div class="team__wheel__wrapper">
          <TeamWheel></TeamWheel>
        </div>
        <div class="meet__info">
          <h2>Meet our team</h2>
          <p class="">Connecting the best students, companies and engineers for over 20 years!</p>
        </div>
      </div>
    </section>
    <section class="page__section" id="coordination">
      <TeamSection :team="teams.coordination" accentColor="#1A9CD8"></TeamSection>
    </section>
    <section class="page__section" id="webdev">
      <TeamSection :team="teams.webdev" accentColor="#7209B7"></TeamSection>
    </section>
    <section class="page__section" id="marketing">
      <TeamSection :team="teams.marketing" accentColor="#A414A4"></TeamSection>
    </section>
    <section class="page__section" id="business">
      <TeamSection :team="teams.business" accentColor="#F72585"></TeamSection>
    </section>
    <section class="page__section" id="logistics" v-if="teams.logistics.name != null">
      <TeamSection :team="teams.logistics" accentColor="#605ED0"></TeamSection>
    </section>
    <section class="page__section" id="speakers" v-if="teams.speakers.name != null">
      <TeamSection :team="teams.speakers" accentColor="#4CC9F0"></TeamSection>
    </section>
  </div>
</template>

<script>
import TeamWheel from '@/components/TeamWheel.vue'
import TeamSection from '@/components/TeamSection.vue'
import { mapWritableState } from 'pinia'
import { useTeamStore } from '@/stores/TeamStore'

export default {
  components: { TeamWheel, TeamSection, },
  computed: {
    ...mapWritableState(useTeamStore, ['teams'])
  },
}
</script>

<style>
/* #region MeetOurTeam */
.meet__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  gap: 50px;
}

.team__wheel__wrapper {
  flex-grow: 1;
  width: 70%;
  max-width: 500px;
}

.meet__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.meet__info h2 {
  font-size: 2.5rem;
}

.meet__info p {
  font-size: 1.3rem;
}

/* #endregion */
</style>