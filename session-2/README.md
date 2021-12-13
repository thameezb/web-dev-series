Slides are available [here](slides.pdf).

## How to run the codes:

- In `/my-blog` folder, run `python manage.py runserver 0.0.0.0:8000`
- Access http://localhost:8000/

## Key Commits

- Setup of Django Project `484104e`
- Blog Model `903be95`
- Json Web Token `40ef36b`
- Restful API `ac8d360`


## Demo Site

- https://gdsc-web.herokuapp.com/
  - Available users: `admin:admin`, `testuser:testpassword`
- Admin site: https://gdsc-web.herokuapp.com/admin/
  - Try to create your own user


## APIs

### Get JWT

- URL: `/api/token/`
- Method: `POST`
- Headers:
  - `Content-Type: application/json`
- Json keys:
  - `username`
  - `password`


### List blogs

- URL: `/blogs/`
- Method: `GET`


### Create a blog

- URL: `/blogs/`
- Method: `POST`
- Headers:
  - `Content-Type: application/json`
  - `Authorization: Bearer <JWT>`
- Json keys:
  - `title`
  - `content`


### Retrieve a blog

- URL: `/blogs/<id>/`
- Method: `GET`


### Delete a blog

- URL: `/blogs/<id>/`
- Method: `DELETE`
- Headers:
  - `Content-Type: application/json`
  - `Authorization: Bearer <JWT>`


### Change a blog

- URL: `/blogs/<id>/`
- Method: `PUT`
- Headers:
  - `Content-Type: application/json`
  - `Authorization: Bearer <JWT>`
- Json keys: (both are required)
  - `title`
  - `content`


### Partially change a blog

- URL: `/blogs/<id>/`
- Method: `PATCH`
- Headers:
  - `Content-Type: application/json`
  - `Authorization: Bearer <JWT>`
- Json key(s):
  - `title`
  - `content`

