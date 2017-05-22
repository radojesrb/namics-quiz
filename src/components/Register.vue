<template>
  <div class="register">
    <div class="input-group input-group-lg">
      <span class="input-group-addon" id="sizing-addon1">First and Last name</span>
      <input type="text" class="form-control" placeholder="Your name" v-model="name">
    </div>
    <div class="spacer-s"></div>
    <div class="input-group input-group-lg">
      <span class="input-group-addon" id="sizing-addon1">@</span>
      <input type="text" class="form-control" placeholder="Your email" v-model="email">
    </div>
    <div class="spacer-s"></div>
    <a href="#" class="btn btn-default btn-block" role="button" @click="handleRegister(name, email)">Start</a>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      name: '',
      email: ''
    }
  },
  props: [
    'handleRegister'
  ]
}
</script>

<style scoped>

</style>
