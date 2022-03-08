<template>
  <h2>customRef 使用</h2>
  <input type="text" v-model="keyWord" />
  <p>{{ keyWord }}</p>
</template>

<script lang="ts">
import { customRef, defineComponent, ref } from "vue";
// 自定義hook函數
// value:將來傳入的數據類型不確定，使用泛型
// delay 延遲的時間
function useDeboundRef<T>(value: T, delay = 200) {
  let timeOutId: number;
  return customRef((track, trigger) => {
    return {
      // 返回數據
      get() {
        track(); //告訴vue要追蹤數據
        return value;
      },
      // 獲取數據
      set(newValue: T) {
        // 清除定時器
        clearTimeout(timeOutId);
        // 設定定時器
        timeOutId = setTimeout(() => {
          value = newValue;
          trigger(); // 告訴vue 要更新介面
        }, delay);
      },
    };
  });
}

export default defineComponent({
  name: "App",
  setup() {
    // const keyWord = ref("abc");
    const keyWord = useDeboundRef("abc", 500);
    return {
      keyWord,
    };
  },
});
</script>
