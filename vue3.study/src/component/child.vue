<template>
<h3>child 子級組件</h3>
<h4>msgchild:{{msg}}</h4>
<h5>msg2={{msg2}}</h5>
<button @click="emitXxx">分發事件</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'childT',
    props:['msg'],

    // setup細節問題
    // setup在beforeCreate前執行，且執行一次
    // setup在執行的時候，組件還沒有被創建，所以不能使用組件實例對象this
    // 既然this未定義，就不能透過this 去調用data/method及其他component中的相關內容

    // setup return的是一個object，內部的屬性與方法是給html template使用的
    // setup中的屬性會與vue2中的data與method合併
    // setup不能是一个async函数: 因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性数据


    // 數據初始化的生命週期回調
    beforeCreate(){
        console.log("beforeCreate done")
    },
    setup(props,context){
        // props: 父級組件給子級組件的數據，在子集中使用props獲取所有屬性。
        console.log(props)
        console.log(props.msg)
        // attrs: 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs
        // slots: 包含所有传入的插槽内容的对象, 相当于 this.$slots
        // emit: 用来分发自定义事件的函数, 相当于 this.$emit
        console.log("c",context)
        console.log("c1",context.attrs)
        const msg2 = context.attrs.msg2
        console.log("c2",context.emit)
        console.log("=============")
        console.log("setup done",this); // 此時this 是undefined
        
        function emitXxx(){
            context.emit('xxx','dd++')
        }
        return{ 
            msg2,
            emitXxx
        }
    }
})
</script>