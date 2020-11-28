<template>
  <div class="task" v-if="!todo.completed === showIncomplete">
    <h3>{{ makeTitle(todo.title) }}</h3>
    <h4>{{ makeDate() }}</h4>
    <button type="button" class="doneBtn" v-on:click="changeType" v-if="!todo.completed">Done</button>
    <button type="button" class="doAgainBtn" v-on:click="changeType" v-if="todo.completed">Do again</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: "Task",
  props: {
    todo: {
      type: Object,
      required: true
    },
    showIncomplete: Boolean,
    todoIndex: Number
  },
  mounted() {
    console.log(this.todo)
  },
  methods: {
    ...mapMutations(['changeTodo']),
    makeTitle: function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    makeDate: function () {
      let date = new Date()
      return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`
    },
    changeType: function () {
      console.log(this.todoIndex)
      this.changeTodo(this.todoIndex)
    },
  }
}
</script>

<style scoped lang="stylus">
fonts = "Roboto Thin", sans-serif
set_text_style() {
  font-family fonts
  font-weight bold
  margin-left 10px
  text-align left
}
@media not handheld
  .task
    display flex
    flex-direction column
    justify-content flex-start
    align-items flex-start
    position relative
    text-align left
    width 325px
    height 150px
    padding 10px
    margin-right 30px
    border 0
    border-radius 10px
    box-shadow 0px 2px 15px rgba(0, 0, 0, 0.08)
  h3
    set_text_style()
    font-size 21px
    margin-top 0

  h4
    set_text_style()
    font-size 14px
    color #b1afaf
    padding 0
    margin-top 0
    font-size 12px
  button
    font-family fonts
    font-weight bold
    font-size 14px
    position absolute
    bottom 15px
    width 310px
    height 52px
    background white
    border 0
    border-radius 10px
    box-shadow 0px 2px 15px rgba(0, 0, 0, 0.08)
    align-self center
    outline none
  button:hover
    background-color #fafafa
  .doneBtn
    color #C3FEDA
  .doAgainBtn
    color #FFE3D3
@media (orientation: portrait)
  button
    font-family fonts
    font-weight bold
    font-size 14px
    position absolute
    bottom 15px
    background white
    border 0
    width 160px
    height 32px
    border-radius 10px
    box-shadow 0px 2px 15px rgba(0, 0, 0, 0.08)
    align-self center
    outline none
  .task
    margin-top 10px
    margin-left 0
    margin-right 0
    width 180px
    height 130px
    margin-bottom 30px
  h3
    set_text_style()
    font-size 15px
    margin-top 0
</style>
