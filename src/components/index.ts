// 引入项目中全部的全局组件
import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'
// 全局对象
const allGlobalComponent = {SvgIcon,Pagination}
// console.log(allGlobalComponent)

// 对外暴露插件对象
export default {
    install(app){
        // 注册项目全部的全局组件
        Object.keys(allGlobalComponent).forEach(key =>{
            // 类型声明爆红，不知道什么原因,能正常运行
            app.component(key,allGlobalComponent[key])
        })
    }
}