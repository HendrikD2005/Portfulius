FROM node:20-slim

# Install required packages
RUN apt-get update && apt-get install -y \
  openjdk-17-jre \
  graphviz \
  git \
  libgtk-3-0 \
  libnss3 \
  libxss1 \
  libasound2 \
  libx11-xcb1 \
  libxcomposite1 \
  libxdamage1 \
  libxrandr2 \
  libglib2.0-0 \
  libgbm1 \
  xdg-utils \
  libxext6 \
  libxfixes3 \
  libxcb1 \
  && rm -rf /var/lib/apt/lists/*

# Workspace folder
WORKDIR /workspace

# Install Vite
RUN npm install -g @vue/cli vite

# Install Electron
RUN npm install -g electron