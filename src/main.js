import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
Vue.config.productionTip = false

//自定义指令
Vue.directive("rainbow",{
	//钩子函数bind 并且有三个参数el binding vnode
	bind(el,bingding,vnode){
		el.style.color = '#'+Math.random().toString(16).slice(2,8)
	}
})

//vue过滤器(全局) 也有局部过滤器写法（写在组件中）
Vue.filter("to-uppercase",function(value){
	return value.toUpperCase();
})


Vue.use(VueResource)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
