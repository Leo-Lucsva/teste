const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener('mouseenter', () => {
    items.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.style.filter = 'blur(1.5px)';
        
      }
      if (otherItem == item) {
      item.style.filter = 'none';
      }
    });
  });
  
  item.addEventListener('mouseleave', () => {
    items.forEach(otherItem => {
      otherItem.style.filter = 'none';
    });
  });
});