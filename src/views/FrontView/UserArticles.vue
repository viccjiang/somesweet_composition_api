<template>
  <div class="container my-10">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <template v-for="article in articles" :key="article.id">
        <div class="col" v-if="article.isPublic">
          <div class="card h-100 rounded-4 border-0">
            <img :src="article.imageUrl" class="card-img-top rounded-4" />
            <div class="card-body">
              <h5 class="card-title">{{ article.title }}</h5>
              <div v-html="article.description"></div>
            </div>
            <div class=" bg-white">
              <router-link :to="`/blog/${article.id}`" v-if="article.isPublic"
                class="btn btn-outline-primary float-end stretched-link border-0">
                前往觀看文章 <i class="bi bi-chevron-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
const articles = ref([])
const pagination = ref({})
// const isLoading = ref(false)
// const isNew = ref(false)
// const tempArticle = ref({})
const $http = inject('$http')

function getArticles (page = 1) {
  const api = `${VITE_APP_URL}api/${VITE_APP_PATH}/articles?page=${page}`

  $http.get(api).then((response) => {
    articles.value = response.data.articles
    pagination.value = response.data.pagination
    console.log(response)
  }).catch((error) => {
    console.log(error)
  })
}

getArticles()

</script>
