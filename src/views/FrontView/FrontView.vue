  <!-- 前台進入點 -->
<template>
  <FrontNavbarComponent></FrontNavbarComponent>
  <router-view></router-view>
  <FrontFooterComponent></FrontFooterComponent>
</template>

<!-- vue3 setup -->
<script setup>
import { onMounted } from 'vue' // 引入 onMounted
import { RouterView, useRouter } from 'vue-router' // 引入 useRouter
import FrontNavbarComponent from '@/components/FrontNavbarComponent.vue'
import FrontFooterComponent from '@/components/FrontFooterComponent.vue'
// 來設置 Collapse 元件
import * as bootstrap from 'bootstrap'
let collapseList = null
// 使用 useRouter
const router = useRouter()
// router.beforeEach 取代 this.$router.beforeEach
onMounted(() => {
  // 透過 router beforeEach 來設置 Collapse 元件
  collapseList = new bootstrap.Collapse(document.getElementById('navbarSupportedContent'), { toggle: false })
  router.beforeEach((to, from) => {
    collapseList.hide()
  })
})
</script>
