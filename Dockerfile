FROM node:18.20.4-alpine as builder
WORKDIR /build
COPY . ./
COPY ./images/ ./static/images
RUN npm install

EXPOSE 3000
ENTRYPOINT ["npm", "run"]
CMD ["start:docker"]
