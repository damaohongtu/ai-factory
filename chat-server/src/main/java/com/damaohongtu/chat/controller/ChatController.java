package com.damaohongtu.chat.controller;

import com.damaohongtu.chat.common.BaseResponse;
import com.damaohongtu.chat.service.ChatService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@RequestMapping("/api/chat")
public class ChatController {

    @Resource
    private ChatService chatService;

    @GetMapping("/text")
    public BaseResponse queryGraph(@RequestParam String msg){

        String responseMsg = chatService.chat(msg);
        responseMsg.replaceAll("\r|\n", "");
        BaseResponse response = BaseResponse.builder()
                .status(200)
                .code("SUCCESS")
                .data(responseMsg)
                .build();
        return response;
    }

}
