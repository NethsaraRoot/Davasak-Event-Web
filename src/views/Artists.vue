<template>
  <section class="artists-section" id="artists">
    <div class="section-bg">
      <div class="bg-glow bg-glow--left"></div>
      <div class="bg-glow bg-glow--right"></div>
      <div class="bg-grid"></div>
    </div>

    <div class="top">
      <div class="top-badge">
        <span class="badge-dot"></span>
        LINEUP DAWASAK
        <span class="badge-dot"></span>
      </div>
      <h2 class="section-title">Featured Artists</h2>
      <p class="section-sub">Curated performers for an unforgettable night</p>
      <div class="title-underline">
        <span class="ul-line"></span>
        <span class="ul-diamond"></span>
        <span class="ul-line"></span>
      </div>
    </div>

    <!-- Artist grid -->
    <div class="artist-grid">
      <div
        class="card"
        v-for="(artist, index) in artists"
        :key="artist.name"
        :class="{ 'is-visible': visibleCards.has(index) }"
        :ref="
          (el) => {
            if (el) cardRefs[index] = el;
          }
        "
        @mouseenter="onEnter(index)"
        @mouseleave="onLeave(index)"
      >
        <!-- Fire arrow — shoots left to right across card on reveal -->
        <div class="fire-arrow">
          <div class="arrow-bolt"></div>
          <div class="arrow-head"></div>
          <div class="arrow-flame f1"></div>
          <div class="arrow-flame f2"></div>
          <div class="arrow-flame f3"></div>
        </div>

        <div class="card-watermark">0{{ index + 1 }}</div>

        <div class="card-img-wrap">
          <img :src="artist.image" :alt="artist.name" class="card-img" />
          <div class="color-reveal"></div>
          <div class="card-gradient"></div>
          <div class="play-btn">
            <div class="play-ring"></div>
            <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" /></svg>
          </div>
          <div class="card-overlay">
            <div class="genre-tag" v-if="artist.genre">{{ artist.genre }}</div>
          </div>
          <div class="scan-line"></div>
        </div>

        <div class="content">
          <div class="content-inner">
            <div class="name-row">
              <h3>{{ artist.name }}</h3>
              <span class="card-num">0{{ index + 1 }}</span>
            </div>
            <p class="role">{{ artist.role }}</p>
            <div class="name-bar"><span class="bar-fill"></span></div>
            <div class="card-footer">
              <!-- <div class="social-icons">
                <a class="soc" href="#" @click.prevent title="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                </a>
                <a class="soc" href="#" @click.prevent title="SoundCloud">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 14c0-1.1.9-2 2-2 .1-2.8 2.4-5 5.3-5 1.8 0 3.4.9 4.4 2.3C14.5 9.1 15.2 9 16 9c2.2 0 4 1.8 4 4s-1.8 4-4 4H4c-1.1 0-2-.9-2-2z"/></svg>
                </a>
                <a class="soc" href="#" @click.prevent title="Spotify">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M8 15c2.5-1 5.5-1 8 0M7 11.5c3-1.2 7-1.2 10 0M8.5 8c2.5-.8 5.5-.8 8 0"/></svg>
                </a>
              </div> -->
              <div class="view-more">
                <span></span>
                <!-- <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg> -->
              </div>
            </div>
          </div>
        </div>

        <div class="card-glow-line"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import uvinduImg from "../assets/image/uvindu.jpeg";
import mihiranImg from "../assets/image/mihiran.jpg";
import pamithImg from "../assets/image/mandiv.jpeg";
import raminduImg from "../assets/image/Ramindu.jpeg";

const artists = [
  { name: "Lakshitha Mihiran", role: "", genre: "Musician", image: mihiranImg },
  { name: "Uvindu Ayshcharya", role: "", genre: "Musician", image: uvinduImg },
  { name: "Pamith Mandiv", role: "", genre: "Musician", image: pamithImg },
  {
    name: "Ramidu Yashmintha",
    role: "",
    genre: "Musician",
    image: raminduImg,
  },
];

const cardRefs = ref([]);
const visibleCards = ref(new Set());
let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const idx = cardRefs.value.indexOf(entry.target);
        if (idx === -1) return;
        if (entry.isIntersecting) {
          visibleCards.value = new Set([...visibleCards.value, idx]);
        }
      });
    },
    { threshold: 0.2 },
  );
  cardRefs.value.forEach((el) => {
    if (el) observer.observe(el);
  });
});

onBeforeUnmount(() => observer?.disconnect());

function onEnter(i) {}
function onLeave(i) {}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap");

