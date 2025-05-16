export function scream() {
    console.log("Uæææææææ");
}

window.scream = scream;

// When you use <script type="module">, any variables or functions you define (including exports) are scoped to the module and are not added to the global window object by default.
// This is a security and encapsulation feature of JavaScript modules.

// The browser only looks for global functions (on window) when you use inline event handlers like onclick="scream()".
// By writing window.scream = scream; in your module, you explicitly make the function available globally, so the inline handler can find and call it.

// Summary:

// Modules: Functions/variables are not global.
// Inline event handlers: Look for functions on window.
// Solution: Assign to window to make it global.