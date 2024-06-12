

function toggleSublist(event) {
    event.preventDefault();
    var sublist = event.currentTarget.querySelector('.sublist');
    sublist.style.display = (sublist.style.display === 'none' || sublist.style.display === '') ? 'block' : 'none';
}
console.log('addAnimation function called');
  const scrollers = document.querySelectorAll('.scroller');

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      scroller.setAttribute('data-animated', true);

      const scrollerInner = scroller.querySelector('.scroller__inner');
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute('aria-hidden', true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
