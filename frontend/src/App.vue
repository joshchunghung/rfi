<template>
  <div class="container">
    <h2>Quake Structural Integrity System</h2>
    <hr />

    <navList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import navList from "./components/navList.vue";

export default defineComponent({
  name: "appT",
  components: {
    navList,
  },
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