:root {
  --g1: #fffbe6;
  --g2: #f5d97a;
  --g3: #c9a227;
  --g4: #8b6914;
  --gold: linear-gradient(
    135deg,
    #fffbe6 0%,
    #f5d97a 28%,
    #c9a227 62%,
    #8b6914 100%
  );
  --glow: rgba(197, 157, 39, 0.38);
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ── SECTION ── */
.artists-section {
  position: relative;
  background: #080808;
  color: #fff;
  padding: 100px 5% 120px;
  font-family: "DM Sans", sans-serif;
  overflow: hidden;
}

/* ── BG ── */
.section-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
.bg-glow {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.07;
}
.bg-glow--left {
  top: -100px;
  left: -100px;
  background: #c9a227;
}
.bg-glow--right {
  bottom: -100px;
  right: -100px;
  background: #c9a227;
}
.bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(197, 157, 39, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(197, 157, 39, 0.04) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* ── TOP ── */
.top {
  text-align: center;
  margin-bottom: 72px;
  position: relative;
  z-index: 1;
}
.top-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.32em;
  color: var(--g3);
  border: 1px solid rgba(197, 157, 39, 0.3);
  padding: 7px 20px;
  border-radius: 99px;
  margin-bottom: 20px;
  background: rgba(197, 157, 39, 0.06);
  backdrop-filter: blur(8px);
}
.badge-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--g3);
  box-shadow: 0 0 6px var(--g3);
  animation: dotBlink 1.6s ease-in-out infinite alternate;
}
@keyframes dotBlink {
  from {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
}
.section-title {
  font-family: "Bebas Neue", sans-serif;
  font-size: clamp(3rem, 7vw, 5.5rem);
  letter-spacing: 0.04em;
  line-height: 1;
  background: linear-gradient(
    135deg,
    #fffbe6 0%,
    #f5d97a 28%,
    #c9a227 62%,
    #8b6914 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 12px;
}
.section-sub {
  color: rgba(255, 255, 255, 0.38);
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 300;
  margin-bottom: 24px;
}
.title-underline {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.ul-line {
  height: 1px;
  width: 60px;
  background: linear-gradient(90deg, transparent, var(--g3));
}
.ul-line:last-child {
  background: linear-gradient(90deg, var(--g3), transparent);
}
.ul-diamond {
  width: 7px;
  height: 7px;
  background: var(--g2);
  transform: rotate(45deg);
  box-shadow: 0 0 10px rgba(197, 157, 39, 0.7);
}

/* ── GRID — same as original 4 columns ── */
.artist-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  position: relative;
  z-index: 1;
}

/* ── CARD ── */
.card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  background: #0f0f0f;
  border: 1px solid #1c1c1c;

  /* start hidden, slightly below */
  opacity: 0;
  transform: translateY(50px);
  transition:
    opacity 0.6s ease,
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.55s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.4s ease;
  will-change: transform, opacity;
  transform-origin: bottom center;
}

/* stagger each card */
.card:nth-child(1) {
  transition-delay: 0s;
}
.card:nth-child(2) {
  transition-delay: 0.12s;
}
.card:nth-child(3) {
  transition-delay: 0.24s;
}
.card:nth-child(4) {
  transition-delay: 0.36s;
}

/* revealed */
.card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.card:hover {
  transform: translateY(-28px) scale(1.06);
  box-shadow:
    0 40px 80px rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(197, 157, 39, 0.5),
    0 0 60px rgba(197, 157, 39, 0.18),
    0 0 120px rgba(197, 157, 39, 0.08);
  border-color: rgba(197, 157, 39, 0.55);
  z-index: 10;
}
.card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(197, 157, 39, 0.08) 0%,
    transparent 55%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 2;
  pointer-events: none;
  border-radius: 20px;
}
.card:hover::before {
  opacity: 1;
}

/* ── FIRE ARROW — sweeps left→right across card on reveal ── */
.fire-arrow {
  position: absolute;
  top: 42%;
  left: 0;
  right: 0;
  height: 6px;
  z-index: 20;
  pointer-events: none;
  overflow: visible;
}

