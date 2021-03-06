#!/bin/bash

SCRIPT_PATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 || exit 1 ; pwd -P )"
BACKEND_PATH="${SCRIPT_PATH}/backend"
FRONTEND_PATH="${SCRIPT_PATH}/frontend"

[[ -f "${BACKEND_PATH}/.env" ]] || (echo "Backend .env file not exists" && exit 1)
[[ -f "${FRONTEND_PATH}/.env" ]] || (echo "Frontend .env file not exists" && exit 1)

cd "${BACKEND_PATH}" && docker-compose up --build -d &&\
cd "${FRONTEND_PATH}" && docker-compose up --build -d ||\
 echo "Something goes wrong please check README.md"

