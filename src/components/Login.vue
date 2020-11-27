<template>
  <div>
    <h1>Welcome to Todo App!</h1>
    <h2>Email</h2>
    <input type="text" placeholder="Enter email...">
    <h2>Password</h2>
    <input type="password" placeholder="Enter password...">
    <button type="button" v-on:click="gotoTodo">Login</button>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Login",
  components: {
  },
  methods: {
    gotoTodo: () => {
      router.push('/todos')
    }
  }
}
</script>

<style lang="stylus">
fonts = "Roboto Thin", sans-serif
set_margin() {
  margin-left 336px
}
set_fonts() {
  font-family fonts
  font-size 24px
}
div
  display flex
  flex-direction column
  justify-content flex-start
  align-items flex-start
  height 100vh
  width 50vw
h1
  font-family fonts
  width 295px
  height 112px
  font-weight bold
  font-size 48px
  line-height 56px
  color #323232
  set_margin()
  margin-top 138px
h2
  set_fonts()
  set_margin()
input
  set_fonts()
  set_margin()
  background #FFFFFF
  border-radius 10px
  width: 310px
  height: 61px
  border-color white
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.08);
button
  set_margin()-2
  margin-top 80px
  width: 320px
  height: 61px
  border-radius 10px
  set_fonts()
  background #FFE3D3
  box-shadow 0px 2px 15px rgba(0, 0, 0, 0.08)
  border-color #FFE3d3
</style>
