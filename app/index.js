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