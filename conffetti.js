document.addEventListener("DOMContentLoaded", function() {
  console.log("confetti launched!");
  const colors = ["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff", "#ff922b"];

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti-piece");
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;

    document.body.appendChild(confetti);
  }
});

