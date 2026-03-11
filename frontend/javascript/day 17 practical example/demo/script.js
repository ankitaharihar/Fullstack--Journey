const container = document.getElementById("games");

fetch("https://api.rawg.io/api/games?key=YOUR_API_KEY")

.then(res => res.json())

.then(data => {

data.results.forEach(game => {

const div = document.createElement("div");
div.className="card";

div.innerHTML = `
<img src="${game.background_image}">
<h3>${game.name}</h3>
`;

div.onclick = ()=>{
localStorage.setItem("game", JSON.stringify(game));
window.location="details.html";
}

container.appendChild(div);

});

});