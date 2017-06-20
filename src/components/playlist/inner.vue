<template>
  <div class="playLists">
    <div class="banner"></div>
    <div class="box">
      <h1>播放列表</h1>
      <div class="list-container">
        <ul>
          <li v-for="i in list" :id="i.id" @click="jumpto(i.id)" :class="{active:i.id==group} ">
            <span style="padding-bottom: 5px">{{i.title}}</span>
            <span class="slider"></span>
          </li>
          <component :is="group"></component>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
 
  import playing from './playing'
  import playRecord from './play-record'
  export default {
    props: ["todo"],
    data() {
      return {
        list: [{
          id: "playing",
          title: "播放列表"
        }, {
          id: "playRecord",
          title: "播放记录"
        }],
        group: "playing"
      }
    },
    methods: {
      jumpto(id) {
        let self = this;
        self.group = id;
      }
    },
    components: {
      playing,
      playRecord
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .playLists .box {
    padding: 0 25px;
  }
  .playLists .banner {
    background: -moz-linear-gradient( top, #3f3f3f, #181818);
    background: -webkit-linear-gradient( top, #3f3f3f, #181818);
    height: 150px;
  }
  .list-container ul {
    margin: 20px 0
  }
  .list-container ul li {
    display: inline-flex;
    margin-right: 40px;
    font-size: 14px;
    flex-direction: column;
    cursor: pointer;
    color: #707070
  }
  .list-container ul li .slider {
    background: #1DB954;
    height: 2px;
    width: 30px;
    display: inline-block;
    opacity: 0;
    margin: auto;
  }
  .list-container ul li.active {
    color: #fff;
  }
  .list-container ul li.active .slider {
    opacity: 1;
  }
</style>
