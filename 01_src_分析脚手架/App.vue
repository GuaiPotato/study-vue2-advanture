<template lang="en">
    <div>
        <img src="./assets/logo.png" alt="logo">
        <Person />
        <School />
    </div>
</template>

<script>
// 引入组件
// 在脚手架中可以不写文件后缀 './Person' ，默认为.vue 
import Person from './components/Person.vue';
import School from './components/School.vue';

export default {
    name: 'App',
    template: `<App />`,
    components: {
        Person,
        School
    }

}
</script>

<style lang="">
    
</style>