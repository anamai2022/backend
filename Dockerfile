FROM node:16
ENV NODE=production
WORKDIR /app
COPY . /app
RUN yarn install --production
COPY . .
EXPOSE 4000
CMD ["node", "index.js"]