<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  transition: 500ms;
}

.loop-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.fadeloop-image.fade {
  opacity: 0;
}

.fadeloop-image.show {
  opacity: 1;
}
</style>

<template>
  <div :class="marker" v-if="image_list.length > 0" class="loop-item">
    <img v-bind:class="{ 'show': isShow, 'fade': isFade }" class="fadeloop-image" :src="image_list[i]" alt="">
  </div>
</template>

<script>
export default {
  name: "FadeLoop",
  props: {
    image_list: Array,
    marker: {
      type: String,
      default: "",
    },
    index: {
      type: Number,
      default: 0,
    },
    step: {
      type: Number,
      default: 1,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    initial_duration: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      isShow: true,
      isFade: false,
      i: this.index
    }
  },
  methods: {
    toNextImage(duration) {
      this.isShow = false;
      this.isFade = true;

      setTimeout(() => {


        // tipo aqui faz o loop em steps mas caso  o index + step passar a length
        // do array da lista de imagens, ele volta para o index correto

        this.i = (this.i + this.step) % this.image_list.length;
        
        this.isShow = true;
        this.isFade = false;

        setTimeout(() => {
          this.toNextImage(duration);
        }, duration);
      }, 1000);
    }
  },
  mounted() {

    if (this.image_list.length > 1) {
      setTimeout(() => {
        this.toNextImage(this.duration);
      }, this.initial_duration);

    }
  }

};
</script>