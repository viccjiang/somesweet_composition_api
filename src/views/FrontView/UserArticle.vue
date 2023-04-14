<template>
  <div class="container my-10">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8">
        <img :src="article.imageUrl" class="img-fluid rounded-4 mb-10" alt="">
        <!-- <p>{{ article.content }}</p> -->
        <div v-html="article.content"></div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, inject, onMounted } from 'vue' // 引入 onMounted
import { useRoute } from 'vue-router' // 引入 useRouter

const $http = inject('$http')
const route = useRoute()

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
const article = ref([])

function getArticle () {
  const id = route.params.id
  console.log(id)
  $http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/article/${id}`)
    .then(res => {
      console.log(res.data)
      article.value = res.data.article
    })
}

onMounted(() => {
  getArticle()
  console.log(route.params.id)
})

</script>
