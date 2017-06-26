<template>
  <div class="chasts">
    <div class="title">
      <span class="s">Featured Charts</span>
    </div>
    <div class="list">
      <guittar-list v-for="i in list" :todo="i" :key="i.title" ></guittar-list>
    </div>
  </div>
</template>

<script>
  import guittarList from '../../general/guittar-list'
  import Axios from "axios"
  export default {
    components: {
      guittarList
    },
    data() {
      return {
        list: [{
          
        }]
      }
    },
    beforeMount() {
      let self = this;
      for (let i = 0; i < 18; i++) {
        Axios.get("/top/list?idx=" + i).then(
          function(res) {
            self.list.push({
              title:res.data.result.name,
              img:res.data.result.coverImgUrl,
              id:res.data.result.id  ,
               jumpList(id){
        let self=this;
        console.log(id)
      }
            });       
             }
        )
      }
    },
    methods:{
     
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .chasts {
    margin-top: 10px;
  }
  .title {
    font-size: 18px;
    padding: 10px 0;
    border-bottom: 1px solid #1B1D22;
  }
</style>
