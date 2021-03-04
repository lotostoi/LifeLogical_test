<template>
  <Header></Header>
  <main>
    <router-view />
  </main>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: { Header },
};
</script>

<style lang="scss">
#app {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
  display: flex;
  color: #2c3e50;
  flex-direction: column;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 609px;
    background: linear-gradient(
        359.45deg,
        #4a99d3 -24.57%,
        rgba(74, 153, 211, 0) 76.31%
      ),
      #ffffff;
    opacity: 0.2;
    z-index: -1;
    transform: rotate(-180deg);
  }
}
main {
  padding: 152px 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>
