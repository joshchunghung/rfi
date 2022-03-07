<template>
<h2>父級組件</h2>
<button @click="isShow=!isShow">切換顯示</button>
<hr>
<childT v-if="isShow"></childT>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import childT from './components/child.vue'
export default defineComponent({
  name: 'App',
  components:{
    childT
  },
  setup(){
    const isShow = ref(true)
    return {
      isShow
    }
  }
})
</script>