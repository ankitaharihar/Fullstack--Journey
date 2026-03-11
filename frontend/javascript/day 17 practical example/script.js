const games = [
{
id:1,
name:"Game One",
img:"https://image.api.playstation.com/pr/bam-art/173/732/3500f187-1f21-4919-ba1e-e38dfc45bb66.jpg?w=620&thumb=false",
desc:"This is game one description"
},
{
id:2,
name:"Game Two",
img:"https://image.api.playstation.com/pr/bam-art/201/772/a90aa8dd-c2fd-4787-abdf-3d8bc07088eb.png?w=620&thumb=false",
desc:"This is game two description"
},
{
id:3,
name:"Game Three",
img:"https://image.api.playstation.com/pr/bam-art/172/287/6157110a-fdac-4a63-a8ae-4dfe33e7093e.png?w=620&thumb=false",
desc:"This is game three description"
},
{
id:4,
name:"Game Four",
img:"https://image.api.playstation.com/pr/bam-art/173/735/80041292-da35-47d2-be01-5e5f740173c4.jpg?w=620&thumb=false",
desc:"This is game four description"
},
{
id:5,
name:"Game 5",
img:"https://image.api.playstation.com/pr/bam-art/200/715/7150bfac-6f74-48b3-a184-ba98513c912e.png?w=620&thumb=false",
desc:"This is game one description"
},
{
id:6,
name:"Game 6",
img:"https://image.api.playstation.com/pr/bam-art/173/844/b13d1fa1-242a-4b7b-aeb2-dfee2c3c1bf9.jpg?w=620&thumb=false",
desc:"This is game two description"
},
{
id:7,
name:"Game 7",
img:"https://image.api.playstation.com/pr/bam-art/173/847/67dac7b7-cbc5-40f3-a8a6-d9379867eb16.jpg?w=620&thumb=false",
desc:"This is game three description"
},
{
id:8,
name:"Game 8",
img:"https://image.api.playstation.com/pr/bam-art/172/287/8f29a5d5-b2e8-4613-b56b-8732ac677b3f.png?w=620&thumb=false",
desc:"This is game four description"
}
];

const container = document.getElementById("games");

games.forEach(game=>{

const div = document.createElement("div");
div.className="card";

div.innerHTML=`
<img src="${game.img}">
<h3>${game.name}</h3>
`;

div.onclick=()=>{
localStorage.setItem("game",JSON.stringify(game));
window.location="details.html";
}

container.appendChild(div);

});