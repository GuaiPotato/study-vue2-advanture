// 引入Vue
import Vue from "vue";
// 引入App组件
import App from "./App.vue";
import { mixin, mixin2 } from "./mixin";

// 关闭Vue生产提示
Vue.config.productionTip = false;

// 每个组件（Root, App, Person, School）都会混入，即会在控制台输出4次
Vue.mixin(mixin);
Vue.mixin(mixin2);

// 创建vm
new Vue({
  render: (h) => h(App),
}).$mount("#app");
