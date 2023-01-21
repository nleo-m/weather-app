#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git checkout -b master
git add -A
git commit -m 'deploy'

git push -f git@github.com:liandra-m/weather-app.git master:gh-pages

cd -