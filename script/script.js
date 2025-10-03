
document.getElementById('contactButton').onclick = toggleModal;
document.getElementById('reject').onclick = toggleModal;
document.getElementById('get-in-touch').addEventListener('submit', toggleModal);

function toggleModal() {
  const element = document.getElementById('modal');
  // element.classList.toggle('hidden');

  if (element.getAttribute("visible") == "hidden")
    element.setAttribute("visible", "visible");
  else
    element.setAttribute("visible", "hidden");


  const html = document.getElementById('html');
  html.classList.toggle('disable-scroll');
}

