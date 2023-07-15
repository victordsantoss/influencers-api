FROM node:18

WORKDIR /app
COPY . .
RUN npm cache clean --force
RUN npm install
RUN npx sequelize-cli db:migrate


EXPOSE 3000

# CMD npm start
CMD [ "node", "server.js" ]