<template>
  <footer>
    <div class="wrapper border-bot">
      <section class="info">
        <section class="logo">
          <router-link :to="{ name: 'Home' }" class="image-logo"></router-link>
          <section class="quick-links">
            <h5>Quick Links</h5>
            <a href="#">Sign Up</a>
            <a href="#">About Us</a>
          </section>
        </section>
        <section class="others">
          <h5>Others</h5>
          <a href="#">User FAQs</a>
          <a href="#">Contact Us</a>
          <a href="#">Legal</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
        </section>
        <section class="contacts">
          <div class="contact">
            <div class="map-mark"></div>
            <p>
              Infomation technologies building, Victoria Island, Lagos, Nigeria.
            </p>
          </div>
          <div class="contact">
            <div class="phone"></div>
            <p>+234 081-1236-4568</p>
          </div>
          <div class="contact">
            <div class="email"></div>
            <p>hello@example.com</p>
          </div>
          <div class="social-networks">
            <a href="#" class="fa fa-youtube-play" aria-hidden="true"></a>
            <a href="#" class="fa fa-instagram" aria-hidden="true"></a>
            <a href="#" class="fa fa-facebook" aria-hidden="true"></a>
            <a href="#" class="fa fa-twitter" aria-hidden="true"></a>
          </div>
        </section>
        <section class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.637063785327!2d132.2117125157491!3d43.36370177913227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb3b1ac9b6740a3%3A0x96895124c2318c18!2sUlitsa%20Kirova%2C%2078%2C%20Artyom%2C%20Primorskiy%20kray%2C%20692751!5e0!3m2!1sen!2sru!4v1615012887307!5m2!1sen!2sru"
            width="280"
            height="143"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </section>
      </section>
    </div>
    <div class="wrapper">
      <section class="rights">
        <p>Copyright &copy; 2020. All rights reserved.</p>
      </section>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style  lang= "scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: $base-color;
}
.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.info {
  margin: 0 auto;
  width: 100%;
  max-width: $max-width;
  display: flex;
  padding: 35px 55px 39px 78px;
  box-sizing: border-box;
}

.info > .logo {
  order: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 20px;
  max-width: 381px;

  & > a.image-logo {
    width: 280px;
    height: 62px;
    background: url("~@/assets/img/logo-white.png") no-repeat;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.05);
    }
    &:active {
      transform: scale(0.95);
    }
  }
  & > .quick-links {
    display: flex;
    margin-top: 57px;
    flex-direction: column;

    & > h5 {
      font-family: $obj-med;
      font-size: 18px;
      line-height: 19px;
      display: flex;
      align-items: center;
      color: $light-color;
      position: relative;
      margin-top: 0;
      margin-bottom: 34px;

      &::after {
        content: "";
        display: block;
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 99px;
        height: 2px;
        background: $light-color;
        border-radius: 2px;
      }
    }
    & > a {
      cursor: pointer;
      font-family: $obj-reg;
      font-size: 14px;
      line-height: 14px;
      text-decoration: none;
      display: flex;
      align-items: center;
      color: $light-color;
      @include dark-link-hover;
    }
    & > a:first-of-type {
      margin-bottom: 18px;
    }
  }
}

.info > .others {
  order: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 20px;
  max-width: 238px;

  & > h5 {
    font-family: $obj-med;
    font-size: 18px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: $light-color;
    position: relative;
    margin-bottom: 34px;
    margin-top: 24px;
    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 61px;
      height: 2px;
      background: $light-color;
      border-radius: 2px;
    }
  }
  & > a {
    width: 155px;
    cursor: pointer;
    font-family: $obj-reg;
    font-size: 14px;
    line-height: 14px;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: $light-color;
    @include dark-link-hover;
    margin-bottom: 18px;
  }
  & > a:last-of-type {
    margin-bottom: 0;
  }
}

