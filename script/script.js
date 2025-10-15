
document.getElementById('contactButton').onclick = toggleModal;
document.getElementById('reject').onclick = toggleModal;
document.getElementById('get-in-touch').addEventListener('submit', toggleModal);

function toggleModal() {
  const element = document.getElementById('modal');

  if (element.getAttribute("visible") == "visible")
    element.setAttribute("visible", "hidden");
  else
    element.setAttribute("visible", "visible");


  const html = document.getElementById('html');
  html.classList.toggle('disable-scroll');
}

