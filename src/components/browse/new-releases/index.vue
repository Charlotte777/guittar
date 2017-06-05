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
  import Axios from 'axios'
  import guittarList from '../../general/guittar-list'
  export default {
    data() {
      return {
        list: []
      }
    },
    beforeMount() {
      let self = this;
      Axios.get('/personalized/newsong').then(
        function(res) {
          let result = res.data.result;
          for (let i = 0; i < result.length; i++) {
            self.list.push({
              img: result[i].song.album.picUrl,
              title: result[i].name,
              artist: (function() { 
                let artist = result[i].song.album.artists;
                let arr = [];
                for (var n = 0; n < artist.length; n++) {
                  arr.push(artist[n].name);
                }
                return arr.toString()
              })()
            });
          }
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
