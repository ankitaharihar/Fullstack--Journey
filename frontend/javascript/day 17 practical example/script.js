fetch("games.json")
.then(res => res.json())
.then(data => {

data.forEach(game => {

const div = document.createElement("div");
div.className = "card";

div.innerHTML = `
<img src="${game.img}">
<h3>${game.name}</h3>
`;

document.getElementById("games").appendChild(div);

});

});