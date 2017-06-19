<template>
  <div class="search">
    <div class="banner"></div>
    <div class="box">
      <h1>显示以下搜索的结果：<span>{{ result }} </span></h1>
      <div class="search-container">
        <div class="artist">
          <h3 class="title">艺人</h3>
          <div class="artist-box" v-for="i in artist">
            <img :src="i.src">
            <span class="name">{{ i.name }}</span>
          </div>
        </div>
        <div class="album">
          <h3 class="title">专辑</h3>
          <div class="boxs">
            <div class="album-box" v-for="i in box">
              <img :src="i.src">
              <p class="title">{{i.title }}</p>
              <p class="name">{{i.name }}</p>
            </div>
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
  import Axios from 'axios'
  export default {
    props: ["todo"],
    data() {
      return {
        artist: [],
        box: [],
        songlist: [],
        result: ""
      }
    },
    mounted() {
      let self = this;
      self.result = self.$route.query.s;
      Axios.get("/search?keywords=" + self.result).then(function(res) { //歌曲
        let songs = res.data.result.songs;
        for (let i = 0; i < songs.length; i++) {
          let time = songs[i].bMusic.playTime;
          let artists = songs[i].artists;
          self.songlist.push({
            title: songs[i].name,
            album: songs[i].album.name,
            artist: songs[i].artists[0].name,
            time: parseInt(time / 1000 / 60) + ":" + (parseInt(time / 1000 % 60) < 10 ? "0" + parseInt(time / 1000 % 60) : parseInt(time / 1000 % 60)),
          })
          for (let n = 1; n < artists.length; n++) {
            self.songlist[i].artist += " / " + songs[i].artists[n].name
          }
        }
      })
      Axios.get("/search?keywords=" + self.result + "&type=100").then( //歌手
        function(res) {
          let artists = res.data.result.artists;
          for (let i = 0; i < 1; i++) {
            self.artist.push({
              src: artists[i].picUrl,
              name: artists[i].name,
            })
          }
        }
      )
      Axios.get("/search?keywords=" + self.result + "&type=10").then( //专辑
        function(res) {
          let album = res.data.result.albums;
          for (let i = 0; i < 8; i++) {
            self.box.push({
              src: album[i].picUrl,
              title: album[i].name,
              name: album[i].artist.name
            })
          }
        }
      )
      // let self = this;
      // let result = self.$store.state.search;
      // let searchArtist = self.$store.state.searchArtist;
      // let searchalbum = self.$store.state.searchalbum;
      // for (let i = 0; i < result.length; i++) {
      //   let artists = result[i].album.artists;
      //   let time = result[i].bMusic.playTime;
      //   self.songlist.push({
      //     title: result[i].name,
      //     album: result[i].album.name,
      //     artist: result[i].artists[0].name,
      //     time: parseInt(time / 1000 / 60) + ":" + (parseInt(time / 1000 % 60) < 10 ? "0" + parseInt(time / 1000 % 60) : parseInt(time / 1000 % 60)),
      //   });
      //   for (let n = 1; n < artists.length; n++) {
      //     self.songlist[i].artist += " / " + result[i].artists[n].name
      //   }
      // };
      // for (let i = 0; i < searchArtist.length; i++) {
      //   self.artist[i].name = searchArtist[i].name;
      //   self.artist[i].src = searchArtist[i].picUrl;
      // }
      // for (let i = 0; i < searchalbum.length; i++) {
      //   self.box.push({
      //     src: searchalbum[i].picUrl,
      //     title: searchalbum[i].name,
      //     title: searchalbum[i].artist.name
      //   })
      // }
    },
    components: {
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
    height: 120px;
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
  .search-container .artist .artist-box img {
    border-radius: 50%;
    margin-bottom: 5px;
    height: 100px;
  }
  .search-container .album .album-box img {
  height:100px;
  }
  .search-container .album .album-box .name {
    color: #3f3f3f
  }
  .search-container .artist .artist-box span,
  .search-container .album .album-box p {
    font-size: 14px;
  }
  .search-container .album .album-box .title {
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100px;
    white-space: nowrap;
  }
  .song {
    margin-top: 30px;
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
  .title{
    margin-bottom:10px;
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
