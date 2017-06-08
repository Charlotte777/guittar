<template>
  <li class="td">
    <div class="s"><i class="fa fa-play-circle-o"></i></div>
    <div class="th-title">{{ todo.title }}</div>
    <div class="th-artist">{{ todo.artist }}</div>
    <div class="th-ablum">{{ todo.ablum }}</div>
    <div class="th-calendar">{{todo.calendar }}</div>
    <div class="th-clock">{{ todo.time }}</div>
  </li>
</template>

<script>
  export default {
    props: ["todo"],
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .td {
    padding-left: 10px;
  }
  .td div {
    color: #7c7c7c;
    display: inline-block;
    font-size: 14px;
  }
  .s {
    width: 5%;
  }
  .th-title {
    width: 30%;
  }
  .th-artist {
    width: 20%;
  }
  .th-ablum {
    width: 22%;
  }
  .th-calendar {
    width: 10%;
  }
  .th-clock {
    width: 7%;
  }
  .td div {
    color: #ffffff;
    font-size: 14px;
    margin: 10px 0;
  }
  .td {
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    border-color: #404040 currentcolor;
    border-image: none;
    border-style: solid none;
    border-width: 1px 0;
    border-top: none;
    cursor: pointer
  }
  .s i {
    font-size: 17px;
  }
</style>
