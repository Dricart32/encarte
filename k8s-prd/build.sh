#!/bin/bash

cd ..

VERSAO=0.2

# doctl registry login

docker build -t registry.digitalocean.com/cr-poupatize/poupatize_web:$VERSAO .
# docker build  --no-cache  -t registry.digitalocean.com/cr-poupatize/poupatize_web:$VERSAO .

docker push registry.digitalocean.com/cr-poupatize/poupatize_web:$VERSAO

cd -
