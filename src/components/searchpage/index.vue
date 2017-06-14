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
        <div class="album">
          <h3 class="title">专辑</h3>
          <div class="album-box" v-for="i in box">
            <img :src="i.src">
            <span class="title">{{i.title }}</span>
            <span class="name">{{i.name }}</span>
          </div>
        </div>
      </div>
      <div class="song">
        <ul class="song-list">
          <li class="th">
            <div class="s"></div>
            <div class="th-title">标题</div>
            <div class="th-artist">艺人</div>
            <div class="th-ablum">专辑</div>
            <div class="th-clock"><i class="fa fa-clock-o"></i></div>
          </li>
          <list v-for="i in songlist" :todo="i" :key="i.title"></list>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import list from './list'
  export default {
    props: ["todo"],
    data() {
      return {
        box: [{
          src: "static/images/yogalin.jpg",
          name: "林宥嘉",
          title: "最好青春换你"
        }, {
          src: "static/images/yogalin.jpg",
          name: "林宥嘉",
          title: "最好青春换你"
        }, {
          src: "static/images/yogalin.jpg",
          name: "林宥嘉",
          title: "最好青春换你"
        }, {
          src: "static/images/yogalin.jpg",
          name: "林宥嘉",
          title: "最好青春换你"
        }, {
          src: "static/images/yogalin.jpg",
          name: "林宥嘉",
          title: "最好青春换你"
        }],
        songlist:[{
          title:"致爱Your song",
          artist:"鹿晗",
          ablum:"Xperience",
          time:"3:41"
        },{
          title:"致爱Your song",
          artist:"鹿晗",
          ablum:"Xperience",
          time:"3:41"
        },{
          title:"致爱Your song",
          artist:"鹿晗",
          ablum:"Xperience",
          time:"3:41"
        },{
          title:"致爱Your song",
          artist:"鹿晗",
          ablum:"Xperience",
          time:"3:41"
        }]
      }
    },
    mounted(){
      let self=this;
      console.log(self.$store.state.search)
    },
    components:{
      list
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search .banner {
    background: -moz-linear-gradient( top, #3f3f3f, #181818);
    background: -webkit-linear-gradient( top, #3f3f3f, #181818);
    height: 150px;
  }
  .search .box {
    color: #ffffff;
    padding: 0 25px;
  }
  .search .box h1 {
    color: #A0A0A0;
    font-weight: 500
  }
  .search .box h1 span {
    color: #ffffff;
  }
  .search-container {
    margin-top: 50px;
    display: inline-flex;
    width: 100%
  }
  .search-container .artist {
    flex-grow: 1
  }
  .search-container .album {
    flex-grow: 5
  }
  .search-container .artist .artist-box {
    height: 100px;
    width: 100px;
    text-align: center;
    display: inline-block;
  }
  .search-container .album .album-box {
    height: 100px;
    width: 100px;
    margin-right: 20px;
    display: inline-block;
  }
  .title {
    margin-bottom: 20px;
  }
  .search-container .artist .artist-box img {
    border-radius: 50%;
    margin-bottom: 5px;
  }
  .search-container .album .album-box img {
    margin-bottom: 5px;
  }
  .search-container .album .album-box .name {
    color: #3f3f3f
  }
  .search-container .artist .artist-box span,
  .search-container .album .album-box span {
    font-size: 14px;
  }
  .song{
    margin-top:30px;
  }
  .song-list .th {
    border-bottom: 1px solid #282828;
    padding: 5px 0;
  }
  .song-list .th div {
    color: #7c7c7c;
    display: inline-block;
    font-size: 14px;
  }
  .s {
    width: 5%;
  }
  .th-title {
    width: 30%;
  }
  .th-artist {
    width: 30%;
  }
  .th-ablum {
    width: 22%;
  }
  .th-clock {
    width: 7%;
  }
</style>
