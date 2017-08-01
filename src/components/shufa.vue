<template>
  	<div class="shufa">
  		<p>顶部对齐</p>
	    <Row type="flex" justify="center" align="top" class="code-row-bg">
	        <Col span="4"><p style="height: 80px">col-4</p></Col>
	        <Col span="4"><p style="height: 30px">col-4</p></Col>
	        <Col span="4"><p style="height: 100px">col-4</p></Col>
	        <Col span="4"><p style="height: 60px">col-4</p></Col>
	    </Row>
	    <p>底部对齐</p>
	    <Row type="flex" justify="center" align="bottom" class="code-row-bg">
	        <Col span="4"><p style="height: 80px">col-4</p></Col>
	        <Col span="4"><p style="height: 30px">col-4</p></Col>
	        <Col span="4"><p style="height: 100px">col-4</p></Col>
	        <Col span="4"><p style="height: 60px">col-4</p></Col>
	    </Row>
	    <p>居中对齐</p>
	    <Row type="flex" justify="center" align="middle" class="code-row-bg">
	        <Col span="4"><p style="height: 80px">col-4</p></Col>
	        <Col span="4"><p style="height: 30px">col-4</p></Col>
	        <Col span="4"><p style="height: 100px">col-4</p></Col>
	        <Col span="4"><p style="height: 60px">col-4</p></Col>
	    </Row>
	    <Button type="primary" shape="circle" icon="ios-search"></Button>
	    <Button type="primary" icon="ios-location">搜索</Button>
	    <Button type="primary" shape="circle" icon="ios-search">搜索</Button>
	    <Button type="primary" shape="circle">圆角按钮</Button>
	    <div>
	    	<Input v-model="value7" type="textarea" :autosize="true" placeholder="请输入..."></Input>
	    	<Button type="primary" icon="ios-location" @click="submit">提交</Button>
	    </div>
  	</div>
</template>

<script>
	
	
  export default {
    data() {
      return {
        value7:''
      }
    },
   	created(){
   		
   	},
    methods:{
    	submit(){
    		console.log(this.value7);
    	}
	}
  }
</script>
<style scoped>
	.code-row-bg div{background: red;}
	.code-row-bg div:nth-child(2){background: blue;}
	.code-row-bg div:nth-child(3){background: yellow;}
	.code-row-bg div:nth-child(4){background:black;}
</style>