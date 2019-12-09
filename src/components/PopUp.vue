<template>
	<div id="popup">
		<div id="popup_window_prepare" class="popup-window">
			<div class="popup-close"></div>
			<div class="popup-wrap">
				<div class="inner">
					<img src="img/common/popup-warning.png" alt="Warning" />
					<h2>준비중입니다!</h2>
					<p>빠른 시일 내에 찾아뵙겠습니다.</p>
				</div>
			</div>
		</div>
		<div id="popup_window_admin" class="popup-window">
			<div class="popup-close"></div>
			<div class="popup-wrap">
				<div class="inner">
					<form>
						<h2>관리자모드</h2>
						<p>비밀번호를 입력하시오</p>
						<input type="password" />
						<a class="btn btnBorder" title="관리자 로그인">관리자 로그인</a>
					</form>
				</div>
			</div>
		</div>
		<div id="popup_window_inquiry" class="popup-window">
			<div class="popup-close"></div>
			<div class="popup-wrap">
				<div class="inner">
					<form>
						<h2>1:1문의 비밀번호</h2>
						<p>비밀번호를 입력하시오</p>
						<input type="password" />
						<a class="btn btnBorder" title="확인">확인</a>
					</form>
				</div>
			</div>
		</div>
		<div id="popup_window_diary" class="popup-window">
			<div class="popup-close"></div>
			<div class="popup-wrap">
				<div class="inner">
					<form>
						<h2>다이어리 확인하기</h2>
						<p>길동's 2020 Diary</p>
						<p class="text-right">2020.01.01 ~ 2020.06.30<br />총 200페이지</p>

						<div id="diary-slot">
							<ol>
								<li>
									<a href="#" title="이전으로"
										><img src="img/common/popup-arrow-left.png" alt="이전"
									/></a>
								</li>
								<li>
									<a href="#" title="다음으로"
										><img src="img/common/popup-arrow-right.png" alt="다음"
									/></a>
								</li>
							</ol>
						</div>
						<div id="diary-progress" class="d-flex justify-content-between align-items-center">
							<div>
								<label><input type="radio" /> 주문할 다이어리 페이지를 모두 확인하였습니다.</label>
							</div>
							<div>
								<a class="btn btnBorder" title="수정하기">수정하기</a>
								<a class="btn btnColor" title="적용하기">적용하기</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
