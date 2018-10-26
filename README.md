# A Simple Webcomponent

Implementated with Typescript and custom-elements Polyfill, using Karma for unity test, scss for styling and docker for environment. 
Webpack is orchestrating all the magic! 🤓

## setting the table

First, build the docker image

```
$ docker-compose build webcomponent
```

## developing

To run a dev environment with docker: 

```
$ docker-compose up webcomponent
```

## run a single test 

```
$ docker-compose run webcomponent yarn run test
```

## building

To run a single build: 

```
$ docker-compose run webcomponent yarn run build
```


