<template>
  <div class="center">
    <div class="header">
      <div class="wrap">
        <span class="prev" @click="prev"></span>
        <span class="next" @click="next"></span>
        <div class="search-bar">
          <i class="fa fa-search"></i>
          <input type="text" class="search" placeholder="搜索" spellcheck="false" :value="i.value" @keyup.enter="onEnter" v-model="i.value" />
        </div>
      </div>
      <div class="user-info">
        <img class="avatar" :src="i.img" />
        <span class="user">{{ i.userName }}</span>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Axios from 'axios'
  export default {
    data() {
      let self = this;
      return {
        i: {
          img: "/static/images/tourist.png",
          userName: "请登录",
          value: "",
        },
      }
    },
    mounted() { //获取用户信息
      let self = this;
      let info = self.$store.state.userInfo;
      self.i.userName = info.nickname;
      self.i.img = info.avatarUrl;
    },
    methods: {
      prev() {
        let self = this;
        self.$router.go(-1)
      },
      next() {
        let self = this;
        self.$router.go(1)
      },
      onEnter() {
        let self = this;
        let value = self.i.value;
        self.$router.push({
          path: '/find',
          query: {
            s: value
          }
        })
        // let self = this;
        // Axios.get("/search?keywords=" + self.i.value).then(
        //   function(res) {
        //     let result = res.data.result.songs;
        //     if (res.data.code == 200) {
        //       self.$store.state.search = result;
        //       self.$router.push({
        //         path: '/find'
        //       })
        //     }
        //   }
        // )
        // Axios.get("/search?keywords=" + self.i.value + "&type=100").then(
        //   function(res) {
        //     let result = res.data.result.artists;
        //     if (res.data.code == 200) {
        //       self.$store.state.searchArtist = result;
        //       self.$router.push({
        //         path: '/find'
        //       })
        //     }
        //   }
        // )
        // Axios.get("/search?keywords=" + self.i.value + "&type=10").then(
        //   function(res) {
        //    let result = res.data.result.albums;
        //     if (res.data.code == 200) {
        //       self.$store.state.searchalbum = result;
        //       self.$router.push({
        //         path: '/find'
        //       })
        //     }
        //   }
        // )
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .center {
    overflow-y: auto
  }
  .header {
    -moz-box-align: center;
    -moz-box-pack: justify;
    align-items: center;
    background: #181818 none repeat scroll 0 0;
    display: flex;
    justify-content: space-between;
    padding: 10px 5px 8px;
    position: fixed;
    width: calc(100% - 217px);
    z-index: 999;
  }
  .header .wrap {
    display: inline-flex;
  }
  .header .wrap .prev {
    margin-left: 15px;
    margin-right: 10px;
  }
  .header .wrap .next {
    margin-right: 30px;
  }
  .header .wrap .prev:before {
    content: '\e501';
    font-family: IconFont;
    cursor: pointer;
    font-size: 25px;
  }
  .header .wrap .next:before {
    content: '\e601';
    font-family: IconFont;
    cursor: pointer;
    font-size: 25px;
  }
  .header .wrap .search-bar {
    height: 24px;
    background-color: #FFFFFF;
    border-radius: 25px;
    padding: 0px 10px;
    position: relative;
    display: inline-flex;
    align-items: center;
  }
  .header .wrap .search-bar .fa-search {
    top: 2px;
    left: 5px;
    color: #181818;
    position: absolute;
  }
  .header .wrap .search-bar .fa-search:before {
    font-size: 13px;
  }
  .header .wrap .search-bar input[type=text].search {
    width: 240px;
    border: 0;
    padding-left: 12px;
    font-size: 14px;
  }
  .header .user-info {
    display: inline-flex;
    align-items: center;
    font-size: 14px;
    color: #FFFFFF;
  }
  .header .user-info img.avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%
  }
  .header .user-info .user {
    margin: 0 15px;
    display: inline-flex;
    align-items: center;
  }
  .header .user-info .user:after {
    content: '\e60c';
    font-family: IconFont;
    cursor: pointer;
    font-size: 22px;
    margin-top: 3px;
    line-height: 14px;
    margin-left: 5px;
  }
</style>
