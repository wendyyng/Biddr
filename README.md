# Biddr
![image](https://user-images.githubusercontent.com/71687298/191143883-075b08b0-6837-4e37-9ad3-aee3e1cd08ce.png)
## Table of Contents
- Summary
- Technologies Used
- Features
- Screenshots
- Installation

## Summary
Biddr is an auction app that allows users to create auctions and place bids.

## Technologies Used:

- Ruby on Rails for back-end API
- React.js for front-end
- Bootstrap
- HTML
- CSS
- Javascript
- PostgreSQL
- Postman for testing API

## Features

- Sign in and sign up as a user
- View auctions and place bids
- Create new auctions
- The current highest price of an auction
- Status of whether the reserve price has been met
- New bids have to be higher than the current highest bid

## Screenshots:
- Auctions Index Page:
![image](https://user-images.githubusercontent.com/71687298/191143905-6933815b-5bde-47e6-aa7c-e8e2803ad963.png)
- Auctions Show Page:
![image](https://user-images.githubusercontent.com/71687298/191143922-ab6bec34-4d4d-40ce-8c17-cbcbb17e184c.png)
- Create a New Auction:
![image](https://user-images.githubusercontent.com/71687298/191144069-92aeaa67-da4d-4da0-b43f-0ec5e9dcd1ef.png)

## Installation:

- git clone URL
- cd into project
- In biddr_api
    - Run rails db:create
    - Run rails db:migrate
    - Run rails db:seed
    - Run rails s
    - On the browser run localhost:3000
- In biddr_client
    - npm install
    - npm start
    - On the browser run localhost:5500
