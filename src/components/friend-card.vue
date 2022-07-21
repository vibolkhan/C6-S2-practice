<template>
  <div class="card" :id="user.id">
    <div class="content">
      <h2>{{user.firstname}} {{user.lastname}}</h2>
      <h3>{{user.comment}}</h3>
    </div>
    <ul>
      <li v-for = " skill in user.skills" :key="skill" :skill = "skill">
        <skillCard >{{skill}}</skillCard>
      </li>
    </ul>
    <div class="btn" @click = "delete_card">Delete</div>
  </div>
</template>

<script>
import skillCard from './skill-card.vue';
export default {
  conponents: {
    skillCard
  },
  props: { 
    user:{},
  },
  emits: ['delete-card'],
  data() {
    return {
      
    }
  },
  methods: {
    delete_card() {
      this.$emit('delete-card', this.user.id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    margin: 5px;
    width: 30%;
    padding: 30px;
    border-radius: 10px;
    border-top: 5px solid lightskyblue;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  .btn {
    text-align: center;
    background-color: #e22;
    color: #fff;
    padding: 8px 15px;
    border: none;
    border-radius:5px;
    margin-left: 80%;
    cursor: pointer;
    font-size: 14px;
  }
  ul {
    padding: 0px 30px;
  }
  .content {
    margin-bottom: 10px;
  }
  h3 {
    font-weight: normal;
    padding: 5px;
  }
</style>
