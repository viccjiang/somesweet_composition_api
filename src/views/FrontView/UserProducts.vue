<template>
  <LoadingView :active="isLoading" loader="bars" color="#034D83" />
  <GoTop></GoTop>
  <div class="container-fluid g-0 ">
    <div class="card border-0 rounded-0 bg-dark text-white mb-5">
      <div class="filters" style="
          height: 200px;
          background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1677550181847.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qQpOKJlmAipjojZQ7imN6J6MiWWuxRYaXwXr6MdPijbdIRTjWFssPopTl5JN%2FjlUul1ccEWNcVdj2qhABmca1qXPqK9FnT1jz92lk4l7rOonpF8%2F7lVw8i%2BDI3KhGnoYIBBfmyQyRsPKI%2B8mHHakw9uegGVuY%2BXfxGLcBuYGsxhNU9UTy1fj4%2Fc07ANvqKpCrE66j9O2KJE%2B5VlGoCK8pKmBlmMjyLUXNSmESrPdR9696BuSHjvmYXdBWtAC6ODZLqXHs7P7vskYx3e23oggxpMBveQQCm8u3tqgCu6kjOE7EYtYucOEmah6Nsbuw6pUMfIhrj5xbebroqyayFKz8g%3D%3D);
          background-size: cover;
          background-position: center center;
          background-attachment: fixed;
        "></div>
      <div class="
            card-img-overlay
            d-flex
            flex-column
            justify-content-center
            align-item-center
          ">
        <h1 class="fs-3 card-title text-center fw-bold">
          <p class="fs-m fw-bold mb-2">所有甜點</p>
          <p class="logoText fs-sm p-0 m-0">SOME SWEET <span class="fs-xs fw-lighter">/am</span></p>
        </h1>
      </div>
    </div>
  </div>
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="row">
      <div class="col-md-3">
        <div
          class="sticky-md-top position-md-sticky accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3"
          id="accordionExample" style="z-index:100">
          <div class="card border-0 card-hover">
            <div
              class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0"
              id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne">
              <div class="d-flex justify-content-between align-items-center pe-1">
                <h4 class="mb-0">
                  產品類別
                </h4>
                <i class="bi bi-chevron-down"></i>
              </div>
            </div>
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="card-body py-0 p-0">
                <a href="#" class="list-group-item list-group-item-action rounded-0 p-3"
                  @click.prevent="selectCategory = ''; this.$route.params.selectCategory = '';">
                  <i class="bi bi-dash-lg"></i> 全部商品
                </a>
                <div class="list-unstyled list-group ">
                  <a href="#" v-for="item in categories" :key="item"
                    class="list-group-item list-group-item-action rounded-0 p-3 border-0"
                    :class="{ active: selectCategory === item }"
                    @click.prevent="selectCategory = item; this.$route.params.selectCategory = item;">
                    <i class="bi bi-dash-lg"></i> {{ item }}
                  </a>
                </div>
                <!-- <ul class="list-unstyled ">
                  <li class="selectCategory ">
                    <a href="#" v-for="item in categories" :key="item"
                      class="list-group-item list-group-item-action rounded-0 p-3 "
                      @click.prevent="selectCategory = item; this.$route.params.selectCategory = item;">
                      <i class="bi bi-dash-lg"></i> {{ item }}
                    </a>
                  </li>
                </ul> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="row justify-content-end">
          <div class="col-12 col-md-6">
            <!-- 搜尋 -->
            <div class="input-group  ms-auto mb-4">
              <input type="search" class="form-control border-primary p-2" @keyup.enter="searchProduct"
                placeholder="請輸入商品名稱" v-model.trim="searchValue">
              <button type="button" class="btn btn-primary px-5 px-lg-3" @click="searchProduct"><i
                  class="bi bi-search"></i></button>
            </div>
          </div>
        </div>
        <!-- 搜尋結束 -->
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          <div class="col-md-4 " v-for="product in filterProducts" :key="product.id">
            <div class="product card h-100 p-5 rounded-4 products-img ">
              <div class="overflow-hidden rounded-4">
                <img :src="product.imageUrl" class="card-img-top object-fit rounded-4 position-relative card-imageUrl "
                  :alt="product.title">
              </div>

              <a href="#" @click.prevent="addMyFavorite(product)" :class="{ active: myFavorite.includes(product.id) }"
                class="link-secondary d-block rounded-0">

                <i v-if="myFavorite.includes(product.id)" style="z-index: 1" class="
                                            fs-1
                                            bi bi-bookmark-heart-fill
                                            position-absolute
                                            top-0
                                            start-15
                                            text-warning
                                          "></i>
                <i v-else style="z-index: 1" class="
                                            fs-1
                                            bi bi-bookmark
                                            position-absolute
                                            top-0
                                            start-15
                                            text-white
                                          "></i>
              </a>
              <div class="card-body d-flex flex-column ">
                <h5 class="fs-6 fw-bold card-title mb-6">{{ product.title }}</h5>
                <!-- <p class="card-text text-truncate mb-6">{{ product.content }}</p> -->
                <div class="d-flex mt-auto">
                  <span class="text-muted fs-xs me-auto"><del>NT${{ toThousands(product.origin_price) }} </del></span>
                  <p class="card-text mb-0 ">${{ product.price }} </p> <span
                    class="fs-xs d-flex align-items-end ms-1">NTD</span>
                </div>
                <small class="text-center border-0">
                  <router-link class="text-dark d-block" :to="`/product/${product.id}`">查 看 細 節</router-link>
                </small>

              </div>
              <button type="buttom" class="btn btn-primary mt-5 " :disabled="status.loadingItem === product.id"
                @click="() => addToCart(product.id)">
                <div v-if="status.loadingItem === product.id" class="spinner-border text-light spinner-border-sm"
                  role="status">
                </div>
                加入購物車
              </button>
            </div>
          </div>

        </div>
        <!-- 分頁 -->
        <!-- 分頁元件 -->
        <!-- <PaginationComponent class="mt-5 mb-5 float-end" :pages="pagination" @emit-pages="getProducts">
        </PaginationComponent> -->
        <!-- 分頁元件 -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch, computed, inject } from 'vue'
