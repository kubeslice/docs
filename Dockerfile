FROM node:20.15-bookworm-slim as builder
WORKDIR /build
COPY . ./
COPY ./images/ ./static/images
RUN npm install

EXPOSE 3000
ENTRYPOINT ["npm", "run"]
CMD ["start:docker"]
