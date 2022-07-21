<template>
  <form @submit.prevent="adduser()">
    <input type="text" placeholder="Firstname" class="form-controll" v-model="firstname">
    <input type="text" placeholder="Lastname" class="form-controll" v-model="lastname">
    <input type="text" placeholder="Comment" class="form-controll" v-model="comment">

    <div class="checkbox form-controll">
      <div class="form-group">
        <input type="checkbox" id="vue" value="vue js" v-model="skills">
        <label for="vue">vue js</label>
      </div>
      <div class="form-group">
        <input type="checkbox" id="OOP" value="OOP" v-model="skills">
        <label for="OOP">OOP</label>
      </div>
      <div class="form-group">
        <input type="checkbox" id="Laravel" value="Laravel" v-model="skills">
        <label for="Laravel">Laravel</label>
      </div>
    </div>

    <button class="form-controll">ADD</button>
  </form>
</template>

<script>
export default {
  emits: ['users'],
  
  data() {
    return {
      firstname: '',
      lastname: '',
      comment: '',
      skills: []
    }
  },
  methods: {
    adduser() {
      this.$emit("users", this.firstname, this.lastname, this.comment, this.skills);
      this.firstname = '';
      this.lastname = '';
      this.comment = '';
      this.skills = [];
    },
  }
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
  button:hover {
    background-color: orangered;
  }
  .checkbox {
    display: flex;
  }
  .form-group {
    padding: 0px 10px;
  }
</style>
