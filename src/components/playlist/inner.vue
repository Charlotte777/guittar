<template>
  <div class="playLists">
    <div class="banner">
    </div>
    <h1>播放列表</h1>
    <div class="list-container">
      <ul>
        <li v-for="i in list" :id="i.id" @click="jumpto(i.id)">
          <span>{{i.title}}</span>
        </li>
        <component :is="group"></component>
      </ul>
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
          title: "列表"
        }, {
          id: "playRecord",
          title: "播放记录"
        }],
        group:""
      }
    },
    methods: {
      jumpto(id) {
        let self=this;
        self.group=id;
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
  .playLists {
    padding: 0 25px
  }
  .playLists .banner {
    background: linear-gradient(top, #fff, #333);
    background: linear-gradient(bottom, #333, #fff);
    background: linear-gradient(30deg, #fff, #333);
    
    height: 100px;
  }
  .list-container ul {
    margin: 20px 0
  }
  .list-container ul li {
    display: inline-block;
    margin-right: 40px;
    font-size: 14px;
  }
</style>
