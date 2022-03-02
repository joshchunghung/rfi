<template>
  <div>QSIS TEST</div>
  <h2>{{ num }}</h2>
</template>

<script lang="ts">

import { defineComponent } from 'vue';


export default defineComponent({
  name: 'App',
  setup() {
    const num = 10
    console.log("coming")
    return {
      num
    }
  }
});

</script>
