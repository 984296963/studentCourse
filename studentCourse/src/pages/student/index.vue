<template>
  <div class="student">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'student',
  data () {
    return {
      msg: '学生'
    }
  }
}
</script>

<style scoped>

</style>
