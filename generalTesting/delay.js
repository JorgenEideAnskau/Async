// 5. Create a delay function
// Write an async function wait(ms) that pauses for a given number of milliseconds using setTimeout and Promise.

// Log a countdown using it:

// "3..." → wait 1 sec → "2..." → wait 1 sec → etc.

async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function countdown() {
  console.log("Time to launch:");

  for (let index = 10; index > 0; index--) {
    console.log(index);
    await wait(300);
  }

  console.log("Liftoff!!! 🚀");
}

countdown();