<template>
  <div class="singer-lists">
   <div class="list-header">
      <div class="cover"><img src="static/images/lu4.jpg"></div>
      <div class="info">
        <h2>陈奕迅</h2>
        <h5 class="e-name">Eason</h5>
        <p class="single">单曲数：<span>12</span></p>
        <p class="album">专辑数：<span>12</span></p>
        <p class="mv">mv数：<span>12</span></p>
      </div>
   </div>
   <lists :todo="list"> </lists>
  </div>
</template>

<script>
import lists from './lists' 
export default{
  components:{
    lists
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.singer-lists{
  padding-top: 50px;
}
 .singer-lists .list-header {
    display: inline-flex;
    align-items: center;
    margin: 10px 20px
  }
.singer-lists .list-header .cover img {
    width: 200px;
    height: 200px
  }
   .singer-lists .list-header .info {
    padding: 0 20px;
  }
  .singer-lists .list-header .info h2{
    font-weight: normal;
  }
   .singer-lists .list-header .info h5{
     padding:10px 0 ;
     font-weight: normal;
     font-size:14px
   }
   .singer-lists .list-header .info p{
     font-size:15px;
   }
   .singer-lists .list-header .info p span{
     color:#828282
   }
</style>
