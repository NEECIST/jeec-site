<template>
  <div class="coming-soon__countdown">
    <div class="countdown__time__wrapper">
      <div class="countdown__time" id="countdown__days">{{ countdown[0] }}</div>
      <div class="countdown__name">Days</div>
    </div>
    <div class="countdown__time countdown__colon">:</div>
    <div class="countdown__time__wrapper">
      <div class="countdown__time" id="countdown__hours">{{ countdown[1] }}</div>
      <div class="countdown__name">Hours</div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const countdown = ref(["43", "21"]);
const emit = defineEmits(['countdownExpired']);

const eventDate = new Date("May 5, 2025 09:30:00");
let timeLeft = 2;

function countdownTimer() {
  if (timeLeft > 0) {
    setTimeout(() => {
      updateCountdown();
      countdownTimer();
    }, 20000);
  } else {
    emit('countdownExpired');
  }
};

function updateCountdown() {
  let eventTime = eventDate.getTime()
  let currentTime = new Date().getTime()

  timeLeft = eventTime - currentTime;

  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  if (hours < 0) {
    hours = "00";
  } else if (hours < 10) {
    hours = "0" + hours;
  }

  if (days < 0) {
    days = "00";
  } else if (days < 10) {
    days = "0" + days;
  }

  countdown.value[0] = days;
  countdown.value[1] = hours;
}

updateCountdown();
countdownTimer();
</script>

<style>
.coming-soon__countdown {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-top: 2rem;
}

.countdown__time__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.countdown__time {
  font-family: "Russo One";
  font-size: 7rem;
  color: #79e0ff;
  text-shadow: 0px 0px 10px #1EE3CF;
  letter-spacing: 1rem;
  margin-right: -1rem;
}

.countdown__colon {
  align-self: flex-start;
  margin-right: -2.3rem;
}

.countdown__name {
  font-family: "Lexend Zetta";
  font-size: 2.5rem;
  color: #79e0ff;
  text-shadow: 0px 0px 5px #1EE3CF;
  margin-top: -1rem;
}

@media screen and (max-width: 1007px) {
  .countdown__time {
    font-size: 5.4rem;
    letter-spacing: 0.6rem;
  }

  .countdown__name {
    font-size: 1.8rem;
  }

  .countdown__colon {
    margin-right: -1.8rem;
  }
}

@media screen and (max-width: 640px) {
  .countdown__time {
    font-size: 5rem;
    letter-spacing: 0.4rem;
  }

  .countdown__name {
    font-size: 1.6rem;
  }

  .countdown__colon {
    margin-right: -1.6rem;
  }
}
</style>