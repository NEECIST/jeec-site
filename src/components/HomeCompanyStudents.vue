<template>
  <div class="wrapper" id="scroll-anim">
    <div :class="{active: isActive}" class="gradient gradient-left">
      <h3 class="gradient__content">Companies</h3>
      <div class="gradient__content content__extremes">
        <img src="@/assets/companies-students/1.svg">
        <p>Connect with the best graduating students</p>
      </div>
      <div class="gradient__content content__middle">
        <img src="@/assets/companies-students/2.svg">
        <p>Promote your company and its job and internship opportunities</p>
      </div>
      <div class="gradient__content content__extremes">
        <img src="@/assets/companies-students/3.svg">
        <p>Advertise your areas of expertise</p>
      </div>
    </div>
    <div :class="{active: isActive}" class="gradient gradient-right">
      <h3 class="gradient__content">Students</h3>
      <div class="gradient__content content__extremes">
        <img src="@/assets/companies-students/4.svg">
        <p>Organised by students for students</p>
      </div>
      <div class="gradient__content content__middle">
        <img src="@/assets/companies-students/5.svg">
        <p>Get in touch with leading tech companies</p>
      </div>
      <div class="gradient__content content__extremes">
        <img src="@/assets/companies-students/6.svg">
        <p>Show your capabilities to potential employers</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    reveal() {
      const el = document.getElementById("scroll-anim")

      if(el.getBoundingClientRect().top < window.innerHeight - 400) {
        this.isActive = true;
        window.removeEventListener("scroll", this.reveal)
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.reveal)
  },
  unmounted() {
    window.removeEventListener("scroll", this.reveal)
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 700px;
}
.gradient.active {
  width: 1000px;
  transition: all 1.5s ease-in;
}
.gradient {
  width: 1px;
  max-width: min(50%, 1000px);
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
}
.gradient-left {
  align-items: flex-end;
}
.gradient-right {
  align-items: flex-start;
}
.gradient::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(10px);
}
.gradient-left::before {
  background: 
    linear-gradient(to bottom left, #4ccaf0 0%, #4ccaf07c 10%, #7109b75e 32.5%, #7109b700 50%) bottom left,
    linear-gradient(to top left, #4ccaf0 0%, #4ccaf07c 10%, #7109b75e 32.5%, #7109b700 50%) top left;
  background-size: 100% 50%;
  background-repeat: no-repeat;
}
.gradient-right::before {
  background: 
    linear-gradient(to bottom right, #F72585 0%, #F725857c 10%, #7109b75e 32.5%, #7109b700 50%) bottom right,
    linear-gradient(to top right, #F72585 0%, #F725857c 10%, #7109b75e 32.5%, #7109b700 50%) top right;
  background-size: 100% 50%;
  background-repeat: no-repeat;
}
.gradient::after {
  content: "";
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
}
.gradient-left::after {
  right: 0;
  background: linear-gradient(to top, #4ccaf000, #4ccaf0 25%, #F72585 75%, #F7258500 100%);
}
.gradient.active .gradient__content:is(h3) {
  padding: 0 1ch;
  transition: all 1.3s ease-in;
}
.gradient > h3 {
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  font-family: 'Russo One';
  font-size: 1.5rem;
  padding: 0 0ch;
}
.gradient-left > h3 {
  right: 0;
}
.gradient-right > h3 {
  left: 0;
}
.gradient.active .gradient__content {
  opacity: 1;
  transition: all 1.5s ease-in;
}
.gradient__content {
  opacity: 0;
  z-index: 1;
}
.content__extremes {
  margin: 0 20%;
}
.content__middle {
  margin: 0 40%;
}
.gradient__content img{
  width: 80px;
  height: 80px;
}
.gradient__content:has(> p) {
  font-size: 1.1rem;
  font-family: 'Lexend Deca';
  width: 20ch;
}
@media screen and (max-width: 1007px){
  .gradient > h3 {
    font-size: 1.4rem;
  }
  .content__extremes {
    margin: 0 30%;
  }
  .content__middle {
    margin: 0 50%;
  }
  .gradient__content img{
    width: 70px;
    height: 70px;
  }
  .gradient__content:has(> p) {
    font-size: 1rem;
    width: 16ch;
  }
}
@media screen and (max-width: 640px) {
  .gradient > h3 {
    font-size: 1.5rem;
    top: 50%;
  }

  .gradient-left > h3 {
    transform: rotate(-90deg) translateX(50%);
    transform-origin: bottom right;
    right: 0;
  }
  .gradient-right > h3 {
    transform: rotate(90deg) translateX(-50%);
    transform-origin: bottom left;
    left: 0;
  }

  .gradient.active.gradient-left > h3 {
    right: 2rem;
  }

  .gradient.active.gradient-right > h3 {
    left: 2rem;
  }

  .content__extremes {
    margin: 0 15%;
  }
  .content__middle {
    margin: 0 35%;
  }
  .gradient__content img{
    width: 60px;
    height: 60px;
  }
  .gradient__content:has(> p) {
    font-size: 0.9rem;
    width: 13ch;
  }
}
</style>