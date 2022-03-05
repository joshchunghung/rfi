<template>
<h2>計算屬性與監視</h2>
<fieldset>
<legend>姓名操作</legend>
  姓氏：<input type="text"  placeholder="輸入姓氏" v-model="user.firstName"/><br/>
  名字：<input type="text"  placeholder="輸入名字" v-model="user.lastName"/><br/>
</fieldset>
<fieldset>
<legend>計算屬性與監視</legend>
  姓名：<input type="text"  placeholder="顯示姓名" v-model="fullname1" /><br/>
  姓名：<input type="text"  placeholder="顯示姓名"  v-model="fullname2" /><br/>
  姓名：<input type="text"  placeholder="顯示姓名" v-model="fullname3"/><br/>
</fieldset>

</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watch, watchEffect } from 'vue'
export default defineComponent({
  name: 'App',
  setup(){
    const user = reactive({
      firstName:"John",
      lastName:"Ton"
    })
    
    //通過計算屬性實現第一個姓名顯示 
    // 計算屬性的函式中，如果只傳入一個回調函數，表示爲get
    // 返回的是一個ref object
  const fullname1 = computed(() => {
      return `${user.firstName}_${user.lastName}`
  })


// 要有get 與 set ，傳入的必須是object，而不是回調函數
  const fullname2 = computed({
    get() {
      return `${user.firstName}_${user.lastName}`
    },
    set(val:string) {
      // console.log(val)
      const names = val.split("_")
      user.firstName=names[0]
      user.lastName=names[1]
    }
  })


// 使用監視---- 監視指定數據
const fullname3 = ref('')
watch(user,({firstName,lastName}) => {
  fullname3.value = `${firstName}_${lastName}`
},{immediate: true,  // 是否初始化立即执行一次, 默认是false
      deep: true, // 是否是深度监视, 默认是false
    })

// 一樣是監視，但是會自動執行一次
    // watchEffect(() => {
    //   fullname3.value = `${user.firstName}_${user.lastName}`
    // })

// 監視fullName3 並改變firstName和lastName
  watchEffect(() => {
      const names = fullname3.value.split("_")
      user.firstName=names[0]
      user.lastName=names[1]
  })

  //  watch 可以監視多個數據
  watch([user.firstName, user.lastName,fullname3],()=>{
    // 這裏的代碼不會執行，因爲user.firstName, user.lastName不是響應式數據
    // 必須加上響應式數據fullname3
    console.log("=====")
  })

      // 監聽非響應式數據，要使用回調函數
  watch([()=>user.firstName, ()=>user.lastName],()=>{
    console.log("=====2")
  })


    return{
      user,
      fullname1,
      fullname2,
      fullname3
    }
  }
})

</script>