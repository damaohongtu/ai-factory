(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c47980b2"],{"3a82":function(e,s,t){"use strict";t("5776")},5776:function(e,s,t){},"6f29":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("vue-advanced-chat",{attrs:{height:"calc(100vh - 20px)","show-audio":"false","show-files":"false","show-emojis":"false","current-user-id":e.currentUserId,rooms:JSON.stringify(e.rooms),"rooms-loaded":!0,messages:JSON.stringify(e.messages),"messages-loaded":e.messagesLoaded},on:{"send-message":function(s){return e.sendMessage(s.detail[0])},"fetch-messages":function(s){return e.fetchMessages(s.detail[0])}}})],1)},n=[],o=t("2909"),i=(t("d3b7"),t("25f0"),t("99af"),t("1f64")),d=t("b775");function r(e){return Object(d["a"])({url:"/api/chat/text",method:"get",params:{msg:e}})}Object(i["a"])();var c={data:function(){return{currentUserId:"1234",rooms:[{roomId:"1",roomName:"和ChatGPT聊会天",avatar:"https://damaohongtu.com/upload/2022/12/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87%E5%A4%B4%E5%83%8F.jpg",users:[{_id:"1234",username:"John Doe",avatar:"https://damaohongtu.com/upload/2022/12/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87%E5%A4%B4%E5%83%8F.jpg",status:{state:"online",last_changed:"today, 14:30"}},{_id:"4321",username:"John Snow",avatar:"https://damaohongtu.com/upload/2022/12/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87%E5%A4%B4%E5%83%8F.jpg",status:{state:"online",last_changed:"today, 14:30"}}]}],messages:[],messagesLoaded:!1}},methods:{fetchMessages:function(e){var s=this,t=e.options,a=void 0===t?{}:t;setTimeout((function(){a.reset?s.messages=s.addMessages(!0):s.messagesLoaded=!0}))},addMessages:function(e){var s=[];return s.push({_id:0,content:"你好，和我聊点什么呢？",senderId:"4321",username:"John Doe",timestamp:(new Date).toString().substring(16,21),date:(new Date).toDateString(),system:!1,saved:!0,distributed:!0,seen:!0,disable_actions:!1,disable_reactions:!1}),s},sendMessage:function(e){this.messages=[].concat(Object(o["a"])(this.messages),[{_id:this.messages.length,content:e.content,senderId:this.currentUserId,timestamp:(new Date).toString().substring(16,21),date:(new Date).toDateString(),system:!1,saved:!0,distributed:!0,seen:!0,disable_actions:!1,disable_reactions:!1}]),this.chatWithOpenAI(e.content)},chatWithOpenAI:function(e){var s=this;r(e).then((function(e){console.log(e),s.messages.push({_id:s.messages.length,content:e.data,senderId:"4321",username:"John Doe",timestamp:(new Date).toString().substring(16,21),date:(new Date).toDateString(),system:!1,saved:!0,distributed:!0,seen:!0,disable_actions:!1,disable_reactions:!1})}))},addNewMessage:function(){var e=this;setTimeout((function(){e.messages=[].concat(Object(o["a"])(e.messages),[{_id:e.messages.length,content:"NEW MESSAGE",senderId:"1234",timestamp:(new Date).toString().substring(16,21),date:(new Date).toDateString()}])}),2e3)}}},u=c,g=(t("3a82"),t("2877")),m=Object(g["a"])(u,a,n,!1,null,null,null);s["default"]=m.exports}}]);