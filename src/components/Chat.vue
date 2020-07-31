<template>
	<div class="chat-container">
		<div class="contact-list-wrapper"
			 :class="{ 'visible' : isVisibleContactsOnSmallScreens }">
			<app-contact-list @selectChat="selectChat($event)"
							  @closeContactList="closeContactList()"></app-contact-list>
		</div>
		<div class="chat-wrapper">
			<app-chat-window :sendingUser="currentUser"
							 :receivingUser="selectedUser"
							 :isDefaultChat="false"
							 @updateChats="updateChats($event)"
							 @showContactList="showContactList()"></app-chat-window>
			<app-chat-window :sendingUser="defaultUser"
							 :receivingUser="currentUser"
							 :isDefaultChat="true"
							 @updateChats="updateChats($event)"
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
        selectedUser: null,
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
    		this.updateMethod()
    		this.isVisibleContactsOnSmallScreens = false
    	},

    	updateChats (updateMethod) {
    		this.updateMethod = updateMethod
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