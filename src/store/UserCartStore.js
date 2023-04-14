import { defineStore } from 'pinia'
import { ref } from 'vue'

import axios from 'axios' // 使用 pinia 只能用 axios，不能用 this 呼叫
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export const cart = defineStore('cart', () => {
  const cartData = ref({})
  const cartsLength = ref(0)
  const status = ref({ loadingItem: '' })
  const orders = ref([])
  const modal = ref('')
  const isLoading = ref(false)

  function getCarts () {
    isLoading.value = true
    axios
      .get(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart`)
      .then((res) => {
        isLoading.value = false
        cartData.value = res.data.data
        cartsLength.value = cartData.value.carts.length // 購物車 icon 判斷
        // console.log(this.cartData, this.cartsLength)
      })
  }

  function addToCart (id, qty = 1) {
    // 當沒有傳入該參數時，會使用預設值
    // this.status.loadingItem = id // 加入購物車之後 spinner 開啟
    const cart = {
      product_id: id,
      qty
    }
    // console.log(id, qty)
    axios.post(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart`, { data: cart })
      .then(res => {
        // this.status.loadingItem = '' // 加入購物車之後 spinner 關掉
        // console.log('加入購物車', res.data)
        showAlert()
        getCarts()
      })
  }

  function updateCartItem (item) {
    // 購物車的 id, 產品的 id
    const data = {
      product_id: item.product.id,
      qty: item.qty
    }
    axios.put(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart/${item.id}`, { data })
      .then(res => {
        console.log('更新購物車', res.data)
        getCarts()
      })
  }

  function deleteItem (id) {
    axios.delete(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart/${id}`)
      .then(res => {
        // console.log(id)
        // console.log(res)
        getCarts()
        modal.value.hide()
      })
  }

  function deleteAllItem () {
    axios.delete(`${VITE_APP_URL}api/${VITE_APP_PATH}/carts`)
      .then(res => {
      // console.log(res)
        getCarts()
        modal.value.hide()
      })
  }

  function setModal (item) {
    modal.value = item
  }

  function toThousands (num) {
    const n = parseInt(num, 10)
    return `${n.toFixed(0).replace(/./g, (c, i, a) => (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c))}`
  }

  function showAlert () {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'success',
      title: '已加入購物車'
    })
  }
  return {
    cartData,
    cartsLength,
    status,
    orders,
    modal,
    isLoading,
    getCarts,
    addToCart,
    updateCartItem,
    deleteItem,
    deleteAllItem,
    setModal,
    toThousands,
    showAlert
  }
})
