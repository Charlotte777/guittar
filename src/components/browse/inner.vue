<template>
    <div class="browse">
        <div class="header">
            <div class="wrap">
                <span class="prev" @click="prev"></span>
                <span class="next" @click="next"></span>
                <div class="search-bar">
                    <i class="fa fa-search"></i>
                    <input type="text" class="search" placeholder="搜索" spellcheck="false" />
                </div>
            </div>
            <div class="user-info">
                <img class="avatar" src="/static/images/video3.jpg" />
                <span class="user">啾啾啾-LH7</span>
            </div>
        </div>
        <div class="banner-container">
            <div class="banner"></div>
            <div class="album">
                <div class="album-images"><img src="/static/images/lu.jpg"></div>
                <div class="album-text">
                    <h5>ALBUM</h5>
                    <h1>{{ album.name }}</h1>
                    <span>{{ album.artist }}</span>
                    <h5>{{ album.introduction }}</h5>
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
                <li v-for="i in list" :id="i.id" :class="{active: i.id == browse}" @click="jumpto(i.id)">
                    <span class="title">{{ i.title }}</span>
                    <span class="slider"></span>
                </li>
            </ul>
            <div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import overview from './overview'
    import charts from './charts'
    import newReleases from './new-releases'
    export default {
        props: ["todo"],
        data() {
            return {
                list: [{
                    id: 'overview',
                    title: 'OVERVIEW'
                }, {
                    id: 'charts',
                    title: 'CHARTS'
                }, {
                    id: 'singer',
                    title: 'singer'
                }, {
                    id: 'new-releases',
                    title: 'NEW RELEASES'
                }, {
                    id: 'discover',
                    title: 'DISCOVER'
                }, {
                    id: 'concerts',
                    title: 'CONCERTS'
                }],
                album: {
                    name: "Imagination",
                    artist: 'Lu Han',
                    introduction: "Catch me when i fallCatch me when i fallCatch me when i fallCatch me when i fall"
                }
            }
        },
        methods: {
            jumpto(id) {
                let self = this;
                self.browse = id;
                self.$router.push({
                    path: "/browse/" + id
                })
            },
            prev() {
                 let self = this;
                self.$router.go(-1)
            },
            next(){
                let self = this;
                self.$router.go(1)
            }
        }, 
        computed: {
             browse(){
                let self=this;
                let arr=[];
                arr=this.$route.fullPath.split("/");
                return arr[2]
             }
        },
        components: {
            overview,
            charts,
            newReleases
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .browse {
        overflow: hidden;
        min-width: 580px;
    }
    .browse .banner-container {
        width: 100%;
        height: 30%;
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .browse .banner-container .banner {
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
    .browse .guittar-container {
        padding: 30px;
        position: relative;
    }
    .browse .guittar-container ul li {
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
    .browse .guittar-container ul li.active {
        color: #ffffff;
    }
    .browse .guittar-container ul li:hover {
        color: #ffffff;
        cursor: pointer;
    }
    .browse .guittar-container ul li .title {
        padding-bottom: 5px;
    }
    .browse .guittar-container ul li .slider {
        background: #1DB954;
        height: 2px;
        width: 30px;
        display: inline-block;
        opacity: 0;
    }
    .browse .guittar-container ul li.active .slider {
        opacity: 1;
    }
    .browse .header {
        display: flex;
        padding: 10px 5px 8px;
        align-items: center;
        justify-content: space-between;
    }
    .browse .header .wrap {
        display: inline-flex;
    }
    .browse .header .wrap .prev {
        margin-left: 15px;
        margin-right: 10px;
    }
    .browse .header .wrap .next {
        margin-right: 30px;
    }
    .browse .header .wrap .prev:before {
        content: '\e501';
        font-family: IconFont;
        cursor: pointer;
        font-size: 25px;
    }
    .browse .header .wrap .next:before {
        content: '\e601';
        font-family: IconFont;
        cursor: pointer;
        font-size: 25px;
    }
    .browse .header .wrap .search-bar {
        height: 24px;
        background-color: #FFFFFF;
        border-radius: 25px;
        padding: 0px 10px;
        position: relative;
        display: inline-flex;
        align-items: center;
    }
    .browse .header .wrap .search-bar .fa-search {
        top: 2px;
        left: 5px;
        color: #181818;
        position: absolute;
    }
    .browse .header .wrap .search-bar .fa-search:before {
        font-size: 13px;
    }
    .browse .header .wrap .search-bar input[type=text].search {
        width: 240px;
        border: 0;
        padding-left: 12px;
        font-size: 14px;
    }
    .browse .header .user-info {
        display: inline-flex;
        align-items: center;
        font-size: 14px;
        color: #FFFFFF;
    }
    .browse .header .user-info img.avatar {
        width: 32px;
        border-radius: 50%
    }
    .browse .header .user-info .user {
        margin: 0 15px;
        display: inline-flex;
        align-items: center;
    }
    .browse .header .user-info .user:after {
        content: '\e60c';
        font-family: IconFont;
        cursor: pointer;
        font-size: 30px;
        margin-top: 3px;
        line-height: 14px;
        margin-left: 5px;
    }
</style>