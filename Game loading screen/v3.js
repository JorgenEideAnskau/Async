function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loadGameWithProgress() {
  console.log("🕹️ Loading Game...\n");

  const totalSteps = 30;

  for (let i = 1; i <= totalSteps; i++) {
    const percent = Math.floor((i / totalSteps) * 100);
    const bar = "[" + "#".repeat(i) + "-".repeat(totalSteps - i) + `] ${percent}%`;

    process.stdout.write("\r" + bar); // Rewrite the same line
    await sleep(100); // Wait 100ms per step (~3 seconds total)
  }

  console.log("\n✅ Game Loaded Successfully!");
}

loadGameWithProgress();