.info > .contacts {
  order: 3;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 20px;
  max-width: 349px;
  margin-top: 24px;
  max-width: 381px;
  @include mq(1250, max) {
    max-width: auto;
  }

  & > .contact {
    display: flex;
    margin-bottom: 30px;
    & > .map-mark {
      display: block;
      width: 17px;
      height: 21px;
      background: url("~@/assets/img/map-mark.png") no-repeat;
    }
    & > .phone {
      display: block;
      width: 23px;
      height: 21px;
      background: url("~@/assets/img/phone.png") no-repeat;
    }
    & > .email {
      display: block;
      width: 23px;
      height: 21px;
      background: url("~@/assets/img/email.png") no-repeat;
      padding: 0;
    }
    & > p {
      width: 267px;
      margin: 0;
      margin-left: 19px;
      display: flex;
      justify-content: flex-start;
      text-align: left;
      font-family: $obj-reg;
      font-size: 16px;
      line-height: 22px;
      color: $light-color;
    }
  }
  & > .social-networks {
    display: flex;
    justify-content: flex-start;
    & > a {
      text-decoration: none;
      margin-right: 25px;
      color: $light-color;
      font-size: 22px;
      @include dark-link-hover;
    }
  }
}

.info > .map {
  order: 4;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  width: 280px;
  height: 143px;
  border-radius: 4px;
  & > iframe {
    border-radius: 4px;
  }
}

.rights {
  margin: 0 auto;
  width: 100%;
  max-width: $max-width;
  display: flex;
  padding: 24px 78px;
  box-sizing: border-box;
  & > p {
    margin: 0;
    font-family: $obj-bold;
    font-style: normal;
    font-weight: bold;
    font-size: 10.41px;
    line-height: 11px;
    display: flex;
    align-items: center;
    color: $light-color;
  }
}

.border-bot {
  border-bottom: 1px solid $light-color;
}

@include mq(1205, max) {
  .info > .logo {
    order: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 20px;
    max-width: 200px;

    & > a.image-logo {
      margin-top: 20px;
      width: calc(280px / 1.5);
      height: calc(62px / 1.5);
      background: url("~@/assets/img/logo-white.png") no-repeat;
      transition: transform 0.3s;
      background-size: cover;
      &:hover {
        transform: scale(1.05);
      }
      &:active {
        transform: scale(0.95);
      }
    }
    & > .quick-links {
      display: flex;
      margin-top: 66px;
      flex-direction: column;

      & > h5 {
        font-family: $obj-med;
        font-size: 18px;
        line-height: 19px;
        display: flex;
        align-items: center;
        color: $light-color;
        position: relative;
        margin-top: 0;
        margin-bottom: 34px;

        &::after {
          content: "";
          display: block;
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 99px;
          height: 2px;
          background: $light-color;
          border-radius: 2px;
        }
      }
      & > a {
        cursor: pointer;
        font-family: $obj-reg;
        font-size: 14px;
        line-height: 14px;
        text-decoration: none;
        display: flex;
        align-items: center;
        color: $light-color;
        @include dark-link-hover;
      }
      & > a:first-of-type {
        margin-bottom: 18px;
      }
    }
  }
}

@include mq(1205, max) {
  .info > .others {
    order: 3;
    margin: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 20px;
    max-width: 180px;

    & > h5 {
      font-family: $obj-med;
      font-size: 18px;
      line-height: 19px;
      display: flex;
      align-items: center;
      color: $light-color;
      position: relative;
      margin-bottom: 34px;
      margin-top: 24px;
      &::after {
        content: "";
        display: block;
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 61px;
        height: 2px;
        background: $light-color;
        border-radius: 2px;
      }
    }
    & > a {
      width: 155px;
      cursor: pointer;
      font-family: $obj-reg;
      font-size: 14px;
      line-height: 14px;
      text-decoration: none;
      display: flex;
      align-items: center;
      color: $light-color;
      @include dark-link-hover;
      margin-bottom: 18px;
    }
    & > a:last-of-type {
      margin-bottom: 0;
    }
  }
}

