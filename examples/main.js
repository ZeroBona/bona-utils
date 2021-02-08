import Vue from 'vue';
import App from './App.vue';

// 导入组件库
import BonaUtils from '../packages/index';

Vue.use(BonaUtils);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
