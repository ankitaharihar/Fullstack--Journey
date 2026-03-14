fetch("https://dummyjson.com/recipes")

.then(res => res.json())

.then(data => {

data.recipes.forEach(recipe => {

const div = document.createElement("div");
div.className = "card";

div.innerHTML = `
<img src="${recipe.image}">
<h3>${recipe.name}</h3>
`;

document.getElementById("recipes").appendChild(div);

});

});