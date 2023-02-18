## 启动
```shell
# -Dspring.config.additional-location可以指定不同的业务方的配置参数
java -jar -Dspring.config.additional-location=./deploy/conf/application-test.yml ./target/orderquery-demo-0.0.1-SNAPSHOT.jar --server.port=8080
```