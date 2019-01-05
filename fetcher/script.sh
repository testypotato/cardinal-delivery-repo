#!/bin/bash
cd ../
git fetch
HEADHASH=$(git rev-parse HEAD)
UPSTREAMHASH=$(git rev-parse origin/master)
echo ${HEADHASH}
echo ${UPSTREAMHASH}

if [ "$HEADHASH" != "$UPSTREAMHASH" ]
then
	git merge origin/master
	rsync nginx.conf etc/nginx/nginx.conf
	systemctl reload nginx
	pm2 reload api
fi