<template>
  <div class="overview">
    <div class="overview-list">
      <div class="title">
        <span class="s">Power tunes for the day!</span>
        <div class="arrow">
          <span class="prev" @click="prev"></span>
          <span class="next" @click="next"></span>
        </div>
      </div>
      <div class="list-content">
        <div class="roller" v-for="(p, index) in pagination" :class="{active:index == page - 1 , prev:index < page - 1 , next:index > page - 1}">
          <overview-list v-for="i in p" :todo="i" :key="i.name"></overview-list>
        </div>
      </div>
    </div>
    <overview-song></overview-song>
    <overview-video></overview-video>
  </div>
</template>

<script>
  import overviewList from './overview-list'
  import overviewSong from './overview-song'
  import overviewVideo from './overview-video'
  export default {
    props: ["todo"],
    data() {
      return {
        songLists: [{
          src: "/static/images/tc.jpg",
          name: "Something Just Like This",
          desc: "The Chainsmokers",
        }, {
          src: "/static/images/by.jpg",
          name: "光辉岁月",
          desc: "Beyond",
        }, {
          src: "/static/images/tw.jpg",
          name: "莫斯科的眼泪",
          desc: "Twins",
        }, {
          src: "/static/images/lu1.jpg",
          name: "Xplore",
          desc: "Lu Han",
        }, {
          src: "/static/images/lu2.jpg",
          name: "Promises",
          desc: "Lu Han",
        }, {
          src: "/static/images/lu3.jpg",
          name: "Reload+",
          desc: "Lu Han",
        }, {
          src: "/static/images/lu4.jpg",
          name: "Xperience",
          desc: "Lu Han",
        }, {
          src: "/static/images/yogalin1.jpg",
          name: "全世界倾听你",
          desc: 'Yoga Lin'
        }, {
          src: "/static/images/yogalin.jpg",
          name: "致姗姗来迟的你",
          desc: 'Yoga Lin'
        }, {
          src: "/static/images/yogalin2.jpg",
          name: "天真有邪",
          desc: 'Yoga Lin'
        }],
        page: 1
      }
    },
    computed: {
      pagination(){
        let self = this;
        let arr = [];
        let lists = self.songLists;
        let i;
        lists.forEach(function(item,index){
          let p = Math.floor(index/5);
          if(i != p){
            i = p;
            arr[i] = [];
          }
          arr[i].push(item);
        });
        return arr;
      }
    },
    methods: {
      prev() {
        let self = this;
        if (self.page > 1) {
          self.page--;
        }
      },
      next() {
        let self = this;
        let length = (self.songLists.length % 5 != 0) ? (parseInt(self.songLists.length / 5) + 1) : (parseInt(self.songLists.length / 5));
        if (self.page < length) {
          self.page++;
        }
      }
    },
    components: {
      overviewList,
      overviewSong,
      overviewVideo
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .overview .overview-list .title {
    border-bottom: 1px solid #282828;
    padding: 20px 0
  }
  
  .overview .overview-list .title .s {
    font-weight: 800;
    font-size: 18px;
  }
  
  .overview .overview-list .title .prev:before {
    content: '\e501';
    font-family: IconFont;
    cursor: pointer;
    font-size: 20px;
  }
  
  .overview .overview-list .title .next:before {
    content: '\e601';
    font-family: IconFont;
    cursor: pointer;
    font-size: 20px;
  }
  
  .overview .overview-list .title .arrow {
    float: right
  }
  
  .overview .list-content {
    width: 100%;
  }

  .overview .list-content:after{ 
    font-size: 0; 
    line-height: 0; 
    display: block; 
    visibility: hidden; 
    clear: both; 
    overflow: hidden; 
    width: 0; 
    height: 0; 
    content: ''; 
  }
  
  .overview .list-content .roller {
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
    margin-left: -100%;
    flex-wrap: wrap;
    float: left;
    position: relative;
    transition: left .8s;
  }
  .overview .list-content .roller:first-child{
    margin-left: 0;
  }
  .overview .list-content .roller.active {
    left: 0;
  }
  .overview .list-content .roller.prev {
    left: calc(-100% - 30px);
  }
  .overview .list-content .roller.next {
    left: calc(100% + 30px);
  }
</style>
