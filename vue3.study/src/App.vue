<template>
<h2>app父級組件</h2>
<h4>msg:{{msg}}</h4>
<button @click="msg += '++'" >更新數據</button>
<br>
<childT :msg="msg"  msg2="good" @xxx="xxx"></childT>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// 引入子級組件
import childT from "./component/child.vue"
export default defineComponent({
  name: 'App',
  // 註冊組件
  components:{
    childT
  },
  setup() {
    const msg = ref('hello')
    function xxx (txt : string) {
      msg.value += txt
    }
    return{
      msg,
      xxx
    }
  }
})
</script>