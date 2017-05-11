<template>
  <div class="guittar-player">
    <div class="player-info">
      <p>{{todo.title}}</p>
      <p class="singer">{{todo.singer}}</p>
    </div>
    <player-list :todo="todo.playerInfo"></player-list>
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
  
</style>
