<template>
  <div class="main">
    demo1
    <detail-list :content="detail" minHeight="21" :autoHide="false" />
    demo2
    <detail-list :content="detail" minHeight="21" :autoHide="true" />
    demo3
    <detail-list :content="detail" minHeight="21" :autoHide="true" activeClass="active" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      detail: [
        '开机了',
        '我是内容一，好的那颗劳动纪律卡数据库sad九分裤黑回复哈绥纪律卡数据库sad九分裤黑回复哈绥纪律卡数据库sad九分裤黑回复哈绥纪律卡数据库sad九分裤黑回复哈绥芬河科三发送方',
        '我是内容二，好的那颗纪律卡数据库sad九分裤黑回复哈绥纪律卡数据库sad九分裤黑回复哈绥纪律卡数据库sad九分裤黑回复哈绥纪律卡数据库sad九分裤黑回复哈绥纪律卡数据库sad九分裤黑回复哈绥绥芬河科三发送方',
        '我是内容三，好的那颗劳纪律卡数据库sad九分裤黑回复哈绥纪律卡数据库sad九分裤黑回复哈绥纪律卡数据库sad九分裤黑回复哈绥纪律卡数据库sad九分裤黑回复哈绥回复哈绥芬河科三发送方'
      ]
    }
  }
}
</script>

<style lang="scss">
.main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 20px auto;
  width: 400px;
  .detail-list-container .active{
    color: #fff;
    background-color: rgba(0,0,0,0.4);
  }
}

</style>
