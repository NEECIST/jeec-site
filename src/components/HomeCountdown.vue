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
<script>
export default {
  data() {
    return {
      eventDate: new Date("Feb 19, 2024 09:00:00"),
      countdown: ["43", "21"],
      timeLeft: 2,
      countdownExpired: false,
    }
  }, methods: {
    countdownTimer() {
      if (this.timeLeft > 0) {
        setTimeout(() => {
          this.updateCountdown()
          this.countdownTimer()
        }, 20000);
      } else {
        this.countdownExpired = true
      }
    },

    updateCountdown() {
      let eventDate = this.eventDate.getTime()
      let currentDate = new Date().getTime()

      let timeLeft = eventDate - currentDate
      this.timeLeft = timeLeft

      let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      if (hours < 10) {
        hours = "0" + hours
      } 
      
      if (days < 10) {
        days = "0" + days
      }

      this.countdown[0] = days
      this.countdown[1] = hours
    }
  }, created() {
    this.updateCountdown()
    this.countdownTimer()
  },
}
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