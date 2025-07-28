document.getElementById('startBtn').addEventListener('click', function () {
    const splash = document.getElementById('splash');
    splash.style.opacity = '0';
  
    setTimeout(() => {
      splash.style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
    }, 1500);
  });