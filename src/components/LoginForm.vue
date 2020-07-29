<template>
	<div class="login-form-wrapper">
		<form class="login-form" @submit.prevent="login">
	     	<h1 class="login-form-title">Вход</h1>
	     	<input required 
	     		   v-model="nickname"
			   	   type="text"
			   	   class="login-form-input"
			   	   placeholder="Введите никнейм"
			   	   maxlength="20"/>
	     	<input required
	     		   v-model="avatarURL"
			   	   type="text"
			   	   class="login-form-input"
			   	   placeholder="Вставьте ссылку на аватар"/>
	     	<button type="submit" class="login-btn">Login</button>
	   	</form>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				nickname: "",
				avatarURL: ""
			}
		},

		methods: {
			login () {
				let nickname = this.nickname
				let avatarURL = this.avatarURL
				this.$store.dispatch('login', {nickname, avatarURL})
				this.$emit('loggedIn', nickname)
			}
		}
	}
</script>