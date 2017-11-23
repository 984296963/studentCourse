<template>
  <div class="course">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'course',
  data () {
    return {
      msg: '课程信息'
    }
  }
}
</script>

<style scoped>

</style>
