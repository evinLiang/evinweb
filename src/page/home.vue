<template>
	<div class="home">
		<div class="article-panel" v-for="(item,index) in articleList" :key="item.index">
			<div class="row">
				<div class="article-img sm-6 md-4 lg-4 col"><img :src="item.img" alt=""></div>
				<div class="article-content sm-6 md-8 lg-8 col">
					<h5 class="article-title">### {{item.title}}</h5>
					<div v-html="item.content"></div>
					<div class="paper-btn article-more">详情</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			articleList: [
				{
					title: '雨巷，落满了情愁',
					img: 'http://evinweb.com/wp-content/uploads/2018/12/Hippopx-3.jpg',
					content: '<p>一朵青花，撑起了雨巷的情愁。一束束、一片片从屋檐下汇聚成海洋，流年了青石板上的水迹，斑驳了珊阑处的浅影。用一巷的情愁砚墨成淡淡的忧伤...</p>'
				},
				{
					title: '雨巷，落满了情愁',
					img: 'http://evinweb.com/wp-content/uploads/2018/12/cropped-3-1.jpg',
					content: '<p>一朵青花，撑起了雨巷的情愁。一束束、一片片从屋檐下汇聚成海洋，流年了青石板上的水迹，斑驳了珊阑处的浅影。用一巷的情愁砚墨成淡淡的忧伤...</p>'
				},
				{
					title: '雨巷，落满了情愁',
					img: 'http://evinweb.com/wp-content/uploads/2018/12/cropped-3-2.jpg',
					content: '<p>一朵青花，撑起了雨巷的情愁。一束束、一片片从屋檐下汇聚成海洋，流年了青石板上的水迹，斑驳了珊阑处的浅影。用一巷的情愁砚墨成淡淡的忧伤...</p>'
				}
			]
		};
	}
};
</script>

<style scoped>
	.article-panel {
		padding-bottom:1rem ;
		margin-bottom: 2rem;
		border-bottom: 1px solid #eee;
	}
	.article-panel:last-child {
		margin-bottom: 0rem;
		border-bottom: none;
	}
	.article-title {
		margin: 0px 0px;
	}
	.article-content {
		/* margin-bottom: 2rem; */
	}
	.article-more {
		display: inline-block;
		padding: 1rem;
		box-shadow: 2px 8px 4px -6px rgba(0,0,0,.3);
	}
	.article-panel:nth-child(3n-2) .article-more{
		border-color: #D17CD3;
	}
	.article-panel:nth-child(3n-1) .article-more {
		border-color: #FD5B4E;
		
	}
	.article-panel:nth-child(3n) .article-more {
		border-color:#0071de;
	}
</style>
