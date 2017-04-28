<template>
  <div class="guittar-switch"> 
    <label class="switch-title">Remember me</label>
    <div class="switch">
      <input id="cmn-toggle-1" class="cmn-toggle cmn-toggle-round" type="checkbox">
      <label for="cmn-toggle-1"></label>
    </div>
  </div>
</template>

<script>
export default {
  props:["todo"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.guittar-switch{
  justify-content: space-between; 
  display: inline-flex; 
  width: 100%; 
  align-items: center;
}
.guittar-switch .switch-title{
  color:#9BA0A0;
  font-size:15px;
  display:inline-block;
  margin-left: 8px
}
.switch {
    display: inline-block;
    padding: 10px;
    vertical-align: middle;
}
.cmn-toggle {
    margin-left: -9999px;
    position: absolute;
    visibility: hidden;
}
input.cmn-toggle-round:checked + label::before {
    background-color: #1DB954;
}
input.cmn-toggle-round + label::before {
    background-color: #000000;
    border-radius: 60px;
    right: 1px;
    transition: background 0.4s ease 0s;
}
input.cmn-toggle-round + label::before, input.cmn-toggle-round + label::after {
    bottom: 1px;
    content: "";
    display: block;
    left: 1px;
    position: absolute;
    top: 1px;
}
input.cmn-toggle-round:checked + label::after {
    margin-left: 24px;
}
input.cmn-toggle-round + label::after {
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: margin 0.4s ease 0s;
    width: 20px;
}
input.cmn-toggle-round + label::before, input.cmn-toggle-round + label::after {
    bottom: 1px;
    content: "";
    display: block;
    left: 1px;
    position: absolute;
    top: 1px;
}
input.cmn-toggle-round + label {
    background-color: #dddddd;
    border-radius: 60px;
    height:20px;
    padding: 2px;
    width: 45px;
}
.cmn-toggle + label {
    -moz-user-select: none;
    cursor: pointer;
    display: block;
    outline: medium none; 
    position: relative;
}
</style>
