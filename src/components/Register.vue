<template>
	<div id="main">
		<div class="register-form container">
			<h2>회원가입</h2>
			<p>아일로와 함께 나만의 다이어리를 만들어보세요!</p>
			<form>
				<div class="register-wrap d-flex flex-wrap justify-content-between">
					<div class="profile">
						<div class="img" style="background-image: url(img/sub/profile-sample.png);"></div>
						<a href="#" class="프로필 사진 설정하기"
							><img src="img/sub/register-camera.png" alt="사진설정"
						/></a>
					</div>
					<div style="width: 505px;">
						<table
							class="table table-transparent"
							width="100%"
							cellpadding="0"
							cellspacing="0"
							border="0"
							summary="회원정보 입력"
						>
							<caption>
								회원정보 입력
							</caption>
							<colgroup>
								<col width="89" />
								<col width="*" />
								<col width="89" />
								<col width="159" />
							</colgroup>
							<tbody>
								<tr>
									<th scope="row">이름</th>
									<td colspan="3"><input type="text" class="w-100" title="이름" /></td>
								</tr>
								<tr>
									<th scope="row">생년월일</th>
									<td>
										<input
											type="text"
											class="w-100"
											title="생년월일"
											placeholder="YYYY - MM - DD"
											data-type="date"
										/>
									</td>
									<th scope="row">성별</th>
									<td>
										<div class="d-flex">
											<label class="d-block w-50"
												><input name="gender" type="radio" title="남성" value="male" />남</label
											>
											<label class="d-block w-50"
												><input name="gender" type="radio" title="여성" value="female" />여</label
											>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<table
						class="table table-transparent"
						width="100%"
						cellpadding="0"
						cellspacing="0"
						border="0"
						summary="회원정보 입력"
					>
						<caption>
							회원정보 입력
						</caption>
						<colgroup>
							<col width="121" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th scope="row">휴대폰 번호</th>
								<td colspan="3">
									<div class="input-link">
										<input type="text" class="w-100" title="이름" data-type="phone" />
										<a href="#">인증</a>
									</div>
								</td>
							</tr>
							<tr>
								<th scope="row">이메일</th>
								<td><input type="text" title="이메일" /></td>
							</tr>
							<tr>
								<th scope="row" rowspan="2">주소</th>
								<td>
									<div class="input-link">
										<input type="text" class="w-100" title="기본주소" />
										<a href="#">우편번호찾기</a>
									</div>
								</td>
							</tr>
							<tr>
								<td><input type="text" class="w-100" title="상세주소" /></td>
							</tr>
							<tr>
								<th>자체 이용약관</th>
								<td>
									<div class="term">
										Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
										Ipsum has been the industry's standard dummy text ever since the 1500s, when an
										unknown printer took a galley of type and scrambled it to make a type specimen
										book. It has survived not only five centuries, but also the leap into electronic
										typesetting, remaining essentially unchanged. It was popularised in the 1960s
										with the release of Letraset sheets containing Lorem Ipsum passages, and more
										recently with desktop publishing software like Aldus PageMaker including
										versions of Lorem Ipsum.
									</div>
									<div>
										<label><input type="checkbox" title="약관 동의" /> 위 약관에 동의합니다.</label>
									</div>
									<div>
										<label
											><input type="checkbox" title="마케팅 수신 동의" /> (선택) 마케팅 수신에
											동의합니다.</label
										>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="text-center">
					<input type="submit" class="btn btnColor" title="입력한 정보로 회원가입" value="완료" />
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
