<template>
  <div class="default-form container">
      <div class="form-title">
          <div class="form-breadcrumbs">고객센터 &gt; <strong>공지사항</strong></div>
          <div class="d-flex justify-content-between align-items-center">
              <div class="form-info"><h2>공지사항</h2></div>
              <router-link class="d-block text-primary link-underline" to="/customer/board" title="목록보기">목록보기</router-link>
          </div>
      </div>
      <table class="table table-board-read" width="100%" cellpadding="0" cellspacing="0" border="0">
          <coglroup>
              <col width="90" />
              <col width="*" />
              <col width="112" />
          </coglroup>
          <thead>
              <tr>
                  <th class="number"><strong style="color: #747e80;">{{index+1}}</strong></th>
                  <th class="subject"><strong style="color: #464855;">{{notice.title}}</strong></th>
                  <th class="text-center pl-0 pr-0">{{notice.createdAt | moment("YYYY-MM-DD")}}</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td class="cont" colspan="3">
                      <div>
                          {{notice.content}}
                      </div>
                  </td>
              </tr>
          </tbody>
      </table>
      <table class="table pagination-list" width="100%" cellpadding="0" cellspacing="0" border="0">
          <coglroup>
              <col width="9.5%" />
              <col width="*" />
              <col width="112" />
          </coglroup>
          <!-- <tbody>
              <tr>
                  <td><a href="#" class="prev" title="이전 글 보기">이전 글</a></td>
                  <td><a href="#" title="'[10월 업데이트] 10월 업데이트 샘플 텍스트 0.2버전' 글 보기">[10월 업데이트] 10월 업데이트 샘플 텍스트 0.2버전</a></td>
                  <td>2019-01-01</td>
              </tr>
              <tr>
                  <td><a href="#" class="next" title="다음 글 보기">다음 글</a></td>
                  <td><a href="#" title="'[10월 업데이트] 10월 업데이트 샘플 텍스트 0.2버전' 글 보기">[10월 업데이트] 10월 업데이트 샘플 텍스트 0.2버전</a></td>
                  <td>2019-01-01</td>
              </tr>
          </tbody> -->
      </table>
  </div>
</template>

<script>
export default {
  name : 'CustomerBoardRead',
  data(){
    return {
      notice : {},
      index : '',
    }
  },
  created(){
    this.notice = {...this.$route.params.notice};
    this.index = this.$route.params.index;
  }
}
</script>

<style>

</style>