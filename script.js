
// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// Dark/Light mode toggle with persistence
const root = document.documentElement;
const toggle = document.getElementById('modeToggle');
const saved = localStorage.getItem('theme') || 'dark';
if(saved === 'light'){ root.classList.add('light'); }
toggle.textContent = saved === 'light' ? '🌙 Modo oscuro' : '☀️ Modo claro';

toggle.addEventListener('click', () => {
  root.classList.toggle('light');
  const now = root.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('theme', now);
  toggle.textContent = now === 'light' ? '🌙 Modo oscuro' : '☀️ Modo claro';
});

// Fake "copiar email" button
const copyBtn = document.getElementById('copyEmail');
copyBtn?.addEventListener('click', async () => {
  const email = document.getElementById('emailText')?.textContent?.trim();
  if(!email) return;
  try{
    await navigator.clipboard.writeText(email);
    copyBtn.textContent = '✅ Copiado';
    setTimeout(() => copyBtn.textContent = 'Copiar', 1200);
  }catch(_){}
});
