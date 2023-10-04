document.addEventListener("DOMContentLoaded", function () {
    // Define an array of recipe objects. Replace with your actual recipe data.
    const recipes = [
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
    ];

    const searchInput = document.querySelector(".search-input");
    const allRecipesButton = document.getElementById("All");
    const vegRecipesButton = document.getElementById("Veg");
    const nonVegRecipesButton = document.getElementById("NVeg");
    const above4Radio = document.getElementById("4&Above");
    const below4Radio = document.getElementById("below4");
    const cardsContainer = document.querySelector(".cards");


    // Initial recipe display
    displayRecipes(recipes);

    // Event listeners for filtering and searching
    searchInput.addEventListener("input", filterRecipes);
    allRecipesButton.addEventListener("click", () => filterRecipes());
    vegRecipesButton.addEventListener("click", () => filterRecipes("Veg"));
    nonVegRecipesButton.addEventListener("click", () => filterRecipes("NVeg"));
    above4Radio.addEventListener("change", () => filterRecipes(4, "above"));
    below4Radio.addEventListener("change", () => filterRecipes(4, "below"));

    // Function to display recipes
    function displayRecipes(filteredRecipes) {
        cardsContainer.innerHTML = "";
        filteredRecipes.forEach((recipe) => {
            const card = document.createElement("div");
            card.classList.add("card-1");
            card.innerHTML = `
                <img src="${recipe.imageSrc}" class="card-img" />
                <p>${recipe.type}</p>
                <div class="card-name-rating">
                    <div class="card-name">${recipe.name}</div>
                    <div class="card-rating"><img src="assets/star.png" />${recipe.rating}</div>
                </div>
                <div class="card-time-like-comment">
                    <div class="card-time">${recipe.time}</div>
                    <div class="card-like"><img src="assets/like.png" /></div>
                    <div class="card-comment"><img src="assets/comments.png" /></div>
                </div>
            `;
            cardsContainer.appendChild(card);
        });
    }

    // Function to filter recipes
    function filterRecipes(minRating, ratingType) {
        console.log(minRating, ratingType)
        let filteredRecipes = [...recipes];

        if(ratingType === undefined){
           if(minRating === undefined){
            return filteredRecipes;
           }
           else if(minRating === "Veg") {
            filteredRecipes = filteredRecipes.filter((recipe) => recipe.type === 'veg');
           }
            else if(minRating === "NVeg") {
                filteredRecipes = filteredRecipes.filter((recipe) => recipe.type === 'non-veg');
            }
        }

        if (minRating !== undefined) {
            if (ratingType === "above") {
                filteredRecipes = filteredRecipes.filter((recipe) => recipe.rating >= minRating);
                console.log(filteredRecipes);
            } else if (ratingType === "below") {
                filteredRecipes = filteredRecipes.filter((recipe) => recipe.rating < minRating);
                console.log(filteredRecipes);
            }
        }

        const searchQuery = searchInput.value.trim().toLowerCase();
        if (searchQuery !== "") {
            filteredRecipes = filteredRecipes.filter((recipe) =>
                recipe.name.toLowerCase().includes(searchQuery)
            );
        }

        displayRecipes(filteredRecipes);
    }
});
