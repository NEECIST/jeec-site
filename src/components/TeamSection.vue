<template>
  <div class="team__section" :id="this.teamId">
    <div class="team__header">
      <img class="team__group-image" :src="team.team_image != null ? jeec_api_url + team.team_image : require('@/assets/team/teamgroupimage.png')" :alt="team.name">
      <h2 class="team__title"> {{ team.name.replace(/\s/g, '') }}</h2>
      <div class="team__line">
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="team__wrapper background">
      <template v-for="member in team.members.data" :key="team.members">
        <template v-if="member.background">
          <div class="member__container background">
            <img class="member__background" :src="require('@/assets/team/member_background/'+ this.teamId +'.svg')" alt="">
            <div class="member__visuals background">
              <div class="member__image__container">
                <img v-if="member.image != null" :src="jeec_api_url + member.image">
                <img v-else id="jeec-logo" src="">
              </div>
              <a :href="member.linkedin_url" class="member__social">
                <img class="icon-team-member" src="@/assets/socials/linkedin-logo.svg" />
              </a>
            </div>
            <p>{{ member.name }}</p>
          </div>
        </template>
      </template>
    </div>
    <div class="team__wrapper">
      <template v-for="member in team.members.data" :key="team.members">
        <template v-if="!member.background">
          <div class="member__container">
            <div class="member__visuals">
              <div class="member__image__container">
                <img v-if="member.image != null" :src="jeec_api_url + member.image">
                <img v-else id="jeec-logo" src="">
              </div>
              <a :href="member.linkedin_url" class="member__social">
                <img class="icon-team-member" src="@/assets/socials/linkedin-logo.svg" />
              </a>
            </div>
            <p>{{ member.name }}</p>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: { team: Object },
  data() {
    return {
      jeec_api_url: process.env.VUE_APP_JEEC_BRAIN_URL,
      teamId: this.formatId(),
    }
  }, methods: {
    formatId() {
      let teamName = this.team.name ? this.team.name : ""
      return teamName.toLowerCase().replace(/\s/g, "")
    }
  },
}
</script>

<style>
.team__section {
  --_accent-color: var(--accent-color, rgb(20, 172, 73));
  max-width: 900px;
}

#coordination {
  --accent-color: #1A9CD8;
}

#webdev {
  --accent-color: #7209B7;
}

#marketing {
  --accent-color: #A414A4;
}

#business {
  --accent-color: #F72585;
}

#logistics {
  --accent-color: #605ED0;
}

#speakers {
  --accent-color: #4CC9F0;
}

.team__header {
  display: relative;
  padding-bottom: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.team__group-image {
  width: 100%;
  object-fit: cover;
  border-radius: 2rem;
  box-shadow: 0 0 15px var(--_accent-color);
  border: solid 5px var(--_accent-color);
  position: relative;
  z-index: 1;
}

.team__title {
  text-transform: uppercase;
  text-shadow: 0px 0px 10px var(--_accent-color),
               2.5px 2.5px 0 var(--_accent-color),
               2.5px -2.5px 0 var(--_accent-color),
               -2.5px 2.5px 0 var(--_accent-color),
               -2.5px -2.5px 0 var(--_accent-color);
  font-size: 3.6rem;
  padding: 0.4rem 0;
  color: var(--clr-dark-background);
  width: fit-content;
  padding-left: 3rem;
  z-index: 1;
  position: relative;
}

.team__line {
  width: 100%;
  z-index: -1;
  display: grid;
  grid-template-columns: auto 150px;
}

.team__line > span {
  border: 2.5px solid var(--_accent-color);
  position: relative;
  box-shadow: 0 0 15px var(--_accent-color);
}

.team__line > span:first-of-type {
  width: 100%;
  height: 0;
  left: 3px;
}

.team__line > span:first-of-type::before {
  content: "";
  position: absolute;
  height: 0;
  width: 0;
  left: -3px;
  top: 0;
  translate: 0 -50%;
  border-radius: 50%;
  border: 12px solid var(--_accent-color);
  box-shadow: 0 0 15px var(--_accent-color);
}

.team__line > span:last-of-type {
  top: 1px;
  width: 150px;
  height: 0;
  transform: rotate(-45deg);
  transform-origin: 0% 0%;
}

.team__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  max-width: 900px;
  padding-top: 2rem;
}

.team__wrapper:empty {
  padding-top: 0;
  display: none;
  visibility: hidden;
}

.team__wrapper.background {
  gap: 30px 70px;
}

.member__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 170px;
  position: relative;
}

.member__container > p {
  font-size: 1rem;
  font-family: 'Lexend';
  font-weight: 600;
  padding-top: 0.5rem;
  letter-spacing: 0.5px;
}

.member__container.background > p {
  font-size: 1.1rem;
  padding-top: 1.2rem;
}

.member__background {
  position: absolute;
  top: -34px;
  left: calc(50% + 7px);
  translate: -50% 0;
  width: 232px;
  aspect-ratio: 1.0251046025;
  z-index: 3;
  pointer-events: none;
}

.member__visuals {
  height: 170px;
  width: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--_accent-color);
  box-shadow: 0 0 10px var(--_accent-color);
  position: relative;
}

.member__visuals.background {
  border: none;
  box-shadow: none;
}

.member__image__container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.member__image__container img {
  width: 110%;
  height: 110%;
  object-fit: cover;
}

.member__social {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  background-color: var(--_accent-color);
  opacity: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-out;
}

.member__visuals:hover .member__social {
  opacity: 0.9;
  transition: all 0.2s ease-in;
}

@media screen and (max-width: 1007px){
  .team__header {
    max-width: 700px;
  }
  .team__title {
    text-shadow: 0px 0px 10px var(--_accent-color),
                2px 2px 0 var(--_accent-color),
                2px -2px 0 var(--_accent-color),
                -2px 2px 0 var(--_accent-color),
                -2px -2px 0 var(--_accent-color);
    font-size: 3rem;
    padding-left: 2rem;
  }

  .team__wrapper {
    gap: 30px;
    max-width: 800px;
  }

  .member__background {
    top: -32px;
    left: calc(50% + 7px);
    width: 213px;
  }

  .member__container {
    width: 155px;
  }

  .member__visuals {
    height: 155px;
  }
}

@media screen and (max-width: 640px) {
  .team__title {
    text-shadow: 0px 0px 10px var(--_accent-color),
               2px 2px 0 var(--_accent-color),
               2px -2px 0 var(--_accent-color),
               -2px 2px 0 var(--_accent-color),
               -2px -2px 0 var(--_accent-color);
    font-size: 2.4rem;
    padding-left: 1rem;
  }

  .team__line > span:first-of-type::before {
    border: 10px solid var(--_accent-color);
  }

  .team__wrapper {
    gap: 20px;
  }

  .member__background {
    top: -29px;
    left: calc(50% + 6px);
    width: 192px;
  }

  .member__container {
    width: 140px;
  }

  .member__visuals {
    height: 140px;
  }
}
</style>