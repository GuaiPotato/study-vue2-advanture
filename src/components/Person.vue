<template>
  <div class="demo">
    <h2 class="qaq">学生名字：{{ name }}</h2>
    <h2>年龄：{{ sex }}</h2>
  </div>
</template>

<script>
export default {
  name: `Person`,
  data() {
    return {
      name: `tyler`,
      sex: "female",
    };
  },
};
</script>

<style lang="less">
.demo {
  background-color: red;
  .qaq {
    font-size: 20px;
  }
}
</style>
