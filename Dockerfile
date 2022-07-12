FROM node:16.14.0-alpine3.15 as builder
WORKDIR /build
COPY . ./
RUN npm install

EXPOSE 3000
ENTRYPOINT ["npm", "run"]
CMD ["start:docker"]
