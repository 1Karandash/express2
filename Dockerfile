FROM node:12.9.0
WORKDIR /opt
COPY . .
RUN npm install
EXPOSE 3011
CMD ["node", "/opt/index.js"]