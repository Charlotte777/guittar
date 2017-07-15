<template>
  <div class="same-singer">
    <guittar-list v-for="i in list" :todo="i" :key="i.title"></guittar-list>
  </div>
</template>

<script>
import guittarList from '../general/guittar-list'
export default{
data(){
  return{
    list:[{
      img:"static/images/lu.jpg",
      title:"xu",
      name:"da"
    }]
  }
},
  component:{
    guittarList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