@include mq(1205, max) {
  .info > .contacts {
    order: 2;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 20px;
    max-width: 349px;
    margin-top: 30px;
    max-width: 310px;

    & > .contact {
      display: flex;
      margin-bottom: 30px;
      & > .map-mark {
        display: block;
        width: 17px;
        height: 21px;
        background: url("~@/assets/img/map-mark.png") no-repeat;
      }
      & > .phone {
        display: block;
        width: 23px;
        height: 21px;
        background: url("~@/assets/img/phone.png") no-repeat;
      }
      & > .email {
        display: block;
        width: 23px;
        height: 21px;
        background: url("~@/assets/img/email.png") no-repeat;
        padding: 0;
      }
      & > p {
        width: 267px;
        margin: 0;
        margin-left: 19px;
        display: flex;
        justify-content: flex-start;
        text-align: left;
        font-family: $obj-reg;
        font-size: 16px;
        line-height: 22px;
        color: $light-color;
      }
    }
    & > .social-networks {
      display: flex;
      justify-content: flex-start;
      & > a {
        text-decoration: none;
        margin-right: 25px;
        color: $light-color;
        font-size: 22px;
        @include dark-link-hover;
      }
    }
  }
}
@include mq(1205, max) {
  .info > .map {
    display: flex;
    flex-direction: column;
    margin: 32px auto 0;
    width: 100%;
    height: calc(143px * 1.5);
    border-radius: 4px;
    & > iframe {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
  }
}
@include mq(1205, max) {
  .info {
    margin: 0 auto;
    width: 100%;
    max-width: $max-width;
    display: flex;
    padding: 35px 55px 39px 78px;
    box-sizing: border-box;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
@include mq(1024, max) {
  .info > .logo {
    & > a.image-logo {
      &:hover {
        transform: scale(1);
      }
      &:active {
        transform: scale(0.95);
      }
    }
    & > .quick-links {
      & > a {
        @include dark-link-hover-off;
      }
    }
  }
}

@include mq(1024 max) {
  .info > .others {
    order: 3;
    & > a {
      @include dark-link-hover-off;
    }
  }
}

@include mq(1024, max) {
  .info > .contacts {
    order: 2;
    & > .social-networks {
      & > a {
        @include dark-link-hover-off;
      }
    }
  }
}
@include mq(900, max) {
  .info > .others {
    order: 3;
    display: none;
    & > a {
      @include dark-link-hover-off;
    }
  }
}
@include mq(700, max) {
  .info {
    margin: 0 auto;
    width: 100%;
    max-width: $max-width;
    display: flex;
    padding: 30px;
    box-sizing: border-box;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
}
@include mq(700, max) {
  .info > .logo {
    & > .quick-links {
      display: none;
      & > a {
        @include dark-link-hover-off;
      }
    }
  }
}

@include mq(700, max) {
  .info > .contacts {
    max-width: 100%;
    align-items: center;
    order: 2;
    margin: 0;
    margin-top: 50px;
    & > .contact {
      display: flex;
      margin-bottom: 30px;
      justify-content: center;
      & > .map-mark {
        display: block;
        width: 28px;
        height: 21px;
        background: url("~@/assets/img/map-mark.png") no-repeat;
      }
      & > .phone {
        display: block;
        width: 28px;
        height: 21px;
        background: url("~@/assets/img/phone.png") no-repeat;
      }
      & > .email {
        display: block;
        width: 28px;
        height: 21px;
        background: url("~@/assets/img/email.png") no-repeat;
        padding: 0;
      }
      & > p {
        width: 100%;
        margin: 0;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        text-align: center;
        font-family: $obj-reg;
        font-size: 16px;
        line-height: 22px;
        color: $light-color;
      }
    }
    & > .social-networks {
      & > a {
        @include dark-link-hover-off;
      }
    }
  }
}
@include mq(450, max) {
  .info > .contacts {
    max-width: 100%;
    align-items: center;
    order: 2;
    margin: 0;
    margin-top: 40px;
    & > .contact {
      display: flex;
      margin-bottom: 30px;
      justify-content: center;
      & > .map-mark {
        display: block;
        width: 28px;
        height: 21px;
        background: url("~@/assets/img/map-mark.png") no-repeat;
      }
      & > .phone {
        display: block;
        width: 28px;
        height: 21px;
        background: url("~@/assets/img/phone.png") no-repeat;
      }
      & > .email {
        display: block;
        width: 28px;
        height: 21px;
        background: url("~@/assets/img/email.png") no-repeat;
        padding: 0;
      }
      & > p {
        width: 180px;
        margin: 0;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        text-align: justify;
        font-family: $obj-reg;
        font-size: 16px;
        line-height: 22px;
        color: $light-color;
      }
    }
    & > .social-networks {
      & > a {
        @include dark-link-hover-off;
      }
    }
  }
}
</style>