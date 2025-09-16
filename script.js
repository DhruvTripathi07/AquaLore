// AquaLore: Minimalist scroll-reveal and floating bubbles script

(function() {
    // Select all elements with the 'reveal' class for scroll-reveal effect
    const revealEls = Array.from(document.querySelectorAll('.reveal'));

    // Callback for IntersectionObserver: adds 'visible' class when element enters viewport
    const onIntersect = (entries, obs) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                // Reveal the element by adding the 'visible' class
                entry.target.classList.add('visible');
                // Stop observing once revealed for performance
                obs.unobserve(entry.target);
            }
        }
    };

    // Create IntersectionObserver with custom root margin and threshold
    const io = new IntersectionObserver(onIntersect, {
        root: null,
        rootMargin: '0px 0px -10% 0px', // Reveal slightly before fully in view
        threshold: 0.12 // Reveal when 12% visible
    });

    // Observe each reveal element
    revealEls.forEach(el => io.observe(el));

    // Note: Bubble animations are handled by CSS for performance
    // This script does not interfere with bubble animation logic
})();


