<template>
  <div>
    <Person />
    <hr />
    <School />
  </div>
</template>

<script>
// 可能存在的存在问题：
// 由于解析顺序的问题，如果有相同的style，那么则使用最后一个导入的
// 解决：
// 给style 增加 scoped属性，可以使用这个属性
// 一般给App.vue的style使用 scoped，因为App.vue一般是被多次使用的。
import Person from "./components/Person";
import School from "./components/School";

export default {
  name: "App",
  components: {
    Person,
    School,
  },
};
</script>

<style></style>
