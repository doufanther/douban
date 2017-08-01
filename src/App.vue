<template>
  <div id="app">
		<shufa></shufa>
	</div>
</template>

<script>
	
	import shufa from './components/shufa.vue'
	
	export default {
	  name: 'app',
	 	components:{
	  	'shufa':shufa
		},
	  methods:{
	  
			
	  }
	}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
