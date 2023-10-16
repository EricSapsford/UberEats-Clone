# About VancouberEats 

VancouberEats is an UberEats-inspired e-commerce platform designed to connect people with restaurants. It allows users to explore restaurants and menu items, place new orders and re-order past orders, leave reviews, and create their own restaurants and menus.

[Live Site](https://vancouvereats.onrender.com/) | [Wiki](https://github.com/EricSapsford/UberEats-Clone/wiki)

<img width="400" alt="VancouberEats-homepage" src="https://github.com/EricSapsford/UberEats-Clone/assets/128769940/1aef2c7e-043c-4a90-bba1-d04ae0c34976">

## Tech Stack

### Frameworks and Libraries
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

 ### Database:
 ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
 
 ### Hosting:
 ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

## Features

1. Restaurants
2. Menu Items
3. Reviews
4. Orders
5. AWS S3 (image storage)

## Future Features

1. Maps API

## Setup
1. Clone this repository 

2. Install dependencies

      ```bash
      pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Make sure the SQLite3 database connection URL is in the **.env** file

5. This starter organizes all tables inside the `flask_schema` schema, defined
   by the `SCHEMA` environment variable.  Replace the value for
   `SCHEMA` with a unique name, **making sure you use the snake_case
   convention**.

6. Get into your pipenv, migrate your database, seed your database, and run your Flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

7. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

## Contact

• [Will Campbell](https://willcampbell.xyz/) | [LinkedIn](https://www.linkedin.com/in/will-campbell22/) | [GitHub](https://github.com/wpcamp)

• [Erica Maranowski](https://emaranowski.com/) | [LinkedIn](https://www.linkedin.com/in/erica-maranowski/) | [GitHub](https://github.com/emaranowski)

• [Josh Pascual](https://joshapascual.com/) | [LinkedIn](https://www.linkedin.com/in/josh-pascual/) | [GitHub](https://github.com/joshpas24)

• [Eric Sapsford](https://github.com/EricSapsford) | [GitHub](https://github.com/EricSapsford)
