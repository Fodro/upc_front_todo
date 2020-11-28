<template>
  <div>
    <h1>Tasks</h1>
    <div class="tasks"><Task v-for="todo in getTodos" :key="todo.title" v-bind:show-incomplete="showIncomplete" v-bind:todo="todo"/></div>
    <button type="button" v-on:click="changeView">{{ btnText() }}</button>
  </div>
</template>

<script>
import  {mapGetters} from 'vuex'
import Task from "@/components/Task";
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
    this.$store.dispatch('fetchTodos')
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
  button
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
</style>
