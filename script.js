/*************************************************
 DUOLINGO XP PROTOTYPE
 Instructor Demo Starter Code

 Goal:
 Demonstrate conditionals + comparisons
 with light arrays + randomness.

 Teaching flow:
 1. Create variables
 2. Add event listener
 3. Add randomness
 4. Update UI
 5. Add conditional logic
**************************************************/

// --------------------------------------------
// STEP 1: Grab elements from the DOM
// --------------------------------------------

const xpDisplay = document.getElementById("xpDisplay");
const message = document.getElementById("message");
const lessonBtn = document.getElementById("lessonBtn");
const resetBtn = document.getElementById("resetBtn");

// --------------------------------------------
// STEP 2: Create main XP variable
// Start at 0
// --------------------------------------------

let xpTotal = 0;

// --------------------------------------------
// STEP 3: Create XP reward options (array)
// Instructor: Explain arrays store multiple values
// --------------------------------------------

const xpRewards = [10, 15, 20];

// --------------------------------------------
// STEP 4: Button click event
// --------------------------------------------

lessonBtn.addEventListener("click", function () {

  /*************************************************
   STEP 5: Random XP
   Pick a random number from xpRewards
  **************************************************/

  const randomIndex = Math.floor(Math.random() * xpRewards.length);
  const earnedXP = xpRewards[randomIndex];

  // Add XP to total
  xpTotal += earnedXP;

  // Update XP on screen
  xpDisplay.textContent = `XP: ${xpTotal}`;

  /*************************************************
   STEP 6: Conditional Logic
   This is the CORE teaching moment.
   Explain: client goals become if statements.
  **************************************************/

  if (xpTotal < 50) {
    message.textContent = "Nice start! Keep practicing 💪";

  } else if (xpTotal >= 50 && xpTotal < 100) {
    message.textContent = "You're on a streak! 🔥";

  } else {
    message.textContent = "LEVEL UP! 🎉 You unlocked the next stage!";
  }

  /*************************************************
   Instructor Pause:
   - Change numbers live
   - Ask students what will happen
   - Console.log xpTotal
  **************************************************/

  console.log("Current XP:", xpTotal);

});

// --------------------------------------------
// STEP 7: Reset button (optional stretch)
// --------------------------------------------

resetBtn.addEventListener("click", function () {
  xpTotal = 0;
  xpDisplay.textContent = "XP: 0";
  message.textContent = "";
});
