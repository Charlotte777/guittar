<template>
  <div class="play-record">
    <div class="record-box">
      <h3>播放记录</h3>
      <ul class="record-list">
        <li class="th">
          <div class="s"></div>
          <div class="th-title">标题</div>
          <div class="th-artist">艺人</div>
          <div class="th-ablum">专辑</div>
          <div class="th-clock"><i class="fa fa-clock-o"></i></div>
        </li>
        <list v-for="i in recordList" :todo="i" :key="i.title"></list>
      </ul>
    </div>
  </div>
</template>

<script>
  import list from './list'
  export default {
    props: ["todo"],
    data() {
      return {
        recordList: [{
          title: "阿婆说",
          artist: "陈一发儿",
          ablum: "阿婆说",
          time: "4:06"
        }, {
          title: "欠けた月",
          artist: "宮脇詩音",
          ablum: " ソラ",
          time: " 4:50"
        }, {
          title: "Samsara",
          artist: "Tungevaag & Raaban",
          ablum: "Mujeres y Hombres y Viceversa: Los Hits del Verano 2015",
          time: "3:32"
        }, {
          title: "爱的太快",
          artist: "拜尔",
          ablum: "爱的太快",
          time: "4:43"
        }, ]
      }
    },
    components: {
      list
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .record-box {
    margin-top: 20px;
  }
  .record-box h3 {
    border-bottom: 2px solid #282828;
    color: #f3f3f3;
    letter-spacing: 1px;
    padding-bottom: 10px;
  }
  .record-box .th {
    border-bottom: 1px solid #282828;
    padding: 5px 0;
  }
  .record-box .th div {
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
