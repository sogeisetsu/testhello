<template>
	<div id="app">
		<mu-appbar
			style="width: 100%"
			:title="msg"
			class="header"
			color="blueGrey100"
			textColor="grey900"
		></mu-appbar>

		<router-view />
	</div>
</template>
<script>
export default {
	data: function () {
		return {
			msg: 'HELLO WORLD',
		}
	},
}
</script>

<style lang="less">
@import 'assets/css/icon.css';
@import 'assets/css/Roboto.css';
@import 'assets/css/sc.css';
@import 'assets/css/msc.css';
@import 'assets/css/csc.css';
@import 'assets/css/cRoboto.css';
html,
body {
	height: 100%;
	width: 100%;
}
#app {
	font-family: Roboto, 'Noto Sans SC', Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	min-height: 100%;

	/* height: auto !important; */

	width: 100%;

	height: 100%; /*IE6不识别min-height*/

	position: relative;
	background-color: #e9eef3;
	/* margin: 0; */
}
.header {
	width: 100%;
	position: fixed;
	top: 0;
	height: 56px !important;
	.mu-appbar-title {
		font-family: Roboto, 'Noto Serif SC', 'Long Cang', 'Noto Sans SC',
			Avenir, Helvetica, Arial, sans-serif;
		font-size: 30px !important;
		font-weight: 200;
	}
}
</style>
