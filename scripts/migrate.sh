#!/bin/bash

if [ "$( docker container inspect -f '{{.State.Status}}' command-block )" == "running" ];
then
  docker exec -it command-block npx prisma migrate dev
  npx prisma generate
fi
