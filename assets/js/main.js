document.addEventListener('click', (e) => {
  const copyBtn = e.target.closest('[data-copy]');
  if (!copyBtn) return;
  const target = document.querySelector(copyBtn.dataset.copy);
  if (!target) return;
  navigator.clipboard.writeText(target.innerText).then(() => {
    copyBtn.innerText = 'Copiado ✓';
    setTimeout(() => (copyBtn.innerText = 'Copiar'), 1200);
  });
});