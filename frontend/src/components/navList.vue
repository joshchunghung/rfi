<template>
  <div class="row">
    <div class="col-lg-3 col-md-12">
      <ul class="nav flex-column">
        <li v-for="(page, index) in pageItem" :key="index" class="nav-item">
          <router-link :to="'/' + page">{{ page }}</router-link>
        </li>
      </ul>
    </div>
    <!-- 頁面在這 -->
    <div class="col-lg-9 col-md-12">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "navList",
  setup() {
    const pageItem = ref([
      "home",
      "about",
      "coreNetwork",
      "building",
      "dataDownload",
      "team",
    ]);

    return {
      pageItem,
    };
  },
});
</script>

<style lang="scss" scoped>
ul {
  padding: 30px;
  text-align: left;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
