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
        video:[{
          img:"/static/images/video.jpg",
          title:"换一个城市想你，以慰寂寥",
          info:"去上海邂逅一场动人的节奏"
        },{
          img:"/static/images/video1.jpg",
          title:"【星缘星语】No.165-让我们聊聊月亮2",
          info:"月球和潮汐有什么关系"
        },{
          img:"/static/images/video2.jpg",
          title:"吴秀波 爱之战（2000）-曾为音乐坚持，只为保留纯真。",
          info:"吴秀波的音乐坚持之路"
        },{
          img:"/static/images/video3.jpg",
          title:"山洞里的千年真身",
          info:"原谅我眼里都是人间烟火"
        }]
      }
      },
      beforeMount(){
        let self=this;
        Axios.get('/personalized/djprogram').then(
          function(res){
            let arr=res.data.result;
            console.log(arr)
            for(let i=0;i<arr.length;i++){
              self.video[i].title=arr[i].name;
              self.video[i].img=arr[i].picUrl;
              self.video[i].info=arr[i].program.dj.brand;
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
