function showMenu() {
  const orgElement = document.getElementById('organization');
  orgElement.style.display = 'block';
}

function showAnotherMenu() {
  const vgElement = document.getElementById('vg');
  vgElement.style.display = 'block';
}

const org = document.getElementById('org');
org.addEventListener('click', showMenu);

const menuVg = document.getElementById('menu-vg');
menuVg.addEventListener('click', showAnotherMenu);
