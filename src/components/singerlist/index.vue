<template>
  <div class="singer-lists">
    <div class="list-header">
      <div class="cover"><img src="static/images/lu4.jpg"></div>
      <div class="info">
        <h2>陈奕迅</h2>
        <h5 class="e-name">Eason</h5>
        <p class="single">单曲数：<span>12</span></p>
        <p class="album">专辑数：<span>12</span></p>
        <p class="mv">mv数：<span>12</span></p>
      </div>
    </div>
    <div class="singer-box">
      <div class="title">
        <ul>
          <li v-for="i in list" :id="i.id" @click="jumpto(i.id)" :class="{active:i.id==now}">
            <span class="content">{{i.content}}</span>
            <span class="slider"></span>
          </li>
          <component :is="now"></component>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  import album from './album'
  import sameSinger from './same-singer'
  import singerInfo from './singer-info'
  export default {
    data() {
      return {
        list: [{
          id: "album",
          content: "歌手专辑"
        }, {
          id: "singer-info",
          content: "歌手详情"
        }],
        now: "album"
      }
    },
    methods: {
      jumpto(id) {
        this.now = id
      }
    },
    beforeMount(){
      Axios.get("/artist/album?id=6452&limit=30").then(
        function(res){
          console.log(res)
        }
      )
    },
    components: {
      album,
      sameSinger,
      singerInfo
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .singer-lists {
    padding-top: 50px;
  }
  .singer-lists .list-header {
    display: inline-flex;
    align-items: center;
    margin: 10px 20px
  }
  .singer-lists .list-header .cover img {
    width: 200px;
    height: 200px
  }
  .singer-lists .list-header .info {
    padding: 0 20px;
  }
  .singer-lists .list-header .info h2 {
    font-weight: normal;
  }
  .singer-lists .list-header .info h5 {
    padding: 10px 0;
    font-weight: normal;
    font-size: 14px
  }
  .singer-lists .list-header .info p {
    font-size: 15px;
  }
  .singer-lists .list-header .info p span {
    color: #828282
  }
  .singer-box .title {
    margin: 20px 0 0 20px;
    font-size: 14px;
  }
  .singer-box .title ul li {
    display: inline-flex;
    margin-right: 40px;
    font-size: 14px;
    flex-direction: column;
    cursor: pointer;
    color: #ffffff;
  }
  .singer-box .title ul li .content {
    margin-bottom: 5px;
  }
  .singer-box .title ul li .slider {
    background: #1DB954;
    height: 2px;
    width: 30px;
    display: inline-block;
    opacity: 0;
    margin: auto;
  }
  .singer-box .title ul li.active {
    color: #828282
  }
  .singer-box .title ul li.active .slider {
    opacity: 1;
  }
</style>
