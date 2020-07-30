<template>
	<div class="chat-container">
		<div class="contact-list-wrapper">
			<app-contact-list @selectChat="selectChat($event)"></app-contact-list>
		</div>
		<div class="chat-wrapper">
			<app-chat-window :sendingUser="currentUser"
							 :receivingUser="selectedUser"
							 :isDefaultChat="false"
							 @updateChats="updateChats($event)"></app-chat-window>
			<app-chat-window :sendingUser="defaultUser"
							 :receivingUser="currentUser"
							 :isDefaultChat="true"
							 @updateChats="updateChats($event)"></app-chat-window>
		</div>
	</div>
</template>

<script>
  import ContactList from './ContactList.vue'
  import ChatWindow from './ChatWindow.vue'

  export default {
    name: 'app',
    props: ['currentUser'],

    data () {
      return {
        selectedUser: null,
        updateMethod: null
      }
    },

    computed: {
    	defaultUser () {
    		let defaultUser = this.$store.state.users[0]

    		return defaultUser
    	}
    },

    methods: {
    	selectChat(user) {
    		this.selectedUser = user
    		this.updateMethod()
    	},

    	updateChats (updateMethod) {
    		this.updateMethod = updateMethod;
    	}
    },

    components: {
      'app-contact-list': ContactList,
      'app-chat-window': ChatWindow
    }
}
</script>