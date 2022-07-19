<template>
  <friend-nav />
  <div class="container">
    <friend-form />
    <friend-card v-for:="value in users" :key="value.name" :user="value" /> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {name: "Ronan OGOR", content: "THE BEST TEAM"},
        {name: "Ronan OGOR", content: "THE BEST TEAM"},
      ]
      
    }
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
