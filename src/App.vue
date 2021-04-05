<template>
	<div id="app">
		<mu-appbar style="width: 100%" :title="msg" class="header" color="blueGrey100" textColor="grey900"></mu-appbar>

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

<style>
@import 'assets/css/icon.css';
@import 'assets/css/Roboto.css';
html,
body {
	height: 100%;
	width: 100%;
}
#app {
	font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	min-height: 100%;

	height: auto !important;

	width: 100%;

	height: 100%; /*IE6不识别min-height*/

	position: relative;
	/* margin: 0; */
}
.header {
    width: 100%;
    position: fixed;
    top: 0;
	height: 56px !important;
}
</style>
