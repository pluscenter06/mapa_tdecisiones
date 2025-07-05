document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.example-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      const exampleId = btn.getAttribute('data-example');
      const exampleContent = document.getElementById(exampleId);
      if (exampleContent.classList.contains('show')) {
        exampleContent.classList.remove('show');
        btn.textContent = '💡 Ver ejemplo';
      } else {
        exampleContent.classList.add('show');
        btn.textContent = '💡 Ocultar ejemplo';
      }
    });
  });
}); 