<template>
  <div>
    <chat-window :currentUserId="currentUserId" :rooms="rooms" :messages="messages" />
  </div>
</template>

<script>
import ChatWindow from 'vue-advanced-chat'
export default {
  components: {
    ChatWindow
  },
  data() {
    return {
      rooms: [],
      messages: [],
      currentUserId: 1234
    }
  }
}
</script>
