<template>
    <div class="school">
        <h2>学校名字：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
export default {
    name: `School`,
    data() {
        return {
            name: 'NJUIT',
            address: 'NanJing'
        }
    },
}
</script>

<style>
.school {
    background-color: rgb(188, 188, 188);
}
</style>