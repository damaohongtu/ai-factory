#!/usr/bin/env bash
rm ./*.jar

cp ./chat-server-0.0.1-SNAPSHOT ./

docker build -f ./Dockerfile -t com.damaohongtu.chatserver:0.0.1 .

rm ./*.jar