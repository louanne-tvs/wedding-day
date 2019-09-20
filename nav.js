// fonction pour inverser la visibilité d'un menu
// l'id du menu à inverser doit etre indiqué ds l'argument elName
function toggleMenu(elName) {
  // on créé une variable ds laquelle on stock l'élément html
  const element = document.getElementById(elName);

  // ensuite on créé une condition qui modifie la valeur de la propriété
  // style.display. si pas affiché (none) passe en affiché (block) et inversemment
  if (element.style.display === 'none' || element.style.display === '') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

function showOrg() {
  toggleMenu('organization');
}

function showVg() {
  toggleMenu('vg');
}

const org = document.getElementById('org');
org.addEventListener('click', showOrg);

const menuVg = document.getElementById('menu-vg');
menuVg.addEventListener('click', showVg);
