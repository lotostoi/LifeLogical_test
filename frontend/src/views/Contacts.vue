<template>
  <div class="page-contacts">
    <my-feed-back />
  </div>
</template>

<script>
import MyFeedBack from "@/components/Feedback.vue";

export default {
  components: { MyFeedBack },
};
</script>

<style lang="scss" scoped>
.page-contacts {
  display: flex;
  width: 100%;
  max-width: $max-width;
  padding: 150px;
  justify-content: center;
}
</style>
