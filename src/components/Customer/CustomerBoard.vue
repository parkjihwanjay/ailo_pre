<template>
  <div id="main">
        
        <div class="default-form container">
            
            <div class="form-title">
                <div class="form-breadcrumbs">고객센터 &gt; <strong>공지사항</strong></div>
                <div class="form-info"><h2>공지사항</h2></div>
            </div>
            <table class="table table-board-list" width="100%" cellpadding="0" cellspacing="0" border="0">
                <coglroup>
                    <col width="3%" />
                    <col width="*" />
                    <col width="112" />
                </coglroup>
                <thead>
                    <tr>
                        <th scope="col" class="text-center">순번</th>
                        <th scope="col">제목</th>
                        <th scope="col" class="text-center">일자</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(notice, index) in list" :key="index">
                        <td class="number">{{index+1}}</td>
                        <td class="subject"><a @click="clickTitle(notice, index)" :title="notice.title">{{notice.title}}</a></td>
                        <td class="date">{{notice.createdAt | moment("YYYY-MM-DD")}}</td>
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
        url : '/service/notice',
      }
    },
    methods : {
        clickTitle(notice, index){
            this.$router.push({
                name : 'CustomerBoardRead',
                params : { notice, index },
            })
        }
    }
};
</script>

<style scoped>

td{
    cursor: pointer;
}
</style>