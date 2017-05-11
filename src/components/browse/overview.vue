<template>
  <div class="overview">
    <div class="overview-song">
      <div class="title">
        <span class="s">Power tunes for the day!</span>
        <div class="arrow">
          <span class="prev" @click="prev"></span>
          <span class="next" @click="next"></span>
        </div>
      </div>
      <div class="song-content">
        <overview-list v-for="i in songList" :todo="i" :key="i.name"></overview-list>
      </div>
        
    </div>
    <overview-song></overview-song>
  </div>
</template>

<script>
  import overviewList from './overview-list'
  import overviewSong from './overview-song'
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
          desc: "Beyoud",
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
      songList() {
        let self = this;
        let arr = [];
        let page = self.page;
        let lists = self.songLists;
        let start = 5 * page - 5;
        let end = 5 * page - 1;
        if (lists.length - 1 < end) {
          end = lists.length - 1;
        }
        for (let i = start; i <= end; i++) {
          arr.push(lists[i]);
        }
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
      overviewSong
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .overview .overview-song .title {
    border-bottom: 1px solid #282828;
    padding: 20px 0
  }
  
  .overview .overview-song .title .s {
    font-weight: 800;
    font-size: 18px;
  }
  
  .overview .overview-song .title .prev:before {
    content: '\e501';
    font-family: IconFont;
    cursor: pointer;
    font-size: 20px;
  }
  
  .overview .overview-song .title .next:before {
    content: '\e601';
    font-family: IconFont;
    cursor: pointer;
    font-size: 20px;
  }
  
  .overview .overview-song .title .arrow {
    float: right
  }
  
  .overview .song-content {
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
  }
</style>
