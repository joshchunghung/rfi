<template>
  <!-- vue3可以不用有一對根標籤 -->
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- 使用子集組件 -->
  <HelloW msg=" Vue.js + TypeScript App" />
</template>

<script lang="ts">
// defineComponent函數：定義一個組件，內部可以配置對象
import { defineComponent } from 'vue';
// 引入一個子集
import HelloW from './components/Hello.vue';
// 輸出一個定義好的組件
export default defineComponent({
  // 定義組件名稱
  name: 'App',
  // 註冊子集組件
  components: {
    HelloW
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
