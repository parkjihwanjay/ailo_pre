<template>
	<div id="main">
		<div class="default-form order-form container">
			<div class="form-title">
				<div class="form-breadcrumbs">주문하기 &gt; <strong>주문하기</strong></div>
				<div class="form-info d-flex justify-content-between">
					<h2>주문하기</h2>
					<ul class="form-progress d-flex justify-content-between">
						<li class="on">
							<span></span>
							<p>주문하기</p>
						</li>
						<li>
							<span></span>
							<p>결제하기</p>
						</li>
						<li>
							<span></span>
							<p>결제완료</p>
						</li>
					</ul>
				</div>
			</div>
			<form>
				<div class="table-outer-caption">
					<strong>주문대기상품 총 2개</strong>
				</div>
				<table class="table" width="100%" cellpadding="0" cellspacing="0" border="0">
					<thead>
						<tr>
							<th scope="col" class="text-center">
								<label class="all-check"><input type="checkbox" title="전체선택"/></label>
							</th>
							<th scope="col" class="text-center">상품명</th>
							<th scope="col">상품정보</th>
							<th scope="col">주문정보</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="col" class="text-center">
								<label><input type="checkbox" title="선택"/></label>
							</th>
							<th class="text-center" scope="row">
								<div class="thumb"></div>
								<div>
									<div class="title">길동's 2020 Diary</div>
									<a href="javascript:popup('diary');" class="link-underline">다이어리 확인하기</a>
								</div>
							</th>
							<td>
								<table class="table table-nostyle table-reverse-strong">
									<tbody>
										<tr>
											<th scope="row">주문구분</th>
											<td>프리오더</td>
											<th scope="row">제본방법</th>
											<td>
												<div class="label-btn-form">
													<label><input name="binding" type="radio" title="스프링" />스프링</label>
													<label><input name="binding" type="radio" title="양장" />양장</label>
												</div>
											</td>
										</tr>
										<tr>
											<th scope="row">사이즈</th>
											<td>
												<div class="label-btn-form">
													<label><input name="size" type="radio" title="A5" />A5</label>
													<label><input name="size" type="radio" title="B5" />B5</label>
												</div>
											</td>
											<th scope="row">커버</th>
											<td>
												<div class="label-btn-form">
													<label><input name="cover" type="radio" title="소프트" />소프트</label>
													<label><input name="cover" type="radio" title="하드" />하드</label>
												</div>
											</td>
										</tr>
										<tr>
											<th scope="row">페이지수</th>
											<td>280 P</td>
											<th scope="row">추가옵션</th>
											<td>
												<div class="label-btn-form">
													<label><input type="checkbox" title="각인" />각인</label>
													<label><input type="checkbox" title="구분선" />구분선</label>
													<label><input type="checkbox" title="포켓" />포켓</label>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
							<td>
								<table class="table table-nostyle table-reverse-strong">
									<tbody>
										<tr>
											<th scope="row">주문금액</th>
											<td>50,000원</td>
										</tr>

										<tr>
											<th scope="row">수량</th>
											<td>
												<div class="quantity">
													<input type="text" value="1" disabled />
													<ul>
														<li class="minus"></li>
														<li class="plus"></li>
													</ul>
												</div>
											</td>
										</tr>

										<tr>
											<th scope="row">총금액</th>
											<td style="font-size: 18px;">100,000원</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr>
							<th scope="col" class="text-center">
								<label><input type="checkbox" title="선택"/></label>
							</th>
							<th class="text-center" scope="row">
								<div class="thumb"></div>
								<div>
									<div class="title">길동's 2020 Diary</div>
									<a href="javascript:popup('diary');" class="link-underline">다이어리 확인하기</a>
								</div>
							</th>
							<td>
								<table class="table table-nostyle table-reverse-strong">
									<tbody>
										<tr>
											<th scope="row">주문구분</th>
											<td>프리오더</td>
											<th scope="row">제본방법</th>
											<td>
												<div class="label-btn-form">
													<label><input name="binding" type="radio" title="스프링" />스프링</label>
													<label><input name="binding" type="radio" title="양장" />양장</label>
												</div>
											</td>
										</tr>
										<tr>
											<th scope="row">사이즈</th>
											<td>
												<div class="label-btn-form">
													<label><input name="size" type="radio" title="A5" />A5</label>
													<label><input name="size" type="radio" title="B5" />B5</label>
												</div>
											</td>
											<th scope="row">커버</th>
											<td>
												<div class="label-btn-form">
													<label><input name="cover" type="radio" title="소프트" />소프트</label>
													<label><input name="cover" type="radio" title="하드" />하드</label>
												</div>
											</td>
										</tr>
										<tr>
											<th scope="row">페이지수</th>
											<td>280 P</td>
											<th scope="row">추가옵션</th>
											<td>
												<div class="label-btn-form">
													<label><input type="checkbox" title="각인" />각인</label>
													<label><input type="checkbox" title="구분선" />구분선</label>
													<label><input type="checkbox" title="포켓" />포켓</label>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
							<td>
								<table class="table table-nostyle table-reverse-strong">
									<tbody>
										<tr>
											<th scope="row">주문금액</th>
											<td>50,000원</td>
										</tr>

										<tr>
											<th scope="row">수량</th>
											<td>
												<div class="quantity">
													<input type="text" value="1" disabled />
													<ul>
														<li class="minus"></li>
														<li class="plus"></li>
													</ul>
												</div>
											</td>
										</tr>

										<tr>
											<th scope="row">총금액</th>
											<td style="font-size: 18px;">100,000원</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>

				<div
					class="btn-wrap d-flex justify-content-end align-items-center"
					style="margin-top: 91px;"
				>
					<input type="submit" class="btn btnColor" title="주문하기" value="주문하기" />
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
