function checkAnswer(button) {
  const result = document.getElementById("quiz-result");
  if (button.innerText === "Sidi Salem") {
    result.innerText = "✅ Bonne réponse !";
    result.style.color = "green";
  } else {
    result.innerText = "❌ Mauvaise réponse. Essaie encore !";
    result.style.color = "red";
  }
}
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 1s ease";
  observer.observe(section);
});
