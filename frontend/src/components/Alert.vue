<template>
  <transition-group
    class="cont-arlet"
    tag="div"
    leave-active-class="leave"
    enter-active-class="enter"
    mode="out-in"
  >
    <div
      :class="alert.type === 'success' ? 'message-success' : 'message'"
      v-for="alert in alerts"
      :key="alert.id"
    >
      <p>{{ alert.text }}</p>
    </div>
  </transition-group>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      alerts: "alerts/all",
    }),
  },
};
</script>

<style lang="scss">
@keyframes leave {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes enter {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.leave {
  animation: leave 0.3s linear forwards;
}
.enter {
  animation: enter 0.3s linear forwards;
}
.cont-arlet {
  position: fixed;
  right: 5px;
  top: 5px;
  width: 200px;
  flex-direction: column;
  justify-content: center;
  z-index: 700;
}
.message {
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 4px;
  background-color: $error-color;
  justify-content: center;

  & > p {
    font-family: $ns;
    margin: 0;
    display: flex;
    font-size: 20px;
    color: $light-color;
    word-wrap: break-word;
  }
}

.message-success {
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 4px;
  background-color: $base-color;
  justify-content: center;

  & > p {
    word-wrap: break-word;
    font-family: $ns;
    margin: 0;
    display: flex;
    font-size: 20px;
    color: $light-color;
  }
}
</style>