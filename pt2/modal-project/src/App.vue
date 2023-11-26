<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">click me</button>
  <Modal />
</template>

<script>
import Modal from './components/Modal.vue'

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
