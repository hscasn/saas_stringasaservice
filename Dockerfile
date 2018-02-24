FROM node:alpine
WORKDIR /var/www
COPY . .
EXPOSE 8000
CMD ["npm", "start"]
