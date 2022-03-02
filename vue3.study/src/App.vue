<template>
  <h2>Reactive</h2>
  <h3>{{user.name}}</h3>
  <h3>{{user.age}}</h3>
  <h3>{{user.obj}}</h3>
  <h3>性別：{{user.gender}}</h3>
    <!-- <h3>{{user.obj.computer}}</h3>
    <h3>{{user.obj.computer[0]}}</h3> -->
    <br>
    <button @click="updateUser">更新</button>
</template>

<script lang="ts">

import { defineComponent, reactive } from 'vue';


export default defineComponent({
  name: 'App',
  // 需求：顯示用戶的相關訊息，點擊按鈕可以更新用戶資訊
  /* 
reactive: 
    作用: 定义多个数据的响应式
    const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
    响应式转换是“深层的”：会影响对象内部所有嵌套的属性
    内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
*/
  setup() {
    const objH={
    name: 'hung',
      age: 18,
      obj: {
        name: "電腦",
        computer: ['Ausu', 'Acer']
      }
    }
    // user是proxy代理對象，objH是目標對象
    const user = reactive<any>(objH)

    // proxy object
  console.log(user)
    // function updateUser (){} 等於下面的寫法
    const updateUser = () => {
      // objH.name+='--',
      // 以上寫法不會渲染

      // user.name+='++',
      // user.age+=1,
      // user.obj.name+="aa",
      // user.obj.computer[0]="Apple"

      // 增加屬性
      user.gender='male'

      // 刪除屬性
      delete user.age
    }
    return {
      user,
      updateUser
    }
  }
});

</script>
