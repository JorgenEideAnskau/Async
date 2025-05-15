import { cookBeans, steamBroccoli, cookRice, bakeChicken } from "./library.js";

// Write your code below:
async function serveDinnerAgain() {
  const foodArray = await Promise.all([
    steamBroccoli(),
    cookRice(),
    bakeChicken(),
    cookBeans(),
  ]);

  console.log(`Dinner is served. We're having ${foodArray.join(", ")}`);
}

serveDinnerAgain();
