<template>
  <div class="guittar-player">
    <div class="player-info">
      <p>{{todo.title}}</p>
      <p class="singer">{{todo.singer}}</p>
    </div>
    <player-list :todo="todo.playerInfo"></player-list>
    <div class="player-option">
      <ul class="option">
        <li class="list"></li>
        <li class="voice">
          <div class="voice-line"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import playerList from './player-list'
  export default {
    props: ["todo"],
    components: {
      playerList
    }
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
  
  .player-option {
    display: inline-block;
  }
  
  .guittar-player .player-info {
    font-size: 14px;
    width: 190px;
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
  
  .player-option .option .list:before {
    content: '\e63e';
    font-family: IconFont;
    font-size: 18px;
  }
  
  .player-option .option .voice:before {
    content: '\e626';
    font-family: IconFont;
    font-size: 18px;
  }
  
  .player-option .option .voice .voice-line {
    height: 3px;
    width: 80px;
    background: #a0a0a0;
    display: inline-block;
    border-radius: 8px;
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
  
  .player-option .option li:hover {
    color: #fff
  }
  
  .player-option .option {
    margin: 30px 0
  }
  
  .player-option .option .voice {
    display: inline-flex;
    align-items: center;
  }
</style>
