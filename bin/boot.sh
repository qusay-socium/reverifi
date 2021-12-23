#!/usr/bin/env bash

set -ev

if [ "$NODE_ENV" = "development" ]; then
    npm run start
else
    nginx -g "daemon off;"
fi
