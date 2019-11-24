<template>
  <div id="app">
    <div class="mobile-switch-lang">
      <span :class="{ active: localLang === 'zh-CN' }" @click="switchLang('zh-CN')">中文</span>
      <span :class="{ active: localLang === 'en-US' }" @click="switchLang('en-US')">EN</span>
    </div>
    <router-view />
  </div>
</template>

<script>
import { setLang, getLang } from "utils/lang";
export default {
  data() {
    return {
      localLang: "zh-CN"
    };
  },
  created() {
    this.localLang = getLang();
  },

  computed: {},

  methods: {
    switchLang(lang) {
      this.localLang = lang;
      setLang(lang, this);
    }
  }
};
</script>

<style lang="less">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.mobile-switch-lang {
  position: absolute;
  top: 0px;
  right: 20px;
  overflow: hidden;
  color: #ff0000;
  font-size: 12px;
  cursor: pointer;

  span {
    display: inline-block;
    width: 48px;
    color: #333333;
    line-height: 22px;
    text-align: center;
    background-color: #fff;

    &:first-child {
      border-right: none;
      border-radius: 3px 0 0 3px;
    }

    &:last-child {
      border-left: none;
      border-radius: 0 3px 3px 0;
    }

    &.active {
      color: #ffffff;
      background-color: #ff0000;
      border-color: #ff0000;
    }
  }
}


#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
