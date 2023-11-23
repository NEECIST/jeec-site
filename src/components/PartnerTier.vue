<template>
  <div>
    <div class="tier__title">
      <div class="tier">
        <svg>
          <defs>
            <mask :id="'partners__mask__' + tier" x="0" y="0" width="100%" height="100%">
              <rect fill="white" x="0" y="0" :width="recalcSvgWidth" height="100%"/>
              <text class="mask__text" :x="recalcSvgPos" y="50%">{{ tier }}</text>
            </mask>
          </defs>
          
          <rect class="mask__base" :mask="'url(#partners__mask__' + tier + ')'" x="0" y="0" width="100%" height="105%"/>
        
        </svg>
        <div :id="'tier__text__background-' + tier" class="tier__text__background"></div>
      </div>
      <h2>PARTNERS</h2>
    </div>
    <div class="carousel__border">
      <div class="carousel__wrapper">
        <carousel :items-to-show="2.7" :autoplay="2000" :wrap-around="true" :transition="500">
          <slide v-for="partner in partners" :key="partner">
            <div class="carousel__item">
              <img class="partner__logo" :src="jeec_api_url + partner.logo" :alt="partner.name">
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

export default {
  props: { tier: String, partners: Object },
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      jeec_api_url: process.env.VUE_APP_JEEC_BRAIN_URL,
      recalcSvgWidth: "100%",
      recalcSvgPos: "50%",
    };
  },
  methods: {
    recalculateSvg() {
      setTimeout(() => {
        this.recalcSvgWidth = "99%"
        this.recalcSvgPos = "49%"
      }, 300)
      setTimeout(() => {
        this.recalcSvgWidth = "100%"
        this.recalcSvgPos = "50%"
      }, 400)
    }
  },
  mounted() {
    this.recalculateSvg()
    setTimeout(() => {
      this.recalculateSvg()
    }, 450);
  },
} 
</script>

<style scoped>
/* #region title */
.tier__title {
  position: relative;
  z-index: 1;
  font-size: 1.8rem;
}

.tier__title h2 {
  font-size: 2.8rem;
}

.tier {
  position: relative;
  height: 3rem;
  z-index: -1;
}

.tier svg{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  zoom: 100%;
}

.mask__base {
  fill: var(--color-background-dark);
}

.mask__text{
  text-anchor: middle;
  dominant-baseline: middle;
  font-size: 3rem;
  font-family: "Russo One";
  text-transform: uppercase;
}

.tier__text__background {
  width: 80%;
  height: 80%;
  position: relative;
  z-index: -1;
  margin: auto auto;
}

.tier__text__background::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(77deg, #576265 11.6%, #9EA1A1 25.31%, #848B8A 48.06%, #576265 55.72%, #576265 77.23%, #757A7B 85.34%, #576265 91.31%);
  mix-blend-mode: luminosity;
}

.tier__text__background::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(339deg, rgba(255, 255, 255, 0.00) 52.79%, #FFF 95.95%);
  mix-blend-mode: overlay;
}

#tier__text__background-gold {
  background-color: #C1A875;
}

#tier__text__background-silver {
  background-color: #CDC9C2;
}

#tier__text__background-bronze {
  background-color: #C9705C;
}
/* #endregion */

.carousel__border {
  border-radius: 10px;
  max-width: 1300px;
  width: 60%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 1rem;
  position: relative;
  background-color: rgb(37, 37, 37);
}

.carousel__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  border-radius: 9px;
  overflow: hidden;
  background: rgb(61, 61, 61);
}

.carousel__slide {
  padding: 10px;
  scale: 1;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide--active {
  scale: 1.1;
}

.carousel__item {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 170px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.partner__logo {
  width: 90%;
  height: 90%;
  object-fit: contain;
}

@media screen and (max-width: 1007px) {
  .carousel__border {
    width: 80%;
  }
}

@media screen and (max-width: 640px) {
  .tier {
    height: 2.7rem;
  }

  .mask__text {
    font-size: 2.7rem;
  }

  .tier__title h2 {
    margin-top: -0.2rem;
    font-size: 2.6rem;
  }

  .carousel__border {
    width: 100%;
    height: 170px;
  }

  .carousel__slide {
    padding: 10px 5px;
  }

  .carousel__item {
    height: 140px;
  }
}</style>