import { setupSwal } from './swal'
import { setupLoadingView } from './loading'
import { setupAxios } from './axios'
import { setupVeeValidators } from './vee-validators'
import { setupCKEditor } from './ck-editor'
import './bootStrap'

export function setupPlugins (AppInstance) {
  setupSwal(AppInstance)
  setupLoadingView(AppInstance)
  setupAxios(AppInstance)
  setupVeeValidators(AppInstance)
  setupCKEditor(AppInstance)
}
