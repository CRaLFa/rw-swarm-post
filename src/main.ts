import './style.scss';

const textarea = document.querySelector<HTMLTextAreaElement>('#text')!;
let normalText: string;
let commentText: string;
let isComment = false;

document.querySelector<HTMLButtonElement>('#clip')!.addEventListener('click', async () => {
  await navigator.clipboard.writeText(textarea.value);
  window.alert('コピーしました。');
  window.close();
});

document.querySelector<HTMLImageElement>('#share')!.addEventListener('click', async () => {
  if (navigator.share)
    await navigator.share({
      text: textarea.value,
    });
  else
    window.alert('お使いのブラウザではサポートされていません。');
  window.close();
});

document.querySelector<HTMLInputElement>('#comment')!.addEventListener('change', (event) => {
  isComment = (event.target as HTMLInputElement).checked;
  changeText();
});

const changeText = () => {
  if (!normalText || !commentText)
    return;
  if (isComment) {
    textarea.value = commentText;
    textarea.setSelectionRange(0, 0);
    textarea.focus();
  } else {
    textarea.value = normalText;
  }
};

const main = () => {
  const params = new URL(document.URL).searchParams;
  if (params.has('text')) {
    const matched = params.get('text')!.match(/^私は(.+)～(https?:\/\/.+)、(.+)にいました$/);
    if (matched) {
      const spot = matched[3], city = matched[1], url = matched[2];
      normalText = `I'm at ${spot} in ${city}\n${url}`;
      commentText = ` (@ ${spot} in ${city})\n${url}`
    } else {
      normalText = commentText = params.get('text')!;
    }
    changeText();
  }
};

main();
