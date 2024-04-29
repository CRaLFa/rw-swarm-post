import './style.css';

const textarea = document.querySelector<HTMLTextAreaElement>('#text')!;

document.querySelector<HTMLButtonElement>('#clip')!.addEventListener('click', () => {
  navigator.clipboard.writeText(textarea.value);
  window.alert('クリップボードにコピーしました。');
});

const main = () => {
  const params = new URL(document.location.href).searchParams;
  if (params.has('text')) {
    const matched = params.get('text')!.match(/^私は(.+)～(https?:\/\/.+)、(.+)にいました$/);
    if (matched)
      textarea.value = `I'm at ${matched[3]} in ${matched[1]}\n${matched[2]}`;
  }
};

main();
