<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">click me</button>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: "My First Vue App :)"
    }
  },
  methods: {
    handleClick() {
      // this.$refs accesses the DOM for us and we can refer to an element through its ref
      // jQuery potentially?
      console.log(this.$refs.name)
      this.$refs.name.focus()
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
