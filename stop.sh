#!/bin/bash

docker-compose -f "./backend/docker-compose.yaml" down &&\
docker-compose -f "./frontend/docker-compose.yaml" down