/* the glowing bolt line */
.arrow-bolt {
  position: absolute;
  top: 50%;
  left: 0;
  height: 2px;
  width: 0;
  transform: translateY(-50%);
  background: linear-gradient(
    90deg,
    transparent 0%,
    #ff6a00 30%,
    #f5d97a 70%,
    #fff8c0 100%
  );
  border-radius: 2px;
  box-shadow:
    0 0 8px #ff6a00,
    0 0 20px #f5d97a,
    0 0 40px rgba(245, 217, 122, 0.4);
  opacity: 0;
}
.card.is-visible .arrow-bolt {
  animation: boltShoot 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: 0.2s;
}
@keyframes boltShoot {
  0% {
    width: 0;
    left: 0;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  60% {
    width: 100%;
    left: 0;
    opacity: 1;
  }
  100% {
    width: 0;
    left: 100%;
    opacity: 0;
  }
}

/* arrow head — travels with bolt */
.arrow-head {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 14px solid #ffe066;
  filter: drop-shadow(0 0 6px #ff6a00) drop-shadow(0 0 12px #f5d97a);
  opacity: 0;
}
.card.is-visible .arrow-head {
  animation: headShoot 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: 0.2s;
}
@keyframes headShoot {
  0% {
    left: 0;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    left: 100%;
    opacity: 0;
  }
}

/* flame particles that trail behind */
.arrow-flame {
  position: absolute;
  top: 50%;
  border-radius: 50% 50% 20% 50%;
  pointer-events: none;
  opacity: 0;
  filter: blur(1.5px);
}
.f1 {
  width: 16px;
  height: 20px;
  left: 0;
  background: radial-gradient(
    ellipse at 60% 80%,
    #ff4500,
    #ffcc00,
    transparent
  );
}
.f2 {
  width: 11px;
  height: 14px;
  left: 0;
  background: radial-gradient(
    ellipse at 40% 80%,
    #ff3d00,
    #ffa500,
    transparent
  );
}
.f3 {
  width: 13px;
  height: 17px;
  left: 0;
  background: radial-gradient(
    ellipse at 50% 80%,
    #ff6a00,
    #ffe066,
    transparent
  );
}

.card.is-visible .f1 {
  animation:
    flameShoot 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards,
    flameDance 0.25s ease-in-out infinite alternate;
  animation-delay: 0.18s, 0.18s;
}
.card.is-visible .f2 {
  animation:
    flameShoot 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards,
    flameDance 0.2s ease-in-out infinite alternate-reverse;
  animation-delay: 0.22s, 0.22s;
}
.card.is-visible .f3 {
  animation:
    flameShoot 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards,
    flameDance 0.3s ease-in-out infinite alternate;
  animation-delay: 0.25s, 0.25s;
}

@keyframes flameShoot {
  0% {
    left: 0;
    opacity: 0;
    transform: translateY(-60%) rotate(-10deg);
  }
  15% {
    opacity: 1;
  }
  85% {
    opacity: 0.8;
  }
  100% {
    left: 95%;
    opacity: 0;
    transform: translateY(-60%) rotate(10deg);
  }
}
@keyframes flameDance {
  from {
    transform: translateY(-55%) rotate(-12deg) scaleY(1);
  }
  to {
    transform: translateY(-75%) rotate(12deg) scaleY(1.3);
  }
}

/* ── WATERMARK ── */
.card-watermark {
  position: absolute;
  top: 14px;
  right: 18px;
  z-index: 6;
  font-family: "Bebas Neue", sans-serif;
  font-size: 5rem;
  line-height: 1;
  color: rgba(255, 255, 255, 0.03);
  pointer-events: none;
  user-select: none;
  transition:
    color 0.4s,
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.card:hover .card-watermark {
  color: rgba(197, 157, 39, 0.07);
  transform: scale(1.1) translateY(-4px);
}

/* ── IMAGE WRAP ── */
.card-img-wrap {
  position: relative;
  overflow: hidden;
  height: 340px;
}
.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition:
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.6s ease;
  filter: grayscale(100%) brightness(0.85) contrast(1.1);
  will-change: transform, filter;
}
.card:hover .card-img {
  transform: scale(1.1);
  filter: grayscale(0%) brightness(0.82) saturate(1.15) contrast(1.05);
}
.color-reveal {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: rgba(197, 157, 39, 0.12);
  mix-blend-mode: color;
  opacity: 1;
  transition: opacity 0.6s ease;
  pointer-events: none;
}
.card:hover .color-reveal {
  opacity: 0;
}
.card-gradient {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.82) 0%,
    rgba(0, 0, 0, 0.35) 45%,
    transparent 70%
  );
  pointer-events: none;
  transition: background 0.4s ease;
}
.card:hover .card-gradient {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.88) 0%,
    rgba(0, 0, 0, 0.4) 40%,
    rgba(0, 0, 0, 0.08) 70%
  );
}

/* ── PLAY BTN ── */
/* .play-btn {
  display: none;
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%,-50%) scale(.65);
  width: 60px; height: 60px;
  background: linear-gradient(135deg,#fffbe6,#c9a227);
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity .35s ease, transform .45s cubic-bezier(.34,1.56,.64,1); z-index: 4;
} */
/* .play-ring {
  position: absolute; inset: -5px; border-radius: 50%;
  border: 1.5px solid rgba(197,157,39,.4);
  animation: ringPulse 2s ease-in-out infinite;
}
@keyframes ringPulse { 0%,100%{transform:scale(1);opacity:.5} 50%{transform:scale(1.2);opacity:0} }
.play-btn svg { width: 20px; height: 20px; fill: #000; margin-left: 3px; }
.card:hover .play-btn { opacity: 1; transform: translate(-50%,-50%) scale(1); } */

