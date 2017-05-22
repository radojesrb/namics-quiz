<template>
  <div class="finished">
    <div class="message">
      Thank you. Danke. Хвала. <span>Namics.</span>
      <br />
      <h2>www.develoger.com</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'finished',
  props: [
    'name'
  ]
}
</script>

<style scoped>
  .message {
    font-size: 24px;
  }
  span {
    color: #000;
  }
</style>
