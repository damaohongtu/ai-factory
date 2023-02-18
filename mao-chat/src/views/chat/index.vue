<template>
  <div>
    <vue-advanced-chat
      height="calc(100vh - 20px)"
      show-audio="false"
      show-files="false"
      show-emojis="false"
      :current-user-id="currentUserId"
      :rooms="JSON.stringify(rooms)"
      :rooms-loaded="true"
      :messages="JSON.stringify(messages)"
      :messages-loaded="messagesLoaded"
      @send-message="sendMessage($event.detail[0])"
      @fetch-messages="fetchMessages($event.detail[0])"
    />
  </div>
</template>

<script>
import { register } from 'vue-advanced-chat'
import { chatGPT } from '@/api/chat'
// import { register } from '../../vue-advanced-chat/dist/vue-advanced-chat.es.js'
register()
export default {
  data() {
    return {
      currentUserId: '1234',
      rooms: [
        {
          roomId: '1',
          roomName: '和ChatGPT聊会天',
          avatar: 'https://damaohongtu.com/upload/2022/12/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87%E5%A4%B4%E5%83%8F.jpg',
          users: [
            {
              _id: '1234',
              username: 'John Doe',
              avatar: 'https://damaohongtu.com/upload/2022/12/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87%E5%A4%B4%E5%83%8F.jpg',
              status: {
                state: 'online',
                last_changed: 'today, 14:30'
              }
            },
            {
              _id: '4321',
              username: 'John Snow',
              avatar: 'https://damaohongtu.com/upload/2022/12/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87%E5%A4%B4%E5%83%8F.jpg',
              status: {
                state: 'online',
                last_changed: 'today, 14:30'
              }
            }
          ]
        }
      ],
      messages: [],
      messagesLoaded: false
    }
  },
  methods: {
    fetchMessages({ options = {}}) {
      setTimeout(() => {
        if (options.reset) {
          this.messages = this.addMessages(true)
        } else {
          // this.messages = [...this.addMessages(), ...this.messages]
          this.messagesLoaded = true
        }
        // this.addNewMessage()
      })
    },
    addMessages(reset) {
      const messages = []
      messages.push({
        _id: 0,
        content: '你好，和我聊点什么呢？',
        senderId: '4321',
        username: 'John Doe',
        timestamp: new Date().toString().substring(16, 21),
        date: new Date().toDateString(),
        system: false,
        saved: true,
        distributed: true,
        seen: true,
        disable_actions: false,
        disable_reactions: false
      })
      return messages
    },
    sendMessage(message) {
      this.messages = [
        ...this.messages,
        {
          _id: this.messages.length,
          content: message.content,
          senderId: this.currentUserId,
          timestamp: new Date().toString().substring(16, 21),
          date: new Date().toDateString(),
          system: false,
          saved: true,
          distributed: true,
          seen: true,
          disable_actions: false,
          disable_reactions: false
        }
      ]
      this.chatWithOpenAI(message.content)
    },
    chatWithOpenAI(message) {
      chatGPT(message).then(res => {
        console.log(res)
        this.messages.push({
          _id: this.messages.length,
          content: res.data,
          senderId: '4321',
          username: 'John Doe',
          timestamp: new Date().toString().substring(16, 21),
          date: new Date().toDateString(),
          system: false,
          saved: true,
          distributed: true,
          seen: true,
          disable_actions: false,
          disable_reactions: false
        })
      })
    },
    addNewMessage() {
      setTimeout(() => {
        this.messages = [
          ...this.messages,
          {
            _id: this.messages.length,
            content: 'NEW MESSAGE',
            senderId: '1234',
            timestamp: new Date().toString().substring(16, 21),
            date: new Date().toDateString()
          }
        ]
      }, 2000)
    }
  }
}
</script>

<style lang="scss">
body {
  font-family: 'Quicksand', sans-serif;
}
</style>
