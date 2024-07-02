FROM node:22.3-bookworm-slim as builder
WORKDIR /build
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

EXPOSE 3000
ENTRYPOINT ["npm", "run"]
CMD ["serve"]
