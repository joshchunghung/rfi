<template>
<h2>toRef的使用</h2>
<!-- <h3>{{state.name}}</h3>
<h3>{{state.age}}</h3> -->
<h3>{{name}}</h3>
<h3>{{age}}</h3>

</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  name: 'App',
  setup(){
    const state = reactive( {
      name:'josh',
      age:30
    })
    console.log(state)
    // toRefs 可以使reactive 包裹的object 變成普通包裹的ref object
    // 把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref
  // const state2 = toRefs(state)
  // console.log(state2)
  const {name, age} = toRefs(state)
    // 設定一個計時器，每兩秒刷新頁面（肯定是響應式數據）
    setInterval(()=>{
      // state.name += "++"
      name.value += "--" //因為變成ref 取用的時候要加value
    },1000)
    return {
      // state
      // ...方式會使響應式數據失效
      // ...state //不是響應式數據 ，變成{name:'josh', age:30}
      // ...state2 可以轉成ref 數據
      name,age
    }
  }
})
</script>