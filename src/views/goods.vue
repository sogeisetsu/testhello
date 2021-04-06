<template>
	<div id="goods">
		<div class="main">
			<van-action-sheet
				v-model="show"
				title="已选列表"
				round
				closeable
				close-icon="close"
				@close="closepopup"
			>
				<div class="select-goods">
					<template v-for="items in boughtgoods">
						<transition
							v-for="(item, name) in items"
							:key="name"
							name="slide-fade"
						>
							<van-card
								:price="item.price"
								:title="item.title"
								:thumb="item.thumb"
								origin-price="10.00"
								v-if="item.num != 0"
							>
								<template #num>
									<van-stepper
										v-model="item.num"
										theme="round"
										button-size="22"
										disable-input
										class="stepper"
										min="0"
									/>
								</template>
							</van-card>
						</transition>
					</template>
				</div>
			</van-action-sheet>
			<van-tabs v-model="active" scrollspy sticky class="v-tabs" offset-top="56px">
				<van-tab title="水果" class="v-tab">
					<div class="ceshi">
						<div
							class="goods"
							v-for="(item, name) in goods.fruit"
							:key="name"
						>
							<van-card
								:tag="item.tag"
								:price="item.price"
								:desc="item.desc"
								:title="item.title"
								:thumb="item.thumb"
								:origin-price="item.originprice"
							>
								<template #footer>
									<van-button
										size="mini"
										plain
										type="primary"
										round
										class="footer-button"
										>加入购物车
									</van-button>
									<van-stepper
										v-model="item.num"
										theme="round"
										button-size="22"
										disable-input
										class="stepper"
										@change="checkChange"
										min="0"
									/>
								</template>
							</van-card>
						</div>
					</div>
				</van-tab>
				<van-tab title="糕点" class="v-tab">
					<div class="ceshi">
						<div
							class="goods"
							v-for="(item, name) in goods.gaodian"
							:key="name"
						>
							<van-card
								:tag="item.tag"
								:price="item.price"
								:desc="item.desc"
								:title="item.title"
								:thumb="item.thumb"
								:origin-price="item.originprice"
							>
								<template  #footer>
									<van-button
										size="mini"
										plain
										type="primary"
										round
										class="footer-button"
										>加入购物车
									</van-button>
									<van-stepper
										v-model="item.num"
										theme="round"
										button-size="22"
										disable-input
										class="stepper"
										@change="checkChange"
										min="0"
									/>
								</template>
							</van-card>
						</div>
					</div>
				</van-tab>
				<van-tab title="小零食" class="v-tab">
					<div class="ceshi"></div>
				</van-tab>
			</van-tabs>
		</div>
		<van-submit-bar
			:price="totalprice"
			button-text="提交订单"
			@submit="onSubmit"
		>
			<van-button
				type="primary"
				size="small"
				plain
				round
				icon="passed"
				@click="showPopup"
				>已选</van-button
			>
		</van-submit-bar>
	</div>
