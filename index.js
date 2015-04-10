export default (window, _cb) => {
  const getTitle = (mutations) => mutations[0].target.nodeValue;
  const cb = (mutations)=> _cb(getTitle(mutations));
  new window.MutationObserver(cb).observe(
    window.document.querySelector('title'),
    { subtree: true, characterData: true }
  );
};
