<template>
  <nav>
    <ul>
      <li>HOME</li>
      <li> ABOUT US</li>
      <li>SERVICES</li> 
      <li>HELP?</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'friend-nav',
  data() {

  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  nav {
    width: 100%;
    background-color: orangered;
  }
  ul {
    display: flex;
  }
  li {
    padding: 10px;
    list-style: none;
    color: #fff;
  }
</style>
