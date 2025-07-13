#!/usr/bin/env bash

# docker create net docker bridge


docker network create --driver=bridge --subnet=172.7.0.0/16 net_parking


#docker compose -f docker-compose-redis.yml up -d

docker compose -f docker-compose-postgressql.yml up -d

#docker compose up -d