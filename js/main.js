// Smooth Scroll
$(function() {
  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// Animation
window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 2000,
  origin: 'bottom'
});
sr.reveal('.showcase-left', {
  duration: 2000,
  origin: 'top',
  distance: '300px'
});
sr.reveal('.showcase-right', {
  duration: 2000,
  origin: 'right',
  distance: '300px'
});
sr.reveal('.results', {
  duration: 2000,
  origin: 'bottom'
});
sr.reveal('#contact-button', {
  duration: 2000,
  origin: 'left',
  distance: '300px'
});
sr.reveal('.math-left', {
  duration: 2000,
  origin: 'left',
  distance: '300px',
  viewFactor: 0.2
});
sr.reveal('.math-right', {
  duration: 2000,
  origin: 'right',
  distance: '300px',
  viewFactor: 0.2
});
sr.reveal('.science-left', {
  duration: 2000,
  origin: 'left',
  distance: '300px',
  viewFactor: 0.2
});
sr.reveal('.science-right', {
  duration: 2000,
  origin: 'right',
  distance: '300px',
  viewFactor: 0.2
});
sr.reveal('.meetus-title', {
  duration: 2000,
  origin: 'top',
});
sr.reveal('.left-person', {
  duration: 2000,
  origin: 'left',
  distance: '300px',
  viewFactor: 0.2
});
sr.reveal('.right-person', {
  duration: 2000,
  origin: 'right',
  distance: '300px',
  viewFactor: 0.2
});
sr.reveal('#contact-title', {
  duration: 2000,
  origin: 'top'
});
sr.reveal('#name-group', {
  duration: 2000,
  origin: 'left',
  distance: '300px'
});
sr.reveal('#email-group', {
  duration: 2000,
  origin: 'right',
  distance: '300px'
});
sr.reveal('#message-group', {
  duration: 2000,
  origin: 'bottom',
  distance: '300px'
});
