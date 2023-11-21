<template>
    <div>
        <h2 @click="showName()">学生名字：{{ name }}</h2>
        <h2>年龄：{{ sex }}</h2>
    </div>
</template>

<script>
// import { mixin, mixin2 } from "./mixin";

export default {
    name: `Person`,
    data() {
        return {
            name: `tyler`,
            sex: 'female',
            x: 200
        }
    },
    // mounted() {
    //     console.log(`Hello!!!`);
    // },
    // mixins: [mixin, mixin2]
}
</script>

<style></style>