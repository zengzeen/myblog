<template>
  <div id="app">
    <!-- <router-link to="/">home</router-link>   |
	<router-link to="/about">about</router-link>
    <router-view/> -->
	<blog-header></blog-header>
	<!-- <add-blog></add-blog> -->
	<!-- <show-blogs></show-blogs> -->
	<router-view></router-view>
	<!-- <Home></Home> -->
  </div>
</template>

<script>
	import AddBlog from "./components/AddBlog.vue"
	import ShowBlogs from "./components/ShowBlogs.vue"
	import BlogHeader from "./components/BlogHeader.vue"
	import SingleBlog from "./components/SingleBlog.vue"
	// import Home from "./views/Home.vue"
	
	export default {
		name:"app",
		components:{
			AddBlog,
			ShowBlogs,
			BlogHeader,
			SingleBlog,
			// Home
		}
	}
</script>
<style scoped>

</style>
