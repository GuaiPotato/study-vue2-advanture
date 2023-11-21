<template>
    <div class="demo">
        <h2>{{ personName }}</h2>
    </div>
</template>

<script>
//组件交互的相关代码（数据，方法等）
// 默认暴露（js模块化）简写 + 省去Vue.extend() （Vue发现传入参数是配置对象的时候自动调用Vue.extend）
export default {
    // 防止其它人对名字进行修改
    // 关闭 elint 的语法检查
    // 这里 Person 是单个单词，eslint 认为组件的名字必须是多个单词组成的，会报错。
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Person',
    data() {
        return {
            personName: "tyler",
        };
    },
};
</script>

<style>
/* 组件的样式 */
.demo {
    background-color: orange;
}
</style>