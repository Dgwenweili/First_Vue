<template>
  <div id="App">
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
body{
  font-family: Arial, Helvetica, sans-serif, Microsoft YaHei;
  position:relative;
  display:block;
  font-size:100%;
  cursor:default;
  margin:0;
  padding:0;
}
a{
  text-decoration:none;
}
#App{
  position:relative;
  display:block;
  width:100%;
  height:auto;
  overflow:hidden;
}
</style>


