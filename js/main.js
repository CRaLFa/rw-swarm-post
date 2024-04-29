/**
 * @param {string} text
 */
const createParagraph = (text) => {
  const p = document.createElement('p');
  p.innerText = text;
  return p;
};

/**
* @param {string} url
*/
const createAnchor = (url) => {
  const a = document.createElement('a');
  a.href = url;
  a.innerText = text;
  return a;
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

  if (params.has('text')) {
    const matched = params.get('text').match(/^私は(.+)～(https?:\/\/.+)、(.+)にいました$/);
    if (matched) {
      const text = `I'm at ${matched[3]} in ${matched[1]}`;
      const url = matched[2];
      document.querySelector('main')
          .appendChild(createParagraph(text))
          .appendChild(createAnchor(url));
    }
  }

});
