FROM node:14-alpine
MAINTAINER Lloyd Benson <lloyd.benson@gmail.com>
RUN mkdir -p /apps/presentations
ADD . /apps/presentations
RUN cd /apps/presentations && npm install --production
EXPOSE 8082
WORKDIR /apps/presentations
CMD [ "npm", "start" ]
