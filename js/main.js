// ===== HOMEPAGE JS =====

function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}

// Render featured cards (first 6)
function renderFeatured() {
  const container = document.getElementById('featuredCards');
  if (!container) return;
  const featured = OPPORTUNITIES.slice(0, 6);
  container.innerHTML = featured.map(createCard).join('');
}

// Update nav based on login state
function updateNav() {
  const user = getUser();
  const loginLink = document.querySelector('a[href="pages/login.html"]');
  const signupLink = document.querySelector('a[href="pages/signup.html"]');
  if (user && loginLink && signupLink) {
    loginLink.textContent = user.name.split(' ')[0];
    loginLink.href = 'pages/tracker.html';
    signupLink.textContent = 'Logout';
    signupLink.href = '#';
    signupLink.onclick = (e) => { e.preventDefault(); localStorage.removeItem('sh_user'); location.reload(); };
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderFeatured();
  updateNav();
});
