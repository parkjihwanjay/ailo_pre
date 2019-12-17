<template>
	<div id="main">
		<div class="visual">
			<div class="container">
				<h2>당신만을 위한 하루</h2>
				<p>내 손으로 만드는 DIY 다이어리, <img src="/img/main/ailo-icon.png" alt="AILO" /></p>
			</div>
			<input type="button" class="big-button" value="다이어리 작성" @click="showBaseModal()" />
			<!-- <a class="btn btnColor" @click="showBaseModal()" title="다이어리 작성">다이어리 작성</a> -->
			<div class="browser-window d-flex justify-content-center align-items-end">
				<div class="inner"></div>
			</div>
		</div>

		<!-- <div class="mSection best-product">
			<div class="container">
				<h2 class="section-title">최신 / 인기상품</h2>
				<p class="section-descript">
					I have hinted that I would often jerk poor Queequeg from between the<br />whale and the
					ship—where he would occasionally.
				</p>
				<div class="list">
					<ul class="section-nav d-flex justify-content-center">
						<li class="on"><a href="#">테마</a></li>
						<li><a href="#">템플릿</a></li>
						<li><a href="#">스티커</a></li>
					</ul>
					<ul class="row">
						<li class="col col-20-per text-center">
							<div class="thumb">
								<div class="icon best"></div>
								<div
									class="img"
									style="background-image: url(img/main/best-product-sample.png);"
								></div>
							</div>
							<div class="text">
								<a class="like on" title="이 상품을 좋아합니다"
									><img src="img/main/best-product-like.png" alt="하트"
								/></a>
								<h4>테마</h4>
								<h3>10 Mac Menu Bar Apps You Can’t Live Without</h3>
							</div>
						</li>
						<li class="col col-20-per text-center">
							<div class="thumb">
								<div class="icon best"></div>
								<div
									class="img"
									style="background-image: url(img/main/best-product-sample.png);"
								></div>
							</div>
							<div class="text">
								<a class="like" title="이 상품을 좋아합니다"
									><img src="img/main/best-product-like.png" alt="하트"
								/></a>
								<h4>테마</h4>
								<h3>10 Mac Menu Bar Apps You Can’t Live Without</h3>
							</div>
						</li>
						<li class="col col-20-per text-center">
							<div class="thumb">
								<div class="icon new"></div>
								<div
									class="img"
									style="background-image: url(img/main/best-product-sample.png);"
								></div>
							</div>
							<div class="text">
								<a class="like" title="이 상품을 좋아합니다"
									><img src="img/main/best-product-like.png" alt="하트"
								/></a>
								<h4>테마</h4>
								<h3>10 Mac Menu Bar Apps You Can’t Live Without</h3>
							</div>
						</li>
						<li class="col col-20-per text-center">
							<div class="thumb">
								<div class="icon new"></div>
								<div
									class="img"
									style="background-image: url(img/main/best-product-sample.png);"
								></div>
							</div>
							<div class="text">
								<a class="like" title="이 상품을 좋아합니다"
									><img src="img/main/best-product-like.png" alt="하트"
								/></a>
								<h4>테마</h4>
								<h3>10 Mac Menu Bar Apps You Can’t Live Without</h3>
							</div>
						</li>
						<li class="col col-20-per text-center">
							<div class="thumb">
								<div class="icon new"></div>
								<div
									class="img"
									style="background-image: url(img/main/best-product-sample.png);"
								></div>
							</div>
							<div class="text">
								<a class="like" title="이 상품을 좋아합니다"
									><img src="img/main/best-product-like.png" alt="하트"
								/></a>
								<h4>테마</h4>
								<h3>10 Mac Menu Bar Apps You Can’t Live Without</h3>
							</div>
						</li>
					</ul>
				</div>
				<a class="btn btnBorder btnCenter" href="#" title="상품 더보기">상품 더보기</a>
			</div>
		</div> -->

		<div class="mSection how-using-main">
			<div class="container">
				<h2 class="section-title">이용방법</h2>
				<p class="section-descript">
					I have hinted that I would often jerk poor Queequeg from between the<br />whale and the
					ship—where he would occasionally.
				</p>
				<div class="list">
					<ul class="row justify-content-center">
						<li class="col col-3 text-center">
							<div class="icon"><img src="/img/main/notebook.png" alt="다이어리 만들기" /></div>
							<h3>다이어리 만들기</h3>
							<p>다이어리의 기본 설정을 <br />결정해주세요</p>
						</li>
						<li class="col col-3 text-center">
							<div class="icon">
								<img src="/img/main/computer-graphic.png" alt="기록 및 꾸미기" />
							</div>
							<h3>기록 및 꾸미기</h3>
							<p>다이어리에 일상을 기록하고 <br />나만의 스타일로 꾸며주세요</p>
						</li>
						<li class="col col-3 text-center">
							<div class="icon"><img src="/img/main/product.png" alt="주문하기" /></div>
							<h3>주문하기</h3>
							<p>마음껏 제작한 다이어리를 <br />실물로 간직하세요</p>
						</li>
					</ul>
				</div>
				<router-link to="/customer/usage">
					<input class="xl-button btnBorder btnCenter" type="button" value="이용방법 더보기" />
				</router-link>
			</div>
		</div>

		<div class="features d-flex align-items-center justify-content-between">
			<h2 class="blind">Features</h2>
			<div class="decoration">
				<img class="mockup" src="/img/main/diary-mockup.png" alt="데스크톱 시연화면" />
				<img class="browser" src="/img/main/diary-list.png" alt="브라우저 시연화면" />
				<img
					class="package-color"
					src="/img/main/diary-package-color.png"
					alt="보라색 다이어리 패키지"
				/>
				<img
					class="package-gray"
					src="/img/main/diary-package-gray.png"
					alt="회색 다이어리 패키지"
				/>
			</div>
			<div class="text">
				<dl>
					<dt>01. 원하는 구성으로!</dt>
					<dd>다이어리를 커스터마이징 할 수 있어요</dd>

					<dt>02. 원하는 디자인으로!</dt>
					<dd>다이어리를 다채롭게 꾸밀 수 있어요.</dd>

					<dt>03. 온라인 다이어리를 실물로!</dt>
					<dd>커스터마이징 후 바로, 또는 기록 후 주문제작해요.</dd>
				</dl>
				<!-- <router-link class="btn btnBorder" to="/">다이어리 만들기</router-link> -->
				<input
					class="xl-button btnBorder btnCenter"
					type="button"
					value="다이어리 만들기"
					@click="showBaseModal()"
				/>
			</div>
		</div>

		<div class="mSection about-us d-flex align-items-stretch">
			<div>
				<h2 class="section-title">About Us</h2>
				<p class="section-descript">
					왜 자신이 정말 원하는 다이어리는 찾지 못한 채, 기존의 다이어리만을 뒤적거릴까?<br />
					그 이유는 다이어리가 아날로그의 비효율성을 가지고 있고, 자신이 원하는 다이어리를 <br />
					직접 만들어볼 수 있는 기회가 부족하기 때문이라는 결론을 내리게 되었습니다.<br />
					이를 위해 아날로그 다이어리를 온라인 서비스로 구현하고, 커스터마이징과<br />
					주문제작을 통해 아날로그 다이어리의 불편함을 최대한 극복함으로써<br />
					‘소비자의 욕구를 진정으로 채워줄 수 있는 다이어리’를 제작해주는 서비스를 만들고자 합니다.
				</p>
				<!-- <router-link to="#"> -->
				<input
					class="xl-button btnBorder btnCenter"
					@click="showNotReadyModal()"
					type="button"
					value="아일로 이야기"
				/>
				<!-- </router-link> -->
			</div>
			<div class="section-image"></div>
		</div>
	</div>
