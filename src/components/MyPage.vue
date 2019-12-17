<template>
<div id="main">

        <div class="default-form container">
            <div class="form-title" style="margin: 0 0 14px 0 !important;">
                <div class="form-breadcrumbs">마이페이지 &gt; <strong>마이페이지</strong></div>
                <div class="form-info"><h2>회원정보</h2></div>
            </div>
            <form>
                <div class="mypage-profile d-flex jus align-items-stretch">
                    <div class="profile-img-edit">
                        <div class="img" style="background-image: url(img/sub/profile-sample.png);"></div>
                        <a href="#" class="프로필 사진 설정하기"><img src="img/sub/register-camera.png" alt="사진설정" /></a>
                    </div>
                    <div>
                        <table class="table table-transparent" width="100%" cellpadding="0" cellspacing="0" border="0" summary="회원정보 입력">
                            <caption>회원정보 수정</caption>
                            <colgroup>
                                <col width="89">
                                <col width="319">
                                <col width="89">
                                <col width="319">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th scope="row">이름</th>
                                    <td colspan="3"><input type="text" v-model="name" style="width: 638px;" title="이름"></td>
                                </tr>
                                <tr>
                                    <th scope="row">생년월일</th>
                                    <td><input type="text" class="w-100" v-model="dateBirth" title="생년월일" placeholder="YYYY - MM - DD" @keyup="dateKeyup()" ></td>
                                    <th scope="row">성별</th>
                                    <td>
                                        <div class="d-flex">
                                            <label class="d-block" style="width: 64px;"><input name="gender" type="radio" v-model="gender" value="male" title="남성" phoneNum="male" />남</label>
                                            <label class="d-block" style="width: 64px;"><input name="gender" type="radio" v-model="gender" value="female" title="여성" phoneNum="female" />여</label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">휴대폰 번호</th>
                                    <td colspan="3">
                                        <div class="input-link">
                                            <input type="text" v-model="phoneNum" @keyup="phoneKeyup()" class="w-100" title="이름" data-type="phone" />
                                            <a href="#">인증</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">이메일</th>
                                    <td colspan="3"><input type="text" v-model="email" class="w-100" title="이메일" /></td>
                                </tr>
                                <tr>
                                    <th scope="row" rowspan="2">주소</th>
                                    <td colspan="3">
                                        <div class="input-link">
                                            <input type="text" class="w-100" title="기본주소" v-model="postcode"/>
                                            <a href="#" @click.prevent="findPostCode()">우편번호찾기</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2"><input type="text" class="w-100" title="주소" v-model="roadAddress"/></td>
                                    <td colspan="1"><input type="text" class="w-100" title="상세주소" v-model="detailAddress"/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="d-flex align-items-end">
                        <a class="btn btnColor btn-shadow w-100" href="#" title="수정">수정</a>
                    </div>
                </div>
            </form>
        </div>
        
        <div class="default-form order-form container" style="min-height: 0;">
            
            <div class="form-title d-flex justify-content-between align-items-end">
                <div class="d-flex align-items-end">
                    <div class="form-info"><h2>주문정보</h2></div>
                    <div class="table-outer-caption"><strong>주문 완료(예정)상품 총 1개</strong></div>
                </div>
                <div>
                    <a class="d-block text-primary table-outer-caption" href="order-list.html" title="더보기"><strong>더보기 &gt;</strong></a>
                </div>
            </div>
            <table class="table" width="100%" cellpadding="0" cellspacing="0" border="0">
                <coglroup>
                    <col width="25%" />
                    <col width="*" />
                    <col width="11%" />
                    <col width="11%" />
                    <col width="11%" />
                </coglroup>
                <thead>
                    <tr>
                        <th scope="col">상품명</th>
                        <th scope="col">상품정보</th>
                        <th scope="col" class="text-center">상품금액</th>
                        <th scope="col" class="text-center">수량</th>
                        <th scope="col" class="text-center">주문금액</th>
                        <th scope="col" class="text-center">배송현황</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            <div class="d-flex align-items-center">
                                <div class="thumb"></div>
                                <div>
                                    <div class="title">길동's 2020 Diary</div>
                                    <a href="javascript:popup('diary');" class="link-underline">자세히 보기</a>
                                </div>
                            </div>
                        </th>
                        <td>
                            <table class="table table-nostyle table-reverse-strong">
                                <tbody>
                                    <tr>
                                        <th scope="row">주문구분</th>
                                        <td>프리오더</td>
                                        <th scope="row">제본방법</th>
                                        <td>양장</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">사이즈</th>
                                        <td>A5</td>
                                        <th scope="row">커버</th>
                                        <td>하드</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">페이지수</th>
                                        <td>280 P</td>
                                        <th scope="row">추가옵션</th>
                                        <td>각인, 구분선</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td class="text-center">50,000원</td>
                        <td class="text-center">1개</td>
                        <td class="text-center"><strong>50,000원</strong></td>
                        <td class="text-center">
                            <strong>배송중</strong><br />

                            <!-- <a href="https://tracker.delivery/#/:carrier_id/:track_id" class="text-primary link-underline" target="_blank">배송조회</a> -->
                            <a href="https://tracker.delivery/#/kr.epost/1111111111111" class="text-primary link-underline" target="_blank">배송조회</a>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
		return {
            name : '',
            email : '',
            dateBirth : '',
            phoneNum : '',
            gender : '',
			postcode: '',
			roadAddress: '',
			jibunAddress: '',
			detailAddress: '',
			extraAddress: '',
			// guide: '',
		};
    },
    async created(){
        this.$store.commit('SET_LOADING', true);
        try{
            const profile = await axios.get('/users/me');

            this.name = profile.data.name;
            this.email = profile.data.email;
            // this.dateBirth = profile.data.birthday;
            this.phoneNum = profile.data.phoneNum;
            this.gender = profile.data.gender;

            console.log(profile);
        }catch(e){
            console.log(e);
        }
    },
    mounted(){
        this.$store.commit('SET_LOADING', false);
    },  
	methods: {
		findPostCode() {
			new daum.Postcode({
				oncomplete: data => {
					console.log();
					// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

					// 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
					// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
					// let roadAddr = data.roadAddress; // 도로명 주소 변수
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
					this.roadAddress = data.roadAddress;
					this.jibunAddress = data.jibunAddress;

					// 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
					if (data.roadAddress !== '') {
						this.extraAddress = extraRoadAddr;
					} else {
						this.extraAddress = '';
					}

					// let guideTextBox = this.$refs.guide;

					// // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
					// if (data.autoRoadAddress) {
					// 	let expRoadAddr = data.autoRoadAddress + extraRoadAddr;
					// 	guideTextBox.textContent = '(예상 도로명 주소 : ' + expRoadAddr + ')';
					// 	guideTextBox.style.display = 'block';
					// } else if (data.autoJibunAddress) {
					// 	let expJibunAddr = data.autoJibunAddress;
					// 	guideTextBox.textContent = '(예상 지번 주소 : ' + expJibunAddr + ')';
					// 	guideTextBox.style.display = 'block';
					// } else {
					// 	guideTextBox.textContent = '';
					// 	guideTextBox.style.display = 'none';
					// }
				},
			}).open();
        },
        dateKeyup(){
      if( this.dateBirth.length > 10){
            this.dateBirth = this.dateBirth.substr(0, 10);
        }
        let val         = this.dateBirth.replace(/\D/g, '');
        let original    = this.dateBirth.replace(/\D/g, '').length;
        let conversion  = '';
        for(let i=0;i<2;i++){
            if (val.length > 4 && i===0) {
                conversion += val.substr(0, 4) + '-';
                val         = val.substr(4);
            }
            else if(original>6 && val.length > 2 && i===1){
                conversion += val.substr(0, 2) + '-';
                val         = val.substr(2);
            }
        }
        conversion += val;
        this.dateBirth = conversion;
    },
    phoneKeyup(){
      if( this.phoneNum.length > 13){
            this.phoneNum = this.phoneNum.substr(0, 13);
        }
        let val         = this.phoneNum.replace(/\D/g, '');
        let original    = this.phoneNum.replace(/\D/g, '').length;
        let conversion  = '';
        for(let i=0;i<2;i++){
            if (val.length > 3 && i===0) {
                conversion += val.substr(0, 3) + '-';
                val         = val.substr(3);
            }
            else if(original>7 && val.length > 4 && i===1){
                conversion += val.substr(0, 4) + '-';
                val         = val.substr(4);
            }
        }
        conversion += val;
        this.phoneNum = conversion;
      
    },
	},
};
</script>

<style></style>
