<template>
    <div>
        <h2>学生名字：{{ name | sliceFourFront}}</h2>
        <h2>年龄：{{ sex }}</h2>
    </div>
</template>

<script>
export default {
    name: `Person`,
    data() {
        return {
            name: `tyler`,
            sex: 'female'
        }
    }
}
</script>

<style></style>