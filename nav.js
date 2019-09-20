function showMenu() {
  const orgElement = document.getElementById('organization');
  if (orgElement.style.display === 'none' || orgElement.style.display === '') {
    orgElement.style.display = 'block';
  } else {
    orgElement.style.display = 'none';
  }
}

function showAnotherMenu() {
  const vgElement = document.getElementById('vg');
  if (vgElement.style.display === 'none' || vgElement.style.display === '') {
    vgElement.style.display = 'block';
  } else {
    vgElement.style.display = 'none';
  }
}

const org = document.getElementById('org');
org.addEventListener('click', showMenu);

const menuVg = document.getElementById('menu-vg');
menuVg.addEventListener('click', showAnotherMenu);
