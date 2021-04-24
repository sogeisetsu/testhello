<template>
	<div id="user">
		<mu-container class="user-d">
			<mu-card style="width: 100%; max-width: 375px; margin: 0 auto">
				<mu-card-header :title="$root.name" :sub-title="'id:'+$root.id">
					<mu-avatar slot="avatar">
						<mu-icon value="account_circle"></mu-icon>
					</mu-avatar>
				</mu-card-header>
				<mu-card-title
					title="青岛科技大学"
					sub-title="南苑-4号楼"
				></mu-card-title>
			</mu-card>
		</mu-container>
		<van-cell-group class="twotab">
			<van-cell title="地址编辑" is-link @click="ifshowadd" />
			<van-cell title="优惠券" is-link @click="ifshowyouhui" />
		</van-cell-group>
		<mu-container class="demo-container">
			<mu-row gutter>
				<mu-col span="6"
					><div class="grid-cell">
						<mu-button color="success">
							<mu-icon left value="description"></mu-icon>
							全部订单
						</mu-button>
					</div></mu-col
				>
				<mu-col span="6"
					><div class="grid-cell">
						<mu-button color="error">
							<mu-icon left value="paid"></mu-icon>
							退款/售后
						</mu-button>
					</div></mu-col
				>
			</mu-row>
		</mu-container>

		<van-action-sheet v-model="showadd" title="地址编辑">
			<van-form @submit="onSubmitaddress">
				<van-field
					v-model="user.name"
					name="用户名"
					label="用户名"
					placeholder="用户名"
					:rules="[{ required: true, message: '请填写用户名' }]"
				/>
				<van-field
					v-model="user.tel"
					type="tel"
					name="电话号码"
					label="电话号码"
					placeholder="电话号码"
					:rules="[{ required: true, message: '请填写电话号码' }]"
				/>
				<van-field
					readonly
					clickable
					name="picker"
					:value="user.bigadd"
					label="选择器"
					placeholder="点击选择学校和校区"
					@click="showPicker = true"
					:rules="[{ required: true, message: '请填写地址' }]"
				/>
				<van-field
					v-model="user.exadd"
					name="具体位置"
					label="具体位置"
					placeholder="具体位置"
					:rules="[{ required: true, message: '请填写具体位置' }]"
				/>
				<van-popup v-model="showPicker" position="bottom">
					<van-picker
						show-toolbar
						:columns="address"
						@confirm="onConfirm"
						@cancel="showPicker = false"
					/>
				</van-popup>
				<div style="margin: 16px">
					<van-button round block type="info" native-type="submit"
						>确认</van-button
					>
				</div>
			</van-form>
		</van-action-sheet>
		<van-action-sheet v-model="showyouhui" title="优惠券">
			<div class="content">
				<p>敬请期待</p>
				<p class="small">永远相信美好的事情即将发生</p>
			</div>
		</van-action-sheet>
	</div>
</template>

<script>
export default {
	data: function () {
		return {
			showadd: false,
			showyouhui: false,
			showPicker: false,
			user: {
				name: '',
				tel: '',
				bigadd: '',
				exadd: '',
			},
			address: [
				{
					text: '青岛科技大学',
					children: [
						{
							text: '崂山校区',
							children: [
								{
									text: '南苑',
								},
								{
									text: '北苑',
								},
								{
									text: '弘毅楼',
								},
								{
									text: '明德楼',
								},
							],
						},
						{
							text: '四方校区',
							children: [
								{ text: '一教' },
								{
									text: '二教',
								},
							],
						},
					],
				},
				{
					text: '青岛大学',
					children: [
						{
							text: '浮山校区',
							children: [
								{ text: '东苑' },
								{
									text: '西苑',
								},
							],
						},
					],
				},
			],
		}
	},
	methods: {
		ifshowadd: function () {
			this.showadd = true
		},
		ifshowyouhui: function () {
			this.showyouhui = true
		},
		onConfirm: function (value) {
			console.log(value)
			// 地址编辑框选择确定
			this.user.bigadd = value.toString()
			this.showPicker = false
		},
		onSubmitaddress:function(values){
			console.log("提交地址栏");
			console.log(values);
			console.log(values["picker"]);
			values["picker"]=values["picker"].split(",");
			console.log(values);
		}
	},
	mounted:function(){
		console.log("user");
	}
}
</script>

<style scoped lang="less">
.user-d {
	text-align: left;
	background-color: #e9eef3;
	padding: 18px;
}

/deep/.mu-card {
	background-color: #e9eef3;
	padding: 0px;
	box-shadow: 5px 10px 7px 2px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
		0 1px 3px 0 rgb(0 0 0 / 12%) !important;
	// width: 100%;
}
.demo-container {
	margin-top: 25px;
	// padding: 0px;
	.row {
		margin-bottom: 25px;
		&:last-child {
			margin-bottom: 0;
		}
	}
}
.van-cell-group {
	text-align: left;
	// background-color: #e9eef3;
}
.van-cell {
	background-color: #ffffff;
}
.twotab {
	margin-top: 10px;
	box-shadow: 5px 10px 7px 2px rgb(0 0 0 / 20%) !important;
}
.van-popup {
	padding-bottom: 30px;
	text-align: left;
}
.content {
	padding: 10px;
	text-align: center;
	// height: 56px;
	font-size: 40px;
	font-weight: bolder;
	font-family: 'Long Cang';
	.small{
		font-weight: 500;
		font-size: 20px;
	}
}
</style>