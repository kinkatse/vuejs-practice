<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: "My First Vue App :)"
    }
  }
}
</script>

// This is global styling
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
</style>
