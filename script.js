// Minimalist scroll-reveal and floating bubbles performance-friendly
(function(){
  const revealEls = Array.from(document.querySelectorAll('.reveal'));
  const onIntersect = (entries, obs) => {
    for (const e of entries){
      if (e.isIntersecting){
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    }
  };
  const io = new IntersectionObserver(onIntersect,{root:null,rootMargin:'0px 0px -10% 0px',threshold:0.12});
  revealEls.forEach(el=>io.observe(el));

  // Keep JS from interfering with CSS-driven bubble animations
})();


