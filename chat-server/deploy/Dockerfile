# Dockerfile
# 基于的镜像
FROM java:8
 
VOLUME /usr/local/app/logs
 
ADD *.jar app.jar
COPY ./start.sh /usr/bin/start.sh

# 对外端口
EXPOSE 8080

RUN chmod +x /usr/bin/start.sh
CMD ["sh","/usr/bin/start.sh"]