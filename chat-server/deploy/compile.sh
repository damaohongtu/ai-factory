#!/usr/bin/env bash
mvn -f ../pom.xml clean -U package -DskipTests=true

rm ./*.jar

cp ../target/orderquery-demo-0.0.1.jar ./

docker build -f ./Dockerfile -t com.damaohongtu.chatserver:0.0.1 .

rm ./*.jar