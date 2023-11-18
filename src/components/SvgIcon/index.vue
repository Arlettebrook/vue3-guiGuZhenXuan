<template>
  <div>
    <!-- 测试svg图标的使用 -->
    <!-- svg:图标外层容器节点，内部需要与use标签结合使用 -->
    <svg :style="{ width, height }">
      <!-- 属性xlink:href指定那个svg图标，以#icon-开头，后面跟图标名字 
        有的还有颜色属性fill填充
        样式也可以调整
        可以将svg标签封装成一个全局组件
      -->
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
// 对svg标签封装成一个组件

// 接收父组件传递过来的参数
defineProps({
  // xlink:href属性值的前缀
  prefix: {
    type: String,
    default: '#icon-',
  },
  // 提供使用图标的名字
  name: String,
  //  接收父组件传递的颜色
  color: {
    type: String,
    default: '',
  },
  // 接收父组件传递过来的图标的宽度
  width: {
    type: String,
    default: '16px',
  },
  // 接收父组件传递过来的图标的高度
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<style scoped></style>
