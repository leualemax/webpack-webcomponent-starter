FROM node
RUN npm install -g --silent webpack-cli webpack-server karma-cli yarn
RUN yarn config set no-progress true

RUN mkdir -p /webcomponent
WORKDIR /webcomponent
ADD . .
RUN yarn install

EXPOSE 4200
