<template>
  <header>
    <div class="header-content">
      <router-link :to="{ name: 'Home' }" class="logo"></router-link>
      <i class="fa fa-bars" aria-hidden="true" @click="show = !show"></i>
      <nav class="nav" :class="show ? 'active' : ''">
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
      show: false,
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
  box-sizing: border-box;
}
.header-content {
  display: flex;
  width: 100%;
  max-width: $body-width;
  padding: 38px 25px;
  position: relative;
  z-index: 20;
  justify-content: space-between;
  box-sizing: border-box;
  & > i {
    display: none;
  }
  & > .logo {
    width: 280px;
    height: 62px;
    background: url("~@/assets/logo.png") no-repeat;
    transition: transform 0.3s;
    @include logo-hover;
  }
  & > .nav {
    display: flex;
    align-items: center;
    & > a {
      font-family: $ns;
      font-size: 20px;
      line-height: 27px;
      color: $base-color;
      text-decoration: none;
      @include light-link-hover;
    }
    & > a:not(:last-child) {
      margin-right: 48px;
    }
  }
}

@include mq($hover-off, max) {
  .header-content {
    & > .nav {
      & > a {
        @include light-link-hover-off;
      }
    }
  }
}

@include mq(768, max) {
  .header-content {
    display: flex;
    width: 100%;
    max-width: $body-width;
    padding: 38px 25px;
    position: relative;
    z-index: 20;
    justify-content: space-between;
    box-sizing: border-box;
    position: relative;
    & > i {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 22px;
      color: $base-color;
    }
    & > .logo {
      width: 140px;
      height: 31px;
      background-size: cover;
    }
    & > .nav.active {
      transform: scaleY(1);
    }
    & > .nav {
      position: absolute;
      flex-direction: column;
      width: 100%;
      left: 0;
      bottom: -80px;
      transform: scaleY(0);
      transform-origin: 0 0;
      transition: transform 0.3s;
      & > a {
        width: 100%;
        font-family: $ns;
        font-size: 18px;
        line-height: 30px;
        border-top: 1px solid transparentize($base-color, 0.7);
      }
      & > a:not(:last-child) {
        margin-right: 0;
      }
      & > a:last-child {
        border-bottom: 1px solid transparentize($base-color, 0.7);
      }
    }
  }
}
</style>
