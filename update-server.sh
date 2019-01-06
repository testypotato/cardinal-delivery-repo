#!/bin/bash
git pull
rsync nginx.conf /etc/nginx/
cd api
npm i
cd ../fetcher
npm i
systemctl reload nginx
pm2 reload api
pm2 reload fetcher