<template>
  <div class="overview-song">
    <div class="title">
      <span class="s">最新歌曲</span>
    </div>
    <div class="new-song">
      <div class="showMenu" :style="{display:menuDisplay,top:menutop,left:menuleft}" ref="showMenu">
        <div class="menuitems">
          <span>1</span>
        </div>
        <div class="menuitems">
          <span>2</span>
        </div>
        <div class="menuitems">
          <span>3</span>
        </div>
        <div class="menuitems">
          <span>4</span>
        </div>
      </div>
      <div class="song" v-for="(i, index) in song" @click="play(i.id)" :id="i.id" ref="song" @contextmenu="showMenu($event)">
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
  import Bus from '@/assets/eventBus'
  export default {
    props: ["todo"],
    data() {
      return {
        menuDisplay: "none",
        menutop:"",
        menuleft:"",
        song: [],
        mMove(ev) {
          ev = ev || window.event;
          let mousePos = self.mCoords(ev); // xֵ  mousePos.x;   yֵ  mousePos.y;
          return mousePos;
        },
        mCoords(ev) {
          if (ev.pageX || ev.pageY) {
            return {
              x: ev.pageX,
              y: ev.pageY
            };
          }
          return {
            x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
            y: ev.clientY + document.body.scrollTop - document.body.clientTop
          };
        }
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
              songArtist: "",
              id: arr[i].id,
              album: arr[i].song.album.name,
              time: arr[i].song.duration,
              url: arr[i].song.album.picUrl,
            });
            for (let n = 0; n < artists.length; n++) {
              self.song[i].songArtist += artists[n].name + (n != artists.length - 1 ? " / " : "");
            }
          }
        }
      )
    },
    methods: {
      play(id) {
        let self = this;
        self.$store.state.songId = id;
        self.$store.commit("getId", id);
        self.display="none"
      },
      showMenu(e) {
        let self = this;
        let rightedge = e.clientX;
        let leftedge = e.clientY;
        let menu=self.$refs.showMenu;
        self.display = "block";
        return false;
        // let self = this;
        // var rightedge = self.$ref.song.clientWidth - e.clientX;
        // console.log(rightedge)
      },
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
  .overview-song .new-song .showMenu {
    border: 1px solid #ff0000;
    width: 205px;
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
