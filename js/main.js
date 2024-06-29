document.addEventListener('DOMContentLoaded', function () {
  // Obtenez l'URL actuelle
  const currentUrl = window.location.pathname;

  // Définissez une correspondance entre les URLs et les IDs des éléments de menu
  const menuItems = {
    '/demo-construction.html': 'home',
    '/demo-construction-services.html': 'services',
    '/demo-construction-about-us.html': 'about',
    '/demo-construction-projects.html': 'projects',
    '/demo-construction-careers.html': 'careers',
    '/demo-construction-contact.html': 'contact',
  };

  // Retirez la classe 'current' de tous les éléments de menu
  document.querySelectorAll('.menu-item').forEach(function (item) {
    item.classList.remove('current');
  });

  // Ajoutez la classe 'current' à l'élément de menu correspondant à l'URL actuelle
  if (menuItems[currentUrl]) {
    document.getElementById(menuItems[currentUrl]).classList.add('current');
  }
});
