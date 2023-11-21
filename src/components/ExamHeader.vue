<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="title"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "ExamHeader",
  props: ["addTodo"],
  data() {
    return {
      title: "",
    };
  },
  methods: {
    add() {
      // 校验数据
      if (!this.title.trim()) return alert("输入不能为空！");

      // 将用户的输入包装成一个 todo对象
      // 这里使用 nanoid插件库来 生成随机id
      const todoObj = {
        id: nanoid(),
        title: this.title,
        completed: false,
      };

      // addTodo是在App.vue中进行定义，所以这里的this指向的是App.vue的实例，即vm
      this.addTodo(todoObj);

      // 重置title
      this.title = "";
    },
  },
};
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
