<template>
  <section class="contacts">
    <h1>Get In Touch</h1>
    <my-feed-back />
  </section>
</template>

<script>
import MyFeedBack from "@/components/Feedback.vue";

export default {
  components: { MyFeedBack },
};
</script>

<style lang="scss" scoped>
.contacts {
  width: 100%;
  max-width: calc(#{$body-width} - 50px);
  min-height: 638px;
  background: #ffffff;
  box-shadow: 2px 10px 28px rgba(75, 0, 129, 0.12);
  border-radius: 10px;
  padding: 60px;
  box-sizing: border-box;
  & > h1 {
    font-family: $ns;
    display: flex;
    width: 100%;
    max-width: 147px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: 0.01em;
    color: $base-color;
    margin: 0 auto;
    position: relative;
    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 160px;
      height: 2px;
      background: $base-color;
      border-radius: 2px;
    }
  }
}

@include mq(768, max) {
  .contacts {
    width: 100%;
    max-width: calc(#{$body-width} - 50px);
    min-height: 638px;
    background: #ffffff;
    box-shadow: 2px 10px 28px rgba(75, 0, 129, 0.12);
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
  }
}
</style>
