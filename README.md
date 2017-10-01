# react-weather-fe

Ensure Docker is set up and running.

### Setup dev environment 

First build and run [backend](https://github.com/romilrobtsenkov/react-weather-be)

Check and change NodeApp port if needed `nginx.conf:40`. Default value is 3000. 


```
docker-compose up
```

Application with hot reload will be available from `localhost:3346`

### Start in production

First build and run [backend](https://github.com/romilrobtsenkov/react-weather-be)


Check and change NodeApp port if needed `nginx.production.conf:41`. Default value is 3000. 


```
docker-compose -f docker-compose.yml -f docker-compose.production.yml up
```

Application will be available `locahost:80`