</template>

<script>
export default {
	// data() {
	// 	return {
	// 		showBaseModal: false,
	// 	};
	// },
	methods: {
		showBaseModal() {
			if (!localStorage.getItem('access_token')) {
				alert('로그인을 먼저 해주세요');
				this.$router.push({ path: '/login' });
			} else {
				// this.$emit('showBaseModal');
				this.$store.commit('SHOW_BASE_MODAL');
			}
		},
		showNotReadyModal() {
			this.$store.commit('SHOW_NOT_READY_MODAL');
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
@import '@/styles/_button.scss';
@keyframes bouncy {
	10% {
		top: 0em;
	}
	20% {
		top: -0.9em;
	}
	23% {
		top: 0em;
	}
	25% {
		top: -0.4em;
	}
	27% {
		top: 0em;
	}
	// 40% {
	// 	top: 0em;
	// }
	// 43% {
	// 	top: -0.9em;
	// }
	// 46% {
	// 	top: 0em;
	// }
	// 48% {
	// 	top: -0.4em;
	// }
	// 50% {
	// 	top: 0em;
	// }
	100% {
		top: 0em;
	}
}
.big-button {
	width: 280px;
	height: 65px;
	border-radius: 40px;
	border: solid 3px $off-purple;
	font-size: 18px;
	font-weight: 420;
	color: $off-white;
	letter-spacing: 2.58px;
	word-spacing: 3px;
	background-color: $off-purple;
	cursor: pointer;
	animation: bouncy 2.5s infinite linear;
	position: relative;
}
.big-button:hover {
	border: solid 3px $off-white;
	background-color: $off-purple;
	color: $off-white;
	transition: 0.5s;
	animation: none;
}
</style>
