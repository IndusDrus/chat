<template>
  <div class="chat-window-wrapper">
    
    <div v-if="isVisibleChat" class="chat-window">
      
      <div class="chat-header">
        <div class="chat-contact">
          <div class="contact-avatar-wrapper">
            <img :src="receivingUser.avatarURL" class="contact-avatar">
          </div>
          <h3 class="contact-nickname">{{ receivingUser.nickname }}</h3>
        </div>
        <div class="chat-action">
          <button class="btn btn-action chat-header-btn"
                  @click="showContactList()">
            <svg class="icon hamburger-icon" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <g>
              <g>
                <path d="M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M492,76H20C8.954,76,0,84.954,0,96s8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,76,492,76z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M492,396H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20
                  C512,404.954,503.046,396,492,396z"/>
              </g>
            </g>
            </svg>
          </button>
        </div>
      </div>

      <div class="chat-body">
        <div v-for="message in messages"
             class="message-wrapper"
             :class="getAlignClass(message)">
          
          <div class="message-contact">
            <div class="contact-avatar-wrapper">
              <img :src="getAvatarURL(message)" class="contact-avatar">
            </div>
            
            <div class="message-info">
              <h3 class="contact-nickname">{{ message.from }}</h3>
              
              <div class="date-wrapper">
                <span class="date">{{ message.time }}</span>
              </div>
            </div>            
          </div>
          
          <div class="message-content">
            <div class="text-wrapper">
              <span class="text">{{ message.text }}</span>
            </div>
          </div>

        </div>
      </div>
      
      <div class="chat-footer">
        <form class="input-form" @submit.prevent="sendMessage">
          <input class="form-text-input" type="text" v-model="newText" placeholder="Напишите сообщение">
          <button class="send-button btn btn-form" type="submit">
            <svg class="icon send-icon" enable-background="new 0 0 512.005 512.005" height="512" viewBox="0 0 512.005 512.005" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m511.658 51.675c2.496-11.619-8.895-21.416-20.007-17.176l-482 184c-5.801 2.215-9.638 7.775-9.65 13.984-.012 6.21 3.803 11.785 9.596 14.022l135.403 52.295v164.713c0 6.948 4.771 12.986 11.531 14.593 6.715 1.597 13.717-1.598 16.865-7.843l56.001-111.128 136.664 101.423c8.313 6.17 20.262 2.246 23.287-7.669 127.599-418.357 122.083-400.163 122.31-401.214zm-118.981 52.718-234.803 167.219-101.028-39.018zm-217.677 191.852 204.668-145.757c-176.114 185.79-166.916 176.011-167.684 177.045-1.141 1.535 1.985-4.448-36.984 72.882zm191.858 127.546-120.296-89.276 217.511-229.462z"/></g></svg>
          </button>
        </form>
      </div>
        
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app',
    props: ['sendingUser', 'receivingUser', 'isDefaultChat'],

    data () {
      return {
        newText: ""
      }
    },

    computed: {
      messages () {
        let messages
        let storeMessages = this.$store.state.messages
        let sendingNick = this.sendingUser.nickname
        let receivingNick = this.receivingUser.nickname

        if (this.isDefaultChat) {
          messages = storeMessages.filter( message => message.from != receivingNick || message.to != receivingNick )
        } else if (sendingNick === receivingNick) {
          messages = storeMessages.filter( message => message.from === sendingNick && message.to === sendingNick )
        } else {
          messages = storeMessages.filter( message => message.from != sendingNick || message.to != sendingNick )
        }

        return messages
      },

      isVisibleChat () {
        return this.isDefaultChat || this.receivingUser
      }
    },

    created () {
      this.scrollChatsToBottom()
      this.$emit('updateChats', this.scrollChatsToBottom)
    },

    methods: {
      
      sendMessage () {
        if (!this.isEmptyMessage()) {
          let date = new Date()
          let time = ""
          if (date.getHours() < 10) {
            time = '0' + date.getHours() + ':'
          } else {
            time = date.getHours() + ':'
          }

          if (date.getMinutes() < 10) {
            time += '0' + date.getMinutes()
          } else {
            time += date.getMinutes()
          }

          let message = {
            from: this.sendingUser.nickname,
            to: this.receivingUser.nickname,
            text: this.newText,
            time: time
          }

          this.$store.dispatch('sendMessage', message)
          this.scrollChatsToBottom()
        }

        this.newText = ""
      },

      isEmptyMessage () {
        return this.newText === 0 || !this.newText.trim() ? true : false
      },

      scrollChatsToBottom () {
        setTimeout(function () {
          var chatsArray = [...document.getElementsByClassName('chat-body')]
          chatsArray.forEach( chat => {
            chat.scrollTop = chat.scrollHeight
          })
        }, 100)
      },

      getAlignClass (message) {
        return message.from === this.sendingUser.nickname ? 'outgoing-message' : ''
      },

      getAvatarURL (message) {
        if (message.from === this.sendingUser.nickname) {
          return this.sendingUser.avatarURL
        } else {
          return this.receivingUser.avatarURL
        }

      },

      showContactList () {
        this.$emit('showContactList')
      }
    }
}
</script>