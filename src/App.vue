<template>
  <div id="app">
    <h1>Lazy Loading</h1>
    <ul>
      <li><router-link to="/">/</router-link></li>
      <li><router-link to="/counter">/counter</router-link></li>
      <li><router-link to="/helloworld">/helloworld</router-link></li>
      <li><router-link to="/bar">/bar</router-link></li>
      <li><router-link to="/bar/baz">/bar/baz</router-link></li>
      <li><router-link to="/a/b/c">/a/b/c</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li {
  display: inline;
  padding: 0 12px;
}
</style>
