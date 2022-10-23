
# Take Home Assignment 2

## Overview: 
For this assignment you will working in groups of 2 or 3 to complete the frontend for a Todo list application called Toody. The Figma wireframes for Toody can be found here: https://www.figma.com/file/6PI6t03wtdFD4gQFrrc9JO/Dev-Bootcamp-Mocks?node-id=10%3A2784

## Setup:
1. Get started by cloning this repo.
2. View the app in your browser by running npm start
3. Create a branch called take-home-2-group-[#]. You’ll be doing all your work on this branch.
4. Add a comment at the top of src/App.js that says “Group [#]:” followed by the names of everyone in your group. Ex: “Group 1: Bob, Joe, Carl”

## What’s Missing:
You will notice that three things are missing in the app: 
The top panel of the home page containing the lines “Hello Alex! Welcome to Toody! You’ve been using Toody for 100 days!” The HTML should in the div in src/pages/Home/Home.js with the class “landing.”
The Header component, the thin bar at the top of the page containing the Toody logo on the left and the “My Profile” link on the right, which leads to the user’s profile / account page.
The user’s profile / account page. (Hint: It’s currently being routed to in App.js, but the code for it doesn’t exist.)

To complete this assignment, you will have to complete the three components mentioned above. There are marked sections in the files corresponding to each of the 3 incomplete parts above (in src/pages/Home/Home.jsx, src/components/Header/Header.jsx, and src/pages/Profile/Profile.jsx, respectively.

## The Assignment:
Please complete the TODO sections in each of these components with the concepts we learned in class, and add styling as appropriate. Specifically, you will:
1. Add the two lines of text to the top panel of the Home page (src/pages/Home/Home.jsx) in the div with the class “landing” and format them properly with CSS. The name must say “Alex,” and the number preceding the word “days” must be a random integer between 1 and 100, inclusive, generated in a useEffect function when the component is mounted.
2. Add styles for the elements you add to the Home page in src/pages/Home/Home.css.
3. Complete src/components/Header/Header.jsx with code implementing the Toody logo on the top left and the link to the Profile page on the top right. The Toody logo has already been imported at the top of the file, but the text for “My Profile” does not exist yet; you will have to add it.
4. Add styles for the Header component in src/components/Header/Header.css.
5. Complete the Profile page in src/pages/Profile/Profile.jsx by creating components and/or HTML elements to display the blank avatar and stats as shown on the Fgma design. (Note: The blank avatar image has already been imported for you; simply uncomment the line at the top of the file to use it. firstName, lastName, and stats have also been passed in as props; you may use them as you wish, but the end result should look similar to the Figma design.)
6. Add styles for the Profile page in src/pages/Profile/Profile.css.

## Submission:
Once you’ve finished the assignment on the branch you created in step 3 under “Setup,” please create a PR for the branch titled “Take Home 2 Submission for Group [#]” by 11:59pm on Friday.

