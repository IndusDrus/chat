<template>
	<div class="contacts-container">
    <div class="contact-list">
      <div class="contact-title-wrapper">
        <h2 class="contact-title">Контакты</h2>
        <div class="contacts-action">
          <button class="btn btn-action contacts-close-btn"
                  @click="closeContactList()">
            <svg class="icon close-icon" x="0px" y="0px" viewBox="0 0 47.971 47.971" style="enable-background:new 0 0 47.971 47.971;" xml:space="preserve">
              <g>
                <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
                  c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
                  C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
                  s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div v-for="user in users"
           class="contact-card"
           :class="{ 'active' : activeUser === user.nickname }"
           @click="selectChat(user)">
        <div class="contact-avatar-wrapper">
          <img :src="user.avatarURL" class="contact-avatar">
        </div>
        <h3 class="contact-nickname">{{ user.nickname }}</h3>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data () {
      return {
        activeUser: ""  // имя пользователя, с которым открыт чат
      }
    },

    computed: {
      
      /**
       * Получение списка пользователей из хранилища
       * 
       * @return {Object} users   Объект списка пользователей
       */
      users () {
        let users = this.$store.state.users

        return users
      }
    },

    methods: {

      /**
       * Выбрать чат
       * 
       * @param  {Object} user    Объект выбранного пользователя
       */
      selectChat (user) {
        this.$emit('selectChat', user)
        this.activeUser = user.nickname
      },

      /**
       * Закрыть список контактов
       */
      closeContactList () {
        this.$emit('closeContactList')
      }
    }
  }
</script>