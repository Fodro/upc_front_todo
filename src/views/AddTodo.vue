<template>
  <div class="mainColumn">
    <div class="upperRow">
      <h1>New task</h1>
      <button type="button" class="backBtn" v-on:click="returnToTodos"><img src="../assets/baseline_clear_black_48dp.png"/></button>
    </div>
    <h2>Task name</h2>
    <textarea v-model="taskName" style="resize: none" placeholder="Enter task name..." cols="40" rows="7"/>
    <button type="button" class="btnCreate" v-on:click="submitTodo">Create</button>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import {mapMutations} from 'vuex'
import router from "@/router";
export default {
  name: "AddTodo",
  data(){
    return {
      taskName: '',
    }
  },
  methods: {
    ...mapMutations(['addTodo']),
    submitTodo() {
      console.log(this.taskName)
      const newTodo = {
        "userId": 2,
        "id": nanoid(4),
        "title": this.taskName,
        "completed": false
      }
      this.addTodo(newTodo)
      this.returnToTodos()
    },
    returnToTodos() {
      router.push('/todos')

    }
  }
}
</script>

<style scoped lang="stylus">
fonts = "Roboto Thin", sans-serif
@media not handheld
  h1
    font-family fonts
    font-size 48px
    text-align center
    margin-left 85px
  h2
    font-family fonts
    font-size 21px
    padding 20px
  img
    border 1px solid #999999
    border-radius 90px
    margin-left 40px
    width 48px
    height 48px
  textarea
    font-family fonts
    font-weight bolder
    font-size 14px
    outline none
    width 325px
    height 117px
    border 0
    text-align justify
    background #FFFFFF
    box-shadow 0px 2px 15px rgba(0, 0, 0, 0.08)
    border-radius 10px
    padding 30px
  .upperRow
    display flex
    flex-direction row
    justify-content center
    align-items center
    width 100vw
  .mainColumn
    display flex
    flex-direction column
    justify-content center
    align-items center
    width 100vw
    height 100vh
  .btnCreate
    font-family fonts
    font-weight bolder
    font-size 18px
    outline none
    background #FFE3D3
    width 325px
    height 54px
    margin-top: 104px
    border 0
    border-radius 10px
    box-shadow 0px 2px 15px rgba(0, 0, 0, 0.08)
  .btnCreate:hover
    background #ecd2c3
  .backBtn
    border-radius 90
    background-color white
    border 0
    width auto
    height auto
    outline none
@media (orientation: portrait)
  .backBtn
    display none
  h1
    width 100%
    margin-left 28px
    text-align left
    margin-bottom 70px
  h2
    width 100%
    margin-left 60px
    text-align left
  textarea
    width 307px
    height 117px
    margin-left 34px
    margin-right 15px
    margin-bottom 140px
  .btnCreate
    width 306px
    height 54px
    margin-right 19px
    margin-left 35px
    margin-bottom 34px
  .btnCreate:hover
    background #FFE3D3
</style>
