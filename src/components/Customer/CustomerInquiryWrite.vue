<template>
	<div class="default-form container">
		<div class="form-title" style="margin: 0 0 14px 0 !important;">
			<div class="form-breadcrumbs">고객센터 &gt; <strong>1:1문의</strong></div>
			<div class="form-info"><h2>1:1 문의 글쓰기</h2></div>
		</div>
		<form>
			<div class="d-flex justify-content-between align-items-end" style="padding-bottom: 35px;">
				<div style="width: 973px;">
					<table
						class="table table-transparent table-board-write"
						width="100%"
						cellpadding="0"
						cellspacing="0"
						border="0"
						summary="회원정보 입력"
					>
						<caption>
							회원정보 수정
						</caption>
						<colgroup>
							<col width="123" />
							<col width="*" />
							<col width="164" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th scope="row">제목</th>
								<td colspan="3">
									<input
										type="text"
										class="w-100"
										title="제목"
										placeholder="디자인 관련 문의드립니다."
										v-model="title"
									/>
								</td>
							</tr>
							<tr>
								<th scope="row">이름</th>
								<td>
									<input
										type="text"
										class="w-100"
										title="이름"
										placeholder="홍길동"
										v-model="author"
									/>
								</td>
								<th scope="row">이메일</th>
								<td>
									<input
										type="text"
										class="w-100"
										title="이메일"
										placeholder="email@email.com"
										v-model="email"
									/>
								</td>
							</tr>
							<tr>
								<th scope="row">분류</th>
								<td colspan="3">
									<select v-model="category">
										<option disabled selected value>분류를 골라주세요</option>
										<option>주문/배송관련</option>
										<option>이용 관련</option>
										<option>회원정보 관련</option>
									</select>
								</td>
							</tr>
							<tr>
								<th scope="row">내용</th>
								<td colspan="3">
									<textarea
										class="w-100"
										placeholder="1:1 문의 내용이 들어갈 영역입니다."
										v-model="content"
									></textarea>
								</td>
							</tr>
							<tr>
								<th scope="row">비밀번호</th>
								<td colspan="3">
									<input
										type="password"
										class="w-100"
										title="비밀번호"
										maxlength="4"
										placeholder="4자리 숫자로 입력하세요."
										v-model="password"
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<input
					type="button"
					class="d-block btn btnBorder btn-shadow"
					style="width: 180px;"
					title="저장"
					value="저장"
					@click="submit()"
				/>
			</div>
		</form>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			title: '',
			author: '',
			email: '',
			category: '',
			content: '',
			password: '',
		};
	},
	methods: {
		async submit() {
			try {
				await axios.post('/service/question', {
					title: this.title,
					author: this.author,
					email: this.email,
					category: this.category,
					content: this.content,
					password: this.password,
				});

				alert('성공적으로 업로드 됐습니다');

				this.$router.push({
					name: 'customer',
				});
			} catch (e) {
				if (e.response.status === 400) {
					alert('모든 내용을 입력해주세요');
				}
			}
		},
	},
};
</script>

<style></style>
