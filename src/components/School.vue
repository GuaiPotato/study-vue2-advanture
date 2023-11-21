<template>
  <div class="demo">
    <h2>学校名字：{{ name }}</h2>
    <h2>地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: `School`,
  data() {
    return {
      name: `NJUIT`,
      address: "BeiJing",
    };
  },
};
</script>

<style scoped>
.demo {
  background-color: yellow;
}
</style>
.
