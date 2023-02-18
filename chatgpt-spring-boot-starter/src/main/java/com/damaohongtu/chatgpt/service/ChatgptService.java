package com.damaohongtu.chatgpt.service;

import com.damaohongtu.chatgpt.dto.ChatRequest;
import com.damaohongtu.chatgpt.dto.ChatResponse;

public interface ChatgptService {

    String sendMessage(String message);

    ChatResponse sendChatRequest(ChatRequest request);

}
