<template>
  <div class="guittar-button" :style="todo.button">
    <input class="btn btn-default" type="button" :value="todo.value" @click="todo.click" :style="{ width: todo.width + 'px' }">
  </div>
</template>

<script>
  export default {
    props: ["todo"]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .guittar-button input {
    background: #1db954 none repeat scroll 0 0;
    border: medium none;
    border-radius: 8px;
    color: #fff;
    letter-spacing: 2px;
    padding: 5px 0px;
    margin: 15px 0;
    cursor: pointer;
    font-size: 12px;
    outline: none;
  }
</style>
