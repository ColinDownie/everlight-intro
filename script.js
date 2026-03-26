document.addEventListener("DOMContentLoaded", () => {
  const eye = document.getElementById("eye-container");
  const beam = document.getElementById("beam");
  const spiral = document.getElementById("beam-spiral");
  const glyphLayer = document.getElementById("glyph-layer");
  const identity = document.getElementById("identity");

  /* 1. Eye forms (galaxy condensing) */
  setTimeout(() => {
    eye.style.transition = "opacity 1200ms ease-out, transform 1200ms ease-out";
    eye.style.opacity = "1";
    eye.style.transform = "translate(-50%, -50%) scale(1)";
  }, 400);

  /* 2. Everlight BANG – beam + spiral flicker-signal */
  setTimeout(() => {
    beam.style.transition = "opacity 60ms linear";
    beam.style.opacity = "1";

    let flickers = 0;
    const maxFlickers = 18;

    const flicker = () => {
      if (flickers >= maxFlickers) {
        spiral.style.opacity = "1";
        spiral.style.transform = "translate(-50%, 40%) rotate(0deg)";
        return;
      }

      const dir = flickers % 2 === 0 ? 1 : -1;
      spiral.style.transition = "transform 35ms linear, opacity 35ms linear";
      spiral.style.transform = `translate(-50%, 40%) rotate(${dir * 35}deg)`;
      spiral.style.opacity = flickers % 3 === 0 ? "0.25" : "1";

      flickers++;
      setTimeout(flicker, 35);
    };

    flicker();
  }, 1400);

  /* 3. Glyph rain (Matrix-style cascade) */
  setTimeout(() => {
    spawnGlyphRain(glyphLayer);
  }, 1650);

  /* 4. Snap into crest / motto / name */
  setTimeout(() => {
    glyphLayer.style.transition = "opacity 300ms ease-out";
    glyphLayer.style.opacity = "0.15";

    identity.style.transition = "opacity 500ms ease-out, transform 500ms ease-out";
    identity.style.opacity = "1";
    identity.style.transform = "translateX(-50%) translateY(0)";
  }, 2700);
});

/* Glyph rain generator */
function spawnGlyphRain(layer) {
  const glyphChars = ["ᚱ", "ᚨ", "ᚾ", "ᚦ", "☿", "♄", "△", "☉", "✶", "ᚠ", "ᚢ", "ᚦ", "✧", "✦"];
  const width = window.innerWidth;
  const height = window.innerHeight;

  for (let i = 0; i < 70; i++) {
    const glyph = document.createElement("div");
    glyph.className = "glyph";
    glyph.textContent = glyphChars[Math.floor(Math.random() * glyphChars.length)];

    const x = Math.random() * width;
    const delay = Math.random() * 600;
    const duration = 2000 + Math.random() * 1500;

    glyph.style.left = `${x}px`;
    glyph.style.top = `-50px`;

    layer.appendChild(glyph);

    setTimeout(() => {
      glyph.style.transition = `transform ${duration}ms linear, opacity 600ms ease-out`;
      glyph.style.opacity = "1";
      glyph.style.transform = `translateY(${height + 100}px)`;
    }, delay);
  }
}
