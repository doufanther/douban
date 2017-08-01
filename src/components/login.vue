<template>
	<div class="login">
		<h1>欢迎</h1>
		<Input v-model="value" placeholder="请输入密码" style="width: 300px"></Input>
	    <Button type="primary" @click="submit">提交</Button>
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
		    	value:''
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