import { cart } from '@/store'
import storageMethods from '../../methods/LocalStorage'
import GoTop from '../../components/GoTop.vue'
import { useRoute } from 'vue-router'

const $http = inject('$http')
const $swal = inject('$Swal')

// 取的 store(pinia) 實例
const cartStore = cart()

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
const productsAll = ref([])
const pagination = ref({})
const isLoading = ref(false)
const categories = ref([])
const selectCategory = ref('') // 選取分類項目按鈕後，selectCategory = item，用 computed 做切換
const myFavorite = ref([]) //  我的最愛，有品項的話就用 storageMethods.get() 取到內容，沒有的話就傳空陣列
const searchValue = ref('')
const status = ref({})

// 獲取響應的值
const { addToCart } = cartStore
const route = useRoute()

// api 有 page 的
function getProducts (page = 1) {
  $http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/products?page=${page}`).then((res) => {
    // 點擊分頁時滾到上方
    window.scrollTo(0, 0)
    // 先把 products pagination資料存起來
    const { products, pagination } = res.data
    products.value = products
    pagination.value = pagination
    console.log(products.value, pagination.value)
  })
}
function getCategories () {
  // Vue 3 雙向綁定 Proxy(new Proxy 物件)
  // new Set
  const categories = new Set() // 建在全新的空的物件上
  console.log(categories)
  productsAll.value.forEach((item) => {
    categories.add(item.category) // 把品項加入 categories
    // console.log(this.categories)
  })
  categories.value = [...categories] // 這裡要轉成純陣列的形式存回去  所以這裡要轉為 Proxy
  console.log(categories.value)
}

function getAllProducts (page) {
  isLoading.value = true
  $http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/products/all`)
    .then(res => {
      console.log(res)
      productsAll.value = res.data.products
      console.log(productsAll.value)
      getCategories()
      const { selectCategory } = route.params
      console.log(selectCategory)
      isLoading.value = false
      if (selectCategory) {
        selectCategory.value = selectCategory
      }
      if (selectCategory !== '') {
        pagination.value = {}
      } else {
        getProducts(page)
      }
    })
}

