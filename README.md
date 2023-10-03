# September-Module-test
Module test is about developing a Food-website for desktop and mobile version.

**Project Overview**

Figma Link
https://www.figma.com/file/12nxk5KkFvCBTPVvCJwHcG/Frontend-2?type=design&node-id=0-1&mode=design&t=EUgGqxT5Oj0PT7Nd-0

**Task Description**

You are tasked with creating an interactive recipe catalogue. The catalogue should allow users to view recipes from a predefined array and provide several interactive filtering and sorting options.
You will be provided with a JSON array of recipe objects. 

Each recipe object will have the following properties:

name: Name of the recipe

imageSrc: URL to the recipe's cover image

time: Time required to prepare the recipe (e.g., "40 min")

type: Whether the recipe is "veg" or "non-veg"

isLiked: Boolean that indicates whether the recipe is liked (default is false)

rating: A decimal number between 1 and 5 that represents the recipe's rating

**Features**

Display Recipes: Map over the array of recipes and create a UI card for each recipe. Each card should display the recipe's cover image, name, type, time, rating, and a "like" button (represented by a heart icon).

Search Recipes: Include a search bar that allows the user to filter recipes by name. As they type, dynamically update the displayed recipes to only include those whose names match the search query.

Toggle Recipe Type: Provide three toggle buttons: "Show All," "Show Only Veg," and "Show Only Non-Veg." When a button is clicked, the displayed recipes should be updated to only include recipes that match the selected type.

Filter by Rating: Include two radio buttons labelled "Rating Above 4.5" and "Rating Below 4.0." When a button is selected, the displayed recipes should be updated to only include recipes whose ratings match the selected filter.

Responsive Design: The website should be fully responsive and should display properly on both desktop and mobile devices. Make a drawer for the mobile screen and that drawer should be toggled using JS. As shown in the mobile screen of the figma.

Here is a sample of the JSON array that you will use:

[

    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
    
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]

Remember, the purpose of this task is not only to assess your understanding and application of HTML, CSS, and JavaScript, but also to encourage critical thinking, problem-solving, and creativity. Happy coding!

Marking Scheme (100 Marks)
Display Recipes - 20 Points
- Properly map over the JSON array and create UI cards for each recipe
- Correct display of each recipe's information (name, image, type, time, rating) on the card
- Implementation of a functional "like" button for each recipe

Like Feature - 15 Points
- Correct implementation of the "like" button, that toggles the isLiked property of the corresponding recipe
- The "like" button should visually change when a recipe is liked

Search Functionality- 15 Points
- Proper implementation of the search bar
- Dynamic updating of displayed recipes to match the search query

Toggle Recipe Type Functionality- 15 Points
- Correct implementation of the "Show All," "Show Only Veg," and "Show Only Non-Veg" buttons
- Dynamic updating of displayed recipes to match the selected type when one of these buttons is clicked

Filter by Rating Functionality - 15 Points
- Correct implementation of the "Rating Above 4.5" and "Rating Below 4.0" radio buttons
- Dynamic updating of displayed recipes to match the selected rating filter when one of these buttons is selected

Responsive Design - 20 Points
- The website displays properly on both desktop and mobile devices
- Implementation of a drawer for mobile screens, toggled using JavaScript, as shown in the Figma design
