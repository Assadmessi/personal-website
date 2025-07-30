document.getElementById("startBtn").addEventListener("click", () => {
  const splash = document.getElementById("splash");
  splash.classList.add("fade-out");

  setTimeout(() => {
    splash.style.display = "none";
    const main = document.getElementById("main-content");
    main.style.display = "block";
  }, 2000);
});

// Parallax effect for cards
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    card.style.transform = `rotateX(${y * 10}deg) rotateY(${x * -10}deg) scale(1.02)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
  });
});

// Theme Toggle with localStorage
const toggleBtn = document.getElementById('toggleTheme');
const body = document.body;

// Load saved preference
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-mode');
  toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  const isLight = body.classList.contains('light-mode');
  toggleBtn.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});