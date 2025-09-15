
document.getElementById('contactButton').onclick = toggleModal;
document.getElementById('reject').onclick = toggleModal;
document.getElementById('sendInfo').onclick = toggleModal;

function toggleModal() {
  const element = document.getElementById('modal');
  element.classList.toggle('hidden');

  const body = document.getElementById('body');
  body.classList.toggle('disable-scroll');
}

