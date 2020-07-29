<template>
	<div class="chat-wrapper">
		<div class="contact-list-wrapper">
			<app-contact-list></app-contact-list>
		</div>
		<div class="chat-window-wrapper">
			<app-chat-window :currentUser="currentUser" :reversed="false"></app-chat-window>
			<app-chat-window :currentUser="currentUser" :reversed="true"></app-chat-window>
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
        
      }
    },

    components: {
      'app-contact-list': ContactList,
      'app-chat-window': ChatWindow
    }
}
</script>