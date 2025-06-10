FROM eclipse-temurin:21-jdk-alpine

# Install required packages
RUN apk update && apk add --no-cache \
  git \
  maven \
  graphviz \
  curl \
  bash

# Workspace folder
WORKDIR /app

# Copy .jar file
COPY . .

# Run Maven build
RUN mvn clean install -DskipTests

# Expose Ports
EXPOSE 8082

# Entrypoint
ENTRYPOINT ["java", "-jar", "target/Portfulius-Backend.jar"]
