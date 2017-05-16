<template>
  <div class="chasts">
    <div class="title">
      <span class="s">Featured Charts</span>
    </div>
    <div class="list">
      <div class="playlist" v-for="i in list">
        <div class="s">
          <img :src="i.img">
          <ul class="opacity">
            <li class="add"></li>
            <li class="play"></li>
            <li class="list"></li>
          </ul>
        </div>
        <h5>{{ i.title }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [{
          title: "美国Billboard周榜",
          img: "/static/images/charts/USA.png",
        }, {
          title: "Beatport全球电子舞曲榜",
          img: "/static/images/charts/Beatport全球电子舞曲榜.png",
        }, {
          title: "Hit FM Top榜",
          img: "/static/images/charts/Hit FM Top榜.png",
        }, {
          title: "iTunes榜",
          img: "/static/images/charts/iTunes榜.png",
        }, {
          title: "KTV唛榜",
          img: "/static/images/charts/KTV唛榜.png",
        }, {
          title: "UK排行榜周榜",
          img: "/static/images/charts/UK排行榜周榜.png",
        }, {
          title: "华语金曲榜",
          img: "/static/images/charts/华语金曲榜.png",
        }, {
          title: "日本Oricon周榜 ",
          img: "/static/images/charts/日本Oricon周榜 .png",
        }, {
          title: "台湾Hito排行榜",
          img: "/static/images/charts/台湾Hito排行榜.png",
        }, {
          title: "云音乐新歌榜",
          img: "/static/images/charts/云音乐新歌榜.png",
        }, {
          title: "网易原创歌曲榜",
          img: "/static/images/charts/网易原创歌曲榜.png",
        },{
          title: "香港电台中文歌曲龙虎榜",
          img: "/static/images/charts/香港电台中文歌曲龙虎榜.png",
        },{
          title: "云音乐飙升榜",
          img: "/static/images/charts/云音乐飙升榜.png",
        },{
          title: "云音乐电音榜",
          img: "/static/images/charts/云音乐电音榜.png",
        },{
          title: "云音乐热歌榜",
          img: "/static/images/charts/云音乐热歌榜.png",
        },{
          title: "中国TOP排行榜(港台榜)",
          img: "/static/images/charts/中国TOP排行榜(港台榜).png",
        },{
          title: "中国TOP排行榜(内地榜)",
          img: "/static/images/charts/中国TOP排行榜(内地榜).png",
        },{
          title: "中国嘻哈榜",
          img: "/static/images/charts/中国嘻哈榜.png",
        }]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .chasts {
    margin-top: 10px;
  }
  .title {
    font-size: 18px;
    padding: 10px 0;
    border-bottom: 1px solid #1B1D22;
  }
  .chasts .playlist {
    display: inline-block;
    margin: 10px 0;
    margin-right: 2.5%;
    width: 18%;
  }
  .chasts .playlist:nth-child(5n+0){
    margin-right: 0;
  }
  .chasts .playlist img {
    max-width: 100%
  }
  .chasts .playlist h5 {
    font-size: 14px;
    margin-top: 5px;
    text-align: center
  }
  .chasts .playlist .opacity {
    -moz-box-align: center;
    -moz-box-pack: justify;
    align-items: center;
    background: rgba(0, 0, 0, 0.8) none repeat scroll 0 0;
    display: flex;
    height: 100%;
    justify-content: space-between;
    padding: 0 30px;
    position: absolute;
    top: 0;
    width: 100%;
    opacity: 0;
    transition: all 0.3s
  }
  .chasts .playlist .opacity:hover {
    opacity: 1
  }
  .chasts .playlist .add:before {
    content: '\e603';
  }
  .chasts .playlist .play:before {
    content: '\e61c';
    font-size: 50px
  }
  .chasts .playlist .list:before {
    content: '\e63e';
  }
  .chasts .playlist .s {
    position: relative;
  }
  .chasts .playlist .s .opacity li {
    display: inline-block;
    font-family: IconFont;
    font-size: 38px;
    cursor: pointer
  }
   @media screen and (max-width:1200px) {
     .chasts .playlist .play:before {
       font-size: 32px
     }
      .chasts .playlist .s .opacity li {
    font-size:20px;}
   }
    @media screen and (max-width:1500px) {
     .chasts .playlist .play:before {
       font-size: 38px
     }
      .chasts .playlist .s .opacity li {
    font-size:26px;}
   }
</style>
