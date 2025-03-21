# Recify - Recipe Finder

Created by Braily Guzman

## 🚀 Mission statement

Our application, Recify is for home cooks and food enthusiasts. It allows users to search for recipes based on ingredients they have dietary preference or metal type. This will help users discover new dishes and make meal planning easier.

## API & React Router

This application will use the Spoonacular API. Below are the documentation and specific endpoints we intend to use and the front-end pages that will use them.

- Link to API documentation: https://www.themealdb.com/api.php
- API endpoint #1 `/api/json/v1/1/random.php`
  - Fetches random recipes to show on the landing page
- API endpoint #2 `/api/json/v1/1/search.php?s=Pizza`
  - Fetches a list of recipes based on user input
  - Used data values: `name`
- API endpoint #3 `/api/json/v1/1/lookup.php?i=52772`
  - Fetches detailed information about a selected recipe.

This API does not require an API key.

## 👩‍💻 MVP User Stories & Frontend Routes

The application will feature the following frontend routes and core features:

- On the `/` page, users can see random recipes and search recipes.
- On the `/recipes` page, users can **view a list of recipes matching their search criteria**.
- On the `/recipes/:recipeId` page, users can **see detailed information about a specific recipe, including ingredients and instructions**.

## 🤔 Stretch User Stories

If time permits, the following stretch features will be implemented in order of priority:

- Users will be able to **save and view their favorite recipes using local storage**.
- Users will be able to **filter recipe based on dietary preferences (vegan, gluten-free, etc.).**
- Users will be able to **generate a shopping list based on selected recipes.**

## 📆 Timeline for reaching MVP in 1 week

To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

**Day 1**

- [ ] https://github.com/recify/recify/issues/1 - Due Mar 20 at 11:59 PM
- [ ] Ticket description and due date
- [ ] Ticket description and due date

**Day 2**

- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

**Day 3** (MVP due by the end of the day)

- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

**Day 4**

- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

**Day 5**

- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

## Wireframes of each page in your application

Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:

https://www.figma.com/design/VXYoUf7ExSfx4hweS4UPyt/Recify?node-id=0-1&t=gZue83oAF43Qstxj-1
