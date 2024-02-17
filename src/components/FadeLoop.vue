<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  transition: 500ms;
  cursor: default;
}

img.clickable{
  cursor: pointer;
}

.loop-item {
  display:  flex;
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
      <img @click="openLink()" v-bind:class="{ 'show': isShow, 'fade': isFade , 'clickable': isClickable}" class="fadeloop-image" :src="image_list[i]" :alt="alt_list[i]">
  </div>
</template>

<script>
export default {
  name: "FadeLoop",
  props: {
    image_list: Array,
    link_list: {
      type: Array,
      default: "",
    },
    alt_list: {
      type: Array,
      default: "",
    },
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
      i: this.index,
      isClickable: false,
    }
  },
  methods: {
    toNextImage(duration) {
      this.isShow = false;
      this.isFade = true;
      this.isClickable = false;

      setTimeout(() => {
        this.i = (this.i + this.step) % this.image_list.length;

        if (this.link_list[this.i]) {
          this.isClickable = true;
        } else {
          this.isClickable = false;
        }
        
        this.isShow = true;
        this.isFade = false;

        setTimeout(() => {
          this.toNextImage(duration);
        }, duration);
      }, 1000);
    },
    openLink() {
      console.log(this.link_list[this.i]);
      if (this.link_list[this.i]) {
        window.open(this.link_list[this.i], "_blank");
      }
    },
  },
  mounted() {
    if (this.link_list[this.i]) {
      this.isClickable = true;
    } else {
      this.isClickable = false;
    }

    if (this.image_list.length > 1) {
      
      setTimeout(() => {
        this.toNextImage(this.duration);
      }, this.initial_duration);

    }

  }

};
</script>