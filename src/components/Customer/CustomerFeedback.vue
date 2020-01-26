<template>
	<div class="default-form container">
		<div class="form-title" style="margin: 0 0 14px 0 !important;">
			<div class="form-breadcrumbs">고객센터 &gt; <strong>피드백</strong></div>
			<div class="form-info"><h2>피드백</h2></div>
		</div>
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
							<th scope="row">이름</th>
							<td>
								<input type="text" class="w-100" title="이름" placeholder="홍길동" v-model="name" />
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
							<th scope="row">제목</th>
							<td colspan="3">
								<input
									type="text"
									class="w-100"
									title="제목"
									placeholder="피드백 제목이 들어갈 영역입니다."
									v-model="title"
								/>
							</td>
						</tr>
						<tr>
							<th scope="row">분류</th>
							<td colspan="3">
								<select v-model="category" style="width:100%;height:100%;">
									<option disabled selected value>분류를 골라주세요</option>
									<option>서비스 개선</option>
									<option>서비스 개선2</option>
									<option>서비스 개선3</option>
								</select>
								<!-- <div>
                                            <a class="up" href="#" title="위로"><img src="/img/sub/select-up.jpg" alt="위" /></a>
                                            <a class="down" href="#" title="아래로"><img src="/img/sub/select-down.jpg" alt="아래" /></i></a>
                                        </div> -->
								<!-- <ul>
										<li>서비스 개선</li>
									</ul> -->
							</td>
						</tr>
						<tr>
							<th scope="row">내용</th>
							<td colspan="3">
								<textarea
									class="w-100"
									style="height: 410px;"
									placeholder="피드백 내용이 들어갈 영역입니다."
									v-model="content"
								></textarea>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<a
				class="d-block btn btnColor btn-shadow"
				style="width: 180px;"
				href="#"
				title="보내기"
				@click="submit()"
				>보내기</a
			>
		</div>
	</div>
</template>

<script>
import whiteHeader from '@/mixin/whiteHeader.js';
import axios from 'axios';

export default {
	data() {
		return {
			name: '',
			email: '',
			category: '',
			title: '',
			content: '',
		};
	},
	mixins: [whiteHeader],
	methods: {
		async submit() {
			await axios.post('/service/feedback', {
				name: this.name,
				email: this.email,
				category: this.category,
				title: this.title,
				content: this.content,
			});
		},
	},
};
</script>

<style></style>
