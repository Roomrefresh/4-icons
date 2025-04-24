document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.createElement('div');
  overlay.className = 'welcome-overlay';
  overlay.innerHTML = `
    <div class="welcome-content">
      <img src="https://i.postimg.cc/jdtMnxsW/Grand-opening-web-profile-copy.jpg" class="welcome-image">
    </div>
  `;
  document.body.appendChild(overlay);

  setTimeout(function() {
    overlay.classList.add('fade-out');
    setTimeout(function() {
      document.body.removeChild(overlay);
    }, 1500);
  }, 4000);
});
