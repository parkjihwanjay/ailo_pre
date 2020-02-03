<template>
	<div id="main">
		<div class="how-using">
			<h2 class="title">이용방법</h2>
			<p class="descript">
				I have hinted that I would often jerk poor Queequeg from between the whale and the
				<br />ship—where he would occasionally.
			</p>

			<div class="container">
				<div class="d-flex justify-content-between align-items-center">
					<dl class="d-flex justify-content-between flex-wrap">
						<dt><img src="/img/sub/notebook.png" title="Notebook" /></dt>
						<dd>
							<h3>01. 다이어리 만들기</h3>
							<p>다이어리의 기본 설정을 <br />결정해주세요</p>
						</dd>

						<dt><img src="/img/sub/computer-graphic.png" title="Computer graphic" /></dt>
						<dd>
							<h3>02. 기록 및 꾸미기</h3>
							<p>다이어리에 일상을 기록하고 <br />나만의 스타일로 꾸며주세요</p>
						</dd>

						<dt><img src="/img/sub/product.png" title="Product" /></dt>
						<dd>
							<h3>03. 주문하기</h3>
							<p>마음껏 제작한 다이어리를 <br />실물로 간직하세요</p>
						</dd>
					</dl>

					<div class="mockup">
						<iframe
							width="631"
							height="428"
							src="/img/사용방법.mp4"
							frameborder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>

						<!-- <img src="/img/sub/video-thumb.jpg" alt="동영상 썸네일" /> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import whiteHeader from '@/mixin/whiteHeader.js';
export default {
	mixins: [whiteHeader],
};
</script>

<style></style>
