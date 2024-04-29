const createParagraph = (text) => {
  const p = document.createElement('p');
  p.innerText = text;
  return p;
};

window.addEventListener('DOMContentLoaded', async () => {

  const params = new URL(window.location.href).searchParams;

  const main = document.getElementById('main');
  main.appendChild(createParagraph(`title: ${params.get(title)}`));
  main.appendChild(createParagraph(`text: ${params.get(text)}`));
  main.appendChild(createParagraph(`url: ${params.get(url)}`));

});
