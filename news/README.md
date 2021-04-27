# Simple news app to demonstrate redux-sagas and docker

This was created using newsapi.org

A simple news app, which takes keywords and searches for news articles relating to the searched terms

Relies on sagas to handle api requests and allows for a loading component to be displayed whilst news is being fetched.


## Prerequisites:
* Docker desktop


## Usage:
* clone repository
* npm install
* add environment variable REACT_APP_API_KEY (you will need to get a newsapi.org key for this)
* change directory to newssagas/news
* run """docker build -t news:news-sagas"""
* run """docker run --env REACT_APP_API_KEY -dp 3000:3000 news:news-sagas"""
* Can be accessed at localhost:3000

## Todo:

-[X] Expand News component to show more than just the title of the first article shown

-[X] Allow for the searching of multiple keywords 

-[] Allow for additional API options to be used (sources, domains, timespans etc.)

-[] Create an action channel for news api (maybe add login as additional channel?)

-[] Add login system with domain/source preferences saved to each user

-[] Rejig layout - add second collumn

-[] Add option to go to next page - link to next 20 results

