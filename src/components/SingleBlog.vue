<template>
	<div class="container">
		<h2>{{blog.title}}</h2>
		<p>
			{{blog.body}}
		</p>
	</div>
</template>

<script>
	export default{
		name:"SingleBlog",
		data(){
			return{
				id:this.$route.params.id,
				blog:{}
			}
		},
		created(){
			this.$http.get("http://jsonplaceholder.typicode.com/posts/"
			+this.id)
			.then(function(data){
				this.blog = data.body;
			})
		}
	}
</script>

<style scoped>
	.container{
		max-width:960px;
		margin:0 auto;
		padding:20px;
		background-color: #eee;
	}
</style>
