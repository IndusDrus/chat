<template>
	<div class="contact-list">
		<div class="contact-title-wrapper">
      <h2 class="contact-title">Контакты</h2>
    </div>
    <div v-for="user in users" class="contact-card">
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
        
      }
    },

    computed: {
      users () {
        let users = this.$store.state.users

        return users
      }
    }
  }
</script>