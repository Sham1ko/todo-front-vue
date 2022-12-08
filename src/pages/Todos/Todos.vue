<template>
  <div>
    <my-card
      class="mb-4"
      v-for="todo in todos"
      :key="todo._id"
      :todo="todo"
      ref="todo"
    >
      <my-button>Удалить задачу</my-button>
    </my-card>

    <div>
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Задача:
            </label>
            <input
              v-model="newTodo.title"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Напишите цель"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Описание:
            </label>
            <input
              v-model="newTodo.description"
              class="shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              placeholder="Опишите задачу"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Выполнено:
            </label>
            <input
              v-model="newTodo.done"
              class="shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="done"
              type="checkbox"
            />
          </div>
          <div class="flex items-center justify-between">
            <my-button @click="addTodo" type="button">
              Добавить задачу
            </my-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import MyButton from "../../components/UI/MyButton.vue";
import MyCard from "../../components/UI/MyCard.vue";

export default {
  components: { MyButton, MyCard },
  name: "Todos",
  data() {
    return {
      newTodo: {},
    };
  },
  computed: {
    todos() {
      return this.$store.state.todoModule.todos;
    },
  },
  updated() {},
  created() {
    this.$store.dispatch("fetchTodos");
  },
  mounted() {
    this.fetchTodos();
  },
  beforeMount() {
    this.fetchTodos();
  },
  beforeUpdate() {},
  methods: {
    ...mapActions({
      fetchTodos: "fetchTodos",
    }),

    addTodo() {
      this.$store.dispatch("addTodo", this.newTodo);
      this.fetchTodos();
      this.newTodo = {};
      this.fetchTodos();
    },

    deleteTodo(todo) {
      this.$store.dispatch("deleteTodo", todo);
    },
  },
};
</script>

<style></style>
