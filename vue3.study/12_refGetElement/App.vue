<template>
<h2> ref 的另一個作用：可以獲取頁面的元素</h2>
<input type="text"  ref="inputRef" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
export default defineComponent({
  name: 'App',
  setup(){
    const inputRef = ref<HTMLElement | null >(null)

      onMounted(() => {
      inputRef.value && inputRef.value.focus()  // 自動獲取焦點
      // 上面寫法等同於
      // if (inputRef.value) {
      //   inputRef.value.focus()
      // }
    })

    return{ 
      inputRef
    }
  }
})
</script>