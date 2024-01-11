<template>
  <footer>
    <div class="footer__left">
      <h2>Instituto Superior Técnico</h2>
      <p>Av. Rovisco Pais, 1049-001 Lisbon</p>
    </div>
    <div class="footer__right">
      <div class="footer__socials">
        <a href="https://www.facebook.com/JEECIST/"><img src="@/assets/socials/facebook-logo.svg" alt="jeec's facebook page"></a>
        <a href="https://www.instagram.com/jeec.ist/"><img src="@/assets/socials/instagram-logo.svg" alt="jeec's instagram account"></a>
        <a href="https://www.youtube.com/@JEECvideos"><img src="@/assets/socials/youtube-logo.svg" alt="jeec's youtube channel"></a>
        <a href="https://pt.linkedin.com/company/jeecist"><img src="@/assets/socials/linkedin-logo.svg" alt="jeec's linkedin page"></a>
      </div>
      <a href="mailto:coordination@jeec.ist" target="_blank" class="footer__email"><img src="@/assets/socials/email.svg" alt="email"><p>coordination@jeec.ist</p></a>
    </div>

  </footer>
</template>

<style>
footer {
  background-color: var(--color-header-dark);
  height: 170px;
  border-radius: 5px 5px 0 0;
  box-shadow: 0px -5px 15px 0px rgba(0, 0, 0, 0.27);
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
}

.footer__left > h2 {
  font-family: "Lexend Deca";
}

.footer__left > p {
  padding-top: 20px;
}

.footer__right {
  display: flex;
  gap: 3rem;
}

.footer__socials {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 30px 0;
  flex-wrap: wrap;
}

.footer__socials a > img {
  width: 40px;
} 

.footer__email {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
  gap: 10px;
}

.footer__email > img {
  height: 25px;
}

.footer__email > p {
  text-decoration: underline;
  font-size: 1.1rem;
}

@media screen and (max-width: 1007px){
  footer {
    flex-direction: column;
    height: 310px;
    justify-content: center;
  }

  .footer__left {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer__right {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
}
</style>