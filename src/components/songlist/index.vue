<template>
  <div class="song-lists">
    <div class="list-header">
      <div class="cover"><img :src="i.src"></div>
      <div class="info">
        <h2>{{ i.title }}</h2>
        <h5 class="artist"><span>By</span>{{ i.artist }}</h5>
        <h5 class="introduction"><span class="s">简介:</span>{{ i.introduction }}</h5>
        <h5><span>{{i.number}}</span>songs
          <guittar-button :todo="play"></guittar-button>
        </h5>
      </div>
    </div>
    <div class="showMenu" id="showMenu" :style="{display:menuDisplay,top:menutop,left:menuleft}" ref="showMenu">
      <div class="menuitems ">
        <span><i class="fa fa-play-circle-o"></i>播放</span>
      </div>
      <div class="menuitems">
        <span><i class="fa fa-plus-square"></i>下一首播放</span>
      </div>
      <div class="menuitems">
        <span><i class="fa fa-link"></i>复制连接</span>
      </div>
      <div class="menuitems">
        <span><i class="fa fa-download"></i>下载</span>
      </div>
    </div>
    <lists :todo="list"></lists>
    
  </div>
</template>

<script>
  import Axios from 'axios'
  import guittarButton from '../general/guittar-button'
  import lists from './lists'
  export default {
    props: ["todo"],
    data() {
      return {
        i: {
          title: "My youth is yours",
          artist: "啾啾啾-LH7",
          introduction: "第一次听是小学四年级。印在脑中的场景是永远在拖地的教室和洁癖到偏执的班主任。时过境迁，还是没机会为你翘课，最后，勇气和那个下雨天一起消失。",
          number: "51",
          src: ""
        },
        play: {
          value: "播放全部",
          click() {},
          width: 80
        },
        list: [],
        menuDisplay: "none",
        menutop: "",
        menuleft: ""
      }
    },
    mounted() {
      let self = this;
    },
    beforeMount() {
      let self = this;
      let id = self.$route.params.lid;
      Axios.get("/playlist/detail?id=" + id).then(
        function(res) {
          let header = res.data.playlist;
          let result = res.data.playlist.tracks;
          self.i.title = header.name;
          self.i.src = header.picUrl;
          self.i.introduction = header.description;
          self.i.number = header.trackCount;
          self.i.artist = header.creator.nickname;
          for (let i = 0; i < result.length; i++) {
            self.list.push({
              title: result[i].name,
              ablum: result[i].al.name,
              time: parseInt(result[i].dt / 1000 / 60) + ':' + parseInt(result[i].dt / 1000) % 60,
              artist: result[i].ar[0].name,
              id: result[i].id,
              play(id) {
                self.$store.state.songId = id;
                self.$store.commit("getId", id)
              },
              showMenu(e) {
                self.menuDisplay = "block";
                self.menuleft = e.clientX+"px";  
                self.menutop=e.clientY+"px";
                console.log(e)
              }
            })
            for (let n = 1; n < result[i].ar.length; n++) {
              self.list[i].artist += '/' + result[i].ar[n].name;
              // artist: result[i].ar.length == 1 ? result[i].ar[n].name : result[i].ar[n].name + "/" + result[i + 1].ar[n + 1].name,
              // console.log(self.list[i].title)
            }
          }
        }
      );
    },
    components: {
      guittarButton,
      lists
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .song-lists {
    padding-top: 50px;
  }
  .song-lists .list-header {
    display: inline-flex;
    align-items: center;
    margin: 10px 20px
  }
  .song-lists .list-header .cover img {
    width: 200px;
    height: 200px
  }
  .song-lists .list-header .info {
    padding: 0 20px;
  }
  .song-lists .list-header .info h5 {
    color: #828385;
    font-weight: normal;
    line-height: 24px;
    max-width: 700px;
  }
  .song-lists .list-header .info h5 span {
    color: #ffffff;
    margin-right: 5px;
  }
  .song-lists .list-header .info .introduction {
    height: 50px;
    overflow: hidden;
  }
  .song-lists .list-header .info .artist {
    cursor: pointer;
  }
  .song-lists .showMenu {
    width: 180px;
    padding: 5px 0;
    background: #302F33;
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.24);
    z-index: 999;
    position:absolute;
  }
  .showMenu .menuitems {
    cursor: pointer;
    padding: 10px 15px;
    font-size: 14px;
  }
  .showMenu i {
    margin-right: 5px;
  }
  .showMenu .menuitems:hover {
    background: #3B3A3D
  }
</style>
