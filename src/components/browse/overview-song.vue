<template>
  <div class="overview-song">
    <div class="title">
      <span class="s">最新歌曲</span>
    </div>
    <div class="new-song">
      <div class="song" v-for="i in song">
        <div class="img">
          <span>{{ i.Number }}</span><img :src="i.img">
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
  export default {
    props: ["todo"],
    data() {
      return {
        song: [{
          Number:"01",
          songName: "Invisible",
          songArtist: "Linkin Park",
          img:"/static/images/yogalin2.jpg",
        },{
          Number:"02",
          songName: "虎口脱险",
          songArtist: "老狼",
          img:"/static/images/yogalin.jpg",
        },{
          Number:"03",
          songName: "莫斯科没有眼泪",
          songArtist: "Twins",
          img:"/static/images/lu4.jpg",
        },{
          Number:"04",
          songName: "无所谓",
          songArtist: "方大同 / 张靓颖",
          img:"/static/images/lu1.jpg",
        },{
          Number:"05",
          songName: "幸福的节拍",
          songArtist: "杨丞琳",
          img:"/static/images/by.jpg",
        },{
          Number:"06",
          songName: "成全 (Live)",
          songArtist: "Yoga Lin",
          img:"/static/images/yogalin2.jpg",
        },{
          Number:"07",
          songName: "左边",
          songArtist: "王珞丹",
          img:"/static/images/tc.jpg",
        },{
          Number:"08",
          songName: "下个转弯是你吗",
          songArtist: "杨丞琳",
          img:"/static/images/lu1.jpg",
        },{
          Number:"09",
          songName: "失忆的金鱼",
          songArtist: "杨丞琳杨丞琳",
          img:"/static/images/yogalin2.jpg",
        },{
          Number:"10",
          songName: "成全 (Live)",
          songArtist: "Yoga Lin",
          img:"/static/images/by.jpg",
        } ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .overview-song .title {
    border-bottom: 1px solid #282828;
    padding: 10px 0;
  }
  
  .overview-song .new-song .song {
    display: inline-flex;
  }
  .overview-song .new-song .opacity{
        position: absolute;
    left: 36px;
    top: 8px;
     opacity:0;
  }
  
  .overview-song .new-song .opacity::before {
    content: '\e61c';
    font-family: IconFont;
    font-size: 22px;  
  }
  .overview-song .new-song .song:hover .opacity{
    opacity:1;
    transition: all 0.3s
  }
  .overview-song .new-song .song {
    border: 1px solid #1F2127;
    margin: 5px 0;
    padding: 10px 5px;
    width: 50%;
    transition:all 0.2s;
  }
   .overview-song .new-song .song:hover{
     background: #232529 none repeat scroll 0 0;
     color:#ffffff;
   }
  .overview-song .new-song .song .img {
    display: inline-flex;
    width: 70px;
    position:relative
  }
  
  .overview-song .new-song .song .img img {
    width: 40px;
    margin-left: 8px;
    height:40px;
  }
  
  .overview-song .new-song .song .info {
    font-size: 14px;
  }
  
  .overview-song .new-song .song .info .artist {
    color: #A0A0A0;
    cursor:pointer;
  }
</style>
