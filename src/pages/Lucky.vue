<template>
  <div>
    <p class="alert alert-success">
      Lucky
    </p>
    <p class="alert alert-warning">当前激活面板信息：第{{$route.query.tabIndex}}个面板</p>

    <p v-for="count in 3" class="alert alert-info" :key="count">{{msg}}</p>
    <p class="alert alert-danger">重要的话要说三遍</p>
    <vfooter></vfooter>
  </div>
</template>

<script>
import Vfooter from '../components/footer'
export default {
  name: 'Lucky',
  data () {
    return {
      msg:"欢迎来到西瓜的小屋"
    }
  },
  components:{
      Vfooter
  }
}
</script>

<style lang="scss" scoped>

</style>
