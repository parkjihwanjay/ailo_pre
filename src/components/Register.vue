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
											@keyup="keyupBirthday($event)"
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
										<input
											type="text"
											class="w-100"
											title="이름"
											data-type="phone"
											@keyup="keyupPhone($event)"
										/>
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
								<input type="text" id="sample4_postcode" placeholder="우편번호" :value="postcode" />
								<input
									type="button"
									@click="sample4_execDaumPostcode()"
									value="우편번호 찾기"
								/><br />
								<input
									type="text"
									id="sample4_roadAddress"
									placeholder="도로명주소"
									:value="roadAddress"
								/>
								<input
									type="text"
									id="sample4_jibunAddress"
									placeholder="지번주소"
									:value="jibunAddress"
								/>
								<span ref="guide" style="color:#999;display:none"></span>
								<input
									type="text"
									id="sample4_detailAddress"
									placeholder="상세주소"
									:value="detailAddress"
								/>
								<input
									type="text"
									id="sample4_extraAddress"
									placeholder="참고항목"
									:value="extraAddress"
								/>
								<!-- <td>
									<div class="input-link">
										<input type="text" class="w-100" title="기본주소" />
										<a href="#">우편번호찾기</a>
									</div>
								</td> -->
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
export default {
	data() {
		return {
			postcode: '',
			roadAddress: '',
			jibunAddress: '',
			detailAddress: '',
			extraAddress: '',
			guide: '',
		};
	},
	methods: {
		sample4_execDaumPostcode() {
			new daum.Postcode({
				oncomplete: data => {
					console.log();
					// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

					// 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
					// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
					let roadAddr = data.roadAddress; // 도로명 주소 변수
					let extraRoadAddr = ''; // 참고 항목 변수

					// 법정동명이 있을 경우 추가한다. (법정리는 제외)
					// 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
					if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
						extraRoadAddr += data.bname;
					}
					// 건물명이 있고, 공동주택일 경우 추가한다.
					if (data.buildingName !== '' && data.apartment === 'Y') {
						extraRoadAddr += extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName;
					}
					// 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
					if (extraRoadAddr !== '') {
						extraRoadAddr = ' (' + extraRoadAddr + ')';
					}

					// 우편번호와 주소 정보를 해당 필드에 넣는다.
					this.postcode = data.zonecode;
					this.roadAddress = roadAddr;
					this.jibunAddress = data.jibunAddress;

					// 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
					if (roadAddr !== '') {
						this.extraAddress = extraRoadAddr;
					} else {
						this.extraAddress = '';
					}

					let guideTextBox = this.$refs.guide;

					// 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
					if (data.autoRoadAddress) {
						let expRoadAddr = data.autoRoadAddress + extraRoadAddr;
						guideTextBox.textContent = '(예상 도로명 주소 : ' + expRoadAddr + ')';
						guideTextBox.style.display = 'block';
					} else if (data.autoJibunAddress) {
						let expJibunAddr = data.autoJibunAddress;
						guideTextBox.textContent = '(예상 지번 주소 : ' + expJibunAddr + ')';
						guideTextBox.style.display = 'block';
					} else {
						guideTextBox.textContent = '';
						guideTextBox.style.display = 'none';
					}
				},
			}).open();
		},
		keyupBirthday(e) {
			let value = e.target.value;
			if (value.length > 10) {
				value = value.substr(0, 10);
			}
			let val = value.replace(/\D/g, '');
			let original = value.replace(/\D/g, '').length;
			let conversion = '';
			for (let i = 0; i < 2; i++) {
				if (val.length > 4 && i === 0) {
					conversion += val.substr(0, 4) + '-';
					val = val.substr(4);
				} else if (original > 6 && val.length > 2 && i === 1) {
					conversion += val.substr(0, 2) + '-';
					val = val.substr(2);
				}
			}
			conversion += val;
			e.target.value = conversion;
		},
		keyupPhone(e) {
			let value = e.target.value;
			if (value.length > 13) {
				value = value.substr(0, 13);
			}
			let val = value.replace(/\D/g, '');
			let original = value.replace(/\D/g, '').length;
			let conversion = '';
			for (let i = 0; i < 2; i++) {
				if (val.length > 3 && i === 0) {
					conversion += val.substr(0, 3) + '-';
					val = val.substr(3);
				} else if (original > 7 && val.length > 4 && i === 1) {
					conversion += val.substr(0, 4) + '-';
					val = val.substr(4);
				}
			}
			conversion += val;
			e.target.value = conversion;
		},
	},
};
</script>

<style></style>
