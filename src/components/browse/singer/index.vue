<template>
  <div class="singer">
    <div class="title">
      <span class="s">Featured Charts</span>
    </div>
    <div class="list">
      <guittar-list v-for="i in list" :todo="i" :key="i.title"></guittar-list>
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
    components: {
      guittarList
    },
    beforeMount() {
      let self = this;
      Axios.get('/top/artists?offset=0&limit=30').then(
        function(res) {
          console.log(res)
          let result = res.data.artists;
          for (let i = 0; i <= result.length; i++) {
            self.list.push({
              title : result[i].name,
              img : result[i].img1v1Url
            })
          }
        }
      )
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
