(() => {
  let lastStamp = null;

  async function getMeta() {
    const res = await fetch('/design/.uikit-meta.json?ts=' + Date.now(), { cache: 'no-store' });
    if (!res.ok) {
      return null;
    }
    return res.json();
  }

  async function checkStamp() {
    try {
      const data = await getMeta();
      if (!data) {
        return;
      }
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

  async function renderComponents() {
    const grid = document.getElementById('ui-grid');
    if (!grid) {
      return;
    }

    try {
      const data = await getMeta();
      if (!data) {
        return;
      }

      const items = Array.isArray(data.components) ? data.components : [];
      const cards = await Promise.all(
        items.map(async (item) => {
          const res = await fetch('/src/html/components/design-uikit/' + item.templateFile + '?ts=' + data.generatedAt, {
            cache: 'no-store',
          });
          if (!res.ok) {
            throw new Error('No se pudo cargar ' + item.templateFile);
          }
          return res.text();
        }),
      );

      grid.innerHTML = cards.join('');
      lastStamp = data.generatedAt;
    } catch (err) {
      grid.innerHTML = '<p class="ui-stamp">No fue posible cargar los componentes del UIKit.</p>';
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

  renderComponents();
  setInterval(checkStamp, 2000);
})();