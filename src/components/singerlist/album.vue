<template>
  <div class="same-singer">
    <h3>热门50首</h3>
    <ul class="singer-list">
      <li class="th">
        <div class="s"></div>
        <div class="th-title">标题</div>
        <div class="th-artist">艺人</div>
        <div class="th-ablum">专辑</div>
        <div class="th-clock"><i class="fa fa-clock-o"></i></div>
      </li>
      <list v-for="i in Top50" :todo="i" :key="i.title"></list>
    </ul>
  </div>
</template>

<script>
  import Axios from 'axios'
  import list from './list'
  export default {
    props: ["todo"],
    data() {
      return {
        Top50: [],
      }
    },
    beforeMount() {
      let self = this;
      let id = self.$route.params.sid;
      Axios.get("/artist/album?id=" + id + "&limit=50").then(
        function(res) {
          let hotAlbums=res.data.hotAlbums;
          console.log(res)
          for(let i =0;i<=hotAlbums.length;i++){
            self.Top50.push({
              artist:hotAlbums[i].artist.name,
              ablum:hotAlbums[i].name
            })
          }
        }
      )
    },
    components: {
      list
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .same-singer {
    margin-top: 20px;
  }
  .same-singer h3 {
    border-bottom: 2px solid #282828;
    color: #f3f3f3;
    letter-spacing: 1px;
    padding-bottom: 10px;
  }
  .th {
    border-bottom: 1px solid #282828;
    padding: 5px 0;
  }
  .th div {
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
