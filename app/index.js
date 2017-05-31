var faqItems = document.querySelectorAll('.faq-item > .faq-item__question');

[].forEach.call(faqItems, function(item) {
  item.addEventListener('click', function(event) {
    var target = event.target.parentNode;
    var currentActive = target.parentNode.querySelector('.faq-item.active');

    if (target.classList.contains('active')) {
      target.classList.remove('active');
    } else {
      target.classList.add('active');
    }

    if (currentActive) {
      currentActive.classList.remove('active');
    }
  });
});

document.querySelector('.video-section .play-button').addEventListener('click', function() {
  var videoPopup = document.querySelector('.video-popup');
  if (videoPopup) {
    videoPopup.classList.add('shown');
  }
});

document.querySelector('.video-popup').addEventListener('click', function(event) {
  event.target.classList.remove('shown');
});