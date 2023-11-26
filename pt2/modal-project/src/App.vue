<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">click me</button>
  <!-- <Modal header="Sign Up" text="Login?" :list="['Forgot password?', 5]"/> -->
  <Modal :header="header" :text="text" :list="list" :theme="theme" :toggleTheme="toggleTheme"/>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  data() {
    return {
      title: 'My First Vue App :)',
      header: 'Log In Modal',
      text: 'Forgot Password?',
      list: ['Register a new account?', 'LinkedIn'],
      theme: 'day'
    }
  },
  methods: {
    handleClick() {
      // this.$refs accesses the DOM for us and we can refer to an element through its ref
      // jQuery potentially?
      console.log(this.$refs.name)
      this.$refs.name.classList.add()
      this.$refs.name.focus()
    },
    toggleTheme() {
      if (this.theme === 'day') { this.theme = 'night' }
      else { this.theme = 'day' }
    }
  },
  components: { Modal }
}
</script>

// This is global styling
<style scoped>
  h1 {
    color: green;
  }
</style>
