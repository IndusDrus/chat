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
        isLoggedIn: false,    // Проверка входа в приложение
        currentUser: {}       // Текущий пользователь
      }
    },

    methods: {

      /**
       * Войти в приложение
       * 
       * @param  {Object} user    Объект текущего пользователя
       */
      login (user) {
        this.isLoggedIn = true
        this.currentUser = user
      }
    },

    components: {
      'app-login-form': LoginForm,
      'app-chat': Chat
    }
}
</script>