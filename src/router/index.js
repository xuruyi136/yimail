//配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from '../vue/App'

// import Home from '../components/Home'
// import User from '../components/User'

//1个懒加载对应一个js文件
const Home = () => import('views/home/Home')
const TabBar = () => import('common/tabbar/TabBar')


// //子组件
// const HomeNews = () => import('../components/HomeNews')
// const HomeMessage = () => import('../components/HomeMessage')

// const Profile = () => import('../components/Profile')
//1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

//2.创建路由对象
const routes = [
  {
    path: '',
    //重定向
    redirect: '/home'
  },
  {
    //协议头
    path: '/home',
    component: Home,
    //meta（元数据,描述数据的数据）
    meta: {
      title: '首页'
    },
    //子路由
    // children: [
    //   {
    //     //默认显示
    //     path: '',
    //     //重定向
    //     redirect: 'news'

    //   },
    //   {
    //     path: 'news',
    //     component: HomeNews,
    //   },
    //   {
    //     path: 'message',
    //     component: HomeMessage
    //   },
    // ]
  },
  // {
  //   //数据传递1
  //   path: '/user/:abc',
  //   // component: User
  //   component: () => import('../components/User'),
  //   meta: {
  //     title: '用户'
  //   },
  // },
  // {
  //   //协议头
  //   path: '/profile',
  //   component: Profile,
  //   //导航守卫修改标题
  //   meta: {
  //     title: 'profile'
  //   },
  // },
  {
    path:'/tabbar',
    component: TabBar,
  }
]
const router = new VueRouter({
  //配置路由和组件之间的应用关系
  routes,
  //将连接#去掉,url作hash
  mode: 'history',
  // linkActiveClass: 'active'
})
export default router
