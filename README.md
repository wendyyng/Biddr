# Auctions and Bidding App - Biddr

## Table of Contents
- Summary
- Techgnologies Used
- Features
- Screenshots
- Installation

## Summary
Biddr is a auctions app that allows users to create auctions and place bids.

## Technologies Used:

- Ruby on Rails (back-end)
- React.js (front-end)
- Bootstrap
- HTML
- CSS
- Javascript
- PostgreSQL

## Features

- Sign in and sign up as a user
- View auctions and place bids
- Create new auctions
- Current highest price of an auction
- Status of whether the reserve price has been met
- New bids has to be higher than the current highest bid

## Screenshots:

- Home Page:
![image](https://user-images.githubusercontent.com/71687298/189024155-c57b1dac-2285-4218-9474-b3f121d581a7.png)
- Auctions Index Page:
![image](https://user-images.githubusercontent.com/71687298/189024180-5ba71a97-b36b-490c-b530-df40a0f535c9.png)
- Auctions Show Page:
![image](https://user-images.githubusercontent.com/71687298/189024198-ad88ff84-0de9-4cb0-af8d-96a84815e120.png)
- Create a New Auction:
![image](https://user-images.githubusercontent.com/71687298/189024218-c47c9441-06dd-423f-b072-c633ebd4c5ed.png)

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
