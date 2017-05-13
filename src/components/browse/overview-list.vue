<template>
  <div class="song">
    <div class="song-images">
      <img :src="todo.src">
        <ul class="opacity">
          <li class="a"></li>
          <li class="b"></li>
          <li class="c"></li>
        </ul>
    </div>
    <div class="song-info">
      <p class="name">{{ todo.name }}</p>
      <span class="artist">{{ todo.desc }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["todo"]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .song {
    margin: 10px 0;
    width:18%;
  }
  
  .song .song-images {
    overflow: hidden;
    width:100%;
  }
  .song .song-info{
    margin:10px 0
  }
  .song .song-info .name {
    color: #ffffff;
    font-size: 15px;
  }
  .song .song-info .opacity .a:before{
    content: '\e61c';
    font-family: IconFont;
    font-size: 22px; 
  }
  .song .song-info .opacity .b:before{
    content: '\e67d';
    font-family: IconFont;
    font-size: 22px; 
  }
  .song .song-info .opacity .c:before{
    content: '\e502';
    font-family: IconFont;
    font-size: 22px; 
  }
  .song .song-info .name:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  .song .song-info .artist {
    font-size: 14px;
    color: #a0a0a0
  }
</style>
