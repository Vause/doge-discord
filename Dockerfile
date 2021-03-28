FROM arm32v7/node:15

# Create bot dir
RUN mkdir -p /usr/src/doge-discord
WORKDIR /usr/src/doge-discord

# Copy and install bot
COPY package.json /usr/src/doge-discord
RUN npm install

# Move over src
COPY . /usr/src/doge-discord

# Start
CMD ["node", "index.js"]