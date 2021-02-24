#!/bin/bash

docker-compose -f "./backend/docker-compose.yaml" up --build -d &&\
docker-compose -f "./frontend/docker-compose.yaml" up --build -d
