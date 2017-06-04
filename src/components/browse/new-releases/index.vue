<template>
  <div class="new-releases">
    <div class="title">
      <span class="s">The Best New Releases</span>
    </div>
    <div class="best-song">
      <guittar-list v-for="i in list" :todo="i" key="i.artist"></guittar-list>
    </div>
  </div>
</template>

<script>
import Axios from "axios"
  import guittarList from '../../general/guittar-list'
  export default {
    data(){
      return{
        list:[{
          img:"/static/images/new/song1.jpg",
          title:"Hands of Gold",
          artist:"Stonefox"
          },{
          img:"/static/images/new/song2.jpg",
          title:"Malibu",
          artist:"Miley Cyrus"
          },{
          img:"/static/images/new/song3.jpg",
          title:"bloom",
          artist:"Machine Gun Kelly "
          },{
          img:"/static/images/new/song4.jpg",
          title:"Harry Styles",
          artist:"Harry Styles"
          },{
          img:"/static/images/new/song5.jpg",
          title:"Somethin Tells Me",
          artist:"Bryson Tiller"
          },{
          img:"/static/images/new/song6.jpg",
          title:"Rollin",
          artist:"Bryson Tiller"
          },{
          img:"/static/images/new/song7.jpg",
          title:"M!ssundaztood",
          artist:"P!nk"
          },{
          img:"/static/images/new/song8.jpg",
          title:"Welcome Home",
          artist:"Zac Brown Band"
          },{
          img:"/static/images/new/song9.jpg",
          title:"Everybody",
          artist:"Logic"
          },{
          img:"/static/images/new/song10.jpg",
          title:"The Fate of the Furious: The Album",
          artist:"Various Artists"
          },{
          img:"/static/images/new/song11.jpg",
          title:"24K Magic",
          artist:"Bruno Mars"
          },{
          img:"/static/images/new/song12.jpg",
          title:"Shape of You",
          artist:"Ed Sheeran"
          },{
          img:"/static/images/new/song13.jpg",
          title:"Stay",
          artist:"Zedd, Alessia Cara"
          },{
          img:"/static/images/new/song14.jpg",
          title:"Despacito",
          artist:"Luis Fonsi, Daddy Yankee"
          },{
          img:"/static/images/new/song15.jpg",
          title:" 7 Series",
          artist:"Kid Ink"
          }
        ]
      }
    },
    beforeMount(){
      Axios.get('/top/list?idx=6').then( 
        function(res){
          console.log(res)
        }
      )
    },
    components: {
      guittarList
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
