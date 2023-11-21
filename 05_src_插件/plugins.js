// Vue.js 的插件应该暴露一个 install 方法。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象
// install(Vue, options: true)
export default {
  install(Vue) {
    // 全局过滤器
    Vue.filter("sliceFourFront", function (value) {
      return value.slice(0, 2);
    });

    // 自定义指令
    Vue.directive("fbind", {
      bind(e, bind) {
        e.value = bind.value;
      },
      inserted(e) {
        e.focus();
      },
      update(e, bind) {
        e.value = bind.value;
      },
    });

    // 混入
    // Vue.mixin({ data() {}, methods: {} });

    // 给Vue原型添加方法 (vm 和 vc 都可以使用了)
    Vue.prototype.hellp = () => {
      alert("hello");
    };
  },
};
