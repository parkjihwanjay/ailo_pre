<template>
	<div id="main" class="login-bg d-flex justify-content-center align-items-center">
		<div class="login-form">
			<h2>로그인</h2>
			<p>아일로와 함께 나만의 다이어리를 만들어보세요!</p>
			<div class="btn-wrap">
				<a class="btn btnKakaotalk w-100" title="카카오톡으로 로그인" href="#">
					<img src="img/sub/login-kakao.png" alt="카카오톡" />
					카카오톡으로 로그인
				</a>
				<a class="btn btnFacebook w-100" title="페이스북으로 로그인" href="#">
					<img src="img/sub/login-facebook.png" alt="페이스북" />
					페이스북으로 로그인
				</a>
				<a class="btn btnGoogle w-100" title="구글로 로그인" href="#">
					<img src="img/sub/login-google.png" alt="구글" />
					구글로 로그인
				</a>
			</div>
			<p class="text-right">
				<a href="register.html" title="회원가입하기"
					>아직 아일로 회원이 아니신가요? <strong>회원가입하기</strong></a
				>
			</p>
			<a class="link-underline" href="javascript:popup('admin');">관리자 모드</a>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.popup-window {
	margin-top: -79.5px;
}
</style>
