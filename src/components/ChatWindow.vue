<template>
	<div class="chat-window-wrapper">
    <div class="chat-window">
      
      <div v-for="message in messages"
           class="message-wrapper"
           :class="getAlignClass(message)">
        <div class="message-card">
          <div class="name-wrapper">
            <span class="name">{{ message.name }}</span>
          </div>
          <div class="text-wrapper">
            <span class="text">{{ message.text }}</span>
          </div>
          <div class="date-wrapper">
            <span class="date">{{ message.time }}</span>
          </div>
        </div>
      </div>

      <form class="input-form" @submit.prevent="sendMessage">
        <textarea v-model="newText" placeholder="Напишите сообщение"></textarea>
        <button type="submit">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app',
    props: ['currentUser', 'reversed'],

    data () {
      return {
        newText: ""
      }
    },

    computed: {
      messages () {
        let messages = this.$store.state.messages

        return messages
      }
    },

    methods: {
      
      sendMessage () {
        let date = new Date()
        let time = date.getHours() + ':' + date.getMinutes()
        
        console.log(time)
        
        let name = ""
        if (this.reversed)
          name = "Иван Иванов"
        else
          name = this.currentUser

        let message = {
          name: name,
          text: this.newText,
          time: time
        }

        this.$store.dispatch('sendMessage', message)
        this.newText = ""
      },

      getAlignClass (message) {
        if (this.reversed) {
          if (message.name === this.currentUser)
            return "left"
          else
            return "right"
        } else {
          if (message.name === this.currentUser)
            return "right"
          else
            return "left"
        }
      }
    }
}
</script>