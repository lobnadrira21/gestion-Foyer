FROM openjdk:17-jdk-alpine
EXPOSE  8089
COPY target/tp-foyer-5.0.1.jar tp-foyer-5.0.1.jar
ENTRYPOINT ["java", "-jar","/tp-foyer-5.0.1.jar"]