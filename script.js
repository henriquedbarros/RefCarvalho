document.addEventListener('DOMContentLoaded', function() {
    var smoothScrollLinks = document.querySelectorAll('.options');
    
    smoothScrollLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        
        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          var offsetTop = targetElement.offsetTop;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  });