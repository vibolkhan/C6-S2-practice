<template>
  <friend-nav />
  <div class="container">
    <friend-form @users = "addUser" />
    <friend-card @delete-card = "delete_card" v-for:="value in users" :key="value.name" :user = "value"/> 
  </div>
</template>

<script>
import FriendForm from './components/friend-form.vue';
import FriendNav from './components/friend-nav.vue';
import FriendCard from './components/friend-card.vue';
export default {
  components: { FriendNav, FriendForm, FriendCard },
  data() {
    return {
      id: 0,
      users: [],
      
    }
  },
  methods: { 
    addUser(firstname, lastname, comment, skills) {
      this.id ++;
       this.users.push({
        id: this.id,
        firstname: firstname,
        lastname: lastname,
        comment: comment,
        skills: skills,
      });
    },
    delete_card(id) {
      for (let i=0; i<this.users.length; i++) {
        if (this.users[i].id == id) {
          this.users.splice(i,1);
        }
      }
    }
  }
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
