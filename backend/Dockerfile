FROM python:3.11.6
WORKDIR /code
COPY requirements.txt .
RUN pip3 install -r requirements.txt
COPY /guess_word .
CMD [ "sh", "-c", \
"python3 manage.py makemigrations && python3 manage.py migrate \
&& \
gunicorn guess_word.wsgi:application --bind 0:8000" \
]
