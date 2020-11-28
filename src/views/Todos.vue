<template>
  <div>
    <h1>Tasks</h1>
    <div class="tasks">
      <Task v-for="(todo, i) in getTodos" :key="todo.title" v-bind:show-incomplete="showIncomplete" v-bind:todo="todo" v-bind:todo-index="i"/>
      <button type="button" class="addTask" v-on:click="gotoAdd"><img width="50" height="50" src="../assets/baseline_add_black_48dp.png"/></button>
    </div>
    <button type="button" class="taskCount" v-on:click="changeView">{{ btnText() }}</button>
  </div>
</template>

<script>
import  {mapGetters} from 'vuex'
import Task from "@/components/Task";
import router from "@/router";
export default {
  name: "Todos",
  components: {Task},
  computed: mapGetters(["getTodos", "todosCompletedCount", "todosUncompletedCount"]),
  data() {
    return {
      showIncomplete: true
    }
  },
  mounted() {
    if (this.todosUncompletedCount + this.todosCompletedCount === 0) {
      this.$store.dispatch('fetchTodos')
    }
  },
  methods: {
    changeView () {
      this.showIncomplete = !this.showIncomplete
    },
    btnText () {
      if (this.showIncomplete) {
        return `Completed tasks: ${this.todosCompletedCount}`
      } else {
        return `Uncompleted tasks: ${this.todosUncompletedCount}`
      }
    },
    gotoAdd () {
      router.push('/todos/add')
    },
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
    margin-top 5px
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
    margin-top 0px
    width 60vw
  .taskCount
    font-family fonts
    text-align left
    font-weight bolder
    font-size 16px
    position absolute
    width auto
    height 48px
    left 1752px
    top 142px
    background #FFE3D3
    box-shadow 0px 2px 15px rgba(0, 0, 0, 0.08)
    border-radius 13px 0px 0px 13px
    border 0
  html, body
    padding 0
    margin 0
  .addTask
    font-family fonts
    text-align center
    width 345px
    height 170px
    padding 10px
    margin-right 30px
    border 0
    font-weight bolder
    font-size 18px
    border-radius 10px
    background-color white
    box-shadow 0px 2px 15px rgba(0, 0, 0, 0.08)
</style>
