<template>
  <div class="guittar-player">
    <div class="player-info">
      <p>{{todo.title}}</p>
      <p class="singer">{{todo.singer}}</p>
    </div>
    <div class="player">
      <div class="controller">
        <ul>
          <li class="random"></li>
          <li class="prev"></li>
          <li class="play"></li>
          <li class="next"></li>
          <li class="loop"></li>
        </ul>
      </div>
      <div class="time-line-box">
        <div class="time start">0:00</div>
        <div class="time-line"></div>
        <div class="time end">4:26</div>
      </div>
    </div>
    <div class="player-option"></div>
  </div>
</template>

<script>
  export default {
    props: ["todo"]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .guittar-player {
    color: #fff;
    height: 10%;
    background: #282828;
    border-top: 1px solid #181818;
    padding: 8px 15px;
    display: flex;
  }
  
  .guittar-player .player-info {
    display: inline-block;
  }

  .guittar-player .player {
    display: inline-block;
    flex-grow: 1;
  }
  
  .player-option {
    display: inline-block;
  }
  
  .guittar-player .player-info {
    font-size: 14px
  }
  
  .guittar-player .player-info p {
    margin: 10px 0;
    cursor: pointer;
  }
  
  .guittar-player .player-info p:hover {
    color: #ffffff;
    text-decoration: underline;
  }
  
  .guittar-player .player-info p.singer {
    font-size: 12px;
    color: #A0A0A0
  }
  
  .guittar-player .player .controller li {
    display: inline-block;
  }
  
  .guittar-player .player .controller .random:before {
    content: '\e67d';
    font-family: IconFont;
  }
  
  .guittar-player .player .controller .prev:before {
    content: '\e502';
    font-family: IconFont;
  }
  
  .guittar-player .player .controller .play:before {
    content: '\e76b';
    font-family: IconFont;
  }
  
  .guittar-player .player .controller .next:before {
    content: '\e67d';
    font-family: IconFont;
  }
  
  .guittar-player .player .controller .loop:before {
    content: '\e61f';
    font-family: IconFont;
  }
</style>
