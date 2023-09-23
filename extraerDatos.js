const fs = require("fs");
const SlippiGame = require("@slippi/slippi-js").SlippiGame;

const game = new SlippiGame("games/Game_Game_20230916T144458.slp");

// Obtén información del juego
const settings = game.getSettings();
fs.writeFileSync("settings.json", JSON.stringify(settings));

// Obtén estadísticas del juego
const stats = game.getStats();
fs.writeFileSync("stats.json", JSON.stringify(stats));

// Obtén metadatos del juego
const metadata = game.getMetadata();
fs.writeFileSync("metadata.json", JSON.stringify(metadata));

console.log("Datos guardados en archivos JSON.");
