FROM node:16.14.0-alpine3.15 as builder
WORKDIR /build
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

EXPOSE 3000
ENTRYPOINT ["npm", "run"]
CMD ["serve"]
