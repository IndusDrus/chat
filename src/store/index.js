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
    messages: [
      {
        from: "asd",
        to: "Иван Иванов",
        text: "Message 1",
        time: "16:36"
      },
      {
        from: "Иван Иванов",
        to: "asd",
        text: "Message 2",
        time: "16:38"
      },
      {
        from: "Иван Иванов",
        to: "asd",
        text: "Message 3",
        time: "16:39"
      },
      {
        from: "asd",
        to: "asd",
        text: "Message 4",
        time: "17:39"
      },
      {
        from: "asd",
        to: "asd",
        text: "Message 5",
        time: "18:39"
      }
    ]
  },

  getters: {},

  mutations: {
    
    login (state, user) {
      state.users.push(user)
    },

    sendMessage (state, message) {
      state.messages.push(message)
    }
  },

  actions: {
    
    login (context, user) {
      context.commit('login', user)
    },

    sendMessage (context, message) {
      context.commit('sendMessage', message)
    }
  }

})