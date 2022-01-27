<template>
    <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div>
            <h2 class="text-gray-800 text-3xl font-semibold">{{todo.title}}</h2>
            <p class="mt-2 text-gray-600">{{todo.description}}</p>
            <my-button slot-scope="todo" @click="deleteTodo(todo)" class="my-2" type="button">
              Удалить задачу
            </my-button>
        </div>
    </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton'
export default {
    props: ['todo'],
    components: {
        'my-button': MyButton
    },
    name: 'my-card',
    methods: {
        deleteTodo (todo) {
            this.$store.dispatch('deleteTodo', todo)
        },
    }

}
</script>

<style>

</style>