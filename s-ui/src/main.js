import Vue from 'vue'
import App from './App.vue'
import SButton from '@/components/button.vue'
import SDialog from '@/components/dialog.vue'
import SInput from '@/components/input.vue'
import './assets/fonts/iconfont.css'

Vue.config.productionTip = false

// 注册组件(组件名，组件)
Vue.component(SButton.name, SButton)
Vue.component(SDialog.name, SDialog)
Vue.component(SInput.name, SInput)

new Vue({
  render: h => h(App)
}).$mount('#app')
