<template>
  <div>
    <h1 class="page__title" style="width:auto">WEB APP</h1>

    <p class="text">
      Our Web APP connects the students to the activities in a innovative and simple way.
    </p>
    
    <div class="sign-in">
      <p v-if="!webapp" class="text">
        The app is currently closed and will be back online near the event, see you then!
      </p>
      <!-- <WebAppButton class="sign-in"  v-else :toExternal="true"></WebAppButton> -->
    </div>
  
    <div class="what-box big-box">
      <h2 class="box-title what-title">What can I do?</h2>
      <ol class="what-text box-list">
        <li>Earn Rewards by collecting points</li>
        <li>Create a Squad with your friends, earn points together and win Team Prizes</li>
        <li>Check all information regarding the event, including activities, prizes and rankings</li>
      </ol>
    </div>
  
    <div class="how-box big-box">
      <h2 class="box-title how-title">How do I earn points?</h2>
      <ol class="how-text box-list">
        <li>Collect codes by participating in our activities</li>
        <li>Add your CV and LinkedIn</li>
        <li>Talk to our Partners at the Job Fair</li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import WebAppButton from '@/components/WebAppButton.vue';

const webapp = true;
</script>

<style scoped>
.text {
  text-align: center;
  width: 90%;
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.4rem;
}

.join_box {
  background: radial-gradient(135.51% 151.31% at 11.18% 13.47%, rgb(40, 105, 124) 0%, rgb(51, 32, 64) 60.08%, rgb(41, 27, 50) 100%);
  width: 90%;
  max-width: 800px;
  border-radius: 20px;
  border: #2C808F 2px solid;
  text-align: center;
  letter-spacing: 3px;
  padding: 1rem 0;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  font-size: 3rem;
}

.sign-in {
  padding: 2rem 0;
  margin: 0 auto;
  margin-top: 0.5rem;
  max-width: 500px;
}

.sign-in .text {
  font-weight: 600;
}

.sign-in .webapp-btn {
  padding: 1.5rem 3ch;
  font-size: 1.2rem;
  border-radius: 30px;
  max-width: 180px;
}

.big-box {
  width: 90%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vh;
  border-style: solid;
  border-width: 2px;
  border-radius: 20px;
  overflow: hidden;
}

.box-title {
  text-align: center;
  font-weight: lighter;
  letter-spacing: 2px;
  border-radius: 15px 15px 0 0;
  font-size: 3rem;
  padding: 0.8rem 0;
}

.box-list {
  padding: 1rem 2ch 1rem 4ch;
  font-weight: 600;
  font-size: 1.6rem;
  border-top: 2px solid;
}

.box-list li {
  padding-bottom: 1rem;
}


.what-box {
  border-color: #A414A4
}

.how-box {
  border-color: #2C808F
}

.what-title {
  background: radial-gradient(135.51% 151.31% at 11.18% 13.47%, rgb(166, 49, 111) 0%, rgb(128, 20, 70) 60.08%, rgb(54, 5, 5) 100%);
}

.how-title {
  background: radial-gradient(135.51% 151.31% at 11.18% 13.47%, rgb(11, 171, 196) 20%, rgb(38, 95, 148) 50%, rgb(21, 60, 108) 100%);
}

.what-text {
  border-color: #A414A4;
  background: radial-gradient(135.51% 151.31% at 11.18% 13.47%, rgb(111, 0, 55) 20%, rgb(94, 30, 62) 50%, rgb(44, 2, 15) 100%);
}

.how-text {
  border-color: #2C808F;
  background: radial-gradient(135.51% 151.31% at 11.18% 13.47%, rgb(40, 105, 124) 0%, rgb(51, 32, 64) 60.08%, rgb(41, 27, 50) 100%);
}

@media screen and (max-width: 1000px) {
  
}
</style>
