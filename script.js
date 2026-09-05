// Renders PROJECTS (from projects.js) into the #project-grid container.
// To add a project, edit projects.js — this file shouldn't need to change.

(function () {
  const grid = document.getElementById('project-grid');
  if (!grid || typeof PROJECTS === 'undefined') return;

  const sorted = [...PROJECTS].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  const html = sorted.map((p) => {
    const highlights = (p.highlights || [])
      .map((h) => `<li>${escapeHtml(h)}</li>`)
      .join('');

    const tags = (p.tech || [])
      .map((t) => `<span class="tag">${escapeHtml(t)}</span>`)
      .join('');

    const link = p.link
      ? `<a class="project-card__link" href="${escapeAttr(p.link)}" target="_blank" rel="noopener">View project</a>`
      : '';

    return `
      <article class="project-card">
        <div class="project-card__row">
          <span class="project-card__designator">${escapeHtml(p.designator || '')}</span>
          <span class="project-card__category">${escapeHtml(p.category || '')}</span>
        </div>
        <h3>${escapeHtml(p.title || '')}</h3>
        <p class="project-card__meta">${escapeHtml(p.org || '')}${p.org && p.period ? ' — ' : ''}${escapeHtml(p.period || '')}</p>
        <p class="project-card__summary">${escapeHtml(p.summary || '')}</p>
        <ul class="project-card__highlights">${highlights}</ul>
        <div class="project-card__tags">${tags}</div>
        ${link}
      </article>
    `;
  }).join('');

  grid.innerHTML = html;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
  function escapeAttr(str) {
    return escapeHtml(str).replace(/"/g, '&quot;');
  }
})();
