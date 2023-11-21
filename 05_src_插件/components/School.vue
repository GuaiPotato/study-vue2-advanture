<template>
    <div>
        <h2 >学校名字：{{ name }}</h2>
        <h2>地址：{{ address }}</h2>
        <input type="text" v-fbind:value="">
    </div>
</template>

<script>

export default {
    name: `School`,
    data() {
        return {
            name: `NJUIT`,
            address: 'BeiJing'
        }
    }
}
</script>

<style></style>