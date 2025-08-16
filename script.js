// Project filtering logic
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.project-category-btn');
  const projects = document.querySelectorAll('.project');

  buttons.forEach(btn => {
    btn.addEventListener('click', function () {
      // Set active button
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');
      projects.forEach(project => {
        if (category === 'all' || project.getAttribute('data-category') === category) {
          project.removeAttribute('hidden');
        } else {
          project.setAttribute('hidden', '');
        }
      });
    });
  });
});
