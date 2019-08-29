<template>
	<div class="container">
		<!-- <router-link to="/AddBlog">添加博客</router-link>  |
		<router-link to="/ShowBlogs">展示博客</router-link> -->
		<ul>
			<li>
				<router-link to="/AddBlog">添加博客</router-link>
				<router-link to="/ShowBlogs">展示博客</router-link> 
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"BlogHeader",
		
	}
</script>

<style scoped>
	.container{
		padding:30px 0;
		background-color: red;
		margin-bottom:40px;
	}
	ul {
		text-align: center;
		margin:0;
	}
	ul li{
		list-style: none;
		display:inline-block;
	}
	a{
		color:#ffffff;
		text-decoration: none;
		margin:0 10px;
	}
</style>
