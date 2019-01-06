#!/bin/bash
rsync nginx.conf etc/nginx/
cd api
npm install
cd ../fetcher
npm install
systemctl reload nginx
pm2 reload api
pm2 reload fetcher