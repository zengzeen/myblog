<template>
	<div class="container">
		<h2>添加博客</h2>
		<form v-if="submitted">
			<label>博客标题:</label>
			<input type="text" v-model="blog.title">
			
			<label>博客内容:</label>
			<textarea v-model="blog.content"></textarea>
			<!-- 4种博客分类 -->
			<div id="checkboxes">
				<label>vue.js</label> 
				<input type="checkbox" value="vue.js" v-model="blog.categories">
				<label>react.js</label>
				<input type="checkbox" value="react.js" v-model="blog.categories">
				<label>node.js</label>
				<input type="checkbox" value="node.js" v-model="blog.categories">
				<label>angular.js</label>
				<input type="checkbox" value="angular.js" v-model="blog.categories">
			</div>
			<label>作者:</label>
			<select v-model="blog.author">
				<option v-for="author in authors">{{author}}</option>
				
			</select>
			<button @click.prevent="post()">添加博客</button>
		</form>
		
		<div v-if="!submitted">
			你的博客添加成功
		</div>
		<hr>
		
		<div id="preview">
			<h3>博客总揽</h3>
			<p>博客标题:{{blog.title}}</p>
			<br>
			<p>博客内容:{{blog.content}}</p>
			<p>博客分类:</p>
			<ul>
				<!-- 遍历 取出数组中的数据 -->
				<li v-for="category in blog.categories">{{category}}</li>
			</ul>
			<p>作者:{{blog.author}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:"add-blog",
		data(){
			return{
				blog:{
					title:"",
					content:"",
					//存储categories的数据，并绑定v-model，要用的时候可以拿出来
					categories:[],
					author:""
				},
				authors:["zengzeen","huangzheyu","yuqunpu","wangzhengnan"],
				submitted:true
			}
		},
		methods:{
			post:function(){
				this.$http.post('http://jsonplaceholder.typicode.com/posts',{
					title:this.blog.title,
					body:this.blog.content,
					userID:1
				})
				.then(function(data){
					console.log(data);
					this.submitted = false;
				})
			}
		}
	
	}
</script>

<style scoped>
	*{
		box-sizing:border-box;
	}
	.container{
		max-width:600px;
		padding:20px;
	}
	label{
		display:block;
		margin:20px 0 10px;
	}
	input[type='text'],textarea,select{
		display:block;
		width:100%;
		padding:8px;
	}
	select{
		margin-bottom:10px;
	}
	textarea{
		height:200px;
	}
	#checkboxes label{
		display:inline-block;
	}
	button{
		cursor:pointer;
	}
	#preview{
		border:2px solid #ccc;
	}
</style>
