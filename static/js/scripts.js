const lazyLoad = () => {
  var myLazyLoad = new LazyLoad();
}

const blobs = () => {
  anime({
    targets: ['.c-hero__header', '.c-wip__header', '.c-post__header'],
    opacity: 1,
    delay: 300,
    translateY: [-90,0],
    duration: 1000,
    easing: 'easeInOutExpo'
  });

  anime({
    targets: '.c-wip__blob',
    opacity: 1,
    translateX: [0,200],
    translateY: [0,-200],
    duration: 8000,
    easing: 'easeInOutBack',
    direction: 'alternate',
    delay: anime.stagger(500),
    autoplay: true,
    loop: true
  });
}

$(document).ready(function() {
  lazyLoad();
  blobs();
});