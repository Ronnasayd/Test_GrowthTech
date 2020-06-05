FROM node:13.14-alpine
ADD . app
WORKDIR /app
RUN yarn 
ENV NODE_ENV=production
EXPOSE $PORT
CMD [ "yarn","start" ]