<template>
  <div>
    <van-nav-bar
      title="帮助中心"
      left-arrow
    ></van-nav-bar>
    <van-search placeholder="请输入您的疑问关键词" v-model="searchKey" />
      <div v-for="(qaList, index) in list" class="qalist">
        <h5 v-show="(qaList.questiones.length > 0)">{{qaList.categaryTitle}}</h5>
        <van-collapse v-model="activeNames">
          <van-collapse-item  v-for="(item,qindex) in qaList.questiones" :key="index + qindex" :name="index+ 'h' + qindex">
            <div slot="title"><img class="icon_img" src="../../assets/imgs/ic_help_wen@2x.png"> {{item.question}}</div>
            {{item.answer}}
          </van-collapse-item>
        </van-collapse>
      </div>
  </div>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {
        searchKey: '',
        isLoading: false,
        hotQues:[],
        activeNames: [],
        list: [],
        loading: false,
        finished: false}
      },
    watch: {
    },
    methods: {
      onclick_search(){
        this.$toast('点击');
      },
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isLoading = false;
        }, 500);
      }
    },
    mounted: function () {
      var self = this;
      this.$api.helpAssort().then(response =>{
        if(response.data.success){
          self.list = response.data.datas.qaList;
          self.hotQues = response.data.datas.hotQues;
        }
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
</script>

<style scoped>
.qalist h5{
  margin-top:10px;
  line-height: 44px;
  font-weight: 700;
  padding-left: 4vw;
  height: 12vw;
  font-size: 4.267vw;
  background: #fff;
  color: #333;
}
  .icon_img{
    display: inline-block;
    border-radius: 4px;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-right: 10px;
  }
</style>
