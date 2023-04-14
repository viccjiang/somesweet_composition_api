import VueSweetalert2 from 'vue-sweetalert2'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// 調整預設Swal屬性
const options = {
  confirmButtonColor: '#236F6B',
  cancelButtonColor: '#EE847D'
}

export function setupSwal (AppInstance) {
  AppInstance.use(VueSweetalert2, options)
  AppInstance.provide('$Swal', Swal)
}
