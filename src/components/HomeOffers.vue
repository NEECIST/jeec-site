<template>
  <div class="component__wrapper">
    <div class="offers__button__wrapper">
      <button v-for="offer in offersList" v-on:click="showOffer" :id="offer[0]" class="offers__button gradient-border">{{ offer[1] }}</button>
    </div>
    <div class="offers__info__wrapper">
      <div class="offer__title gradient-border">
        <h3 ref="offer__title"></h3>
      </div>
      <div class="offer__description gradient-border">
        <p ref="offer__description"></p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isActive: false,
      offersList: {
        offer__1: ["offer__1", "Inside Talks", "Lorem ipsum 1, dolor sit amet consectetur adipisicing elit. Fugiat libero quo porro veritatis suscipit at quia officia incidunt, illo, consequuntur eveniet minima modi. Tenetur nulla iure, sequi reiciendis odio et!"],
        offer__2: ["offer__2", "Job Fair", "Get in touch with your favorite companies and take the chance to clear up doubts and curiosities."],
        offer__3: ["offer__3", "Panel", "Lorem ipsum 3 dolor sit amet consectetur, adipisicing elit. Incidunt, alias, quaerat recusandae quis minus molestiae eos veniam omnis labore et id, debitis consequuntur natus repudiandae perferendis ad nobis cupiditate iste."],
        offer__4: ["offer__4", "Main Speaker", "Lorem ipsum 4 dolor sit amet consectetur adipisicing elit. Blanditiis laboriosam quam laudantium et odio, officia consectetur nobis, facere, in vitae minus illum? Ex atque aperiam impedit est temporibus minus molestias."],
        offer__5: ["offer__5", "Fast Meetings", "Lorem ipsum 5 dolor sit amet consectetur adipisicing elit. Modi labore maxime dignissimos est in vitae tenetur iusto. Perspiciatis, laborum. Dignissimos sunt quas nostrum animi nobis debitis asperiores laboriosam, voluptas quis!"],
        offer__6: ["offer__6", "Workshops", "Lorem ipsum 6 dolor sit amet consectetur adipisicing elit. Nihil deserunt velit tempore alias quaerat totam adipisci commodi! Ab impedit dolores laboriosam, reiciendis dolor quo sapiente, molestias pariatur, tempora in nemo."],
        offer__7: ["offer__7", "15/15", "Lorem ipsum 7 dolor sit amet consectetur adipisicing elit. Error facere at, explicabo neque suscipit illo! Quibusdam, distinctio minus laborum facere, officia hic magnam temporibus cumque veritatis eius provident animi accusantium!"],
      }
    }
  },
  methods: {
    showOffer(e){
      e.target.classList.add("active");

      console.log(this.offersList);
      
      
      const offerID = e.target.id

      this.$refs.offer__title.innerHTML = this.offersList[`${offerID}`][1].toUpperCase()
      this.$refs.offer__description.innerHTML = this.offersList[`${offerID}`][2]
    },
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
  background: var(--color-background-dark);
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  border-radius: 19px;
}

.offers__button:hover::before {
  /* background: radial-gradient(153.59% 124.29% at 13.41% 25.29%, rgba(76, 201, 240, 1) 0%, rgba(114, 9, 183, 1) 100%); */
  background: none;
}

.offers__info__wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  padding-top: 50px;
  align-items: center;
  max-width: 850px;
  margin: 0 auto;
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
}

.offer__title::before {
  background: radial-gradient(135.51% 151.31% at 11.18% 13.47%, rgb(40, 105, 124) 0%, rgb(51, 32, 64) 60.08%, rgb(41, 27, 50) 100%);
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  border-radius: 18px 0 0 18px;
}

.offer__title h3 {
  font-size: 3rem;
  font-family: "Russo One";
  /* margin-right: -1px; */
  letter-spacing: 0.4rem;
  padding: 0 1rem;
}

.offer__description {
  flex-basis: 60%;
  flex-grow: 1;
  height: 250px;
  margin-left: -1px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(154deg, #2C808F 3.26%, #1A9CD8 42.11%, #4CC9F0 96.27%);
  border-radius: 20px;
  padding: 20px;
  line-height: 1.15;
}

.offer__description::before {
  border-radius: 18px;
  background: radial-gradient(120.85% 130.86% at -9.94% -15.83%, rgb(48, 125, 149) 0%, rgb(10, 71, 92) 70% , rgb(33, 4, 55) 120%);
  width: calc(100% - 4px);
  height: calc(100% - 4px);
}

.offer__description p {
  overflow-y: auto;
  width: 100%;
  max-height: 100%;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.18rem;
  font-family: "Lexend Deca";
  font-size: 1.5rem;
  vertical-align: middle;
}

@media screen and (max-width: 640px) {
  .offers__button__wrapper{
    gap: 0.7rem;
  }
  .offers__button {
    font-size: 1.1rem;
  }
}
</style>