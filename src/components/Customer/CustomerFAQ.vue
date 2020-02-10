<template>
  <div id="main">
        
        <div class="default-form container">
            
            <div class="form-title">
                <div class="form-breadcrumbs">고객센터 &gt; <strong>FAQ</strong></div>
                <div class="d-flex align-items-center">
                    <div class="form-info"><h2>자주 묻는 질문 FAQ</h2></div>
                    <a v-for="(cate, index) in categoryList" ref="cate" @click.prevent="clickCate(index)" :key="index" class="btn btnBorder btn-sm btn-off" :title="cate">{{cate}}</a>
                </div>
            </div>
            <table class="table table-board-list table-toggle" width="100%" cellpadding="0" cellspacing="0" border="0">
                <coglroup>
                    <col width="89" />
                    <col width="*" />
                    <col width="119" />
                </coglroup>
                <thead>
                    <tr>
                        <th scope="col" class="text-center">순번</th>
                        <th scope="col" colspan="2">제목</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(faq, index) in list" :key="index" @click="contentToggle(index)">
                        <td class="number">{{index+1}}</td>
                        <td class="subject">
                            <h3>{{faq.title}}</h3>
                            <div :ref="index" class="toggle">{{faq.content}}</div>
                        </td>
                        <td class="toggle-arrow"><img src="/img/sub/toggle-arrow.jpg" alt="내용펼치기 및 내용접기" /></td>
                    </tr>
                </tbody>
            </table>
            <pagination-button :paginationStart="paginationStart" :paginationEnd="paginationEnd" @setSkip="setSkip" @next="next" @previous="previous"></pagination-button>
        </div>
    </div>
</template>

<script>
import whiteHeader from '@/mixin/whiteHeader.js';
import CustomerComponentMixin from '@/mixin/CustomerComponentMixin.js';

export default {
    mixins: [whiteHeader, CustomerComponentMixin],
    data(){
        return{
            url : '/service/faq',
            categoryList : ['카테고리1', '카테고리2', '카테고리3'],
            category : '카테고리1',
        }
    },
    mounted(){
        this.$refs.cate[0].classList.remove("btn-off");
    },
    methods : {
        contentToggle(index){
            const classList = this.$refs[index][0].classList

            if(classList.length){
                this.$refs[index][0].classList.remove('toggle')
            }else{
                this.$refs[index][0].classList.add('toggle')
            }
        },
        clickCate(index){
            for(let i=0; i<this.$refs.cate.length; i++){
                this.$refs.cate[i].classList.add("btn-off");
            }
            this.$refs.cate[index].classList.remove("btn-off");
            this.category = this.categoryList[index];
            this.getList(this.url, this.skip, this.limit);
        },
    },
};
</script>

<style scoped>
</style>