<template>
  <img src="../assets/img.jpg">
</template>

<script>
export default {
name: "ImageTodo"
}
</script>

<style scoped lang="stylus">
@media not handheld
  img
    height 100vh
    width 50vw
    margin-top fill
    margin-left fill
    padding 0
    object-fit cover
    object-position center
@media (orientation: portrait)
  img
    display none

</style>
