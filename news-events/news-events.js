// Tab switching: News ↔ Events
document.querySelectorAll('.ne-tabs button').forEach(btn => {
  btn.addEventListener('click', () => {
    // toggle active button
    document.querySelectorAll('.ne-tabs button')
      .forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // show/hide sections
    document.querySelectorAll('.ne-list')
      .forEach(sec => sec.classList.add('hidden'));
    document.getElementById(btn.dataset.target)
      .classList.remove('hidden');
  });
});

// Load-more placeholders (stubbed)
document.querySelectorAll('.ne-load-more').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = 'Loading…';
    // fetch('/api/news?page=2').then(…)
  });
});