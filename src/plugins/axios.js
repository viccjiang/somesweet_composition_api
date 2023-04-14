import axios from 'axios'
import VueAxios from 'vue-axios'

export function setupAxios (AppInstance) {
  AppInstance.use(VueAxios, axios)
  AppInstance.provide('$http', AppInstance.config.globalProperties.axios)
}
