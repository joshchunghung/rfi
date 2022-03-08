<template>
<h2>shallowReactive and shallowRef </h2>
  <h3>m1: {{m1}}</h3>
  <h3>m2: {{m2}}</h3>
  <h3>m3: {{m3}}</h3>
  <h3>m4: {{m4}}</h3>
  <hr>
  <button @click="update"> 更新數據</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, shallowReactive, shallowRef } from 'vue'
export default defineComponent({
  name: 'App',
  setup () {

    const m1 = reactive({a: 1, b: {c: 2}})
    const m2 = shallowReactive({a: 1, b: {c: 2}})

    const m3 = ref({a: 1, b: {c: 2}})
    const m4 = shallowRef({a: 1, b: {c: 2}})

    const update = () => {
      // m1.b.c += 1 // reactive--->  b內部的物件會更改
      // m2.b.c += 1 //shallowReactive --->  b內部的物件不會更改

      // m3.value.a += 1 //ref --- > a值會更改
      m4.value.a += 1
    }

    return {
      m1,
      m2,
      m3,
      m4,
      update,
    }
  }
})
</script>