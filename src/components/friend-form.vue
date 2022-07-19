<template>
  <form>
    <input type="text" placeholder="Firstname" class="form-controll" v-model="firstname">
    <input type="text" placeholder="Lastname" class="form-controll" v-model="lastname">
    <input type="text" placeholder="Comment" class="form-controll" v-model="comment">
    <button class="form-controll">ADD</button>
  </form>
</template>

<script>
export default {
  name: 'friend-form',


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing:  border-box;
}
  form {
    margin: 5px;
    width: 35%;
    padding: 30px;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  .form-controll {
    width:  100%;
    padding: 10px;
    margin: 5px;
  }
  button {
    cursor: pointer;
    background-color: #999;
    border: none;
    font-weight: bold;
    color: #fff;
  }
</style>
