<template>
	<div class="chat-container">
		<div class="contact-list-wrapper"
			 :class="{ 'visible' : isVisibleContactsOnSmallScreens }">
			<app-contact-list @selectChat="selectChat($event)"
							  @closeContactList="closeContactList()"></app-contact-list>
		</div>
		<div class="chat-wrapper">
			<app-chat-window id="selected-chat"
							 :sendingUser="currentUser"
							 :receivingUser="selectedUser"
							 :isDefaultChat="false"
							 @showContactList="showContactList()"></app-chat-window>
			<app-chat-window id="default-chat"
							 :sendingUser="defaultUser"
							 :receivingUser="currentUser"
							 :isDefaultChat="true"
							 @showContactList="showContactList()"></app-chat-window>
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
        selectedUser: this.$store.state.users[0],
        updateMethod: null,
        isVisibleContactsOnSmallScreens: false
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
    		this.updateChat('selected-chat')
    		this.isVisibleContactsOnSmallScreens = false
    	},

    	updateChat (id) {
    		setTimeout(function () {
	          let chatWindow = document.getElementById(id)
	          let chat = chatWindow.getElementsByClassName('chat-body')[0]
	          chat.scrollTop = chat.scrollHeight
	        }, 100)
    	},

    	showContactList () {
    		this.isVisibleContactsOnSmallScreens = true
    	},

    	closeContactList () {
    		this.isVisibleContactsOnSmallScreens = false
    	}
    },

    components: {
      'app-contact-list': ContactList,
      'app-chat-window': ChatWindow
    }
}
</script>