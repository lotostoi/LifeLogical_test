<template>
  <app-header></app-header>
  <main>
    <router-view />
  </main>
  <app-footer></app-footer>
</template>

<script>
import AppHeader from "@/components/Header.vue";
import AppFooter from "@/components/Footer.vue";
export default {
  components: { AppHeader, AppFooter },
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
  box-sizing: border-box;
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
  padding: 152px 20px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
}
</style>
