# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- User todos are saved to their browsers local storage

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

During this challenge I learned how to create variables in CSS and how to utilize them when using the light/dark mode theme switching.

I enjoyed working through the filter feature where the user can filter their todos based on the status (complete, active, all). Whenever the user clicks on a filter button, the filteredTodos variable will change based on the if statements and the filter state and display only the required todos.

```js
let filteredTodos = todos;
const todoCount = todos.filter((todo) => !todo.isComplete).length;
if (filter === "active") {
  filteredTodos = filteredTodos.filter((todo) => !todo.isComplete);
} else if (filter === "completed") {
  filteredTodos = filteredTodos.filter((todo) => todo.isComplete);
}
```
This challenge was a great exercise for CSS styling and try to match the figma designs.


