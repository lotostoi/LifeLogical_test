<template>
  <section class="contacts">
    <h1>Get In Touch</h1>
    <feed-back></feed-back>
  </section>
</template>

<script>
import FeedBack from "@/components/Feedback.vue";

export default {
  components: { FeedBack },
};
</script>

<style lang="scss" scoped>
.contacts {
  width: 100%;
  max-width: $body-width;
  min-height: 638px;
  background: #ffffff;
  box-shadow: 2px 10px 28px rgba(75, 0, 129, 0.12);
  border-radius: 10px;
  padding: 60px;
  & > h1 {
    display: flex;
    width: 100%;
    max-width: 146px;
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
</style>
