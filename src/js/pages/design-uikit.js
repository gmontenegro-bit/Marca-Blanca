(() => {
  let lastStamp = null;

  async function checkStamp() {
    try {
      const res = await fetch('/design/.uikit-meta.json?ts=' + Date.now(), { cache: 'no-store' });
      if (!res.ok) {
        return;
      }
      const data = await res.json();
      if (lastStamp === null) {
        lastStamp = data.generatedAt;
        return;
      }
      if (data.generatedAt !== lastStamp) {
        window.location.reload();
      }
    } catch (err) {
      // Ignore polling errors (usually caused by local server restart).
    }
  }

  function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
  }

  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }

  checkStamp();
  setInterval(checkStamp, 2000);
})();