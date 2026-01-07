document.querySelectorAll('.toggle-project').forEach(title => {
  title.addEventListener('click', () => {
    const details = title.nextElementSibling;
    details.classList.toggle('hidden');
  });
});
