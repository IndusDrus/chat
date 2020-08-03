<template>
	<div class="login-form-wrapper">
		<form class="login-form" @submit.prevent="login">
	     	<h1 class="login-form-title">Вход</h1>
	     	<input required 
	     		   v-model="nickname"
			   	   type="text"
			   	   class="form-text-input"
			   	   placeholder="Введите никнейм"
			   	   maxlength="20"/>
	     	<input required
	     		   v-model="avatarURL"
			   	   type="text"
			   	   class="form-text-input"
			   	   placeholder="Вставьте ссылку на аватар"/>
	     	<button type="submit" class="login-btn btn btn-form">Войти</button>
	   	</form>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				nickname: "",	// Имя текущего пользователя
				avatarURL: ""	// Ссылка на аватар текущего пользователя
			}
		},

		methods: {
			
			/**
			 * Войти в приложение
			 */
			login () {
				let nickname = this.nickname
				let avatarURL = this.avatarURL

				this.$store.dispatch('login', {nickname, avatarURL})
				this.$emit('loggedIn', {nickname, avatarURL})
			}
		}
	}
</script>