<template>
	<div class="contact-list">
		<div class="contact-title-wrapper">
      <h2 class="contact-title">Контакты</h2>
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
</template>

<script>

  export default {
    name: 'app',
    data () {
      return {
        activeUser: ""
      }
    },

    computed: {
      users () {
        let users = this.$store.state.users

        return users
      }
    },

    methods: {
      selectChat (user) {
        this.$emit('selectChat', user)
        this.activeUser = user.nickname
      }
    }
  }
</script>