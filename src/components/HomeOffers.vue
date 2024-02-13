<template>
  <div id="home__offers">
    <h2>WHAT WE OFFER</h2>
    <div class="offers__button__wrapper">
      <button v-for="(offer, index) in offersList" :id="index"  v-on:click="showOffer(index)" class="offers__button gradient-border">{{ offer[0] }}</button>
    </div>
    <div :class="{active: isActive}" class="home__offers">
      <div  class="offers__info__wrapper">
        <div class="offer__title gradient-border">
          <h3 ref="offer__title"></h3>
        </div>
        <div class="offer__description gradient-border">
          <p ref="offer__description"></p>
        </div>
      </div>  
      <div class="curtains__left"></div>
      <div class="curtains__right"></div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isActive: true,
      previousOffer: "",
      currentOffer: "offer__2",
      offersList: {
        offer__1: ["Inside Talks", "Have the possibility of speaking with an engineer about his daily working life and professional career in a round table activity"],

        offer__2: ["Job Fair", "Get in touch with your favorite companies and take the chance to clear up doubts or curiosities."],

        offer__3: ["Panels", "Grab a coffee and enjoy a discussion about a disruptive science or tech invention!"],

        offer__4: ["Main Speaker", "Listen to the best international speakers of the most prestigious tech companies!"],

        offer__5: ["Fast Meetings", "Learn more about the different Masters available @ Tecnico!"],

        offer__6: ["Workshops", "Learn more about a specific application or topic developed by a company in an interactive activity, while also developing your hard and soft-skills."],

        offer__7: ["15/15", "Get to know more about the top companies present at JEEC and their current projects in the tech industry."],

        offer__8: ["Alumni Talks", "Learn more about the different career choices made by our Alumni!"],
      }
    }
  },
  methods: {
    showOffer(index){
      this.previousOffer = this.currentOffer
      this.currentOffer = index

      const prevButton = document.getElementById(this.previousOffer)
      const currButton = document.getElementById(this.currentOffer)

      prevButton.classList.remove("active")
      currButton.classList.add("active")

      this.$refs.offer__title.innerHTML = this.offersList[index][0].toUpperCase()
      this.$refs.offer__description.innerHTML = this.offersList[index][1]
    },
  }, mounted() {
    this.showOffer("offer__1")
  },
}

</script>

<style>
#home__offers > h2{
  font-size: 2rem;
  padding-bottom: 30px;
}

.offers__button__wrapper {
  display: flex;
  width: clamp(200px, 90%, 800px);
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 1rem;
}

.offers__button {
  height: 3rem;
  max-width: 170px;
  min-width: 130px;
  flex-grow: 1;
  background: linear-gradient(154deg, #2C808F 3.26%, #1A9CD8 42.11%, #4CC9F0 96.27%);
  border-radius: 20px;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0 10px;
}

.offers__button::before {
  background: var(--clr-dark-background);
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  border-radius: 19px;
}

.offers__button:is(:hover, :focus-visible, .active)::before {
  background: none;
}

.home__offers {
  /* height: 0px; */
  height: 250px;
  transition: all 0.2s;
  overflow: hidden;
  margin-top: 50px;
  position: relative;
}

.home__offers.active {
  height: 250px;
  transition: all 0.3s;
}

.curtains__left,
.curtains__right {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--clr-dark-background);
  top: 0;
  transition: all 0.5s;
}

.curtains__left {
  left: 40%;
}

.curtains__right {
  right: 60%;
}

.home__offers.active .curtains__left,
.home__offers.active .curtains__right {
  transition: all 0.5s;
}

.home__offers.active .curtains__left {
  left: 100%;
}

.home__offers.active .curtains__right {
  right: 100%;
}

.offers__info__wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  max-width: 850px;
  margin: 0 auto;
}

.home__offers.active .offer__title {
  transform: translateX(0%);
  transition: transform 0.5s;
}

.offer__title {
  flex-basis: 40%;
  flex-grow: 1;
  height: 200px;
  background: linear-gradient(154deg, #2C808F 3.26%, #1A9CD8 42.11%, #4CC9F0 96.27%);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 20px 0 0 20px;
  transform: translateX(100%);
  transition: transform 0.5s;
  overflow-x: hidden;
}

.offer__title::before {
  background: radial-gradient(135.51% 151.31% at 11.18% 13.47%, rgb(40, 105, 124) 0%, rgb(51, 32, 64) 60.08%, rgb(41, 27, 50) 100%);
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  border-radius: 18px 0 0 18px;
}

.offer__title h3 {
  display: inline-block;
  font-size: 2.4rem;
  font-family: "Russo One";
  letter-spacing: 0.4rem;
  padding: 0 1rem;
}

.home__offers.active .offer__description {
  transform: translateX(0);
  transition: transform 0.5s;
}

.offer__description {
  flex-basis: 60%;
  flex-grow: 1;
  height: 250px;
  margin-left: -2px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(154deg, #2C808F 3.26%, #1A9CD8 42.11%, #4CC9F0 96.27%);
  border-radius: 20px;
  padding: 20px;
  line-height: 1.15;
  transition: transform 0.5s;
  overflow: hidden;
  transform: translateX(-100%);
  overflow-x: hidden;
}

.offer__description::before {
  border-radius: 18px;
  background: radial-gradient(120.85% 130.86% at -9.94% -15.83%, rgb(48, 125, 149) 0%, rgb(10, 71, 92) 70% , rgb(33, 4, 55) 120%);
  width: calc(100% - 4px);
  height: calc(100% - 4px);
}

.offer__description p {
  width: 100%;
  max-height: 100%;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.18rem;
  font-family: "Lexend Deca";
  font-size: 1.3rem;
  vertical-align: middle;
}

@media screen and (max-width: 1007px) {
  #home__offers > h2{
    font-size: 2rem;
    padding-bottom: 30px;
  }
  .home__offers.active {
    height: auto;
  }
  .offers__info__wrapper {
    flex-direction: column;
  }
  .offer__title {
    border-radius: 20px 20px 0 0;
    padding: 2rem;
    flex-basis: 100%;
    max-width: 500px;
    width: 70%;
  }
  .offer__title::before {
    border-radius: 18px 18px 0 0;
  }
  .offer__title h3 {
    font-size: 2rem;
    letter-spacing: 0.3rem;
  }
  .offer__description {
    flex-basis: 100%;
    margin-left: 0;
    margin-top: -2px;
    height: auto;
    max-width: 600px;
    width: 100%;
  }
  .offer__description p {
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 640px) {
  #home__offers > h2{
    font-size: 1.7rem;
    padding-bottom: 30px;
  }
  .offers__button__wrapper{
    gap: 0.7rem;
  }
  .offers__button {
    font-size: 1.1rem;
  }
  .offer__title h3 {
    font-size: 1.6rem;
    letter-spacing: 0.2rem;
  }
  .offer__description p {
    font-size: 1.1rem;
  }
}
</style>