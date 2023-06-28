const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. ",
  "The way to get started is to quit talking and begin doing. ",
  "If life were predictable it would cease to be life, and be without flavor. ",
  "Your time is limited, don't waste it living someone else's life. ",
  "Life is what happens when you're busy making other plans.",
];

function changeBackgroundAndQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  const randomQuote = quotes[randomIndex];

  document.body.style.backgroundColor = getRandomColor();

  document.getElementById("quote").textContent = randomQuote;
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const color = `rgb(${r}, ${g}, ${b})`;

  return color;
}

const changeButton = document.getElementById("changeButton");
changeButton.addEventListener("click", changeBackgroundAndQuote);
