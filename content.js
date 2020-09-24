const body = document.body;
const meme = document.createElement('img');
meme.src =
  'https://cdn.dopl3r.com//media/memes_files/me-opens-a-chrome-tab-chrome-there-is-another-u1TGe.jpg';
meme.setAttribute('id', 'thememe');
meme.style.opacity = '0.5';
document.body.style.backgroundImage =
  "url('https://cdn.dopl3r.com//media/memes_files/me-opens-a-chrome-tab-chrome-there-is-another-u1TGe.jpg')";
body.prepend(meme);
