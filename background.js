/* Background motion. Tweak PARTICLE_COUNT and the timing constants below. */
(() => {
  'use strict';

  const CONFIG = Object.freeze({
    PARTICLE_COUNT: 76,
    PARTICLE_SPEED_MIN: 5,
    PARTICLE_SPEED_MAX: 15,
    PARTICLE_RADIUS_MIN: 0.45,
    PARTICLE_RADIUS_MAX: 1.35,
    PARTICLE_ALPHA_MIN: 0.10,
    PARTICLE_ALPHA_MAX: 0.42,
    PARALLAX_PIXELS: 14,
    PARALLAX_EASE: 0.055,
    DPR_LIMIT: 2,
  });

  const stage = document.getElementById('stage');
  const canvas = document.getElementById('particles');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!stage || !canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  let width = 0, height = 0, dpr = 1, rafId = 0, previousTime = 0;
  let pointerX = 0, pointerY = 0, smoothX = 0, smoothY = 0;
  let particles = [];

  const random = (min, max) => min + Math.random() * (max - min);

  function makeParticle(randomY = true) {
    return {
      x: random(0, width),
      y: randomY ? random(0, height) : height + random(0, 30),
      radius: random(CONFIG.PARTICLE_RADIUS_MIN, CONFIG.PARTICLE_RADIUS_MAX),
      speed: random(CONFIG.PARTICLE_SPEED_MIN, CONFIG.PARTICLE_SPEED_MAX),
      alpha: random(CONFIG.PARTICLE_ALPHA_MIN, CONFIG.PARTICLE_ALPHA_MAX),
      drift: random(-3, 3),
      phase: random(0, Math.PI * 2),
    };
  }

  function resize() {
    const rect = stage.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    dpr = Math.min(window.devicePixelRatio || 1, CONFIG.DPR_LIMIT);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    particles = Array.from({ length: CONFIG.PARTICLE_COUNT }, () => makeParticle());
  }

  function render(time) {
    rafId = 0;
    if (document.hidden) return;
    const dt = previousTime ? Math.min((time - previousTime) / 1000, 0.05) : 0;
    previousTime = time;
    ctx.clearRect(0, 0, width, height);

    for (const p of particles) {
      p.y -= p.speed * dt;
      p.x += (p.drift + Math.sin(time * 0.00022 + p.phase) * 2) * dt;
      if (p.y < -4) Object.assign(p, makeParticle(false));
      if (p.x < -4) p.x = width + 4;
      if (p.x > width + 4) p.x = -4;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(224, 219, 207, ${p.alpha})`;
      ctx.fill();
    }

    smoothX += (pointerX - smoothX) * CONFIG.PARALLAX_EASE;
    smoothY += (pointerY - smoothY) * CONFIG.PARALLAX_EASE;
    for (const layer of document.querySelectorAll('.parallax-layer')) {
      const depth = Number(layer.dataset.depth) || 0;
      layer.style.setProperty('--parallax-x', `${-smoothX * CONFIG.PARALLAX_PIXELS * depth}px`);
      layer.style.setProperty('--parallax-y', `${-smoothY * CONFIG.PARALLAX_PIXELS * depth}px`);
    }
    rafId = requestAnimationFrame(render);
  }

  function start() {
    if (reducedMotion.matches || document.hidden || rafId) return;
    previousTime = 0;
    rafId = requestAnimationFrame(render);
  }

  function stop() {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = 0;
    previousTime = 0;
  }

  function onVisibilityChange() {
    if (document.hidden) stop();
    else start();
  }

  window.addEventListener('resize', resize, { passive: true });
  document.addEventListener('visibilitychange', onVisibilityChange);
  stage.addEventListener('pointermove', (event) => {
    if (reducedMotion.matches) return;
    const bounds = stage.getBoundingClientRect();
    pointerX = (event.clientX - bounds.left) / bounds.width * 2 - 1;
    pointerY = (event.clientY - bounds.top) / bounds.height * 2 - 1;
  }, { passive: true });
  stage.addEventListener('pointerleave', () => { pointerX = 0; pointerY = 0; }, { passive: true });
  resize();
  if (reducedMotion.matches) canvas.hidden = true;
  else start();
  reducedMotion.addEventListener?.('change', (event) => {
    if (event.matches) { stop(); canvas.hidden = true; }
    else { canvas.hidden = false; start(); }
  });
})();
