const adviceNum = document.querySelector(".number");
const advice = document.querySelector(".quote");
const generateButton = document.querySelector(".button");

generateButton.addEventListener("click", getAdvice); 

async function getAdvice() {
    try {
    const data = await fetch("https://api.adviceslip.com/advice");
    if (!data.ok) throw new Error("Failed");
    const response = await data.json();

    const adviceId = response.slip.id;
    const quote = response.slip.advice;

    adviceNum.textContent = `"${adviceId}"`;
    advice.textContent = `"${quote}"`;
  } catch (error) {
    console.log(error.message);
  }
}
  

