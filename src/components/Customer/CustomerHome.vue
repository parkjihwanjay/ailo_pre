<template>
	<div id="main">
		<div class="default-form customer-form container">
			<div class="form-title" style="margin: 0 0 27px 0 !important;">
				<div class="form-breadcrumbs">고객센터 &gt; <strong>고객센터</strong></div>
				<div class="form-info"><h2>고객센터</h2></div>
			</div>
			<div class="d-flex">
				<div class="contact">
					<h3>전화문의</h3>
					<p>010 - 0000 - 0000</p>
				</div>

				<div class="contact">
					<h3>이메일문의</h3>
					<p>contact@ailo.kr</p>
				</div>
			</div>
		</div>

		<div class="default-form icon-form container">
			<div class="row">
				<div class="col">
					<router-link :to="{ name: 'CustomerBoard' }">
						<img src="/img/sub/ico-notice.png" alt="공지사항" />
						<h3>공지사항</h3>
						<p>업데이트된 소식을 확인하세요!</p>
					</router-link>
				</div>
				<div class="col">
					<router-link :to="{ name: 'CustomerUsage' }">
						<img src="/img/sub/ico-howusing.png" alt="이용방법" />
						<h3>이용방법</h3>
						<p>더 자세한 이용방법을 안내합니다.</p>
					</router-link>
				</div>
				<div class="col">
					<router-link :to="{ name: 'CustomerFAQ' }">
						<img src="/img/sub/ico-faq.png" alt="FAQ" />
						<h3>FAQ</h3>
						<p>자주 묻는 질문을 확인해보세요</p>
					</router-link>
				</div>
				<div class="col">
					<router-link :to="{ name: 'CustomerFeedback' }">
						<img src="/img/sub/ico-feedback.png" alt="피드백" />
						<h3>피드백</h3>
						<p>운영자에게 건의할 메시지를 보내세요</p>
					</router-link>
				</div>
				<div class="col">
					<router-link :to="{ name: 'CustomerInquiry' }">
						<img src="/img/sub/ico-qna.png" alt="1:1문의사항" />
						<h3>1:1문의사항</h3>
						<p>궁금하신 사항을 질문해주세요!</p>
					</router-link>
				</div>
			</div>
		</div>

		<div class="ad-banner d-flex justify-content-center align-items-center flex-wrap">
			<div>
				<h3>아일로와 함께 2020년을 시작합니다!</h3>
				<p>광고 영역입니다.</p>
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
