# define base docker image
FROM openjdk:17
LABEL maintainer="alex"
ADD target/todo-0.0.1-SNAPSHOT.jar todo.jar
ENTRYPOINT ["java", "-jar", "todo.jar"]