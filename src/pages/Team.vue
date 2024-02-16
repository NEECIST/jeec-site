<template>
  <div>
    <h1 class="page__title">TEAM</h1>
    <section class="page__section">
      <div class="meet__wrapper">
        <div class="team__wheel__wrapper">
          <TeamWheel></TeamWheel>
        </div>
        <div class="meet__info">
          <h2 class="page__subtitle">Meet our team</h2>
          <p class="page__description">Connecting the best students, companies and engineers for over 20 years!</p>
        </div>
      </div>
    </section>
    
    <template v-for="team in this.teams">
      <section class="page__section" v-if="team.name != null" :id="team.name.toLowerCase().replace(/\s/g, '') + '_route'">
        <TeamSection :team="team"></TeamSection>
      </section>
    </template>
  </div>
</template>

<script>
import TeamWheel from '@/components/TeamWheel.vue'
import TeamSection from '@/components/TeamSection.vue'
import { mapState } from 'pinia'
import { useTeamStore } from '@/stores/TeamStore'

export default {
  components: { TeamWheel, TeamSection, },
  computed: {
    ...mapState(useTeamStore, ['teams']),
  },
  mounted() {
    setTimeout(() => {
   
    }, 5000);
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
  padding-bottom: 3rem;
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
  max-width: 500px;
}

/* #endregion */


@media screen and (max-width: 1007px){
  .meet__wrapper {
    flex-direction: column-reverse;
    justify-content: center;
  }
  .team__wheel__wrapper {
    width: 90%;
  }
}

@media screen and (max-width: 640px) {

}
</style>