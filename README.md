# Dev Stack

A simple React project for exploring technologies and building your own stack.

Repository: B14-A05-DevStack

# Description 
Dev Stack is a simple React project where users can explore different technologies and create their own technology stack.

In this project, I used React, TypeScript and CSS. Technology data is loaded from a JSON file.

## Technologies Used

- React
- TypeScript
- CSS
- Vite
- React Toastify
- JSON

## Main Features

1. Users can see different technologies.
2. Users can add technologies to their stack.
3. Users can remove one technology or remove all technologies.
4. Toast messages are showing when adding or removing technologies.
5. The website is responsive for desktop, tablet and mobile.

## React Questions

1. What is JSX, and why is it used in React?
=> JSX is a way to write HTML-like code inside JavaScript. It is used in React to create the user interface easily.
2. What is the difference between props and state?
=> Props are used to pass data from a parent component to a child component. State is the component's own data that can change 
       over time.

 3. What does the useState hook do, and where did you use it in this project?
 =>  useState hook is used to store and update data in a component. I used it in this project to store and update the selected technologies in the stack.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

=> The useEffect hook is used to perform an action after the component renders. I used it in this project to load the technology data from the JSON file.

5. Why does every item in a .map() list need a unique key prop?
=> React needs a unique key to identify each item in a list and understand which item has changed.

6. What is conditional rendering? Show one place you used it ? 
=> Conditional rendering means showing different UI based on a condition. In this project, I showed "No technology selected" when the stack was empty and showed the selected technologies when items were added.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
=> Data is passed from a parent to a child component using props. To send an action back to the parent, the parent passes a function as a prop, and the child calls that function. 




