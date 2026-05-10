
// NAVIGATION
function show(id){

  document.querySelectorAll(".section")
  .forEach(s => s.classList.add("hidden"));

  document.getElementById(id)
  .classList.remove("hidden");
}

// SIMPLE AI (placeholder)
function fakeAI(inputId, outputId){

  const text = document.getElementById(inputId).value;

  document.getElementById(outputId).innerHTML =
    "🧠 Explanation for: " + text +
    "<br><br>Step 1: Understand the problem<br>Step 2: Solve step by step";

  addProgress();
}

// LOAD QUESTIONS
fetch("questions.json")
.then(r => r.json())
.then(data => {

  const box = document.getElementById("practiceBox");
  const quiz = document.getElementById("quizBox");

  data.forEach((q,i) => {

    // Practice
    const p = document.createElement("div");
    p.innerHTML = `
      <p>${q.q}</p>
      <button onclick="alert('${q.a}')">Answer</button>
    `;
    box.appendChild(p);

    // Quiz
    const qz = document.createElement("div");
    qz.innerHTML = `
      <p>${q.q}</p>
      <input id="q${i}" placeholder="answer">
    `;
    quiz.appendChild(qz);

  });

});

// QUIZ CHECK
function checkQuiz(){

  let inputs = document.querySelectorAll("input");

  let score = 0;

  inputs.forEach(i => {
    if(i.value.trim() !== "") score++;
  });

  document.getElementById("score").innerText =
    "Score: " + score + "/" + inputs.length;

  addProgress();
}

// PROGRESS
let progress = 0;

function addProgress(){
  progress++;
  document.getElementById("progressText")
  .innerText = progress + " tasks completed";
}
