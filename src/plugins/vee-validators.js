// VeeValidate
import {
  Form, Field, ErrorMessage, defineRule, configure
} from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

// VeeValidate 定義規則
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})
// VeeValidate 設定
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定語系
setLocale('zh_TW')

export function setupVeeValidators (AppInstance) {
  AppInstance.component('FormView', Form) // 改為兩個字母
  AppInstance.component('FieldView', Field) // 改為兩個字母
  AppInstance.component('ErrorMessage', ErrorMessage)
}
