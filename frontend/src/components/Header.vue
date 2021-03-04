<template>
  <header>
    <div class="header-content">
      <router-link :to="{ name: 'Contacts' }" class="logo"></router-link>
      <nav class="nav">
        <router-link
          v-for="ref in refs"
          :key="ref.rout"
          :to="{ name: ref.rout }"
          >{{ ref.content }}</router-link
        >
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      refs: [
        { rout: "Home", content: "Home" },
        { rout: "About", content: "About" },
        { rout: "Contacts", content: "Contacts Us" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
header {
  display: flex;
  width: 100%;
  position: relative;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
 
}
.header-content {
  display: flex;
  width: 100%;
  max-width: $body-width;
  padding: 38px 0;
  position: relative;
  z-index: 20;
  justify-content: space-between;
  & > .logo {
    width: 280px;
    height: 62px;
    background: url("~@/assets/logo.png") no-repeat;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.05);
    }
    &:active {
      transform: scale(0.95);
    }
  }
  & > .nav {
    display: flex;
    align-items: center;
    & > a {
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 27px;
      color: $base-color;
      text-decoration: none;
      &:hover {
        color: $dark-color;
      }
      &:active {
        transform: scale(0.98);
      }
    }
    & > a:not(:last-child) {
      margin-right: 48px;
    }
  }
}
</style>
