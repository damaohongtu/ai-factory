FROM nginx
# 定义作者
MAINTAINER damaohongtu
# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面
COPY ./dist/  /usr/share/nginx/html/
#拷贝.conf文件到镜像下，替换掉原有的nginx.conf
COPY ./conf/nginx.conf /etc/nginx/nginx.conf
#输出完成
EXPOSE 80
RUN echo 'mao-chat, front init ok!!'

