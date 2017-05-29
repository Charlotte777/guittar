<template>
  <div class="lists">
    <div class="song-info">
      <p class="songtitle">{{ todo.songtitle }}</p>
      <p class="album"><span style="margin-right: 5px">{{todo.artist}}</span>-<span style="margin-left: 5px">{{ todo.album }}</span></p>
    </div>
    <div class="time">{{ todo.time }}</div>
  </div>
</template>

<script>
  export default {
    props: ["todo"]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .lists {
    align-items: center;
    color: #aaa9a9;
    display: flex;
    padding-bottom: 10px;
  }
  .lists .number {
    text-align: center;
    width:20%
  }
  .lists .song-info {
    width:55%
  }
  .lists .song-info .songtitle {
    color: #fff;
    font-size: 18px;
  }
  .lists .song-info .album {
    font-size: 14px;
  }
  .lists .time {
    text-align:center;
    width:20%
  }
</style>
