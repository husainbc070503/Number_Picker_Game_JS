let input = document.getElementById("input");
let check = document.getElementById("check-btn");
let again = document.getElementById("again-btn");
let right = document.getElementById("right");
let score = document.getElementById("score");
let hs = document.getElementById("high-score");
let reply = document.getElementById("reply");
let attempts = document.getElementById("attempts-left");

let random = Math.floor(Math.random() * 100);
let sc = 0,
  a = 20,
  high = 0;

check.onclick = () => {
  console.log(random);
  if (input.value > 100 || input.value <= 0) {
    reply.textContent = "Please, enter value between 1 and 100!!😄";
    right.style.backgroundColor = "#CFFDE1";
    return false;
  }
  if (random == input.value) {
    reply.textContent = "You guess the right number.🥳";
    right.style.backgroundColor = "#00FFAB";
    sc += 1;
    high = Math.max(high, sc);
    score.textContent = sc;
    hs.textContent = high;
    input.focus();
    random = Math.floor(Math.random() * 100);
    return false;
  } else if (input.value > random) {
    if (a == 0) {
      reply.textContent = "Oops..No, more attempst left.😄";
      attempts.textContent = 0;
      input.value = "";
      input.disabled = true;
    } else reply.textContent = "Number too high!!😯";
    right.style.backgroundColor = "#FF4848";
    a -= 1;
    input.focus();
    attempts.textContent = a;
    return false;
  } else if (input.value < random) {
    if (a == 0) {
      reply.textContent = "Oops..No, more attempst left.😄";
      attempts.textContent = 0;
      input.value = "";
      input.disabled = true;
    } else reply.textContent = "Number too low!!😯";
    right.style.backgroundColor = "#FF6D28";
    a -= 1;
    attempts.textContent = a;
    input.focus();
    return false;
  }
  return true;
};

again.onclick = () => {
  a = 10;
  sc = 0;
  high = Math.max(sc, high);
  input.value = "";
  attempts.textContent = a;
  score.textContent = sc;
  hs.textContent = high;
  reply.textContent = "Start Guessing..😀";
  right.style.backgroundColor = "#E8F9FD";
  input.disabled = false;
};
