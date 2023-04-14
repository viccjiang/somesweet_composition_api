import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

export function setupLoadingView (AppInstance) {
  AppInstance.component('LoadingView', VueLoading)
}
