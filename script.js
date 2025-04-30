// const toggleButton = document.getElementById('toggleDarkMode');
//   let darkMode = false;

//   toggleButton.addEventListener('click', () => {
//     document.documentElement.classList.toggle('dark-mode');
//     darkMode = !darkMode;
//     toggleButton.textContent = darkMode ? "☀️" : "🌑";
//   });
const toggleBtn = document.getElementById("toggleDarkMode");
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("dark-mode");

  // Toggle icon smoothly
  icon.classList.add("icon-fade");
  icon.classList.toggle("bi-moon-fill");
  icon.classList.toggle("bi-sun-fill");
  setTimeout(() => icon.classList.remove("icon-fade"), 300);
});
