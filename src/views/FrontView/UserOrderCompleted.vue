<template>
  <UserCartStepComponent></UserCartStepComponent>
  <div class="container mt-10 mb-10">
    <!-- 4. 完成訂單 -->

    <div class="row justify-content-center">
      <div class="col bg-white py-5 px-2 px-lg-3 border rounded-5">
        <div class="text-center">
          <h2 class="d-flex flex-column mb-3"><span class="text-success fs-6 mb-2"><i
                class="bi bi-check-circle fs-1"></i></span>
            訂單支付完成 </h2>
          <div class="fs-3 text-secondary mb-4">
            <h5 class="mb-10">— 感謝您的訂購 —</h5>
            <div class="d-flex justify-content-center align-items-center">
              <p class="fs-6 me-2">此為您的訂單編號 : <span id="orderId"> {{ orderId }}</span> </p>
              <button type="button" id="orderSave" class="btn border-bottom rounded-0 p-0"
                @click="copyCouponCode(order.id)">複製訂單編號</button>
            </div>
            <p class="fs-6"> 從備貨到寄出商品為 7 個工作天（不包含假日） </p>
            <p class="fs-6 mb-10">再請留意簡訊通知</p>
          </div>
          <a href="#/products" class=" btn btn-primary px-5 py-2 mb-10  rounded-4">繼續選購</a>
          <p>該頁將在 <span>{{ count }}</span> 秒後自動跳轉 </p>
          <RouterLink to="/">點擊跳轉</RouterLink>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import UserCartStepComponent from '../../components/UserCart/UserCartStepComponent.vue'
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref, inject } from 'vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
const router = useRouter()
const route = useRoute()
const $http = inject('$http')

const count = ref('10')
const order = ref({ user: {} })
const orderId = ref('')

// 倒數功能
function countDown () {
  // 執行一次，count減1
  count.value--
  if (count.value === 0) {
    router.push('/')
  }
  // 每秒執行一次
  setTimeout(() => {
    countDown()
  }, 1000)
}
function getOrder () {
  const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/order/${orderId.value}`
  $http.get(url).then((res) => {
    if (res.data.success) {
      order.value = res.data.order
      console.log(order.value)
    }
  })
}
// getCarts () {
//   this.$http.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart`)
//     .then(res => {
//       this.cart = res.data.data
//       console.log('購物車:', this.cart)
//     })
// },
// function payOrder () {
//   const url = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/pay/${this.orderId}`
//   $http.post(url).then((res) => {
//     if (res.data.success) {
//       order.value.is_paid = true
//       router.push('/order_completed')
//       getOrder()
//       // this.getCarts()
//     }
//   })
// }
function copyCouponCode (item) {
  // 舊的寫法已淘汰 execCommand
  // 新的寫法 navigator.clipboard
  const select = (DOM) => document.querySelector(DOM)
  select('#orderSave').addEventListener('click', () => {
    navigator.clipboard.writeText(select('#orderId').textContent)
    // this.showAlert()
  })
}

orderId.value = route.params.id
console.log(orderId.value)
getOrder()

onMounted(() => {
  countDown()
  copyCouponCode()
})

</script>
