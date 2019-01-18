<template>
  <div id="app">
		<header class="header">
			<h1><a href="/">EvinBlog</a></h1>
			<h4>一个没有灵魂的博客</h4>
		</header>
		<div class="nav">
			<router-link class="paper-btn btn-large" to="/home">首页</router-link>
			<router-link class="paper-btn btn-large" to="/about">关于</router-link>
			<router-link class="paper-btn btn-large" to="/content">联系</router-link>
		</div>
    <router-view/>
		<footer class="footer"><a href="http://www.miitbeian.gov.cn/" target="_new">粤ICP备17032556号-1</a></footer>
  </div>
</template>

<script>
export default {
	name: 'App'
};
</script>

<style>
html,
body {
	font-size: 62.5%;
	background: rgb(249, 250, 251);
	padding: 1rem;
}
@media screen and (max-width:750px) {
	html,
	body {
		padding: 0.5rem;
	}
}
h1 {
	font-size: 6rem;
}
h2 {
	font-size: 5rem;
}
h3 {
	font-size: 4rem;
}
h4 {
	font-size: 3rem;
}
h5 {
	font-size: 2rem;
	margin-bottom: 1rem;
}
.header {
	text-align: center;
}
.header h1 {
	font-size: 6rem;
	margin-bottom: 2rem;
}
.header h1 a {
	background: none;
	color: #41403e;
}
.nav {
	text-align: center;
	margin-bottom: 3rem;
}
.nav a {
	margin:0rem 1rem;
	display: inline-block;
	text-align: center;
}
.nav a.active{
	border: 2px solid #0071de;
	box-shadow: 2px 8px 4px -6px rgba(0,0,0,.3)
}
#app {
	max-width: 75rem;
	margin: 0 auto;
	background: #fff;
	padding: 2rem;
	border: 1px solid #c1c0bd;
	box-shadow: -1px 5px 35px -9px rgba(0, 0, 0, 0.2);
	font-size: 15px;
	border-radius: 3px;
}
p {
	line-height: 1.6;
}
.footer {
	padding-top: 2rem;
	border-top: 1px solid #eee;
	text-align: right;
}
.footer a {
	background: none;
	color: #41403e;
}
.pageMain {
	font-size: 16px;
	line-height: 2;
	padding-bottom: 2rem;
}
</style>
