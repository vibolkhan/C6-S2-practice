<template>
  <div class="card">
    <h2>{{user.name}}</h2>
    <span>{{user.content}}</span>
  </div>
</template>

<script>
export default {
  name: 'friend-card',
  props: ['user'],
  data() {
    return {
      
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    margin: 5px;
    width: 30%;
    padding: 30px;
    border-radius: 10px;
    border-top: 5px solid orange;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
</style>