/* ── GENRE TAG ── */
.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px 18px 18px;
  z-index: 3;
}
.genre-tag {
  display: inline-block;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: var(--g3);
  background: rgba(197, 157, 39, 0.1);
  border: 1px solid rgba(197, 157, 39, 0.3);
  padding: 4px 12px;
  border-radius: 99px;
  text-transform: uppercase;
  backdrop-filter: blur(6px);
  transition:
    background 0.3s,
    border-color 0.3s,
    color 0.3s;
}
.card:hover .genre-tag {
  background: rgba(197, 157, 39, 0.2);
  border-color: rgba(197, 157, 39, 0.6);
  color: var(--g1);
}

/* ── SCAN LINE ── */
.scan-line {
  position: absolute;
  top: -100%;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(197, 157, 39, 0.8),
    transparent
  );
  z-index: 5;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s;
}
.card:hover .scan-line {
  opacity: 1;
  animation: scanDown 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
@keyframes scanDown {
  from {
    top: -2%;
    opacity: 0.9;
  }
  to {
    top: 102%;
    opacity: 0;
  }
}

/* ── CONTENT ── */
.content {
  background: linear-gradient(180deg, #0f0f0f 0%, #0a0a0a 100%);
  position: relative;
}
.content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(197, 157, 39, 0.35),
    transparent
  );
  transition: background 0.4s;
}
.card:hover .content::before {
  background: linear-gradient(
    90deg,
    transparent,
    rgba(197, 157, 39, 0.7),
    transparent
  );
}
.content-inner {
  padding: 18px 20px 20px;
}
.name-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 2px;
}
.content h3 {
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.55rem;
  letter-spacing: 0.08em;
  line-height: 1.1;
  background: linear-gradient(135deg, #f5d376, #c9a227);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: filter 0.3s;
}
.card:hover .content h3 {
  filter: drop-shadow(0 0 10px rgba(197, 157, 39, 0.6));
}
.card-num {
  font-family: "Bebas Neue", sans-serif;
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  color: rgba(197, 157, 39, 0.2);
  transition: color 0.3s;
  line-height: 1.6;
}
.card:hover .card-num {
  color: rgba(197, 157, 39, 0.55);
}
.role {
  color: rgba(255, 255, 255, 0.35);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 12px;
  transition: color 0.3s;
}
.card:hover .role {
  color: rgba(255, 255, 255, 0.55);
}
.name-bar {
  height: 1px;
  width: 100%;
  background: rgba(255, 255, 255, 0.06);
  margin-bottom: 14px;
  overflow: hidden;
  border-radius: 1px;
}
.bar-fill {
  display: block;
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, var(--g4), var(--g2));
  transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
.card:hover .bar-fill {
  width: 100%;
}
.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.social-icons {
  display: flex;
  gap: 7px;
}
.soc {
  width: 30px;
  height: 30px;
  border: 1px solid #222;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #444;
  transition:
    border-color 0.3s,
    color 0.3s,
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  text-decoration: none;
}
.soc svg {
  width: 13px;
  height: 13px;
}
.card:hover .soc {
  border-color: rgba(197, 157, 39, 0.4);
  color: var(--g3);
}
.card:hover .soc:hover {
  transform: scale(1.18);
  border-color: rgba(197, 157, 39, 0.7);
  color: var(--g1);
}
.view-more {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.2);
  transition:
    color 0.3s,
    gap 0.3s;
  cursor: pointer;
}
.view-more svg {
  width: 13px;
  height: 13px;
  transition: transform 0.3s;
}
.card:hover .view-more {
  color: var(--g3);
  gap: 8px;
}
.card:hover .view-more svg {
  transform: translateX(3px);
}

/* ── BOTTOM GLOW LINE ── */
.card-glow-line {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--g3), transparent);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
}
.card:hover .card-glow-line {
  transform: scaleX(1);
}

/* ── RESPONSIVE ── */
@media (max-width: 1100px) {
  .artist-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }
}
@media (max-width: 600px) {
  .artist-grid {
    grid-template-columns: 1fr;
  }
  .section-title {
    font-size: clamp(2.6rem, 12vw, 3.5rem);
  }
  .artists-section {
    padding: 72px 4% 80px;
  }
}
</style>
