/**
 * @param {string} text
 */
const createParagraph = (text) => {
  const p = document.createElement('p');
  p.innerText = text;
  return p;
};

/**
 * @param {URLSearchParams} params
 * @param {string} name
 */
const showParam = (params, name) => {
  const main = document.querySelector('main');
  main.appendChild(createParagraph(`${name}: ${params.has(name) ? params.get(name) : 'undefined'}`));
};

window.addEventListener('DOMContentLoaded', async () => {

  const params = new URL(document.location).searchParams;
  showParam(params, 'title');
  showParam(params, 'text');
  showParam(params, 'url');

});
