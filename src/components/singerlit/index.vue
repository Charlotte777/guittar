<template>
  <div class="singger-lists">
    <div class="list-header">
      <div class="cover"><img :src="i.src"></div>
      <div class="info">
      <h2>{{ i.title }}</h2>
      <h5 class="artist"><span>By</span>{{ i.artist }}</h5>
        <h5 class="introduction"><span class="s">简介:</span>{{ i.introduction }}</h5>
        <h5><span>{{i.number}}</span>songs
      </div>
    </div>
    <lists :todo="list"></lists>
  </div>
</template>

<script>
  import Axios from 'axios'
  import guittarButton from '../general/guittar-button'
  import lists from './lists'
  export default {
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .song-lists {
    padding-top: 50px;
  }
  .song-lists .list-header {
    display: inline-flex;
    align-items: center;
    margin: 10px 20px
  }
  .song-lists .list-header .cover img {
    width: 200px;
    height: 200px
  }
  .song-lists .list-header .info {
    padding: 0 20px;
  }
</style>
