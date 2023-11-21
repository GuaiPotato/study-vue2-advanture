<template>
  <ul class="todo-main">
    <exam-item
      v-for="todo in todoList"
      :key="todo.id"
      :todo="todo"
      :checkTodo="checkTodo"
    />
  </ul>
</template>

<script>
import ExamItem from "./ExamItem.vue";

export default {
  components: { ExamItem },
  name: "ExamList",
  props: ["todoList", "checkTodo"],
};
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
