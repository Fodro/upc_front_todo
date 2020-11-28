<template>
  <div>
    <h1>Tasks</h1>
    <div class="tasks"><Task v-for="todo in todos" :key="todo.title" v-bind:todo="todo"/> <Task v-bind:todo="{title: 'submit', completed: false}"/></div>
  </div>
</template>

<script>
import Task from "@/components/Task";
export default {
  name: "Todos",
  components: {Task},
  data() {
    return {
      todos: []
    }
  },
  mounted() {
    fetch('http://jsonplaceholder.typicode.com/todos?_start=0&_limit=20')
        .then(response => response.json())
        .then(json => this.todos = json)
    console.log(this.todos)
  },
  methods: {
    getTodos() {
      return this.todos
    }
  }
}
</script>

<style scoped lang="stylus">
  fonts = "Roboto Thin", sans-serif
  h1
    font-family fonts
    font-weight bold
    font-size 48px
    width 100vw
    text-align center
  div
    display flex
    flex-direction column
    justify-content center
    align-items center
    text-align center
    width 100vw
    height 100vh
  .tasks
    display flex
    flex-direction row
    flex-flow row wrap
    margin-left 40px
    width 60vw
  html, body
    padding 0
    margin 0
</style>
