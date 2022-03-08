<template>
<h2>readonly and shallowReadonly</h2>
<h3>state:{{state2}}</h3>
<hr>
<button @click="update">更新</button>
</template>

<script lang="ts">
import { defineComponent, reactive, readonly, shallowReadonly } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {
    const  state = reactive({ 
      name:'josh',
      age: 30,
      car:{
        name:'abc'
      }
    })

    //  readonly 深度只讀
    // const state2 = readonly(state)
    
     const state2 = shallowReadonly(state)
    const update = () =>{
      // state2.name += "---"  // 會報錯，readonly不能改值
      // state2.car.name += "111" // 會報錯，readonly 深度對象也不能改值
        //  state2.name += "---"  // 會報錯，shallowreadonly不能改值
        state2.car.name += "111"    // 可以改值
    }
    return{ 
      state2,
      update
    }
  }
})
</script>