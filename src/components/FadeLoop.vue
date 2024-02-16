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
  <div :class="index" v-if="image_list.length > 0" class="loop-item">
    <img v-bind:class="{ 'show': isShow, 'fade': isFade }" class="fadeloop-image" :src="image_list[i]" alt="">
  </div>
</template>

<script>
export default {
  name: "FadeLoop",
  props: {
    image_list: Array,
    index: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      i: 0,
      isShow: true,
      isFade: false,
    }
  },
  methods: {
    toNextImage(duration) {
      this.isShow = false;
      this.isFade = true;

      setTimeout(() => {
        if (this.i == this.image_list.length - 1) this.i = 0;
        else ++this.i;

        this.isShow = true;
        this.isFade = false;

        setTimeout(() => {
          this.toNextImage();
        }, 3000);
      }, 1000);
    }
  },
  mounted() {

    if (this.image_list.length > 1) {
      setTimeout(() => {
        this.toNextImage();
      }, 3000);

    }
  }

};
</script>