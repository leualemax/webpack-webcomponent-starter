FROM node
RUN npm install -g --silent webpack-cli webpack-server karma-cli yarn
RUN yarn config set no-progress true

RUN mkdir -p /nama-front
WORKDIR /nama-front
ADD . .
RUN yarn install

# RUN mkdir -p /tmp
# ADD package.json /tmp/package.json
# WORKDIR /tmp
# RUN yarn install
# RUN cd node_modules && rm -rf `ls -Ab` && cp -a /tmp/node_modules/. .

EXPOSE 4200


