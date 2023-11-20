import { createApp } from 'vue'
import App from '@/App.vue'
// 引入element-plus组件库与全部样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 配置element-plus国际化
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 获取应用的实例对象
const app = createApp(App)

// 使用element-plus插件库
app.use(ElementPlus, {
  locale: zhCn, //element-plus国际化配置，默认是english，改中
})

// 使用不同的开发环境
// console.log(import.meta.env)

// svg插件需要配置代码
import 'virtual:svg-icons-register'

// 将SvgIcon组件注册为全局组件：因为很多地方都会用到它-可以自定义插件自动注册全局组件
// import SvgIcon from '@/components/SvgIcon/index.vue'
// app.component('SvgIcon',SvgIcon)

// 引入自定义插件：注册整个项目全局组件index.ts可以不用写
import globalComponent from '@/components/'
// 使用自定义插件
app.use(globalComponent)

// 引入模版的全局样式
import '@/styles/index.scss'

// 测试假的接口是否能用
import axios from 'axios'
// 登录接口
axios({
  url:'/api/user/login',
  method:"post",
  data:{
    username:'admin',
    password:'111111'
  }
})

// 将应用挂载到指定挂载点
app.mount('#app')
