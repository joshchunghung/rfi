<template>
<h2>子級組件</h2>
<h3>msg:{{msg}}</h3>
<button @click="update">更新</button>
</template>

<script lang="ts">
import { defineComponent, ref ,  
onMounted,
onUpdated,
onUnmounted, 
onBeforeMount, 
onBeforeUpdate,
onBeforeUnmount} from 'vue'

export default defineComponent({
    name: 'childT',
    // vue2的生命週期
    beforeCreate(){
        console.log("vue2..beforeCreate")
    },
    created(){
        console.log("vue2..created")
    },
    beforeMount(){
    console.log("vue2..beforeMount")
    },
    mounted(){
        console.log("vue2..mounted")
    },
    beforeUpdate(){
        console.log("vue2..beforeUpdate")
    },
    updated(){
        console.log("vue2..updated")
    },
    beforeUnmount() {  
        console.log("vue2..beforeDestroy")
    },
    unmounted(){
        console.log("vue2..destroyed")
    },
    setup(){
        console.log("vue3.. setup")
        const msg = ref("abc")
        const update = () =>{
            msg.value += "---"
        }

    onMounted(()=>{
        console.log("vue3 onMounted")
    })
    onUpdated(()=>{
        console.log("vue3 onUpdated")
    })
    onUnmounted(()=>{
        console.log("vue3 onUnmounted")
    })
    onBeforeMount(()=>{
        console.log("vue3 onBeforeMount")
    })
    onBeforeUpdate(()=>{
        console.log("vue3 onBeforeUpdate")
    })
    onBeforeUnmount(()=>{
        console.log("vue3 onBeforeUnmount")
    })
    return{ 
        msg,
        update
        }
    }
})
</script>