function addMyFavorite (item) {
  // this.myFavorite.push(item.id);
  // this.myFavorite.includes(item.id) 原本是寫 item.id 存 id 就好，但後面要做其他事情可以先存整個物件
  if (myFavorite.value.includes(item.id)) {
    // 這裡意思是 如果我的最愛已經有這個品項，再按一次就代表取消
    myFavorite.value.splice(myFavorite.value.indexOf(item.id), 1)
  } else {
    myFavorite.value.push(item.id) // 否則沒有此品項 就把品項加入
    favShowAlert()
  }
}
function searchProduct () {
  // 取得全部產品
  const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/products/all`
  $http.get(url)
    .then((res) => {
      productsAll.value = res.data.products
      // 關鍵字搜尋
      productsAll.value = productsAll.value.filter(item => item.title.trim().match(searchValue.value))
      console.log(productsAll.value)
      searchValue.value = ''
    })
}
function toThousands (num) {
  const n = parseInt(num, 10)
  return `${n.toFixed(0).replace(/./g, (c, i, a) => (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c))}`
}

function favShowAlert () {
  console.log($swal)
  const Toast = $swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', $swal.stopTimer)
      toast.addEventListener('mouseleave', $swal.resumeTimer)
    }
  })
  Toast.fire({
    icon: 'success',
    title: '已加入蒐藏清單'
  })
}

// 產生新的資料集 (裡面的值產生變化之後，資料重新運算)
const filterProducts = computed(() => {
  // 如果選到的產品品項是一樣的就呈現
  // 監聽 this.products  this.selectCategory
  // 空字串，或任何符合結果都會是 “真值”
  return productsAll.value.filter((item) => item.category.match(selectCategory.value))
})

watch(selectCategory, (newValue, preValue) => {
  if (newValue === '' || preValue === '') {
    console.log(newValue, preValue)
    getAllProducts()
  }
})

watch(myFavorite, () => {
  storageMethods.save(myFavorite.value) // 把資料儲存
}, { deep: true })

onMounted(() => {
  myFavorite.value = storageMethods.get() || []
  getAllProducts()
})
</script>

<style scoped lang="scss">
.product .card-img-top {
  width: 100%;
  height: 200px;
}

.object-fit {
  object-fit: cover
}

.products-img .small,
.products-img small {
  transform: translate(-50%, 10%);
  opacity: 0;
}

.products-img .small,
.products-img small {
  position: absolute;
  left: 50%;
  bottom: 40%;
  transform: translate(-50%);
  width: calc(100%);
  background: #ffffffad;
  color: #414666;
  padding: 1rem;
  margin: 1rem 0;
  text-align: center;
  box-shadow: 0 2px 6px rgb(33 37 41 / 10%);
  text-transform: uppercase;
  font-size: .875rem;
  transition: all .3s ease-out;
  z-index: 2;
}

.products-img .small,
.products-img small {
  transform: translate(-50%, 10%);
  opacity: 1;
}

@media (min-width: 768px) {
  .products-img {
    background-position: center 70%;
    height: 300px;
  }

  .products-img .small,
  .products-img small {
    transform: translate(-50%, 10%);
    opacity: 0;
  }

  .products-img:hover:after {
    opacity: 1
  }

  .products-img:hover .small,
  .products-img:hover small {
    opacity: 1;
    transform: translate(-50%)
  }

}

.hover-color:hover {
  color: white;
}

.object-fit {
  object-fit: cover;
}

.img-card {
  width: 100%;
  overflow: hidden;
}

.card-imageUrl {
  overflow: hidden;
}

.card-imageUrl:hover {
  transform: scale(1.2);
  transition: .5s;
}

.card-hover:hover {
  .card-imageUrl {
    transition: all 0.5s ease-out;
    transform: scale(1.2);
  }
}</style>
