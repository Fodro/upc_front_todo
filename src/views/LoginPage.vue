<template>
  <div>
    <span>
      <Login/>
      <ImageTodo/>
    </span>
  </div>
</template>

<script>
import Login from "@/components/Login";
import ImageTodo from "@/components/ImageTodo";
export default {
  name: "LoginPage",
  components: {
    ImageTodo,
    Login
  }
}
</script>

<style lang="stylus">
@media not handheld
  span
    display flex
    flex-direction row
  html, body
    padding 0
    margin 0
@media (orientation: portrait)
  ImageTodo
    display none
  span
    display block
    margin-left 0
</style>
