<template>
  <div class="player">
    <div class="controller">
      <ul>
        <li class="random" @click="random()"></li>
        <li class="prev" @click="prev()"></li>
        <li :class="{pause:isPlaying,play:!isPlaying}" @click="play(isPlaying)"></li>
        <li class="next" @click="next()"></li>
        <li class="loop" @click="next()"></li>
      </ul>
    </div>
    <div class="time-line-box">
      <div class="time start">
        <p>{{ nowTime }}</p>
      </div>
      <div ref="bar" class="progress-bar" @mousedown="transfer($event)">
        <div class="now" ref="nowBar" :style="{width}">
        </div>
      </div>
      <div class="time end">
        <p>{{ endTime }}</p>
      </div>
    </div>
    <div style="display: none">
      <audio ref="player" :src="todo.url" @loadeddata="duration" @pause="stopPlaying" @playing="startPlaying"/>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
  export default {
    props: ["todo"],
    data() {
      let self = this;
      return {
        isPlaying: false,
        nowTime: '0:00',
        endTime: '0:00',
        width : '0%',
        progress : setInterval(function(){
          self.changeProgress()
        },1000) 
      }
    },
    methods: {
      play(isPlaying) {
        let self = this;
        if (!isPlaying) {
          self.$refs.player.play();
        } else {
          self.$refs.player.pause();
        }
        self.isPlaying = !self.isPlaying;
      },
      duration() {
        let self = this;
        let endTime = '0:00';
        let songTime = self.$refs.player.duration;
        if (!isNaN(songTime)) {
          endTime = parseInt(songTime / 60) + ':' + parseInt(songTime % 60);
        }
        self.endTime = endTime;
        self.stopPlaying();
      },
      changeProgress(){
        let self = this;
        let duration=self.$refs.player.duration;
        let currentTime = self.$refs.player.currentTime;
        let a= currentTime/duration;
        let result = a*100+'%';
        self.width = result;
        let m=parseInt(currentTime / 60);
        let s=parseInt(currentTime % 60);
        self.nowTime =  m+ ':' + (s<10 ? '0'+ s : s);
      },
      startPlaying(){
        let self=this;
        self.progress = setInterval(function(){
          self.changeProgress()
        },1000);
      },
      stopPlaying(){
        let self=this;
        clearInterval(self.progress);
      },
      transfer(event){
        let self=this;
        let barLeft = self.$refs.bar.offsetLeft;
        let transferLeft = self.$refs.style.left;
        console.log(transferLeft)
      }
    },
    mounted() {
      let self = this;
      Axios.get('/song/detail?ids=347230').then(function(res){console.log(res)})
      document.onkeydown = function(e) {
        if (e.keyCode == 32) {
          self.play(self.isPlaying);
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .player {
    display: inline-block;
    flex-grow: 1;
    color: #A0A0A0
  }
  
  .player .controller ul {
    text-align: center;
    font-size: 20px;
    border-radius: 8px;
  }
  
  .player .controller li {
    display: inline-block;
    padding: 0 30px;
    cursor: pointer;
    transition: all 0.1s ease-in;
    height: 35px;
    width: 30px;
  }
  
  .player .controller li:hover {
    color: #fff
  }
  
  .player .controller .random:before {
    content: '\e67d';
    font-family: IconFont;
  }
  
  .player .controller .prev:before {
    content: '\e502';
    font-family: IconFont;
  }
  
  .player .controller .pause:before {
    content: '\e61d';
    font-family: IconFont;
    font-size: 30px;
  }
  
  .player .controller .play:before {
    content: '\e61c';
    font-family: IconFont;
    font-size: 30px;
  }
  
  .player .controller .next:before {
    content: '\e67d';
    font-family: IconFont;
  }
  
  .player .controller .loop:before {
    content: '\e61f';
    font-family: IconFont;
  }
  
  .time-line-box {
    margin-top: -5px;
    text-align: center;
  }
  
  .time-line-box div {
    display: inline-block
  }
  
  .time-line-box .start,
  .time-line-box .end {
    font-size: 12px;
  }
  
  .time-line-box .progress-bar {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 3px;
    cursor: pointer;
    display: inline-block;
    height: 2px;
    position: relative;
    vertical-align: 2px;
    width: 50%;
  }
  
  .time-line-box .progress-bar .now {
    background-color: #31c27c;
    display: inline-block;
    height: 2px;
    left: 0;
    max-width: 100%;
    position: absolute;
  }
  
  .time-line-box .progress-bar .now:after {
    background-color: white;
    content: "";
    height: 2px;
    left: 100%;
    position: absolute;
    width: 2px;
  }
</style>
