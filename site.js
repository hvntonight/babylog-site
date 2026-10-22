const params = new URLSearchParams(location.search);
let language = params.get('lang') === 'en' ? 'en' : 'zh';
function renderLanguage() {
  document.documentElement.lang = language === 'en' ? 'en' : 'zh-Hans';
  document.querySelectorAll('[data-zh]').forEach(el => { el.textContent = el.dataset[language]; });
  document.querySelectorAll('[data-policy]').forEach(el => { el.hidden = el.dataset.policy !== language; });
  document.querySelectorAll('[data-screen]').forEach(el => {
    el.src = `assets/screens/${language}-${el.dataset.screen}.png`;
    el.alt = el.dataset[language === 'en' ? 'altEn' : 'altZh'];
  });
  document.querySelectorAll('a[href]').forEach(el => {
    const original = el.getAttribute('href');
    if (original.startsWith('./')) el.dataset.route = original;
    const href = el.dataset.route;
    if (!href) return;
    const url = new URL(href, location.href);
    url.searchParams.set('lang', language);
    el.href = url.href;
  });
  document.querySelector('.language').textContent = language === 'en' ? '中文' : 'English';
}
document.querySelector('.language').addEventListener('click', () => {
  language = language === 'zh' ? 'en' : 'zh';
  const url = new URL(location.href);
  url.searchParams.set('lang', language);
  history.replaceState(null, '', url);
  renderLanguage();
});
document.querySelectorAll('[data-scroll]').forEach(button => button.addEventListener('click', () => {
  const gallery = document.querySelector('.screen-gallery');
  gallery.scrollBy({ left: Number(button.dataset.scroll) * Math.min(gallery.clientWidth * .8, 600),
    behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}));
renderLanguage();
