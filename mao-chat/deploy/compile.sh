#!/usr/bin/env bash
# npm run build:prod
cp -R ../dist ./
docker build -f ./Dockerfile -t mao-chat:0.0.1 .
