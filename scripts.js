document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tabs-trigger');
  const contents = document.querySelectorAll('.tabs-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const value = this.getAttribute('data-value');

      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      this.classList.add('active');
      document.querySelector(`.tabs-content[data-value="${value}"]`).classList.add('active');
    });
  });

  // Show the first tab by default
  tabs[0].click();
});