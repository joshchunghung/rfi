import { onMounted, onUnmounted, ref } from 'vue'
export default function () {
    const x = ref(1)
    const y = ref(1)

    // 頁面載入完畢後才進行頁面點擊
    // 點擊頁面的回調函數
    const clickHandle = (event: MouseEvent) => {
        x.value = event.pageX
        y.value = event.pageY
    }
    onMounted(() => {
        window.addEventListener("click", clickHandle)
    })

    // 卸载前解绑点击监听
    onUnmounted(() => {
        window.removeEventListener('click', clickHandle)
    })
    return { x, y }
}