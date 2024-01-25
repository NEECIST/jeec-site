<template>
  <div class="wrapper">
    <h2 class="title">
      <span class="first">Find us at<br></span>
      <span class="second">Técnico innovation center</span>
    </h2>
    <div class="img__wrapper">
      <div class="location border">
        <img src="@/assets/home-location_tic.png" alt="Técnico Innovation Center">
        <p class="coordinates">38º44’7.7’’N   9º8’33.9’’W</p>
      </div>
      <div class="map border">
        <a target="_blank" href="https://maps.app.goo.gl/hWN1ZuWayuqnoYa37">
          <img src="@/assets/home-location_map.png" alt="Map with TIC's location">
          <img class="map-pin" src="@/assets/home-location_pin.svg" alt="pin" aria-hidden="true">
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
}

.title {
  text-transform: uppercase;
  min-height: 0;
}

.title span {
  display: block;
  width: fit-content;
  margin: 0 auto;
}

.title .first {
  font-size: clamp(1.4rem, 5vw, 2rem);
  padding-bottom: 0.5rem;
}

.title .second {
  font-size: clamp(1.6rem, 7vw, 2.8rem);
  color: #4cc9f0;
}

.img__wrapper {
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 2rem;
}

.border {
  border-radius: 20px;
  border: 4px solid #4cc9f0;
  overflow: hidden;
  box-shadow: 0 0 10px #4cc9f0;
}

.location {
  width: 100%;
  max-width: 900px;
  margin: 0 0 0 auto;
  margin-right: 1rem;
  display: flex;
  position: relative;
}

.location img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.location .coordinates {
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: clamp(0.6rem, 3vw, 1.1rem);
  font-weight: 600;
  letter-spacing: 0.05ch;
  padding: 0.5rem 1rem;
  font-family: "Lexend Deca";
  color: var(--clr-dark-background);
}

.map {
  position: relative;
  max-width: 600px;
  width: 50%;
  margin-left: 1rem;
  top: -100px;
  display: flex;
}

.map a {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
}

.map img:first-child {
  width: 100%;
  scale: 1.5;
}

.map a .map-pin {
  left: 50%;
  bottom: 50%;
  translate: -50% 0;
  position: absolute;
  width: 32px;
  aspect-ratio: 0.66666;
}

@media screen and (max-width: 650px) {
  .map {
    top: -50px;
  }

  .map a .map-pin {
    width: 24px;
  }
}

@media screen and (max-width: 515px) {
  .map a .map-pin {
    width: 20px;
  }
}

@media screen and (max-width: 390px) {
  .map a .map-pin {
    width: 18px;
  }
}
</style>