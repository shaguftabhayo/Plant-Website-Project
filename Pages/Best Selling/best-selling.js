  // Add interactivity for sorting pills
  document.querySelectorAll('.sorting-pill').forEach(pill => {
    pill.addEventListener('click', () => {
        document.querySelectorAll('.sorting-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
    });
});

// Add interactivity for favorite buttons
document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const icon = btn.querySelector('i');
        if (icon.classList.contains('bi-heart')) {
            icon.classList.remove('bi-heart');
            icon.classList.add('bi-heart-fill');
            icon.style.color = 'red';
        } else if (icon.classList.contains('bi-heart-fill')) {
            icon.classList.remove('bi-heart-fill');
            icon.classList.add('bi-heart');
            icon.style.color = '';
        }
        e.stopPropagation();
    });
});

// Add quick view functionality (you can replace this with a modal or custom logic)
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        const productName = card.querySelector('h6').textContent;
        alert(`Quick view for ${productName}`);
    });
});