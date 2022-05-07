const qouteContainer = document.getElementById("advice-qoute");
const idNumberContainer = document.getElementById("id-number");
const loader = document.getElementById("loader");
const nextBtn = document.getElementById("nextButton");

// Fetch Random Advice
const fetchRandomAdvice = async () => {
  try {
    nextBtn.disabled = true;
    loader.classList.add("show");
    let response = await fetch("https://api.adviceslip.com/advice");
    let { slip } = await response.json();
    loader.classList.remove("show");
    idNumberContainer.textContent = slip.id;
    qouteContainer.textContent = slip.advice;
    nextBtn.disabled = false;
  } catch (error) {
    console.log(error.message);
  }
};

// Btn Listener
nextBtn.addEventListener("click", () => {
  idNumberContainer.textContent = "";
  qouteContainer.textContent = "";
  fetchRandomAdvice();
});

// Load Once When Loaded
document.addEventListener("DOMContentLoaded", fetchRandomAdvice, false);
