<template>
	<div>
		<div id="nav">
			<router-link to="/home">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/first">first</router-link> |
			<router-link to="/two">转向two</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
export default {
    name:"index",
    mounted:function(){
        this.$parent.msg="home"
        console.log(this.$root);
    }
}
</script>