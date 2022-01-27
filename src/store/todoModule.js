import axios from 'axios'

export const todoModule = {

    actions: {
        async fetchTodos({commit}) {
            console.log("Axios begin")
            const responce = await axios.get('http://localhost:3000/todos')
            commit('SET_TODOS',responce.data)
        },
        addTodo ({ commit}, todoItem ) {
            if (!todoItem) {
                return
            }
            const todo = {
                title: todoItem.title,
                description: todoItem.description
            }
            axios.post('http://localhost:3000/todos', todo).then(() => {
                commit('ADD_TODO', todo);
            })
        },
        deleteTodo ({ commit }, todo) {
            console.log(todo._id)
            axios.delete(`http://localhost:3000/todos/${todo._id}`).then(() => {
                commit('DELETE_TODO', todo);
            })
        },
        


    },
    
    state: () => ({
        todos: [],
    }),

    getters: {
        todos: state => state.todos
    },

    mutations: {
        SET_TODOS: (state, todos) => {
            state.todos = todos
        },
        ADD_TODO (state, todoObject) {
            state.todos.push(todoObject)
        },
        DELETE_TODO (state, todo) {
            var todos = state.todos
            todos.splice(todos.indexOf(todo), 1)
        },
    }

}