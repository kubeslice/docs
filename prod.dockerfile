FROM node:22.6.0-slim as builder
WORKDIR /build
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

EXPOSE 3000
ENTRYPOINT ["npm", "run"]
CMD ["serve"]
