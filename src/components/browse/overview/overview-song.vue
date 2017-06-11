<template>
  <div class="overview-song">
    <div class="title">
      <span class="s">最新歌曲</span>
    </div>
    <div class="new-song">
      <div class="song" v-for="(i, index) in song">
        <div class="img">
          <span>{{ (index<9)? "0"+(index+1):(index+1) }}</span><img :src="i.img">
          <span class="opacity"></span>
        </div>
        <div class="info">
          <p>{{ i.songName }}</p>
          <p class="artist">{{ i.songArtist }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  export default {
    props: ["todo"],
    data() {
      return {
        song: []
      }
    },
    beforeMount() {
      let self = this;
      Axios.get('/personalized/newsong').then(
        function(res) {
          let arr = res.data.result;
          for (let i = 0; i < arr.length; i++) {
            let artists = res.data.result[i].song.artists;
            self.song.push({
              songName: arr[i].name,
              img: arr[i].song.album.picUrl,
              songArtist: ""
            });
            
            for (let n = 0; n < artists.length; n++) {
              self.song[i].songArtist += artists[n].name;
              if(n != artist.length) self.song[i].songArtist += "/"
            }
          }
        }
      )
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .overview-song .title {
    border-bottom: 1px solid #282828;
    padding: 10px 0;
  }
  .title {
    font-size: 18px
  }
  .overview-song .new-song .song {
    display: inline-flex;
  }
  .overview-song .new-song .opacity {
    position: absolute;
    left: 36px;
    top: 8px;
    opacity: 0;
  }
  .overview-song .new-song .opacity::before {
    content: '\e61c';
    font-family: IconFont;
    font-size: 22px;
  }
  .overview-song .new-song .song:hover .opacity {
    opacity: 1;
    transition: all 0.3s
  }
  .overview-song .new-song .song {
    border: 1px solid #1F2127;
    margin: 5px 0;
    padding: 10px 5px;
    width: 50%;
    transition: all 0.2s;
  }
  .overview-song .new-song .song:hover {
    background: #232529 none repeat scroll 0 0;
    color: #ffffff;
  }
  .overview-song .new-song .song .img {
    display: inline-flex;
    width: 70px;
    position: relative
  }
  .overview-song .new-song .song .img img {
    width: 40px;
    margin-left: 8px;
    height: 40px;
  }
  .overview-song .new-song .song .info {
    font-size: 14px;
  }
  .overview-song .new-song .song .info {
    margin-left: 8px;
  }
  .overview-song .new-song .song .info .artist {
    color: #A0A0A0;
    cursor: pointer;
  }
</style>
