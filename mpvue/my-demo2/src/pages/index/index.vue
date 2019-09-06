
<template>
  <div class="listContainer">
    <swiper indicator-dots indicator-color="white" indicator-active-color="green" autoplay>
      <swiper-item>
        <img src="/static/images/banner1.png" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/images/banner2.png" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/images/banner3.png" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/images/banner4.png" alt="">
      </swiper-item>
    </swiper>
    <div>
      <indexTemplate v-for="(item,index) in listTmp" :key="index" :item="item" :index="index"></indexTemplate>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import indexTemplate from '../components/index_template/index_template'
  export default {
    components: {indexTemplate},
    data() {
      return {
        listTemp:[]
      }
    },
    beforeMount(){
      //分发action修改状态
      this.$store.dispatch('getList')
    },
    computed:{
      //映射状态到本组件
      ...mapState(['listTmp'])
    },
    mounted(){
     // this.init();
    },
    methods:{
       // init(){
       //   this.listTemp= this.$store.state.listTmp;
       //   console.log(this.listTemp);
       // }

    }

  }
</script>

<style scoped>
  page {
    background: #8ed145;
  }

  .listContainer img{
    width: 100%;
  }

</style>
