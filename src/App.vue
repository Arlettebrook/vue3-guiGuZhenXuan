<script setup lang="ts">
import request from '@/utils/request'
import {onMounted} from 'vue'
onMounted(()=>{
  request({
    url:'/user/465login',
    method:'post',
    data:{
      username:'admin',
      password:'111111'
    }
  }).then(res=>{
    console.log(res)
  })
})
</script>

<template>
  <div>
    <h1>我是App组件</h1>
    <h2>svg测试</h2>
    <!-- 测试svg图标的使用 -->
    <!-- svg:图标外层容器节点，内部需要与use标签结合使用 -->
    <!-- <svg style="width:30px;height:30px"> -->
    <!-- 属性xlink:href指定那个svg图标，以#icon-开头，后面跟图标名字 
        有的还有颜色属性fill填充
        样式也可以调整
        可以将svg标签封装成一个全局组件
      -->
    <!-- <use xlink:href="#icon-phone" fill="red"></use> -->
    <!-- </svg> -->
    <svg-icon name="home" color="pink" width="100px" height="100px"></svg-icon>
    <Pagination />

    <h1>测试axios的二次封装</h1>
  </div>
</template>

<style scoped lang="scss">
div {
  h1 {
    color: $color;
  }
}
</style>
