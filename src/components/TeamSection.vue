<template>
  <div>
    <div>
      <!-- <img class="team__group-image" src="@/assets/team/teamgroupimage.png" :alt="team.name + ' group image'"> -->
      <h2 class="team__title"> {{ team.name }}</h2>
    </div>
    <div class="team__wrapper">
      <div v-for="member in team.members.data" :key="team.members">
        <div class="member__container">
          <div class="member__visuals">
            <div class="member__image-container">
              <img v-if="member.image != null" :src="jeec_api_url + member.image">
              <img v-else id="jeec-logo" src="">
            </div>
            <div class="member__linkedin">
              <a :href="member.linkedin_url" target="_blank">
                <img class="icon-team-member" :src="linkedin_icon_link" />
              </a>
            </div>
          </div>
          <p class="member__name">{{ member.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { team: Object, accentColor: String },
  data() {
    return {
      jeec_api_url: process.env.VUE_APP_JEEC_BRAIN_URL,
    }
  }
}
</script>

<style>
.team__group-image {
  width: 100%;
  object-fit: cover;
}

.team__title {
  text-transform: uppercase;
}

.team__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 10px;
  max-width: 900px;
}

.member__container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.member__visuals {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  overflow: hidden;
}

.member__image-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.member__image-container img {
  width: 110%;
  height: 110%;
  object-fit: cover;
}
</style>