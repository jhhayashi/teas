FROM node:10.1.0

ENV PORT 3000

RUN npm install -g npm@6.0.0

COPY . app/
WORKDIR app/

RUN npm install
RUN npm run build:prod
CMD ["npm","run","start"]

EXPOSE 3000
