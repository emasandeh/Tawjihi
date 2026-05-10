async function solveMath(){

  const question = document.getElementById("question").value;

  const answerBox = document.getElementById("answer");

  const loading = document.getElementById("loading");

  if(!question){

    answerBox.innerHTML = "Please enter a math question.";

    return;
  }

  loading.classList.remove("hidden");

  answerBox.innerHTML = "";

  try{

    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method:"POST",

        headers:{
          "Content-Type":"application/json",

          "Authorization":"Bearer YOUR_OPENAI_API_KEY"
        },

        body:JSON.stringify({

          model:"gpt-4.1-mini",

          messages:[
            {
              role:"system",

              content:
              "You are a professional math tutor. Solve math problems step by step."
            },

            {
              role:"user",

              content:question
            }
          ]
        })
      }
    );

    const data = await response.json();

    loading.classList.add("hidden");

    answerBox.innerHTML =
      data.choices[0].message.content;

  }catch(error){

    loading.classList.add("hidden");

    answerBox.innerHTML =
      "Error connecting to AI.";
  }
}