</template>
<script>
export default {
	mounted: function () {
		console.log(this.$parent)
		console.log(this.$root)
		this.$parent.msg = '团购商城'
		this.$parent.ifshowback = true
	},
	data: function () {
		return {
			activeKey: 0,
			active: 0,
			value: 0,
			totalprice: 0,
			show: false,
			goods: {
				fruit: {
					mangguo: {
						title: '越南精品芒果',
						desc: '精品越南大青芒，越南进口',
						price: 9.99,
						tag: '新品',
						thumb:
							'https://suyuesheng-biaozhun-blog-tupian.oss-cn-qingdao.aliyuncs.com/blogimg/20210322004059.jfif',
						originprice: 19.9,
						num: 0,
					},
					mangguo1: {
						title: '越南精品芒果',
						desc: '精品越南大青芒，越南进口',
						price: 9.99,
						tag: '新品',
						thumb:
							'https://suyuesheng-biaozhun-blog-tupian.oss-cn-qingdao.aliyuncs.com/blogimg/20210322004059.jfif',
						originprice: 19.9,
						num: 0,
					},
					mangguo2: {
						title: '越南精品芒果',
						desc: '精品越南大青芒，越南进口',
						price: 9.99,
						tag: '新品',
						thumb:
							'https://suyuesheng-biaozhun-blog-tupian.oss-cn-qingdao.aliyuncs.com/blogimg/20210322004059.jfif',
						originprice: 19.9,
						num: 0,
					},
					mangguo3: {
						title: '越南精品芒果',
						desc: '精品越南大青芒，越南进口',
						price: 9.99,
						tag: '新品',
						thumb:
							'https://suyuesheng-biaozhun-blog-tupian.oss-cn-qingdao.aliyuncs.com/blogimg/20210322004059.jfif',
						originprice: 19.9,
						num: 0,
					},
				},
				gaodian: {
					mangguo: {
						title: '越南精品芒果',
						desc: '精品越南大青芒，越南进口',
						price: 9.99,
						tag: '新品',
						thumb:
							'https://suyuesheng-biaozhun-blog-tupian.oss-cn-qingdao.aliyuncs.com/blogimg/20210322004059.jfif',
						originprice: 19.9,
						num: 0,
					},
					mangguo1: {
						title: '越南精品芒果',
						desc: '精品越南大青芒，越南进口',
						price: 9.99,
						tag: '新品',
						thumb:
							'https://suyuesheng-biaozhun-blog-tupian.oss-cn-qingdao.aliyuncs.com/blogimg/20210322004059.jfif',
						originprice: 19.9,
						num: 0,
					},
					mangguo2: {
						title: '越南精品芒果',
						desc: '精品越南大青芒，越南进口',
						price: 9.99,
						tag: '新品',
						thumb:
							'https://suyuesheng-biaozhun-blog-tupian.oss-cn-qingdao.aliyuncs.com/blogimg/20210322004059.jfif',
						originprice: 19.9,
						num: 0,
					},
					mangguo3: {
						title: '越南精品芒果',
						desc: '精品越南大青芒，越南进口',
						price: 9.99,
						tag: '新品',
						thumb:
							'https://suyuesheng-biaozhun-blog-tupian.oss-cn-qingdao.aliyuncs.com/blogimg/20210322004059.jfif',
						originprice: 19.9,
						num: 0,
					},
				},
			},
			boughtgoods: {},
		}
	},
	methods: {
		onClickLeft: function () {
			this.$toast.fail('点击返回')
			window.location.href = 'two.html#/home'
		},
		checkChange: function () {
			// console.error("wdf");
			// 修改总价格
			let total = 0
			for (let item in this.goods) {
				for (let good in this.goods[item]) {
					// console.error(this.goods[item][good].price);
					total +=
						this.goods[item][good].price *
						this.goods[item][good].num
				}
			}
			// console.log(total);
			this.totalprice = total * 100
			// 修改已买物品清单
		},
		showPopup() {
			this.show = true
			let boughtgoods = {}
			// console.log(this.goods);

			for (let biggood in this.goods) {
				for (let good in this.goods[biggood]) {
					if (this.goods[biggood][good].num != 0) {
						// console.log(this.goods[biggood][good].num);
						// boughtgoods[biggood]=this.goods[biggood];

						boughtgoods[biggood] = {}
					}
				}
			}
			for (let biggood in this.goods) {
				for (let good in this.goods[biggood]) {
					if (this.goods[biggood][good].num != 0) {
						// console.log(this.goods[biggood][good].num);
						// boughtgoods[biggood]=this.goods[biggood];

						boughtgoods[biggood][good] = this.goods[biggood][good]
					}
				}
			}
			// console.log("最终");
			// console.log(boughtgoods);

			this.boughtgoods = boughtgoods
			// console.log(this.boughtgoods);
		},
		onSubmit() {
			let boughtgoods = {}

			for (let biggood in this.goods) {
				for (let good in this.goods[biggood]) {
					if (this.goods[biggood][good].num != 0) {
						boughtgoods[biggood] = {}
					}
				}
			}
			for (let biggood in this.goods) {
				for (let good in this.goods[biggood]) {
					if (this.goods[biggood][good].num != 0) {
						boughtgoods[biggood][good] = this.goods[biggood][good]
					}
				}
			}

			this.boughtgoods = boughtgoods
			var arr = Object.keys(this.boughtgoods)

			if (arr.length == 0) {
				this.$toast.fail('您的订单数量为0，无法提交')
			} else {
				this.$toast.success('成功提交订单')
			}
		},
		closepopup() {
			// console.log("关闭弹窗");
			for (let biggood in this.boughtgoods) {
				// console.log("bigood="+biggood);
				for (let good in this.boughtgoods[biggood]) {
					// console.log(good);
					this.goods[biggood][good] = this.boughtgoods[biggood][good]
				}
			}
		},
	},
}
</script>

<style scoped lang="less">
#goods {
	padding-top: 56px;
}
.main {
	text-align: left !important;

	background-color: #e9eef3;
	color: #333;
	padding: 0px;
	padding-bottom: 55px;
}

.goods {
	width: 100%;
	margin-top: 10px;
	margin-bottom: 10px;
	border: 1px solid rgba(68, 196, 192, 0.353);
	border-radius: 5px;
	box-shadow: 0 2px 12px 0 rgba(18, 77, 90, 0.483);
}

/deep/.stepper {
	display: inline-block;
}

.footer-button {
	margin-right: 10px;
}

.ceshi {
	border-bottom: 1px solid #b3c0d1;
	margin-left: 10px;
	margin-right: 10px;
}

.goods /deep/.van-card__title {
	font-weight: bold;
	font-family: 'SF Pro SC', 'SF Pro Text', 'SF Pro Icons', 'PingFang SC',
		'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
	/* height: 20px; */
	font-size: 16px;
}

.select-goods /deep/.van-card {
	border: 1px solid #b3c0d179;
	box-shadow: 0 1px 12px 0 rgba(114, 130, 133, 0.421);
	margin-left: 10px;
	margin-right: 10px;
}

.select-goods:first-child {
	margin-top: 10px;
}

/deep/.van-card__bottom /deep/.van-stepper {
	vertical-align: middle;
}

/deep/.van-action-sheet__content {
	padding-bottom: 50px;
}

/deep/.van-action-sheet__header {
	/* font-size: 10px; */
	font-weight: bold;
	/* font-style: oblique; */
	background-color: #b3c0d164;
}

/deep/.slide-fade-enter-active {
	transition: all 0.3s ease;
}

/deep/.slide-fade-leave-active {
	transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

/deep/.slide-fade-enter,
/deep/.slide-fade-leave-to {
	transform: translateX(10px);
	opacity: 0;
}
/deep/.van-submit-bar {
    // margin-bottom: 56px;
    background-color: #e0f7fa !important;
}
</style>