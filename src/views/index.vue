<template>
	<div id="page">
		<div class="notice" v-show="ifshownotice" @close="closenotice">
			<van-notice-bar
				:text="topnotice"
				left-icon="volume-o"
				mode="closeable"
			/>
		</div>
		<router-view></router-view>
		<div id="footer">
			<mu-bottom-nav shift :value.sync="shift" @change="changetab">
				<mu-bottom-nav-item
					title="首页"
					icon="home"
					to="home"
					value="home"
					replace
				></mu-bottom-nav-item>
				<mu-bottom-nav-item
					title="购物车"
					icon="shopping_cart"
					to="shoppingcart"
					value="cart"
					replace
				></mu-bottom-nav-item>
				<mu-bottom-nav-item
					title="我的"
					icon="person"
					to="user"
					value="user"
					replace
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
			ifshownotice: true,
			topnotice: '学而时习之，不亦说乎；有朋自远方来不亦乐乎？人不知而不愠，不亦君子乎？',
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
		} else if (this.$route.path == '/user') {
			this.shift = 'user'
			this.$parent.msg = '我的'
			// console.log(this.$route.path)
		} else if (this.$route.path == '/shoppingcart') {
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
			} else if (value == 'cart') {
				this.$parent.msg = '购物车'
			} else if (value == 'user') {
				this.$parent.msg = '我的'
			} else {
				this.$parent.msg = '高校团购联盟'
			}
		},
		closenotice:function(){
			this.ifshownotice=false
		}
	},
}
</script>

<style scoped>
#page {
	padding-bottom: 60px;
	padding-top: 66px;
	/* height: 100%; */
	/* min-height: 100%; */
	/* background-color: antiquewhite; */
}
.notice {
	margin-top: -4px;
	margin-bottom: 5px;
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

