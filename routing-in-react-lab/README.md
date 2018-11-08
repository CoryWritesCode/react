# Routing in React

## Getting Started
1. Create a new project with Create React App.
2. Delete the src directory and all of its contents.
3. Create a new src directory and a new `index.js` file inside of src.
4. Create a new directory named components inside of src.
5. Move your `assets` directory into src.

You should now have a project structure that resembles the following:
```bash
node_modules/
public/
src/
|- assets/
|--- logo.png
|- components/
|- index.js
.gitignore
package-lock.json
package.json
README.md
```

Before starting the following tasks, make sure that the Chrome Developer Tools are open in your "localhost:3000" tab, and that you also have the React Developer Tools installed. You should be checking these as much as possible to not only troubleshoot these tasks, but to confirm your understanding of what you are doing. 

**In this lab, it is also helpful to check your 'Network' tab in the Chrome Developer Tools when you are making HTTP Requests (or expecting HTTP Responses).**

### Each time you save your files while completing these tasks, check the terminal and browser for compilation errors, and pay attention to what they are telling you. For example, if something is "undefined", why does React think that? What should be defined, and where?

## Objectives
**DESIGN CONSTRAINT:** You may only render one component in `index.js`.

This lab builds upon the skills you learned in `reacting-to-apis`, but it is not essential to fully complete `reacting-to-apis` before proceeding with this lab. 

In this lab assignment, your primary objective is to **create multiple routes in your application** based on the data you receive from a request to a third-party API. Only certain data will be loaded (and therefore rendered) based on the route you are navigating to in the application.

The API we will be using is the [Studio Ghibli API](https://ghibliapi.herokuapp.com/). 

#### After each step, commit your changes in Git, and push them to a GitHub repository on your GitHub profile. If you need a refresher on creating repositories and pushing to GitHub, check out the "Getting Started at Covalence" course.

----

### Tasks
1. Configure React Router in your application. You may use the same structure as the walkthrough video, or (if you have a better idea) you may decide on your own structure. Just make sure that it works! Next, you should create three Links that look like buttons in your application. The first says "Go Home", the second says "View Films", and the last one says "View People" (or another endpoint of your choosing). Clicking these links will navigate you to the respective pages for each of these things.

2. Start by only configuring ONE route. Say, for `/films`. After navigating to `localhost:3000/films`, you should see your list of films that you rendered to the browser in the previous lab. The caveat? You shouldn't need **any** if/else if/else logic in your render methods. The data should only be loaded and displayed when you navigate to `/films`. You should use `componentDidMount()` and `fetch` to make this request.

3. Once you have that route working, configure another one for `/films/:id`. With this route, you should be able to click on a Link for any film you have displayed on `/films` to navigate to that specific film's webpage where you will list out all of the information pertaining to _only_ that film.

4. Now that you have `/film` and `/film/:id` working, repeat tasks 1 and 2 with another endpoint (like People) in the Studio Ghibli API. 

At the end of these tasks, you should have at least FIVE pages in your application, and you should be able to navigate to them simply by clicking a link. 

----

#### At the end of this lab, you should have a Studio Ghibli "wiki" based on the data available through the API. You can extend this as much as you want - style it as much as you want - but at the end of the day you should realize that what you've just done is create your first real application using only data provided by a third-party API! This is what web developers _all the time_ so give yourself a pat on the back, and keep coding!