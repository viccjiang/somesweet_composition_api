<template >
  <div id="delProductModal" ref="delmodal" class="modal fade " tabindex="-1" aria-labelledby="delProductModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered ">
      <div class="modal-content border-0 ">
        <!-- <div class="modal-header bg-danger text-white">
          <h5 v-if="product.id" id="delProductModalLabel" class="modal-title">
            <span>刪除商品</span>
          </h5>
          <h5 v-else  id="delProductModalLabel" class="modal-title">
            <span>刪除商品</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div> -->
        <div v-if="product.id" class="modal-body">
          是否刪除
          <strong class="text-danger">{{ product?.product?.title }}</strong> 商品
        </div>
        <div v-else class="modal-body">
          是否刪除 <span class="text-danger fw-bold" >全部商品</span>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" v-if="product.id" class="btn btn-danger text-white" @click="deleteItem(product.id)">
            確認刪除
          </button>

          <button type="button" v-else class="btn btn-danger text-white" @click="deleteAllItem">
            確認刪除
          </button>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, toRefs } from 'vue'
import { cart } from '@/store'
import Modal from 'bootstrap/js/dist/modal'

const props = defineProps({
  product: {
    type: null
  }
})
const { product } = toRefs(props)

// 取的store(pinia)實例
const cartStore = cart()

const { deleteItem, deleteAllItem, setModal } = cartStore

const delmodal = ref(null)

onMounted(() => {
  setModal(new Modal(delmodal.value))
})
</script>
