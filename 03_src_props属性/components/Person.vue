<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>名字：{{ name }}</h2>
        <h2>年龄：{{ myAge }}</h2>
        <button @click="increaseAge()">点我修改年龄</button>
    </div>
</template>

<script>
export default {
    name: `Person`,
    data() {
        return {
            msg: `I'm a student`,
            // 外部的数据优先级更高，如果直接对外部的数据进行修改会在控制台报错 + eslint语法检查不过
            // 但是，修改将 起效
            myAge: this.age
        }
    },
    methods: {
        increaseAge() {
            this.myAge++;
        }
    },

    // props: ['name', 'sex']   // 简单声明接收

    // 接受的同时，对 数据的类型 进行限制
    // props: {
    //     name: String,
    //     age: Number,
    // }

    // 接受的同时，对 数据的类型，默认值，必要性 进行限制
    props: {
        name: {
            type: String,   // name的类型必须是String
            required: true  // name是必须的
        },
        age: {
            type: Number,
            default: 18 // 默认值
        }
    }
}
</script>

<style></style>