window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) setTimeout(() => loader.style.display = 'none', 650);

  const buttons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.fleet-item');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      items.forEach(item => {
        const cat = item.dataset.category;
        item.style.display = filter === 'all' || cat.includes(filter) ? 'block' : 'none';
      });
    });
  });

  const search = document.getElementById('faqSearch');
  const faqItems = document.querySelectorAll('.faq-item');
  if (search) {
    search.addEventListener('input', () => {
      const value = search.value.toLowerCase().trim();
      faqItems.forEach(item => {
        const text = item.dataset.text.toLowerCase();
        item.style.display = text.includes(value) ? 'block' : 'none';
      });
    });
  }

  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Your form has been submitted successfully.');
      form.reset();
    });
  });
});
