<template>
  <div class="guittar">
    <div class="guittar-content">
      <div class="list">
        <ul>
          <li class="browse active">
            <ul>
              <li style="margin: 0;">Browse</li>
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
          <div class="img"><img src="/static/images/lu.jpg"></div>
        </div>
      </div>
      <center :todo="album"></center>
      <div class="friend">
        <div class="banner">
          <h3>
            See what your friend are playing
          </h3>
        </div>
      </div>
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
        songInfo: {
          title: '时差 (On Call)',
          singer: 'Lu Han',
          playerInfo: {
            url: null
          }
        },
        album: {
          name : "Imagination",
          artist : 'Lu Han',
          introduction : "Catch me when i fallCatch me when i fallCatch me when i fallCatch me when i fall"
        }
      }
    },
    beforeMount(){
      let self = this;
      Axios.get('/music/url?id=347230').then(
        function(res){
           self.songInfo.playerInfo.url = res.data.data[0].url;
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
    margin-bottom: 20px;
  }
  
  .guittar .guittar-content .list .playlists {
    margin-top: 20px;
  }
  
  .guittar .guittar-content .list>ul>li {
    padding: 3px 0 3px 20px;
  }
  
  .guittar .guittar-content .list>ul>li .title {
    font-size: 12px;
    letter-spacing: 1.5px;
    cursor: default;
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
  
  .guittar .guittar-content .list>ul>li.active {
    color: #fff;
    border-left: 3px solid #1ED660
  }
  
  .guittar .guittar-content .list>ul>li>ul>li {
    padding: 3px 0;
    margin: 10px 0;
  }
  
  .guittar .guittar-content .list-player .img {
    width: 200px;
  }
  @media screen and (max-width:1200px) {
    .friend{
      display:none
    }
  }
</style>
