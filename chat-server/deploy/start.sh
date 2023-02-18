#!/usr/bin/env bash

config_files=$(ls -m /usr/bin/conf/* | sed 's/ //g')

nohup java -Djava.security.egd=file:/dev/./urandom -jar -Dspring.profiles.active=base -Dspring.config.additional-location=$config_files /app.jar --server.port=8080