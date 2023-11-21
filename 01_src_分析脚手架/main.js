/*
  该文件是项目的入口文件
*/
// 引入Vue
/*
  这里写vue，其实只到node_modules，剩下的默认引入的配置在vue的package.json中

  源码：
    "module": "dist/vue.runtime.esm.js",

  作用：使用es6的模块化引入时，默认使用的是vue.runtime.esm.js， 而不是完整版的vue.js
  备注：
    1.esm的意思是 es module
    2.runtime的版本是去掉了模板解析器的vue版本，使用该版本的vue需要使用render函数
 */
import Vue from "vue"; //vue文件在node_modules中已经下载完成了
// 引入App组件，该组件是所有组件的父组件
import App from "./App.vue";

// 关系Vue的生产提示
Vue.config.productionTip = false;

/* 
关于不同版本的Vue:
  1.vue.js与vue.runtime.xxx.js的区别:
    (1).vue.js是完整版的Vue，
      包含:核心功能 + 模板解析器。
    (2).vue.runtime.xxx.is是运行版的Vue，
      只包含: 核心功能， 没有 模板解析器

  2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，
    需要使用render函数接收到的createElement函数去指定具体内容。
*/

// 创建Vue实例对象 --- vm
new Vue({
  el: "#app",
  // render用于在使用没有模板解析器版本的vue时解析模板
  /* 
    标签：
    render(createElement) {
      return createElement('TagName', 'content');
    }
    
    组件：
    render(createElement) {
      return createElement(componetName);
    }

    如果是上面这样的情况（只有一条返回语句），可以使用js的简写：
    render: (h) => h(App)
  */
  render: (h) => h(App),
  /*
    new Vue({
      render: (h) => h(App),
    }).$mount("#app"); 
  */
  // vm.$mount() 用于指定要操作的容器，等价于在配置对象中使用 el:'#app'

  /* 
  由于使用的是runtime版本的vue，所以这里没有办法直接解析js中的template，需要使用render函数，
  注意： .vue文件中的template是由 vue-template-compiler 该依赖进行解析的，该依赖写在package.json中
   */
  // template:`<h1>Hello</h1>`
});
