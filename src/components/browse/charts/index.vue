<template>
  <div class="chasts">
    <div class="title">
      <span class="s">Featured Charts</span>
    </div>
    <div class="list"><guittar-list v-for="i in list" :todo="i" :key="i.title"></guittar-list></div>
  </div>
</template>

<script>
  import guittarList from '../../general/guittar-list'
  export default {
    components: {
      guittarList
    },
    data() {
      return {
        list: [{
          title: "美国Billboard周榜周榜",
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
</style>
