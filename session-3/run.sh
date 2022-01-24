#!/bin/bash

set -eo pipefail

if [[ $1 == "init" ]]; then
  # run db migrations
  docker-compose run backend python manage.py migrate
  docker-compose run backend python manage.py createsuperuser --noinput || true

  # run install node modules 
  docker-compose run frontend yarn install 
else
  # start containers 
  docker-compose up 
fi