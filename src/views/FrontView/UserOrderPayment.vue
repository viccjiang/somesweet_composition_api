<template>
  <UserCartStepComponent></UserCartStepComponent>
  <!-- 訂單表格 -->
  <div class="bg-light pt-5 pb-7 mt-10">
    <div class="container pt-10 pb-10">
      <div class="row justify-content-center flex-column flex-md-row ">
        <div class="col-md-8 sticky-lg-top position-lg-sticky h-50 ">
          <div class="border rounded-4 p-4 mb-4 ">
            <div class="d-flex justify-content-between">
              <h4 class="mb-4 ">訂購資訊</h4>
              <button type="button" id="orderSave" class="btn btn-outline-primary"
                @click="copyCouponCode(order.id)">複製訂單編號</button>
            </div>
            <table class="table align-middle">
              <thead>
                <tr class="align-middle ">
                  <th scope="col">訂購編號</th>
                  <th scope="col" id="orderId"><span>{{ order.id }} </span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="col">訂購日期</th>
                  <td scope="col">{{ dateTranslate(order.create_at) }}</td>
                </tr>
                <tr>
                  <th scope="row">姓名</th>
                  <td>{{ order.user.name }}</td>
                </tr>
                <tr>
                  <th scope="row">Email</th>
                  <td>{{ order.user.email }}</td>
                </tr>
                <tr>
                  <th scope="row">電話</th>
                  <td scope="row">{{ order.user.tel }}</td>
                </tr>
                <tr>
                  <th scope="row">地址</th>
                  <td scope="row">{{ order.user.address }}</td>
                </tr>
                <tr>
                  <th scope="row">訂購產品</th>
                  <td scope="row">
                    <div class=" " v-for="item in order.products" :key="item.id">
                      <!-- <img :src="item.product.imageUrl" alt="" class="me-2 my-1" style="width: 48px; height: 48px; object-fit: cover"> -->
                      <div class="w-100 ">
                        <div class="">
                          <p class="mb-0">{{ item.product.title }} <span class="mb-0"> x {{ item.qty }}</span></p>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">付款金額</th>
                  <td scope="row">{{ order.total }}</td>
                </tr>
                <tr>
                  <th scope="row">付款方式</th>
                  <td scope="row">{{ order.user.shipping }}</td>
                </tr>
                <tr>
                  <th scope="row">付款狀態</th>
                  <td scope="row">
                    <span v-if="!order.is_paid" class="text-danger">未付款</span>
                    <span v-else class="text-success">付款完成</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button type="button" v-if="!order.is_paid" class="btn btn-primary float-end rounded-4"
            @click="payOrder">確認付款</button>
          <RouterLink to="/products"><button type="button" v-if="order.is_paid"
              class="btn btn-primary float-end rounded-4">繼續購物</button></RouterLink>

        </div>

      </div>
    </div>
  </div>
</template>

<script setup>

import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref, inject } from 'vue'
import UserCartStepComponent from '../../components/UserCart/UserCartStepComponent.vue'

const $http = inject('$http')
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
const order = ref({
  user: {}
})

const router = useRouter()
const route = useRoute()
const orderId = ref('')

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

function payOrder () {
  const url = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/pay/${orderId.value}`
  $http.post(url).then((res) => {
    if (res.data.success) {
      order.value.is_paid = true
      // router.push('/order_completed/${res.data.orderId}')
      router.push({
        path: '/order_completed',
        query: { id: orderId.value } // 注意，傳送後會轉為字串
      })
      getOrder()
      // this.getCarts()
    }
  })
}
function copyCouponCode (item) {
  // 舊的寫法已淘汰 execCommand
  // 新的寫法 navigator.clipboard
  const select = (DOM) => document.querySelector(DOM)
  select('#orderSave').addEventListener('click', () => {
    navigator.clipboard.writeText(select('#orderId').textContent)
    this.showAlert()
  })
}

function dateTranslate (time) {
  const localDate = new Date(time * 1000)
  return localDate.toLocaleDateString()
}
// function showAlert() {
//   const Toast = this.$swal.mixin({
//     toast: true,
//     position: 'top-end',
//     showConfirmButton: false,
//     timer: 1500,
//     timerProgressBar: true,
//     didOpen: (toast) => {
//       toast.addEventListener('mouseenter', this.$swal.stopTimer)
//       toast.addEventListener('mouseleave', this.$swal.resumeTimer)
//     }
//   })
//   Toast.fire({
//     icon: 'success',
//     title: '優惠碼複製成功'
//   })
// }

orderId.value = route.params.orderId
getOrder()

onMounted(() => {
  copyCouponCode()
})

</script>
