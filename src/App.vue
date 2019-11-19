<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
@import '@/styles/_variables.scss';
html {
	font-size: 62.5%;
}
* {
	margin: 0;
	padding: 0;
}
body {
	font-size: $s-size;
}
#app {
	width: 1440px;
	height: 1527px;
}
</style>
