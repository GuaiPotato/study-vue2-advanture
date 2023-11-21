<template>
    <div>
        <h2 @click="showName()">学校名字：{{ name }}</h2>
        <h2>地址：{{ address }}</h2>
    </div>
</template>

<script>
// import { mixin, mixin2 } from "./mixin";

export default {
    name: `School`,
    data() {
        return {
            name: `NJUIT`,
            address: 'BeiJing'
        }
    },
    // mixins: [mixin, mixin2]
}
</script>

<style></style>