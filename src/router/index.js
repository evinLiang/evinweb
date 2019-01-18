import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import about from '@/page/about'
import content from '@/page/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      //默认第一个是active
      path: '/',
      redirect: '/home'
    },  
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
      	title: '首页'
      }
    },
		{
		  path: '/about',
		  name: 'about',
		  component: about,
		  meta: {
		  	title: '关于'
		  }
		},
		{
		  path: '/content',
		  name: 'content',
		  component: content,
		  meta: {
		  	title: '联系'
		  }
		},
  ],
	linkActiveClass: 'active'
})
