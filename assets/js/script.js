document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing! (This is a placeholder)');
            newsletterForm.reset();
        });
    }

    // Affiliate link tracking
    document.querySelectorAll('a[data-affiliate]').forEach(function(link) {
        link.addEventListener('click', function() {
            const tool = this.getAttribute('data-affiliate');
            console.log('Affiliate click:', tool);
            if (window.gtag) {
                gtag('event', 'click', {
                    event_category: 'Affiliate',
                    event_label: tool
                });
            }
        });
    });
});