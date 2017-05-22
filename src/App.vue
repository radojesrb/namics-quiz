<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body {
    background-color: #D21E1E;
    color: #fff;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    font-size: 18px;
  }
  .spacer-xs {
    height: 10px;
  }

  .spacer-s {
    height: 20px;
  }

  .spacer-m {
    height: 40px;
  }
</style>
