function loadGame() {
  return new Promise((resolve, reject) => {
    console.log("🕹️ Game is loading... \n");

    setTimeout(() => {
      const success = Math.random() > 0.3;

      if (success) {
        resolve("✅ Game loaded successfully!");
      } else {
        reject("❌ Game failed to load. Please try again.");
      }
    }, 3000);
  });
}

async function startGame() {
  try {
    const message = await loadGame();
    console.log(message);
  } catch (error) {
    console.error(error);
  }
}

startGame();
