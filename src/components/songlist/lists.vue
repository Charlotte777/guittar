<template>
  <div class="song-list">
    <div class="search-bar"><i class="fa fa-search"></i> <input type="text" placeholder="搜索" spellcheck="false" class="search"></div>
   
      
     
      <div class="lists">
        <div class="title">
          <ul>
            <li class="th">
              <div class="s"></div>
              <div class="th-title">标题</div>
              <div class="th-artist">艺人</div>
              <div class="th-ablum">专辑</div>
              <div class="th-calendar"><i class="fa fa-calendar-check-o"></i></div>
              <div class="th-clock"><i class="fa fa-clock-o"></i></div>
            </li>
            <li class="td" v-for="i in li">
              <div class="s"><i class="fa fa-play-circle-o"></i></div>
              <div class="th-title">{{ i.title }}</div>
              <div class="th-artist">{{ i.artist }}</div>
              <div class="th-ablum">{{ i.ablum }}</div>
              <div class="th-calendar">{{ i.calendar }}</div>
              <div class="th-clock">{{ i.time }}</div>
            </li>
          </ul>
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
        loading: false,
        post: null,
        error: null,
        li: [{
          title: "There for you",
          artist: "Martin Garrix/Troye Sivan",
          ablum: "There for you",
          calendar: "21小时前",
          time: "4:21"
        }, {
          title: "远辰落身旁",
          artist: "谢春花",
          ablum: "谢知非",
          calendar: "5小时前",
          time: "3:27"
        }, {
          title: "Beautiful in white",
          artist: "Shane Filan",
          ablum: "Right Here",
          calendar: "2小时前",
          time: "3:26"
        }, {
          title: "某时某刻 Catch me when I fall",
          artist: "鹿晗",
          ablum: "Xperience",
          calendar: "23小时前",
          time: "3:51"
        }, {
          title: "There for you",
          artist: "Martin Garrix/Troye Sivan",
          ablum: "There for you",
          calendar: "21小时前",
          time: "4:21"
        }, {
          title: "远辰落身旁",
          artist: "谢春花",
          ablum: "谢知非",
          calendar: "5小时前",
          time: "3:27"
        }, {
          title: "Beautiful in white",
          artist: "Shane Filan",
          ablum: "Right Here",
          calendar: "2小时前",
          time: "3:26"
        }, {
          title: "某时某刻 Catch me when I fall",
          artist: "鹿晗",
          ablum: "Xperience",
          calendar: "23小时前",
          time: "3:51"
        }, {
          title: "某时某刻 Catch me when I fall",
          artist: "鹿晗",
          ablum: "Xperience",
          calendar: "23小时前",
          time: "3:51"
        }]
      }
    },
   
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .song-list {
    background: #292929 none repeat scroll 0 0;
    padding: 20px 30px;
  }
  .th {
    margin: 10px 0;
  }
  .th,
  .td {
    padding-left: 10px;
  }
  .th div,
  .td div {
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
    width: 20%;
  }
  .th-ablum {
    width: 22%;
  }
  .th-calendar {
    width: 10%;
  }
  .th-clock {
    width: 7%;
  }
  .td div {
    color: #ffffff;
    font-size: 14px;
    margin: 10px 0;
  }
  .td {
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    border-color: #404040 currentcolor;
    border-image: none;
    border-style: solid none;
    border-width: 1px 0;
    border-top: none;
    cursor: pointer
  }
  .search-bar {
    -moz-box-align: center;
    align-items: center;
    background-color: #292929;
    border-radius: 25px;
    display: inline-flex;
    height: 24px;
    padding: 0 10px;
    position: relative;
    width: 100%;
    margin-bottom: 10px;
  }
  .search-bar:focus {
    background: #404040 none repeat scroll 0 0;
  }
  .search-bar .fa-search::before {
    font-size: 13px;
  }
  .fa-search {
    color: #ffffff;
    left: 12px;
    position: absolute;
    top: 2px;
  }
  .search-bar input.search[type="text"] {
    background: #292929 none repeat scroll 0 0;
    border: 0 none;
    border-radius: 15px;
    color: #ffffff;
    font-size: 14px;
    padding: 12px 20px;
    width: 100%;
  }
  .search-bar input.search:focus {
    background: #404040 none repeat scroll 0 0;
  }
  .s i {
    font-size: 17px;
  }
</style>
