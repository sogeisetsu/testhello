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