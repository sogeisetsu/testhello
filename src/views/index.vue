<template>
	<div id="page">
		<mu-button color="secondary">Material Design按钮</mu-button>
		<router-view></router-view>
		<div id="footer">
			<mu-bottom-nav shift :value.sync="shift" @change="changetab">
				<mu-bottom-nav-item
					title="首页"
					icon="home"
					to="home"
					value="home"
				></mu-bottom-nav-item>
				<mu-bottom-nav-item
					title="购物车"
					icon="shopping_cart"
					to="about"
					value="cart"
				></mu-bottom-nav-item>
				<mu-bottom-nav-item
					title="我的"
					icon="person"
					to="first"
					value="user"
				></mu-bottom-nav-item>
			</mu-bottom-nav>
		</div>
	</div>
</template>
<script>
export default {
	name: 'index',
	data: function () {
		return {
			shift: 'home',
		}
	},
	mounted: function () {
		// this.$parent.msg = 'home'
		console.log(this.$root)
		// console.log(this.$route.path)
		if (this.$route.path == '/home') {
			this.shift = 'home'
			this.$parent.msg = '首页'
			// console.log(this.$route.path)
		} else if (this.$route.path == '/first') {
			this.shift = 'user'
			this.$parent.msg = '我的'
			// console.log(this.$route.path)
		} else if (this.$route.path == '/about') {
			this.$parent.msg = '购物车'
			this.shift = 'cart'
			// console.log(this.$route.path)
		} else {
			this.shift = 'home'
			this.$parent.msg = '高校团购联盟'
			// console.log(this.$route.path)
		}
	},
	methods: {
		changetab: function (value) {
			// console.log(value)
			if (value == 'home') {
				this.$parent.msg = '首页'
			}else if(value=="cart"){
				this.$parent.msg="购物车"
			}else if(value=="user"){
				this.$parent.msg="我的"
			}else{
				this.$parent.msg="高校团购联盟"
			}
		},
	},
}
</script>

<style scoped>
#page {
	padding-bottom: 56px;
	padding-top: 66px;
}
#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
#footer {
	position: fixed;

	bottom: 0;

	width: 100%;

	clear: both;
}

.mu-bottom-item-active.is-shift {
	color: #0d47a1 !important;
}
.mu-bottom-nav-shift {
	background-color: #e0f7fa !important;
	color: #535353 !important;
}
</style>

