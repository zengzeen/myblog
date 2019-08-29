<template>
  <div class="container">
    <h2>博客总揽</h2>
	<input type="text" placeholder="搜索" v-model="search">
	
	<!-- 这里是遍历所有blogs -->
	<!-- <div class="single-blog" v-for="blog in blogs"> -->
	
	<!-- 当你只想要遍历出你搜索的内容 -->
	<div class="single-blog" v-for="blog in filterblogs">
		<!-- 绑定一个自定义属性 v-rainbow-->
		<!-- 并且这里使用了自定义过滤器 -->
		<router-link v-bind:to="'/blog/'+blog.id"><h2 v-rainbow>{{blog.title | to-uppercase }}</h2></router-link>
		<p>{{blog.body}}</p>
	</div>
  </div>
</template>

<script>
export default {
  name: 'ShowBlogs',
  data(){
	  return{
		  blogs:[],
		  search:""
	  }
  },
  created(){
	  //1.请求jsonplaceholder网上的一个接口
	  //this.$http.get("https://jsonplaceholder.typicode.com/posts")
	  
	  //2.请求本地的json文件。且一定要放在public文件下
	  this.$http.get("posts.json")
	  
	  .then(function(data){
		// console.log(data) ; 
		//拿到数据后，放入我们自己的data空数组blogs中，使得我们遍历它 并取出数据
		this.blogs = data.body.slice(0,10);
		//console.log(this.blogs);
		
	  })
  },
  computed:{
	  filterblogs:function(){
		  return this.blogs.filter(blog =>{
			  return blog.title.match(this.search);
		  })
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
	max-width:800px;
	margin:0 auto;
}
.single-blog{
	background-color: #eee;
	padding:20px;
	margin:20px 0;
	box-sizing:border-box;
}
.container a {
	text-decoration: none;
}
input[type="text"]{
	padding:8px;
	box-sizing:border-box;
	width:100%;
}
</style>
