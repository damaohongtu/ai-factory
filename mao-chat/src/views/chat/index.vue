<template>
  <div>
    <vue-advanced-chat
      height="calc(100vh - 20px)"
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
import {chatGPT} from "@/api/chat";
// import { register } from '../../vue-advanced-chat/dist/vue-advanced-chat.es.js'
register()
export default {
  data() {
    return {
      currentUserId: '1234',
      rooms: [
        {
          roomId: '1',
          roomName: '你问我答',
          avatar: 'https://damaohongtu.com/upload/2022/12/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87%E5%A4%B4%E5%83%8F.jpg',
          users: [
            { _id: '1234', username: 'John Doe' },
            { _id: '4321', username: 'John Snow' }
          ]
        },
        {
          roomId: '2',
          roomName: '你说我画',
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
          this.messages = [...this.addMessages(), ...this.messages]
          this.messagesLoaded = true
        }
        // this.addNewMessage()
      })
    },
    addMessages(reset) {
      const messages = []
      for (let i = 0; i < 5; i++) {
        messages.push({
          _id: reset ? i : this.messages.length + i,
          content: `${reset ? '' : 'paginated'} message ${i + 1}`,
          senderId: '4321',
          username: 'John Doe',
          date: '13 November',
          timestamp: '10:20',
          system: false,
          saved: true,
          distributed: true,
          seen: true,
          disable_actions: false,
          disable_reactions: false,
          files: [
            {
              name: 'My File',
              size: 67351,
              type: 'png',
              audio: true,
              duration: 14.4,
              url: 'https://damaohongtu.com/upload/2022/12/image-1672232537618.png',
              preview: 'https://damaohongtu.com/upload/2022/12/image-1672232537618.png'
            }
          ]
        })
      }
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
          disable_reactions: false,
          files: [
            {
              name: 'My File',
              size: 67351,
              type: 'png',
              audio: true,
              duration: 14.4,
              url: 'https://damaohongtu.com/upload/2022/12/image-1672232537618.png',
              preview: 'https://damaohongtu.com/upload/2022/12/image-1672232537618.png'
            }
          ]
        },
        this.chatWithOpenAI(message)
      ]
    },
    chatWithOpenAI(message) {
      chatGPT(message).then(res => {
        console.log(res)
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
