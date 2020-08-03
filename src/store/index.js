import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        nickname: "Иван Иванов",
        avatarURL: "https://ichef.bbci.co.uk/news/660/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg"
      }
    ],
    messages: []
  },

  getters: {},

  mutations: {

    /**
     * Войти в приложение
     * 
     * @param  {Object} user    Текущий пользователь
     */
    login (state, user) {
      state.users.push(user)
    },

    /**
     * Отправить сообщение
     * 
     * @param  {Object} message  Объект сообщения
     */
    sendMessage (state, message) {
      state.messages.push(message)
    }
  },

  actions: {
    
    /**
     * Инициация мутации входа в приложение
     * 
     * @param  {Object} user    Текущий пользователь
     */
    login (context, user) {
      context.commit('login', user)
    },

    /**
     * Инициация мутации отправки сообщения
     * 
     * @param  {Object} message  Объект сообщения
     */
    sendMessage (context, message) {
      context.commit('sendMessage', message)
    }
  }

})