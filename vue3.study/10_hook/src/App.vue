<template>
<h2>自定義hook函數</h2>
<h3>x{{x}},y{{y}}</h3>
<h3 v-if="loading">正在加載中</h3>
<h3 v-else-if="errorMsg">error:{{errorMsg}}</h3>
<!-- <ul>
  <li>id:{{data.id}}</li>
  <li>addr:{{data.address}}</li>
  <li>dist:{{data.distance}}</li>
</ul> -->
<!-- 數祖數據 -->
<ul v-for="item in data" :key="item.id">
  <li>id:{{item.id}}</li>
  <li>addr:{{item.address}}</li>
  <li>dist:{{item.distance}}</li>
</ul>

</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import useMousePosition from './hooks/useMousePosition'
import useRequest from './hooks/useRequest'
export default defineComponent({
  name: 'App',

  // 需求1：點擊頁面並顯示點擊的xy
  setup(){
  const { x, y } = useMousePosition()

  // 需求2：使用封裝的ajax

  // 建立interface 
  interface addressData {
    id:number;
    address:string;
    distance:string;
  }
  // const {loading,data,errorMsg} = useRequest<addressData>('/data/t1.json')
  const {loading,data,errorMsg} = useRequest<addressData[]>('/data/t2.json')
  // 監聽
  watch(data,()=>{
    if (data.value){
      console.log(data.value.length)
    }
  })
    return {
      x,
      y,
      loading,
      data,
      errorMsg
      }
  }
})


</script>