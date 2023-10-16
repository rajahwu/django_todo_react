# Project Commands

## Intial Settup

[python-poetry](https://python-poetry.org/docs/basic-usage/)

```bash
# /
poetry --version
poetry new mysite
rm -rf myapp/ tests/
poetry add django
bun init
```

```bash
# /
poetry run django-admin startproject backend
cd backend
poetry run ./manage.py runserver
```

```bash
# /backend
poetry run ./manage.py startapp todo
poetry run ./manage.py migrate
```

```python
# backend/setting.py

# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    # apps
    "todo",
]
```

```bash
 poetry run ./manage.py makemigrations todo
 poetry run ./manage.py migrate todo

 python manage.py createsuperuser
```

```bash
poetry add djangorestframework django-cors-headers markdown django-filter
```

```python
INSTALLED_APPS = [
 ...
    # apps
    "todo",
    "corsheaders",
    "rest_framework",
]

...

MIDDLEWARE = [
    ...

    'corsheaders.middleware.CorsMiddleware',
]
...

CORS_ORIGIN_WHITELIST = [
     'http://localhost:3000'
]
```

```