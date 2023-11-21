<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <exam-header :addTodo="addTodo" />
        <exam-list :todoList="todoList" :checkTodo="checkTodo" />
        <exam-footer />
      </div>
    </div>
  </div>
</template>

<script>
import ExamHeader from "./components/ExamHeader.vue";
import ExamFooter from "./components/ExamFooter.vue";
import ExamList from "./components/ExamList.vue";

export default {
  name: "App",
  components: {
    ExamFooter,
    ExamHeader,
    ExamList,
  },
  data() {
    return {
      todoList: [
        {
          id: "001",
          title: "吃",
          completed: true,
        },
        {
          id: "002",
          title: "睡",
          completed: false,
        },
        {
          id: "003",
          title: "玩",
          completed: true,
        },
      ],
    };
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj) {
      this.todoList.unshift(todoObj);
    },
    // 更换todo的完成状态
    checkTodo(id) {
      this.todoList.forEach((todo) => {
        if (todo.id === id) {
          todo.completed != todo.completed;
        }
      });
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
