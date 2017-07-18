<template>
  <div class="same-singer">
    <guittar-list v-for="i in list" :todo="i" :key="i.title"></guittar-list>
  </div>
</template>

<script>
  import Axios from 'axios'
  import guittarList from '../general/guittar-list'
  export default {
    data() {
      return {
        list: [{
          
        }]
      }
    },
    beforeMount(){
      let self=this;
       Axios.get('/simi/artist?id=6452').then(
        function(res){
          console.log(res)
        }
       )
    },
    component: {
      guittarList
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
