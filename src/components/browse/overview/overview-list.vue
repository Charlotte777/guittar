<template>
  <div class="song">
    <div class="song-images" @click="jumpto">
      <img :src="todo.src">
      <span class="listened">{{ todo.play }}</span>
      <span class="play"></span>
    </div>
    <div class="song-info">
      <p class="name">{{ todo.name }}</p>
      <span class="artist">{{ todo.desc }}</span>
    </div>
    <component :is="songlist"></component>
  </div>
</template>

<script>
  import Axios from 'axios'
  import songList from '../../songlist'
  export default {
    props: ["todo"],
    data() {
      return {
        songlist: '',
        id: ""
      }
    },
    components: {
      songList
    },
    methods: {
      jumpto() {
        let self = this;
        let id=self.id;
        self.$router.push({
          path: "/songlist/detail?id="+id
         });   
        Axios.get('/personalized').then(
          function(res) {
            let result = res.data.result;
            for (let i = 0; i < result.length; i++) {
              self.id = result[i].id
            }
          }
        ) 
      }
    },
    beforeMount() {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .song {
    margin: 10px 0;
    width: 18%;
  }
  .song .song-images {
    overflow: hidden;
    width: 100%;
    position: relative;
  }
  .song .song-images .listened {
    background: rgba(0, 0, 0, 0.3) none repeat scroll 0 0;
    font-size: 12px;
    padding: 3px 10px;
    position: absolute;
    right: 0;
    top: 0;
  }
  .song .song-images .listened:before {
    content: '\f0033';
    font-family: IconFont;
    font-size: 14px;
  }
  .song .song-images .play {
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    border-bottom: 1px solid #fff;
    border-image: none;
    border-left: 1px solid #fff;
    border-radius: 50%;
    border-top: 1px solid #fff;
    bottom: 4px;
    padding: 1px 5px;
    position: absolute;
    right: 3px;
    opacity: 0;
    transition: all 0.3s
  }
  .song .song-images:hover .play {
    opacity: 1;
  }
  .song .song-images .play:before {
    content: '\e61c';
    font-family: IconFont;
    font-size: 14px;
  }
  .song .song-info {
    margin: 10px 0
  }
  .song .song-info .name {
    color: #ffffff;
    font-size: 15px;
  }
  .song .song-info .name:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  .song .song-info .artist {
    font-size: 14px;
    color: #a0a0a0
  }
</style>
