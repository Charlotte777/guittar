<template>
  <div class="search">
    <div class="banner"></div>
    <div class="box">
      <h1>显示以下搜索的结果：<span>There for you </span></h1>
      <div class="search-container">
        <div class="artist">
          <h3 class="title">艺人</h3>
          <div class="artist-box">
            <img src="static/images/lu4.jpg">
            <span class="name">鹿晗</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["todo"],
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search {
    padding-top: 50px;
  }
  .search .banner {
    background: -moz-linear-gradient( top, #3f3f3f, #181818);
    background: -webkit-linear-gradient( top, #3f3f3f, #181818);
    height: 150px;
  } 
  .search .box{
    color:#ffffff;
     padding: 0 25px;
  }
  .search .box h1{
    color:#A0A0A0;
    font-weight: 500
  }
   .search .box h1 span{
    color:#ffffff;
  }
  .search-container{
    margin-top:50px;
  }
  .search-container .artist .artist-box{
    height:100px;
    width:100px;
    text-align: center;
  }
  .search-container .artist h3{
    margin-bottom:20px;
  }
  .search-container .artist .artist-box img{
    border-radius:50%;
    margin-bottom:5px;
  }
  .search-container .artist .artist-box span{
    font-size:14px;
  }
</style>
