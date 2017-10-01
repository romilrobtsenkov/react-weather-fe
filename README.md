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

[Add swap memory](https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-16-04) (if your server has less than 512MB of RAM)

Check and replace domain name `nginx.production.conf:35,36`. 
Check and change NodeApp port if needed `nginx.production.conf:58`. Default value is 3000. 

Start pre SSL version
```
docker-compose -f docker-compose.yml -f docker-compose.production-pre-ssl.yml up -d
```

Generate certificates (replace with your example.com domain)
```
docker run -it --rm \
    -v /etc/letsencrypt:/etc/letsencrypt \
    -v /data/letsencrypt:/data/letsencrypt \
    deliverous/certbot \
    certonly \
    --webroot --webroot-path=/data/letsencrypt \
    -d example.com -d www.example.com
```

Compose with new nginx configuration

```
docker-compose -f docker-compose.yml -f docker-compose.production.yml up --build -d
```

Add SSL renew to crontab
```
sudo crontab -e
```

```
0 0 */15 * * docker run -t --rm -v /etc/letsencrypt:/etc/letsencrypt -v /data/letsencrypt:/data/letsencrypt -v /var/log/letsencrypt:/var/log/letsencrypt deliverous/certbot renew --webroot --webroot-path=/data/letsencrypt && docker kill -s HUP nginx >/dev/null 2>&1
```

Application will be available `locahost:80`