<template>
  <div class="singer-info">
    <h3>歌手简介</h3>
    <span>{{info.content}}</span>
  </div>
</template>

<script>
  import Axios from 'axios'
  export default {
    data(){
      return{
        info:{
          content:""
        }
      }
    },
    beforeMount() {
      let self=this;
      let id=self.$route.params.sid;
      Axios.get('/artist/desc?id='+id).then(
        function(res){
          self.info.content=res.data.briefDesc
        }
      )
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .singer-info {
    margin-top: 20px;
  }
  .singer-info h3 {
    color: #f3f3f3;
    letter-spacing: 1px;
    padding-bottom: 10px;
  }
</style>
