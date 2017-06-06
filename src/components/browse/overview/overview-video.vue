<template>
  <div class="video">
    <div class="title">
      <span class="s">主播电台</span>
    </div>
    <div class="anchor-station" v-for="i in video">
      <div class="station">
        <div class="img"><img :src="i.img"></div>
      <div class="text">
        <p>{{ i.title }}</p>
        <p class="b">{{ i.info }}</p>
      </div></div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
  export default {
    props: ["todo"],
    data(){
      return{
        video:[]
      }
      },
      beforeMount(){
        let self=this;
        Axios.get('/personalized/djprogram').then(
          function(res){
            let arr=res.data.result;
            for(let i=0;i<arr.length;i++){
              self.video.push({
                title:arr[i].name,
                img:arr[i].picUrl,
                info:arr[i].program.dj.brand

              })
            }
          }
        )
      }
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
.video{
  margin-top: 30px
}
.title{
  font-size: 18px;
  padding: 10px 0
}
.anchor-station{
  padding: 8px 0;
   width:50%;
   display:inline-block;
   cursor:pointer;
    border-top: 1px solid #1B1D22;
}
.anchor-station .station{
  display: inline-flex;
}
.anchor-station .station .img{
   height: 80px;
    overflow: hidden;
    width: 80px;
}
.anchor-station .station .text{
  font-size:14px;
  margin: 20px 0 20px 10px
}
.anchor-station .station .text{
  color:#e2e2e2
}
.anchor-station .station .text .b{
  color:#828385;
  font-size:12px;
  margin-top:5px;
}
</style>
