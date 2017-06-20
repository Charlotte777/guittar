<template>
  <div class="guittar">
    <div class="guittar-content">
      <div class="list">
        <ul>
          <li class="browse">
            <ul>
              <li class="active" style="margin: 0;">Browse</li>
            </ul>
          </li>
          <li class="your-music">
            <div class="title">YOUR MUSIC</div>
            <ul>
              <li>Songs</li>
              <li>Albums</li>
              <li>Artists</li>
              <li>Local Flies</li>
            </ul>
          </li>
          <li class="playlists">
            <div class="title">PLAYLIST</div>
          </li>
        </ul>
        <div class="list-player">
          <div class="text">New playlist</div>
          <div class="img"><img :src="src"></div>
        </div>
      </div>
      <center></center>
    </div>
    <player :todo="songInfo"></player>
  </div>
</template>

<script>
  import Player from './player'
  import Center from './center'
  import Axios from 'axios'
  export default {
    data() {
      return {
        src: "/static/images/lu.jpg",
        songInfo: {
          title: '时差 (On Call)',
          singer: 'Lu Han',
          playerInfo: {
            url: null
          }
        }
      }
    },
    beforeMount() {
      let self = this;
      let id = self.$route.query.id;
      console.log(self)
      Axios.get('/music/url?id=' + id).then(
        function(res) {
          self.songInfo.playerInfo.url = res.data.data[0].url;
          self.songInfo.title = self.$route.query.songName;
          self.songInfo.singer = self.$route.query.songArtist;
          self.src = self.$route.query.url;
        }
      )
    },
    components: {
      Player,
      Center
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .guittar .guittar-content .friend {
    height: 100%;
  }
  .guittar .guittar-content .friend .banner {
    background: rgba(0, 0, 0, 0) url("/static/images/friend.jpg") no-repeat scroll center center;
    height: 20%
  }
  .guittar {
    background: #121212;
    color: #fff;
    height: 100%;
  }
  .guittar .guittar-content {
    display: flex;
    height: 90%;
  }
  .guittar .guittar-content .list {
    width: 200px;
    display: inline-flex;
    flex-direction: column;
  }
  .guittar .guittar-content .center {
    flex-grow: 1;
    background-color: #181818;
  }
  .guittar .guittar-content .friend {}
  .guittar .guittar-content .list>ul {
    color: #A0A0A0;
    list-style: none;
    text-align: left;
    font-size: 15px;
    flex-grow: 1;
  }
  .guittar .guittar-content .list .hr {
    background: #A0A0A0;
    height: 1px;
    margin-top: 50px;
  }
  .guittar .guittar-content .list .browse {
    margin-top: 10px;
  }
  .guittar .guittar-content .list .your-music {
    margin-top: 30px;
  }
  .guittar .guittar-content .list .playlists {
    margin-top: 40px;
  }
  .guittar .guittar-content .list>ul>li {}
  .guittar .guittar-content .list>ul>li .title {
    font-size: 12px;
    letter-spacing: 1.5px;
    cursor: default;
    border-left: 2px solid #121212;
    padding-left: 20px;
  }
  .guittar .guittar-content .list>ul>li:hover .title {
    color: #A0A0A0;
  }
  .guittar .guittar-content .list-player {
    width: 100%;
    border-top: 1px solid #282828;
  }
  .guittar .guittar-content .list-player .text {
    width: 100%;
    padding: 15px 0;
    font-size: 15px;
    color: #A0A0A0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  .guittar .guittar-content .list-player .text:before {
    content: '\e7bf';
    font-family: IconFont;
    font-size: 25px;
    margin-right: 10px;
    margin-left: -35px;
  }
  .guittar .guittar-content .list>ul>li>ul>li:hover,
  .guittar .guittar-content .list-player .text:hover,
  .guittar .guittar-content .list-player .text:hover:before {
    color: #fff;
    cursor: default;
  }
  .guittar .guittar-content .list>ul>li>ul>li.active {
    color: #fff;
    border-left: 2px solid #1ED660
  }
  .guittar .guittar-content .list>ul>li>ul>li {
    margin: 12px 0 15px;
    border-left: 2px solid #121212;
    padding-left: 20px;
  }
  .guittar .guittar-content .list-player .img {
    width: 200px;
  }
  @media screen and (max-width:1200px) {
    .friend {
      display: none
    }
  }
</style>
