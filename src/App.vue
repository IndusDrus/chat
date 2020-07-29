<template>
  <div id="app">
    <app-login-form v-if="!isLoggedIn" @loggedIn="login($event)"></app-login-form>
    <app-chat v-else :currentUser="currentUser"></app-chat>    
  </div>
</template>

<script>
  import LoginForm from './components/LoginForm.vue'
  import Chat from './components/Chat.vue'

  export default {
    name: 'app',
    data () {
      return {
        isLoggedIn: false,
        currentUser: ""
      }
    },

    methods: {
      login (nickname) {
        this.isLoggedIn = true
        this.currentUser = nickname
      }
    },

    components: {
      'app-login-form': LoginForm,
      'app-chat': Chat
    }
}
</script>