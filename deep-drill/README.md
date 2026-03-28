<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Deep Drill</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
/* ===== GLOBAL ===== */
body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background: #0b0f1a;
    color: white;
    overflow-x: hidden;
}

/* ===== ANIMATED BACKGROUND (DRILLING) ===== */
.background {
    position: fixed;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #0b0f1a, #111827);
    z-index: -2;
}

.drill {
    position: absolute;
    width: 6px;
    height: 100px;
    background: linear-gradient(#555, #999);
    animation: drillDown 3s infinite ease-in-out;
}

@keyframes drillDown {
    0% { transform: translateY(-50px); }
    50% { transform: translateY(200px); }
    100% { transform: translateY(-50px); }
}

.oil-bubble {
    position: absolute;
    width: 10px;
    height: 10px;
    background: #0ff;
    border-radius: 50%;
    opacity: 0.6;
    animation: floatUp 5s infinite;
}

@keyframes floatUp {
    0% { transform: translateY(100vh); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateY(-50px); opacity: 0; }
}

/* ===== TITLE ===== */
.title {
    text-align: center;
    font-size: 48px;
    font-weight: bold;
    margin-top: 30px;
    color: #00f0ff;
    text-shadow: 0 0 20px #00f0ff, 0 0 40px #0077ff;
}

/* ===== ENVIRONMENT BAR ===== */
.env-container {
    width: 60%;
    margin: 20px auto;
    background: #222;
    border-radius: 20px;
    overflow: hidden;
}

.env-bar {
    height: 20px;
    width: 100%;
    background: linear-gradient(to right, #00ff99, #ff4444);
    transition: width 0.5s;
}

/* ===== PLAYER BOARD ===== */
.players {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px;
}

.player {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(0,255,255,0.3);
    border-radius: 15px;
    padding: 15px;
    width: 180px;
    margin: 10px;
    text-align: center;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 15px rgba(0,255,255,0.2);
    transition: transform 0.3s;
}

.player:hover {
    transform: scale(1.05);
}

.player h3 {
    margin: 10px 0;
    color: #00f0ff;
}

.oil-count {
    font-size: 28px;
    margin: 10px 0;
}

button {
    background: #00f0ff;
    border: none;
    padding: 8px 12px;
    margin: 5px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
}

button:hover {
    background: #00aaff;
}

/* ===== DICE ===== */
.dice {
    text-align: center;
    margin-top: 20px;
}

.dice-value {
    font-size: 40px;
    margin: 10px;
}
</style>
</head>

<body>

<div class="background" id="bg"></div>

<div class="title">🛢️ DEEP DRILL 🛢️</div>

<!-- ENVIRONMENT -->
<div class="env-container">
    <div id="envBar" class="env-bar"></div>
</div>
<p style="text-align:center">Environment: <span id="envValue">100</span></p>

<!-- PLAYERS -->
<div class="players" id="players"></div>

<!-- DICE -->
<div class="dice">
    <button onclick="rollDice()">🎲 Roll Dice</button>
    <div class="dice-value" id="diceValue">-</div>
</div>

<script>
/* ===== BACKGROUND GENERATOR ===== */
const bg = document.getElementById("bg");

// drilling rods
for(let i=0;i<15;i++){
    let d = document.createElement("div");
    d.className = "drill";
    d.style.left = Math.random()*100 + "%";
    d.style.animationDuration = (2 + Math.random()*2) + "s";
    bg.appendChild(d);
}

// oil bubbles
for(let i=0;i<30;i++){
    let b = document.createElement("div");
    b.className = "oil-bubble";
    b.style.left = Math.random()*100 + "%";
    b.style.animationDuration = (3 + Math.random()*3) + "s";
    bg.appendChild(b);
}

/* ===== GAME STATE ===== */
let environment = 100;

const players = [
    {name: "Team A", oil: 0},
    {name: "Team B", oil: 0},
    {name: "Team C", oil: 0},
    {name: "Team D", oil: 0},
    {name: "Team E", oil: 0}
];

/* ===== RENDER PLAYERS ===== */
function renderPlayers(){
    const container = document.getElementById("players");
    container.innerHTML = "";

    players.forEach((p, index)=>{
        let div = document.createElement("div");
        div.className = "player";

        div.innerHTML = `
            <h3>${p.name}</h3>
            <div class="oil-count">🛢️ ${p.oil}</div>
            <button onclick="addOil(${index})">+ Mine</button>
            <button onclick="removeOil(${index})">- Mine</button>
        `;

        container.appendChild(div);
    });
}

/* ===== UPDATE ENVIRONMENT ===== */
function updateEnvironment(){
    let totalOil = players.reduce((sum,p)=>sum+p.oil,0);
    environment = 100 - totalOil;

    if(environment < 0) environment = 0;

    document.getElementById("envValue").innerText = environment;
    document.getElementById("envBar").style.width = environment + "%";

    if(environment === 0){
        alert("💥 Environment Collapsed! Game Over!");
    }
}

/* ===== ACTIONS ===== */
function addOil(i){
    players[i].oil++;
    renderPlayers();
    updateEnvironment();
}

function removeOil(i){
    if(players[i].oil > 0){
        players[i].oil--;
        renderPlayers();
        updateEnvironment();
    }
}

/* ===== DICE ===== */
function rollDice(){
    let value = Math.floor(Math.random()*6)+1;
    document.getElementById("diceValue").innerText = value;
}

/* ===== INIT ===== */
renderPlayers();
updateEnvironment();

</script>

</body>
</html>