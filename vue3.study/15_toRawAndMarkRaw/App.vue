<template>
  <h2>toRaw and markRaw</h2>
  <h3>state:{{ state }}</h3>
  <hr />
  <button @click="testToRaw">toRaw</button>
  <button @click="testMarkRaw">markRaw</button>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw, markRaw } from "vue";
interface IUserInfo {
  name: string;
  age: number;
  like?: string[];
}
export default defineComponent({
  name: "App",
  setup() {
    const state = reactive<IUserInfo>({
      name: "josh",
      age: 20,
    });
    const testToRaw = () => {
      // 把代理對象變成普通對象
      // 數據變化，介面不變化
      const user = toRaw(state);
      user.name += "==";
      console.log(user);
    };
    const testMarkRaw = () => {
      // state.like = ["1", "2"];
      // state.like[0] += "=";
      // markRaw 的對象從此再不能成爲被代理的對象
      const likes = ["1", "2"];
      state.like = markRaw(likes);
      setInterval(() => {
        state.like && ((state.like[0] += "="), console.log("eeee"));
      }, 1000);
    };
    return {
      state,
      testToRaw,
      testMarkRaw,
    };
  },
});
</script>
