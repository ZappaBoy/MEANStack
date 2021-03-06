#!/bin/bash

SCRIPT_PATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 || exit 1 ; pwd -P )"

docker-compose -f "${SCRIPT_PATH}/backend/docker-compose.yaml" down &&\
docker-compose -f "${SCRIPT_PATH}/frontend/docker-compose.yaml" down
