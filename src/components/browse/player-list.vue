<template>
  <div class="player">
    <div style="flex-grow: 1;">
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
        <div ref="progress" class="progress-bar" @mousedown="transfer">
          <div class="now" :style="{width}"></div>
        </div>
        <div class="time end">
          <p>{{ endTime }}</p>
        </div>
      </div>
      <div style="display: none">
        <audio ref="player" :src="todo.url" @loadeddata="duration" @pause="stopPlaying" @playing="startPlaying" />
      </div>
    </div>
    <div class="player-option">
      <ul class="option">
        <li class="list"></li>
        <li class="volume">
          <span :class="{voice:voice,mute:!voice}" @click="mute()"></span>
          <div class="voice-line" @mousedown="adjust" ref="volume">
            <div class="line-now" :style="{ width:volumeWidth }"></div>
          </div>
        </li>
      </ul>
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
        width: '0%',
        voice: true,
        volumeWidth: '100%',
        progress: setInterval(function() {
          self.changeProgress()
        }, 1000),
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
    methods: {
      mute(voice) {
        let self = this;
        self.$refs.player.volume = 0;
        self.voice = !self.voice;
      },
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
      changeProgress() {
        let self = this;
        let duration = self.$refs.player.duration;
        let currentTime = self.$refs.player.currentTime;
        let a = currentTime / duration;
        let result = a * 100 + '%';
        self.width = result;
        let m = parseInt(currentTime / 60);
        let s = parseInt(currentTime % 60);
        self.nowTime = m + ':' + (s < 10 ? '0' + s : s);
      },
      startPlaying() {
        let self = this;
        self.progress = setInterval(function() {
          self.changeProgress()
        }, 1000);
      },
      stopPlaying() {
        let self = this;
        clearInterval(self.progress);
      },
      transfer() {
        let self = this;
  
        function draging() {
          let barLeft = self.$refs.progress.offsetLeft;
          let barWidth = self.$refs.progress.offsetWidth;
          let duration = self.$refs.player.duration;
          self.width = ((self.mMove().x - barLeft) / barWidth) * 100 + '%';
          self.$refs.player.currentTime = duration * parseFloat(self.width) / 100;
        }
        draging();
        self.$refs.progress.onmousemove = function() {
          draging();
        }
        self.$refs.progress.onmouseup = function() {
          this.onmousemove = function() {}
        }
      },
      adjust() {
        let self = this;
  
        function draging() {
          let volumewidth = self.$refs.volume.offsetWidth;
          let volumeleft = self.$refs.volume.offsetLeft;
          self.volumeWidth = ((self.mMove().x - volumeleft) / volumewidth) * 100 + '%';
          if((((self.mMove().x - volumeleft) / volumewidth) * 100 + '%') >= '100%'){
            self.volumeWidth="100%"
          }
          console.log(self.volumeWidth)
          self.$refs.player.volume = parseFloat(self.volumeWidth) / 100;
        }
        draging();
        self.$refs.volume.onmousemove = function() {
          draging();
        }
        self.$refs.volume.onmouseup = function() {
          this.onmousemove = function() {}
        }
      }
    },
    mounted() {
      let self = this;
      // Axios.get('/song/detail?ids=347230').then(function(res){console.log(res)})
      function changeVolume(key) {
        if (key) {
          self.$refs.player.volume += 0.1;
          if(self.$refs.player.volume > 0.9){
            self.$refs.player.volume=1
          }
        } else {
          self.$refs.player.volume -= 0.1;
          if (self.$refs.player.volume < 0.1) {
            self.$refs.player.volume = 0
          }
        }
        self.volumeWidth = (self.$refs.player.volume) * 100 + "%";
      };
      document.onkeydown = function(e) {
        if (e.keyCode == 32) {
          self.play(self.isPlaying);
        } else if (e.ctrlKey) {
          if (e.keyCode == 38) {
            changeVolume(true);
            if (self.$refs.player.volume == 1) {
              self.voice = true;
            }
          } else if (e.keyCode == 40) {
            changeVolume(false);
            if (self.$refs.player.volume == 0) {
              self.voice = false;
            }
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .player {
    display: inline-flex;
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
    background: #404040;
    border-radius: 3px;
    cursor: pointer;
    display: inline-block;
    height: 3px;
    position: relative;
    vertical-align: 2px;
    width: 50%;
  }
  
  .time-line-box .progress-bar .now {
    background-color: #31c27c;
    display: inline-block;
    height: 3px;
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
  
  .player-option {
    display: inline-block;
  }
  
  .player-option .option .list:before {
    content: '\e63e';
    font-family: IconFont;
    font-size: 18px;
  }
  
  .player-option .option .volume .voice:before {
    content: '\e63d';
    font-family: IconFont;
    font-size: 18px;
  }
  
  .player-option .option .volume .mute:before {
    content: '\e63b';
    font-family: IconFont;
    font-size: 18px;
  }
  
  .player-option .option .volume .voice-line {
    height: 3px;
    width: 80px;
    background: #404040;
    display: inline-block;
    border-radius: 8px;
  }
  
  .player-option .option .volume .voice-line .line-now {
    width: 50%;
    height: 100%;
    background: #A0A0A0;
    position: relative;
  }
  
  .player-option .option .volume .voice-line:hover .line-now {
    background: #1DB954;
  }
  
  .player-option .option .volume .voice-line .line-now:before {
    content: '';
    width: 12px;
    height: 12px;
    right: -5px;
    top: -5px;
    background: #FFFFFF;
    border-radius: 100%;
    display: none;
    position: absolute;
  }
  
  .player-option .option .volume .voice-line:hover .line-now:before {
    display: inline-block;
  }
  
  .player-option .option ul {
    margin: 20px 0
  }
  
  .player-option .option li {
    display: inline-block;
    color: #a0a0a0;
    transition: all 0.1s ease-in;
  }
  
  .player-option .option .list {
    padding: 0 20px
  }
  
  .player-option .option {
    margin: 30px 0
  }
  
  .player-option .option .volume {
    display: inline-flex;
    align-items: center;
  }
</style>
