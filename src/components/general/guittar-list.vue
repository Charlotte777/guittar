<template>
    <div class="playlist" :id="todo.id" @click="jumpList(todo.id)">
        <div class="s" :style="{background: 'url(' + todo.img + ')'}">
            <ul class="opacity">
                <li class="add"></li>
                <li class="play"></li>
                <li class="list"></li>
            </ul>
        </div>
        <div class="text">
            <h5>{{todo.title }}</h5>
            <span>{{ todo.artist }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["todo"],
        methods:{
            jumpList(id){
                 this.$router.push({
                path: "/songlist/" + id,
                });
            }
    }
    }
    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .playlist {
        display: inline-block;
        margin: 10px 0;
        margin-right: 2.5%;
        width: 18%;
    }
    .playlist .s {
        height: 300px;
        width: 100%;
        background-position: center center;
    }
    .playlist:nth-child(5n+0) {
        margin-right: 0;
    }
    .playlist img {
        max-width: 100%
    }
    .playlist h5 {
        font-size: 14px;
        margin-top: 5px;
        text-align: center
    }
    .playlist .opacity {
        -moz-box-align: center;
        -moz-box-pack: justify;
        align-items: center;
        background: rgba(0, 0, 0, 0.8) none repeat scroll 0 0;
        display: flex;
        height: 100%;
        justify-content: space-between;
        padding: 0 30px;
        position: absolute;
        top: 0;
        width: 100%;
        opacity: 0;
        transition: all 0.3s
    }
    .playlist .opacity:hover {
        opacity: 1
    }
    .playlist .add:before {
        content: '\e603';
    }
    .playlist .play:before {
        content: '\e61c';
        font-size: 50px
    }
    .playlist .list:before {
        content: '\e63e';
    }
    .playlist .s {
        position: relative;
    }
    .playlist .s .opacity li {
        display: inline-block;
        font-family: IconFont;
        font-size: 38px;
        cursor: pointer
    }
    .text {
        text-align: center
    }
    @media screen and (max-width:1200px) {
        .playlist .play:before {
            font-size: 32px
        }
        .playlist .s .opacity li {
            font-size: 20px;
        }
    }
    @media screen and (max-width:1500px) {
        .playlist .play:before {
            font-size: 38px
        }
        .playlist .s .opacity li {
            font-size: 26px;
        }
    }
</style>
