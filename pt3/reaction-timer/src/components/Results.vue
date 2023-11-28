<template>
  <p class="results">Reaction Time: {{ score }} ms</p>
</template>

<script>
export default {
    props: ['score']
}
</script>

<style>
    .results {
        width: 400px;
        border-radius: 20px;
        background: black;
        color: red;
        text-align: center;
        padding: 50px 0;
        margin: 40px auto;
    }
</style>