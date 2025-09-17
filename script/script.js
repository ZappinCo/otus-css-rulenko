
document.getElementById('contactButton').onclick = toggleModal;
document.getElementById('reject').onclick = toggleModal;
document.getElementById('get-in-touch').addEventListener('submit', toggleModal);

function toggleModal() {
  const element = document.getElementById('modal');
  element.classList.toggle('hidden');

  const body = document.getElementById('body');
  body.classList.toggle('disable-scroll');
}

