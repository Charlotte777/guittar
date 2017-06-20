<template>
  <div class="playing">
    <div class="playing-box">
      <h3>正在播放</h3>
      <ul class="playing-list">
        <li class="th">
          <div class="s"></div>
          <div class="th-title">标题</div>
          <div class="th-artist">艺人</div>
          <div class="th-ablum">专辑</div>
          <div class="th-clock"><i class="fa fa-clock-o"></i></div>
        </li>
        <list v-for="i in playingList" :todo="i" :key="i.title"></list>
      </ul>
    </div>
    <div class="next-box">
      <h3>接下来</h3>
      <ul class="next-list">
        <li class="th">
          <div class="s"></div>
          <div class="th-title">标题</div>
          <div class="th-artist">艺人</div>
          <div class="th-ablum">专辑</div>
          <div class="th-clock"><i class="fa fa-clock-o"></i></div>
        </li>
        <list v-for="i in nextList" :todo="i" :key="i.title"></list>
      </ul>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  import list from './list'
  export default {
    props: ["todo"],
    data() {
      return {
        playingList: [{
          title: "Happier",
          artist: "Ed Sheeran",
          ablum: "÷ (Deluxe)",
          time: "4:20"
        }],
        nextList: [{
          title: "There For You",
          artist: "Martin Garrix",
          ablum: "There For You",
          time: "3:41"
        }, {
          title: "Homegrown",
          artist: "Haux",
          ablum: "Homegrown",
          time: "3:41"
        }, {
          title: "阿婆说",
          artist: "陈一发儿",
          ablum: "阿婆说",
          time: "4:06"
        }, {
          title: "Embody Me",
          artist: "Bathing Beach",
          ablum: "Novo Amor",
          time: "3:10"
        }, {
          title: "游园道",
          artist: "丛帅",
          ablum: "游园道",
          time: "3:41"
        }, {
          title: "阿婆说",
          artist: "陈一发儿",
          ablum: "阿婆说",
          time: "4:06"
        }, {
          title: "Homegrown",
          artist: "Haux",
          ablum: "Homegrown",
          time: "3:41"
        }, {
          title: "阿婆说",
          artist: "陈一发儿",
          ablum: "阿婆说",
          time: "4:06"
        }, {
          title: "There For You",
          artist: "Martin Garrix",
          ablum: "There For You",
          time: "3:41"
        }, {
          title: "游园道",
          artist: "丛帅",
          ablum: "游园道",
          time: "3:41"
        }, {
          title: "Embody Me",
          artist: "Bathing Beach",
          ablum: "Novo Amor",
          time: "3:10"
        }, {
          title: "游园道",
          artist: "丛帅",
          ablum: "游园道",
          time: "3:41"
        }, {
          title: "阿婆说",
          artist: "陈一发儿",
          ablum: "阿婆说",
          time: "4:06"
        }, {
          title: "Embody Me",
          artist: "Bathing Beach",
          ablum: "Novo Amor",
          time: "3:10"
        }, {
          title: "游园道",
          artist: "丛帅",
          ablum: "游园道",
          time: "3:41"
        }, {
          title: "阿婆说",
          artist: "陈一发儿",
          ablum: "阿婆说",
          time: "4:06"
        }]
      }
    },
    beforeMount() {
      let self = this;
      let id = self.$route.query.id;
      for (let i = 0; i < self.playingList.length; i++) {
        self.playingList.push({
          title
        })
      }
    },
    components: {
      list
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .playing-box,
  .next-box {
    margin-top: 20px;
  }
  .playing h3 {
    border-bottom: 2px solid #282828;
    color: #f3f3f3;
    letter-spacing: 1px;
    padding-bottom: 10px;
  }
  .playing-list .th,
  .next-list .th {
    border-bottom: 1px solid #282828;
    padding: 5px 0;
  }
  .playing-list .th div,
  .next-list .th div {
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
