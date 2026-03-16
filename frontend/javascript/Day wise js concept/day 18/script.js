const recipeIdInput = document.getElementById("recipeId");
const loadRecipeBtn = document.getElementById("loadRecipeBtn");
const statusElement = document.getElementById("status");
const recipeCard = document.getElementById("recipeCard");
const recipeName = document.getElementById("recipeName");
const recipeMeta = document.getElementById("recipeMeta");
const ingredientsList = document.getElementById("ingredientsList");
const firstInstruction = document.getElementById("firstInstruction");

function setStatus(message, type) {
    statusElement.textContent = message;
    statusElement.className = "status";

    if (type) {
        statusElement.classList.add(type);
    }
}

function renderRecipe(recipe) {
    recipeName.textContent = recipe.name;

    const mealType = Array.isArray(recipe.mealType)
        ? recipe.mealType.join(", ")
        : "Not available";

    recipeMeta.textContent =
        "Cuisine: " +
        recipe.cuisine +
        " | Difficulty: " +
        recipe.difficulty +
        " | Rating: " +
        recipe.rating +
        " | Meal Type: " +
        mealType;

    ingredientsList.innerHTML = "";
    recipe.ingredients.forEach((ingredient) => {
        const listItem = document.createElement("li");
        listItem.textContent = ingredient;
        ingredientsList.appendChild(listItem);
    });

    if (recipe.instructions.length > 0) {
        firstInstruction.textContent = recipe.instructions[0];
    } else {
        firstInstruction.textContent = "No instructions available.";
    }

    recipeCard.hidden = false;
}

async function getRecipeById(id) {
    const response = await fetch("https://dummyjson.com/recipes/" + id);

    if (!response.ok) {
        throw new Error("Recipe not found for id " + id + ".");
    }

    const data = await response.json();
    return data;
}

async function handleLoadRecipe() {
    const id = Number(recipeIdInput.value);

    if (!Number.isInteger(id) || id < 1) {
        setStatus("Please enter a valid positive recipe id.", "error");
        recipeCard.hidden = true;
        return;
    }

    setStatus("Loading recipe...", "loading");
    loadRecipeBtn.disabled = true;

    try {
        const recipe = await getRecipeById(id);
        renderRecipe(recipe);
        setStatus("Recipe loaded successfully.", "ok");
        console.log("Fetched recipe:", recipe);
    } catch (error) {
        recipeCard.hidden = true;
        setStatus(error.message, "error");
        console.error("Error fetching recipe:", error);
    } finally {
        loadRecipeBtn.disabled = false;
    }
}

loadRecipeBtn.addEventListener("click", handleLoadRecipe);

recipeIdInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        handleLoadRecipe();
    }
});

handleLoadRecipe();