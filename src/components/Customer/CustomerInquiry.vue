<template>
  <div class="default-form container">
            
            <div class="form-title">
                <div class="form-breadcrumbs">고객센터 &gt; <strong>1:1문의</strong></div>
                <div class="d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                        <div class="form-info"><h2>1:1문의</h2></div>
                        <a v-for="(cate, index) in categoryList" ref="cate" @click.prevent="clickCate(index)" :key="index" class="btn btnBorder btn-sm btn-off" :title="cate">{{cate}}</a>
                    </div>
                    <div class="d-flex justify-content-between align-items-center" style="width: 404px;">
                        <a class="d-block text-primary link-underline" href="customer-faq-list.html" title="FAQ보기">FAQ보기</a>
                        <a class="btn btnColor btn-md" title="글쓰기" @click="linkToWrite()"><i class="fas fa-pen"></i> 글쓰기</a>
                        <form>
                            <div class="input-link input-link-search">
                                <input type="text" title="검색어" placeholder="검색어 입력" />
                                <input type="image" src="/img/sub/search-ico.jpg" title="검색" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <table class="table table-board-list" width="100%" cellpadding="0" cellspacing="0" border="0">
                <coglroup>
                    <col width="3%" />
                    <col width="*" />
                    <col width="10%" />
                    <col width="12%" />
                    <col width="12%" />
                    <col width="11.5%" />
                </coglroup>
                <thead>
                    <tr>
                        <th scope="col" class="text-center">순번</th>
                        <th scope="col">제목</th>
                        <th scope="col" class="text-center">작성자</th>
                        <th scope="col" class="text-center">작성일자</th>
                        <th scope="col" class="text-center">답변일자</th>
                        <th scope="col" class="text-center">답변상태</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(inquiry, index) in list" :key="index">
                        <td class="number">{{index+1}}</td>
                        <td class="subject lock"><a href="javascript:popup('inquiry');" title="'배송이 언제쯤 올까요?' 글 보기">{{inquiry.title}}</a></td>
                        <td class="writer">{{inquiry.author}}</td>
                        <td class="date">{{inquiry.createdAt | moment("YYYY-MM-DD")}}</td>
                        <td class="date">{{inquiry.updatedAt | moment("YYYY-MM-DD")}}</td>

                        <td class="answer">
                            <span v-show="!inquiry.status" class="answer answer-red">답변대기</span>
                            <span v-show="inquiry.status" class="answer answer-green">답변완료</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <pagination-button :paginationStart="paginationStart" :paginationEnd="paginationEnd" @setSkip="setSkip" @next="next" @previous="previous"></pagination-button>
        </div>
</template>

<script>
import CustomerComponentMixin from '@/mixin/CustomerComponentMixin.js';
import whiteHeader from '@/mixin/whiteHeader.js';
export default {
    mixins: [whiteHeader, CustomerComponentMixin],
    data(){
        return{
            url : '/service/question',
            categoryList : ['카테고리1', '카테고리2', '카테고리3'],
            category : '카테고리1',
        }
    },
    mounted(){
        this.$refs.cate[0].classList.remove("btn-off");
    },
    methods : {
        linkToWrite(){
            this.$router.push({
                name : 'CustomerInquiryWrite',
            })
        },
        clickCate(index){
            for(let i=0; i<this.$refs.cate.length; i++){
                this.$refs.cate[i].classList.add("btn-off");
            }
            this.$refs.cate[index].classList.remove("btn-off");
            this.category = this.categoryList[index];
            this.getList(this.url, this.skip, this.limit);
        },
    }
};
</script>

<style>

</style>