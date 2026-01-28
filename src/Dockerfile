FROM node:18-slim

WORKDIR /app

COPY package*.json ./
RUN npm install

EXPOSE 3010 9229

CMD ["npm", "run", "dev"]
