<template>
  <div>setup and ref basic using</div>
  <!-- 返回的object可以直接用，不用寫count.vulae -->
  <h3>{{ count }}</h3>
  <button @click="updateCount">更新數據</button>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';


export default defineComponent({
  name: 'App',
  // 需求：開啟頁面後有數字，點擊按鈕後會增加數字
  // vue2
  //   data() {
  //     return {
  // count: 0,   // 屬性
  //     }
  //   },
  //   methods: { // 方法
  //     updateCount() {
  //       this.count++
  //     }
  //   }


  // vue 3
  // setup 是組合api的入口函數
  setup() {
    // 變量：定義響應式函數，並賦予初始值0
    let count = ref(0);
    // 響應式函數的更新方法
    function updateCount() {
      // count 是一個object, 沒辦法直接++
      count.value++
    }
    // 返回的是一個object，變量方法要同時返回
    return {
      count,
      updateCount
    }
  }
});

</script>
