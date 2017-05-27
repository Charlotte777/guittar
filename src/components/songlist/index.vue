<template>
  <div class="song-lists">
    <div class="list-header">
      <div class="cover"><img src="/static/images/video1.jpg"></div>
      <div class="info">
        <h2>{{ i.title }}</h2>
        <h5 class="artist"><span>By</span>{{ i.artist }}</h5>
        <h5><span class="s">简介:</span>{{ i.introduction }}</h5>
        <h5><span>{{i.number}}</span>songs <guittar-button :todo="play"></guittar-button></h5>
      </div>
    </div>
    <div class="song-list">
      <lists v-for="i in songinfo" :todo="i" :key="i.number" ></lists>
    </div>
  </div>
</template>

<script>
import guittarButton from '../general/guittar-button'
import lists from './lists'
  export default {
    props: ["todo"],
    data(){
      return{
        i:{
          title:"My youth is yours",
          artist:"啾啾啾-LH7",
          introduction:"第一次听是小学四年级。印在脑中的场景是永远在拖地的教室和洁癖到偏执的班主任。时过境迁，还是没机会为你翘课，最后，勇气和那个下雨天一起消失。",
          number:"51"
        },
        play:{
          value:"播放全部"
        },
        songinfo:[{
          number:'1.',
          songtitle:"Shine",
          album:'Communion (Deluxe)',
          artist:"Years & Years",
          time:"4:15"
        },{
          number:'1.',
          songtitle:"Shine",
          album:'Communion (Deluxe)',
          artist:"Years & Years",
          time:"4:15"
        },{
          number:'1.',
          songtitle:"Shine",
          album:'Communion (Deluxe)',
          artist:"Years & Years",
          time:"4:15"
        },{
          number:'1.',
          songtitle:"Shine",
          album:'Communion (Deluxe)',
          artist:"Years & Years",
          time:"4:15"
        },{
          number:'1.',
          songtitle:"Shine",
          album:'Communion (Deluxe)',
          artist:"Years & Years",
          time:"4:15"
        },{
          number:'1.',
          songtitle:"Shine",
          album:'Communion (Deluxe)',
          artist:"Years & Years",
          time:"4:15"
        }]
      }
    },
    components:{
      guittarButton,
      lists
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .song-lists .list-header {
    display: inline-flex;
    align-items: center;
    margin: 10px 20px
  }
  .song-lists .list-header .cover {
  }
  .song-lists .list-header .cover img {
    width:200px;
    height: 200px
  }
  .song-lists .list-header .info {
    padding: 0 20px;
  }
    .song-lists .list-header .info h5{
      color:#828385;
      font-weight:normal;
      line-height:24px;
      max-width:700px;
    }
    .song-lists .list-header .info h5 span{
      color:#ffffff;
      margin-right: 5px;
    }
  .song-lists .list-header .info .artist {
    cursor:pointer;
  }
</style>
