package com.damaohongtu.chat.service;

import com.damaohongtu.chatgpt.service.ChatgptService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class ChatService {
    @Resource
    private ChatgptService chatgptService;

    public String chat(String msg){
        String responseMessage = chatgptService.sendMessage(msg);
        return responseMessage;
    }

}
