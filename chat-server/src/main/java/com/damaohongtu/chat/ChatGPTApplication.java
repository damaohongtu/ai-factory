package com.damaohongtu.chat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.damaohongtu"})
public class ChatGPTApplication {

    public static void main(String[] args) {
        SpringApplication.run(ChatGPTApplication.class, args);
    }

}
