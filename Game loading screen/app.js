function loadGame() {
  return new Promise((resolve, reject) => {
    console.log("🔃 Game is loading... \n");

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

loadGame()
  .then(() => {
    console.log("🚀 Starting the game...");
    // Start the game logic here
  })
  .catch((error) => {
    console.error("⚠️ Error:", error.message);
    // Handle the error (e.g., show a retry button)
  });
