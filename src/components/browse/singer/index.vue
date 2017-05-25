<template>
  <div class="singer">
      <div class="title">
      <span class="s">Featured Charts</span>
    </div>
    <div class="list"><guittar-list v-for="i in list" :todo="i" :key="i.title"></guittar-list></div>
  </div>
</template>

<script>

  import guittarList from '../../general/guittar-list'
  export default {
    data(){
      return{
        list:[{
            title: "LuHan",
            img: "/static/images/singer/singer.png",
        },{
            title: "邓紫棋",
            img: "/static/images/singer/singer1.jpg",
        },{
            title: "陈奕迅",
            img: "/static/images/singer/singer2.jpg",
        },{
            title: "杨宗纬",
            img: "/static/images/singer/singer3.jpg",
        },{
            title: "周杰伦",
            img: "/static/images/singer/singer4.jpg",
        }]
      }
    },
    components: {
      guittarList
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
