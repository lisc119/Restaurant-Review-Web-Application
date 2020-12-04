# Restaurant Review Site

<img src="./README/luna_login.png" title="Login" width="100%"> 
<br/><br/>
<img src="./README/luna_home.png" title="Home" width="100%">
<br/><br/>
<img src="./README/luna_createnewrestaurant.png" title="Create" width="100%">
<br/><br/>

### Notes

This project was done as a group assignment during the Full-Stack program at Propulsion Academy.

### Team

[Lina Siegrist](https://www.linkedin.com/in/lina-sc/), [Stefan Mattmuller](https://www.linkedin.com/in/stefan-andreas-mattmuller/), [Davide Derosa](https://www.linkedin.com/in/davide-derosa-146a09107/), [Aleksandra Nikolov](https://www.linkedin.com/in/aleksandra-nikolov-9597b2189/)

# How to run the project

### Backend:
[Link to Backend](#backend-section)

- In the root folder of the project:
  - docker-compose up
  - search for the name of the container to access it:
    - docker exec -ti 'name of the container' bash
  - inside the container:
    - python manage.py migrate
    - python manage.py makemigrations
    - python manage.py createsuperuser
    - python manage.py runserver 0.0.0.0:8000
- In your broswer go to : **localhost:8000/backend/admin/**

### Frontend:
[Link to Frontend](#frontend-section)

- In the folder Frontend:
  - npm install
  - npm start
- In your broswer go to : **localhost:3000**
<br/><br/>

<h1 id="frontend-section">Frontend</h1>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
<br/><br/>

<h1 id="backend-section">Backend</h1>

## REST API Backend Endpoints

All the following endpoints should be prefixed with /backend

#### Registration

- `/api/auth/registration/` POST: Register a new user by asking for an email (send email validation code)
- `/api/auth/registration/validation/` PATCH: Validate a new registered user with a validation code sent by email
- `/api/auth/token/` POST: Get a new JWT by passing username and password
- `/api/auth/token/refresh/` POST: Get a new JWT by passing an old still valid refresh token
- `/api/auth/token/verify/` POST: Verify a token by passing the access token
- `/api/auth/password-reset/` POST: Reset users password by sending a validation code in a email.
- `/api/auth/password-reset/validate/` POST: Validate password reset token and set new password for the user

#### Search

- `/api/search/` GET: Search for ‘restaurants’, ‘reviews’ or ‘users’

#### Home

- `/api/home/` GET: Get a list of the four best rated restaurants for the home screen

#### Restaurants

- `/api/restaurants/` GET: Get the list of all the restaurant
- `/api/restaurants/new/` POST: Create a new restaurant
- `/api/restaurants/user/<int:user_id>/` GET: Get the all the restaurants created by a specific user in chronological order
- `/api/restaurants/<int:id>/` GET: Get the details of a restaurant by providing the id of the restaurant
- `/api/restaurants/<int:id>/` PATCH: Update a restaurant by id (only by owner or restaurant admin)
- `/api/restaurants/<int:id>/` DELETE: Delete a restaurant by id (only by owner or restaurant admin)

#### Reviews

- `/api/reviews/new/<int:restaurant_id>/` POST: Create new review for a restaurant
- `/api/reviews/restaurant/<int:restaurant_id>/` GET: Get the list of the reviews for a single restaurant
- `/api/reviews/restaurant/` GET: Get the list of the reviews for all restaurants
- `/api/reviews/user/<int:user_id>/` GET: Get the list of the reviews by a single user
- `/api/reviews/<int:review_id>/` GET: Get a specific review by ID and display all the information
- `/api/reviews/<int:review_id>/` PATCH: Update a specific review (only by owner)
- `/api/reviews/<int:review_id>/` DELETE: Delete a specific review (only by owner)
- `/api/reviews/like/<int:review_id>/` POST: Like a review
- `/api/reviews/like/<int:review_id>/` DELETE: Remove like from the review
- `/api/reviews/likes/` GET: Get the list of the reviews the current user liked
- `/api/reviews/comments/` GET: Get the list of the reviews the current user commented

#### Comments

- `/api/review/comment/<int:user_id>/` GET: Get all the comments from a single user
- `/api/review/comment/new/<int:review_id>/` POST: Comment on the review
- `/api/review/comment/<int:comment_id>/` DELETE: Delete the comment on the review

#### Categories

- `/api/restaurants/category/list/` GET: Get the list of all the categories
- `/api/restaurants/category/<int:category_id>/` GET, PATCH, DELETE: Get Update or Delete the restaurants by category

#### Users

- `/api/users/list/` GET: Get all users
- `/api/users/<int:user_id>/` GET: get a specific user profile
- `/api/users/me/` GET: Get the user profile
- `/api/users/me/` PATCH: Update the user profile
- `/api/users/?search=<str:search_string>/` GET: Search for a user

### Entity Relationship Diagram - created on https://editor.ponyorm.com/

![](./README/models.png)
