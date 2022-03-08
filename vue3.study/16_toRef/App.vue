<template>
  <h2>toRef的特點</h2>
  <h3>state:{{ state }}</h3>
  <h3>age:{{ age }}</h3>
  <h3>money:{{ money }}</h3>
  <button @click="update">更新</button>
  <!--傳入的是age.value 只是在html中.value可省略 -->
  <childT :age="age"></childT>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRef } from "vue";
import childT from "./component/child.vue";
export default defineComponent({
  name: "App",
  components: {
    childT,
  },
  setup() {
    const state = reactive({
      age: 5,
      money: 100,
    });
    // 把state中的age屬性變成ref對象
    const age = toRef(state, "age");
    //  把state中的money屬性用ref包裝變成了ref對象。
    const money = ref(state.money);

    const update = () => {
      // 以下兩種 state age 同時變
      // state.age += 3;
      age.value += 3;

      //  state 不會變：說明ref的物件已經跟原本的物件沒有關係
      // money.value += 10;
    };
    return {
      money,
      age,
      state,
      update,
    };
  },
});
</script>
