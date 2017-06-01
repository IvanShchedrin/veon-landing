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
  var iframe = document.querySelector('.video-popup__video');

  if (videoPopup) {
    videoPopup.classList.add('shown');
    iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}','*');
  }
});

document.querySelector('.video-popup').addEventListener('click', function(event) {
  var iframe = document.querySelector('.video-popup__video');
  event.target.classList.remove('shown');
  iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
});

var staticSlider = document.querySelector('.static-slider__phone');
var staticSliderImages = staticSlider.querySelectorAll('.static-slider__phone-image');

setInterval(function() {
  var shownImage = staticSlider.querySelector('.shown');

  shownImage.classList.remove('shown');
  if (shownImage.nextElementSibling) {
    shownImage.nextElementSibling.classList.add('shown');
  } else {
    staticSliderImages[0].classList.add('shown');
  }
}, 7000);