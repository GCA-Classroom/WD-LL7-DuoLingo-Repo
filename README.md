🦉 Duolingo XP Prototype — Instructor Demo

This repository is used for the live instructor demo in the lab:

Client Challenge: Building Smart Game Logic for Duolingo

Students act as developers building decision-making logic for a Duolingo feature prototype. The demo focuses on:

Conditionals (if / else if / else)

Comparisons (<, >=)

Arrays

Randomness

Updating the DOM

The goal is to model how client requirements become code logic, preparing students for their charity: water project.

🎯 Learning Objective

By the end of this demo, students should understand how to:

-Track progress using variables

-Use conditionals and comparisons to control user experience

-Add randomness with arrays

- Translate product goals into JavaScript logic

This demo emphasizes conditionals + comparisons as the primary skill.

🚀 Getting Started (GitHub Codespaces)

1. Open this repository in GitHub.

2. Click Code → Create Codespace on main.

3. Once Codespaces loads, open index.html.

4. Use Live Server or Preview to view the project in the browser.

You should see:

- A Duolingo XP screen

- A “Complete Lesson” button

- XP increasing when clicked

Messages changing based on XP

🗂 Project Structure
duolingo-xp-demo/
├── index.html   → UI + Bootstrap
├── style.css    → Light custom styling
└── script.js    → Core demo logic

🧑🏽‍🏫 Instructor Demo Flow (20 Minutes)

Suggested pacing:

1. Show the Finished Experience (2–3 min)

Click the button a few times

Let XP increase

Show how messages change

Ask students: “What do you think controls this behavior?”

2. Review the HTML (3–4 min)

Point out:

XP display

Message area

Buttons

Emphasize:

“JavaScript controls behavior. HTML just gives us places to show it.”

3. Walk Through the JavaScript (5–6 min)

In script.js:

xpTotal → tracks progress

xpRewards → array of possible XP values

Random selection using Math.random()

Updating text on the page

Pause and explain:

Arrays hold multiple values

Randomness keeps users engaged

4. Core Teaching Moment: Conditionals (5–6 min)

Focus on:

if (xpTotal < 50) { ... }
else if (xpTotal >= 50 && xpTotal < 100) { ... }
else { ... }


Discuss:

How comparisons work

Why thresholds exist

How this represents product decisions

Encourage instructors to:

Change the numbers live

Ask students to predict outcomes

Use console.log(xpTotal) to show debugging

Key phrase:

Client language becomes code logic.

5. Wrap-Up (2 min)

Connect back to the larger course:

This same logic powers games, apps, and impact trackers

Students will use this pattern again in their charity: water project

End with:

“Today you taught your app how to think.”

🔁 Reset Button

A reset button is included as a stretch example. It:

Sets XP back to 0

Clears the message

Instructors may use this to discuss:

State management

User controls

Optional features

✅ Transfer to Student Team Time

After the demo, students will:

Build their own Duolingo-inspired logic in teams

Create progress trackers

Define their own conditional outcomes

Apply randomness creatively

This demo serves as their reference implementation.

Happy teaching — and remember:
You’re modeling how developers solve client problems. 💛
