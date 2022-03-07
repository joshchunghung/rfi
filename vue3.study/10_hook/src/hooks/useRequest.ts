import { ref } from "vue"
import axios from 'axios'
// 發送一個ajax請求
// <T> 不確定回傳的是array或是object，就寫成<T> 泛型
export default function <T>(url: string) {

    // 加載狀態
    const loading = ref(true)
    // <T | null> : object array null
    const data = ref<T | null>(null)
    const errorMsg = ref('')
    axios.get(url)
        .then(response => {
            loading.value = false
            data.value = response.data
        })
        .catch(error => {
            loading.value = false
            errorMsg.value = error.message || "unknown"
        })

    return {
        loading,
        data,
        errorMsg
    }
}