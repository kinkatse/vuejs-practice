<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">click me</button>
  <div v-if="showModal">
    <!-- <Modal header="Sign Up" text="Login?" :list="['Forgot password?', 5]"/> -->
    <!-- <Modal
      :header="header"
      :text="text"
      :list="list"
      :theme="theme"
      :toggleTheme="toggleTheme"
      :toggleModal="toggleModal"
      @close="toggleModal"
    /> -->
    <Modal :theme="theme" :toggleTheme="toggleTheme" @close="toggleModal">
      <!-- What is passed in here is considered a 'slot', for default slot-->
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>

      <!-- We can also have a named slot so we can refer to different ones using template -->
      <template v-slot:links>
        <a href="#">Sign Up Now</a>
        <a href="#">More Info</a>
      </template>
    </Modal>
  </div>
  <!-- <button @click="toggleModal">Open Modal</button> -->
  <!-- <button @click.right="toggleModal">Open Modal</button> -->
  <!-- <button @click.shift="toggleModal">Open Modal</button> -->
  <button @click.alt="toggleModal">Open Modal (alt)</button>
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
      theme: 'day',
      showModal: false
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
    },
    toggleModal() {
      this.showModal = !this.showModal
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
