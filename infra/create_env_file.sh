#!/bin/bash

echo '#DB ENVS' > .env
echo 'DB_ENGINE=django.db.backends.postgresql' >> .env
echo 'DB_NAME=guess_word_user' >> .env
echo 'POSTGRES_USER=guess_word_user' >> .env
echo 'POSTGRES_PASSWORD=xxxyyyzzz' >> .env
echo 'DB_HOST=db' >> .env
echo 'DB_PORT=5432' >> .env

echo '' >> .env

echo '#SENTRY ENV' >> .env
echo 'SENTRY_KEY=https://0ff7049194b64c81aef276829b258055@o1110399.ingest.sentry.io/6' >> .env

echo '' >> .env

echo '#DJANGO_ENV' >> .env
echo 'DJANGO_KEY=django-insecure-t2@ja*oz@u$nw(7b)n*$5a8-m%am+7ll3ngqu95b4qy$&naqeb' >> .env

echo '' >> .env

echo '#REDIS' >> .env
echo 'CACHE_ENGINE=django_redis.cache.RedisCache' >> .env
echo 'CACHE_HOST=redis://cache:6379' >> .env
echo 'CACHE_CLASS=django_redis.client.DefaultClient' >> .env

echo '' >> .env

echo '#CRYPT' >> .env
echo 'WORD_CRYPT_KEY=guessword' >> .env

echo 'Environment file created successfully!'
