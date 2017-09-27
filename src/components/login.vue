<template>
	<div class="login">
		<h1>欢迎</h1>
		<div v-if="name">
			输入名字<Input type="text" v-model="name" style="width: 300px"/></Input>
		</div>
		<div v-else>
			<Input v-model="value" placeholder="请输入密码" style="width: 300px"></Input>
	    	<Button type="primary" @click="submit">提交</Button>
		</div>
	</div>
</template>

<script>
	
	export default {
		name: 'login',
		components: {
		   
		},
	    props: {
		    
		},
		data() {
		    return {
		    	myPassword:'123456',
		    	value:'',
		    	name:'1'
			}
		},
		created(){
			
		},
		computed: {
		   
		},
		methods: {
			submit(){
				if(this.value===this.myPassword){
					this.$router.push({ name: 'shufa'})
				}else{
					 this.$Message.info('密码错误，请重新输入');
				}
			}
		}
	}
</script>


<style scoped >
	
</style>