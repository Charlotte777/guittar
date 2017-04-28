<template>
  <div class="guittar-input">
    <input type="text" v-if="todo.type == 'text'" :placeholder="todo.placeholder" :value="todo.value" :name="todo.name" v-model="todo.value" />
    <input type="password" v-else-if="todo.type == 'password'" :placeholder="todo.placeholder" :value="todo.value" :name="todo.name" v-model="todo.value" />
  </div>
</template>

<script>
export default {
  props:["todo"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.guittar-input input{
  width: 100%; 
  background: rgb(51, 51, 51) none repeat scroll 0% 0%; 
  border: medium none; 
  color: rgb(255, 255, 255); 
  padding: 8px 10px;
  border-radius: 5px;
  margin: 5px 0;
  transition: all 0.5s ease-in;
  outline: none;
  margin-bottom:5px;
  font-size:14px;
}
.guittar-input input:focus{
  background:#404040;
  border:medium none; 
}
</style>
