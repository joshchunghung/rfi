<template>
  <div class="container">BATS</div>
  <twMap />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import twMap from "./components/taiwanMap.vue";
export default defineComponent({
  name: "App",
  components: {
    twMap,
  },
});
</script>
