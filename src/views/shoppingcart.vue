<template>
	<div class="mainshoppingcar">
		<div class="left-side">
			<p>左滑删除购物车列表</p>
		</div>
		<div>
			<van-empty description="当前购物车为空" v-if="ifempty" />
		</div>

		<div class="goodsbox">
			<van-checkbox-group v-model="checked">
				<div class="goods" v-for="(item, name) in cars" :key="name">
					<van-swipe-cell>
						<van-checkbox label-disabled :name="name">
							<van-card
								:price="item.price"
								:desc="item.desc"
								:title="item.title"
								:thumb="item.thumb"
								:num="item.num"
							>
								<template #num>
									<van-stepper
										v-model="item.num"
										theme="round"
										button-size="22"
										disable-input
										class="stepper"
										min="1"
									/> </template
							></van-card>
						</van-checkbox>
						<template #right>
							<van-button
								square
								text="删除"
								type="danger"
								class="delete-button"
								@click="deletet(name, $event)"
							/>
						</template>
					</van-swipe-cell>
				</div>
			</van-checkbox-group>
		</div>
		<!-- {{gettotalprice()}} -->
		<van-submit-bar
			:price="getAlltotal"
			button-text="提交订单"
			@submit="onSubmit"
		/>
	</div>
</template>
<script>
export default {
	data: function () {
		return {
			ifempty: false,
			checked: [],
			cars: {
				mangguo: {
					title: '越南精品芒果',
					desc: '精品越南大青芒，越南进口',
					price: 9.99,
					tag: '新品',
					thumb:
						'https://suyuesheng-biaozhun-blog-tupian.oss-cn-qingdao.aliyuncs.com/blogimg/20210322004059.jfif',
					originprice: 19.9,
					num: 1,
				},
				mangguo01: {
					title: '越南精品芒果',
					desc: '精品越南大青芒，越南进口',
					price: 9.99,
					tag: '新品',
					thumb:
						'https://suyuesheng-biaozhun-blog-tupian.oss-cn-qingdao.aliyuncs.com/blogimg/20210322004059.jfif',
					originprice: 19.9,
					num: 1,
				},
				mangguo02: {
					title: '越南精品芒果',
					desc: '精品越南大青芒，越南进口',
					price: 9.99,
					tag: '新品',
					thumb:
						'https://suyuesheng-biaozhun-blog-tupian.oss-cn-qingdao.aliyuncs.com/blogimg/20210322004059.jfif',
					originprice: 19.9,
					num: 1,
				},
				mangguo03: {
					title: '越南精品芒果',
					desc: '精品越南大青芒，越南进口',
					price: 9.99,
					tag: '新品',
					thumb:
						'https://suyuesheng-biaozhun-blog-tupian.oss-cn-qingdao.aliyuncs.com/blogimg/20210322004059.jfif',
					originprice: 19.9,
					num: 1,
				},
			},
			checkedcars: {},
			totalprice: 0,
		}
	},
	methods: {
		deletet: function (name, event) {
			let that = this
			let needdeletedom =
				event.target.parentNode.parentNode.parentNode.parentNode
			needdeletedom.classList.add(
				'animate__animated',
				'animate__backOutLeft'
			)

			this.$toast.fail('删除' + this.cars[name].title)

			setTimeout(function () {
				needdeletedom.remove()
				if (that.checked.indexOf(name) != -1) {
					that.checked.splice(that.checked.indexOf(name), 1)
					delete that.checkedcars[name]
				}
				delete that.cars[name]
				that.testempty()
			}, 600)
		},
		onSubmit: function () {
			console.warn(this.checkedcars)
		},
		testempty() {
			var arr = Object.keys(this.cars)

			if (arr.length == 0) {
				this.ifempty = true
				document.getElementsByClassName('goodsbox')[0].remove()
			}
		},
		gettotalprice: function () {
			let total = 0
			this.checkedcars = {}
			for (let goodname of this.checked) {
				this.checkedcars[goodname] = this.cars[goodname]
			}
			for (let good in this.checkedcars) {
				total +=
					this.checkedcars[good].price * this.checkedcars[good].num
			}
			this.totalprice = total * 10
			return total * 100
		},
	},
	computed: {
		getAlltotal: function () {
			return this.gettotalprice()
		},
	},
	watch: {},
}
</script>

<style  lang="less" scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
/deep/ .left-side {
	margin-left: 10px;
}
.mainshoppingcar {
	padding-bottom: 50px;
	text-align: left !important;
}
.goodsbox {
	padding-left: 10px;
	padding-right: 10px;
	border-bottom: 1px solid #b3c0d1;
	padding-bottom: 5px;
	background-color: #e9eef3;
}
.goods {
	width: 100%;
	margin-top: 10px;
	margin-bottom: 10px;
	border: 1px solid rgba(68, 196, 192, 0.353);
	border-radius: 5px;
	box-shadow: 3px 2px 12px 0px rgb(18 77 90 / 48%);
}
/deep/ .van-card__title {
	font-weight: bold;
}
/deep/ .van-checkbox {
	background-color: #fafafa;
}

/deep/.van-checkbox__icon {
	margin-left: 6px;
}
/deep/.van-card {
	padding-left: 3px !important ;
}
/deep/.van-checkbox__label {
	width: 95%;
	margin-left: 1px !important;
	color: #323233;
	line-height: 20px;
}
/deep/.delete-button {
	height: 100% !important;
}
/deep/.van-submit-bar {
	margin-bottom: 56px;
	background-color: #e0f7fa !important;
}
</style>


