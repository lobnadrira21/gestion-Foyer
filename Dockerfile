FROM openjdk:17-jdk-alpine

# Expose le port 8089
EXPOSE 8089

# Spécifiez les valeurs par défaut pour NEXUS_URL et JAR_PATH
ARG NEXUS_URL=http://192.168.1.100:8081/#browse/browse:maven-releases
ARG JAR_PATH=tn/esprit/tp-foyer/5.0.0
ARG JAR_NAME=tp-foyer-5.0.0.jar

# Téléchargez le fichier JAR depuis Nexus
RUN apk add --no-cache curl && \
    curl -o $JAR_NAME "$NEXUS_URL/$JAR_PATH/$JAR_NAME"

# Exécutez l'application
ENTRYPOINT ["java", "-jar", "tp-foyer-5.0.0.jar"]


