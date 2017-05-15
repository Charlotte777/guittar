<template>
  <div class="center">
    <div class="banner-container">
      <div class="banner"></div>
      <div class="album">
        <div class="album-images"><img src="/static/images/lu.jpg"></div>
        <div class="album-text">
          <h5>ALBUM</h5>
          <h1>{{ todo.name }}</h1>
          <span>{{ todo.artist }}</span>
          <h5>{{ todo.introduction }}</h5>
          <div class="support">
            <input class="play" type="button" value="PLAY" />
            <input class="share" type="button" value="SHARE" />
            <input class="more" type="button" value="···" />
          </div>
        </div>
      </div>
    </div>
    <div class="guittar-container">
      <ul>
        <li id="overview" class="active">
          <span class="title">overview</span>
          <span class="slider"></span>
        </li>
        <li id="charts" @click="charts" :class="{active: this.id == browse}">
          <span class="title">charts</span>
          <span class="slider"></span>
        </li>
        <li id="genres-moods">
          <span class="title">genres & moods</span>
          <span class="slider"></span>
        </li>
        <li id="new-releases">
          <span class="title">new releases</span>
          <span class="slider"></span>
        </li>
        <li id="discover">
          <span class="title">discover</span>
          <span class="slider"></span>
        </li>
        <li id="concerts">
          <span class="title">concerts</span>
          <span class="slider"></span>
        </li>
      </ul>
      <div>
        <component :is="browse"></component>
      </div>
    </div>
  </div>
</template>

<script>
  import overview from './overview'
  import charts from './charts'
  export default {
    props: ["todo"],
    data() {
      return {
        browse: 'overview'
      }
    },
    methods: {
      charts() {
        let self = this;
        self.browse = charts;
      }
    },
    components: {
      overview
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .center {
    overflow: hidden;
    min-width: 580px;
    overflow: scroll;
    overflow-x: hidden;
  }
  .center .banner-container {
    width: 100%;
    height: 30%;
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .center .banner-container .banner {
    background: rgba(0, 0, 0, 0) url("/static/images/lu.jpg") no-repeat scroll center center / cover;
    filter: blur(2px);
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: -1;
  }
  .banner-container .album {
    align-items: stretch;
    display: flex;
    justify-content: center;
    margin: 10px 0;
    text-align: center;
  }
  .banner-container .album .album-images {
    width: 200px;
    display: inline-block;
    margin-right: 10px
  }
  .banner-container .album .album-text {
    display: inline-flex;
    flex-direction: column;
    text-align: left;
    width: 350px;
    padding: 5px 0;
  }
  .banner-container .album .album-text h5 {
    color: #a0a0a0;
    font-weight: normal;
  }
  .banner-container .album .album-text h1 {
    color: #ffffff;
    font-weight: 600;
  }
  .banner-container .album .album-text span {
    padding: 10px 0;
  }
  .banner-container .album .album-text .support {
    padding: 10px 0
  }
  .banner-container .album .album-text .support input {
    border: 0;
    border-radius: 20px;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 5px 30px;
    margin: 5px;
    cursor: pointer;
    font-size: 12px
  }
  .banner-container .album .album-text .play {
    background: #1DB954;
  }
  .banner-container .album .album-text .share {
    background: #1A1717;
    border: 1px solid #fff;
  }
  .banner-container .album .album-text .more {
    background: #1A1717;
    border: 1px solid #fff;
    padding: 5px 8px;
    border-radius: 100%;
  }
  .banner-container .album .album-text .support {
    align-self: flex-end;
    width: 100%;
  }
  .center .guittar-container {
    padding: 30px;
    position: relative;
  }
  .center .guittar-container ul li {
    color: #a0a0a0;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    font-weight: normal;
    letter-spacing: 2px;
    margin-right: 23px;
    text-transform: uppercase;
    transition: color 0.3s;
  }
  .center .guittar-container ul li.active {
    color: #ffffff;
  }
  .center .guittar-container ul li:hover {
    color: #ffffff;
    cursor: pointer;
  }
  .center .guittar-container ul li .title {
    padding-bottom: 5px;
  }
  .center .guittar-container ul li .slider {
    background: #1DB954;
    height: 2px;
    width: 30px;
    display: inline-block;
    opacity: 0;
  }
  .center .guittar-container ul li.active .slider {
    opacity: 1;
  }
</style>
