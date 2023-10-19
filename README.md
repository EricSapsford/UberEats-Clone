# About VancouberEats 

VancouberEats is an e-commerce platform designed to connect people with restaurants, inspired by UberEats. It allows users to explore restaurants and menu items, place new orders and re-order past orders, leave reviews, and create their own restaurants and menus.

[Live Site](https://vancouvereats.onrender.com/) | [Wiki](https://github.com/EricSapsford/UberEats-Clone/wiki)

<img width="400" alt="VancouberEats-homepage" src="https://github.com/EricSapsford/UberEats-Clone/assets/128769940/1aef2c7e-043c-4a90-bba1-d04ae0c34976">

## Tech Stack

### Frameworks and Libraries
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

 ### Database:
 ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
 
 ### Hosting:
 ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

## Features & Functionality

1. Restaurants
2. Menu Items
3. Reviews
4. Cart
5. Checkout
6. Past Orders
7. Manage Account
8. AWS S3 (image storage)

### Restaurants:
Users can browse restaurants to explore and order from.

<img width="400" alt="VancouberEats-restaurants" src="https://github.com/EricSapsford/UberEats-Clone/assets/128769940/7b438fc0-24bd-4ec5-b7c8-88b7ecb97da3">

### Menu Items:
Users can view all menu items for each restaurant.

<img width="400" alt="VancouberEats-menu-items" src="https://github.com/EricSapsford/UberEats-Clone/assets/128769940/01b0df4f-2673-445b-abc8-12c002b9df7f">

### Reviews:
Users can read reviews for each restaurant, and leave reviews for restaurants they have ordered from.

<img width="400" alt="VancouberEats-reviews" src="https://github.com/EricSapsford/UberEats-Clone/assets/128769940/4b30bbbe-3bf7-453a-86b8-3fecbacb7473">

### Cart:
Users can add items to their cart from a single restaurant.

<img width="400" alt="VancouberEats-cart" src="https://github.com/EricSapsford/UberEats-Clone/assets/128769940/7a2109ee-25fc-41ab-8647-fcdc3f07b6a4">

### Checkout:
Users can checkout to place an order from a single restaurant.

<img width="400" alt="VancouberEats-checkout" src="https://github.com/EricSapsford/UberEats-Clone/assets/128769940/714efb87-4d16-4585-a77f-339dda9ba0eb">

### Past Orders:
Users can view and re-order past orders.

<img width="400" alt="VancouberEats-orders" src="https://github.com/EricSapsford/UberEats-Clone/assets/128769940/c9a81a0a-26c8-43ed-8eea-67a2e77769d5">

### Manage Account:
Users can manage their account and create, update, and delete restaurants and menu items.

<img width="400" alt="VancouberEats-account" src="https://github.com/EricSapsford/UberEats-Clone/assets/128769940/ceaecb09-a6dd-465f-a4a9-5c5e031fc693">

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

• &nbsp; [Will Campbell](https://willcampbell.xyz/) &nbsp; | &nbsp; [LinkedIn](https://www.linkedin.com/in/will-campbell22/) &nbsp; | &nbsp; [GitHub](https://github.com/wpcamp)

• &nbsp; [Erica Maranowski](https://emaranowski.com/) &nbsp; | &nbsp; [LinkedIn](https://www.linkedin.com/in/erica-maranowski/) &nbsp; | &nbsp; [GitHub](https://github.com/emaranowski)

• &nbsp; [Josh Pascual](https://joshapascual.com/) &nbsp; | &nbsp; [LinkedIn](https://www.linkedin.com/in/josh-pascual/) &nbsp; | &nbsp; [GitHub](https://github.com/joshpas24)

• &nbsp; [Eric Sapsford](https://github.com/EricSapsford) &nbsp; | &nbsp; [GitHub](https://github.com/EricSapsford)
