import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import About from './views/About.vue'
import AddBlog from "./components/AddBlog.vue"
import ShowBlogs from "./components/ShowBlogs.vue"
import SingleBlog from "./components/SingleBlog.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/AddBlog',
      name: 'AddBlog',
      component: AddBlog
    },
    {
      path: '/ShowBlogs',
      name: 'ShowBlogs',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      
	  //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component:ShowBlogs
	},
	{
		path: '/blog/:id',
		name: 'SingleBlog',
		component: SingleBlog
	}
  ]
})
