<template>
  <h2>子級組件</h2>
  <h3>age:{{ age }}</h3>
  <h3>length:{{ length }}</h3>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRef } from "vue";
// 別人定義好的hook函數，一定要傳入ref
function useGetLength(age: ref) {
  return computed(() => {
    return age.value.toString().length;
  });
}
export default defineComponent({
  name: "childT",
  props: {
    age: {
      type: Number,
      required: true, //一定要有age
    },
  },
  setup(props) {
    const length = useGetLength(toRef(props, "age"));
    return { length };
  },
});
</script>
