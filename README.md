# Guess-Word (Aslanrdl)
![example workflow](https://github.com/KakoytoBarista/Guess-Word/actions/workflows/django.yml/badge.svg)

<br>

**Hosted Link:** [Guess-Word Web Application](http://aslanrdl.ddns.net/)

---

GuessWord is a web application that provides an interactive gameplay experience for guessing words. Players have 5 attempts to guess the hidden word.

### Technologies:

- **Backend:**
  - Python 3.8.5
  - Django 3.0.5
  - Django REST framework 3.12.4
  - PostgreSQL, SQLite
  - Docker, docker-compose
  - Gunicorn, Nginx, Redis
  - RateLimit

- **Frontend:**
  - HTML, CSS, SCSS, JS
  - Node.js

### Project Overview:

#### [Schema in Miro](https://miro.com/app/board/uXjVOml8KrQ=/)

### Web Application Work Plan:

For a detailed plan, refer to the Miro board: [Work Plan Miro Board](https://miro.com/app/board/uXjVOml8KrQ=/)


## Getting Started:

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/Kakoytobarista/Guess-word.git
    ```

2. **Set Permissions:**
    ```bash
    chmod +x create_env_file.sh
    ```

3. **Run Environment Setup Script:**
    ```bash
    ./create_env_file.sh
    ```

4. **Run Docker Compose:**
    ```bash
    docker-compose up -d
    ```

Now, the web application should be up and running.

---

Feel free to explore, contribute, and enjoy the Guess-Word web application! If you have any questions or issues, please check the [Issues](https://github.com/KakoytoBarista/Guess-Word/issues) section.
