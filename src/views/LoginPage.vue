<template>
  <div>
    <span>
      <Login/>
      <ImageTodo class="imagetodo"/>
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
span
  display flex
  flex-direction row
html, body
  padding 0
  margin 0
</style>
