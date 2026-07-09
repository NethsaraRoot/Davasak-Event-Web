<template>
  <Transition name="screen-fade">
    <div
      v-if="visible"
      class="enter-screen"
      @click="handleEnter"
    >
      <div class="bg-radial"></div>
      <div class="stars" ref="starsRef"></div>

      <!-- Burst effect container (grand opening reveal) -->
      <div class="burst-layer" ref="burstRef" aria-hidden="true"></div>
      <div v-if="bursting" class="flash-overlay"></div>
      <div v-if="bursting" class="flash-overlay flash-overlay--second"></div>
      <div v-if="bursting" class="grand-title" aria-hidden="true">
        <span class="grand-title-line1">✦ GRAND OPENING ✦</span>
        <span class="grand-title-line2">SLTC</span>
        <span class="grand-title-line3">DAWASAK FILM IN CONCERT</span>
      </div>

      <div class="rune-h rune-h--top">
        <div class="rune-h-line"></div>
        <span class="rune-h-symbol">✦ DAWASAK ✦</span>
        <div class="rune-h-line"></div>
      </div>

      <div class="rune-corner rc-tl" aria-hidden="true">
        <svg viewBox="0 0 60 60" fill="none">
          <path d="M4 4 L28 4 L4 28" stroke="rgba(197,157,39,.5)" stroke-width="1.2" stroke-linecap="round"/>
          <path d="M4 4 L4 12" stroke="rgba(197,157,39,.8)" stroke-width="1.8" stroke-linecap="round"/>
          <path d="M4 4 L12 4" stroke="rgba(197,157,39,.8)" stroke-width="1.8" stroke-linecap="round"/>
          <circle cx="20" cy="20" r="3" fill="none" stroke="rgba(197,157,39,.3)" stroke-width=".8"/>
        </svg>
      </div>
      <div class="rune-corner rc-tr" aria-hidden="true">
        <svg viewBox="0 0 60 60" fill="none">
          <path d="M4 4 L28 4 L4 28" stroke="rgba(197,157,39,.5)" stroke-width="1.2" stroke-linecap="round"/>
          <path d="M4 4 L4 12" stroke="rgba(197,157,39,.8)" stroke-width="1.8" stroke-linecap="round"/>
          <path d="M4 4 L12 4" stroke="rgba(197,157,39,.8)" stroke-width="1.8" stroke-linecap="round"/>
          <circle cx="20" cy="20" r="3" fill="none" stroke="rgba(197,157,39,.3)" stroke-width=".8"/>
        </svg>
      </div>
      <div class="rune-corner rc-bl" aria-hidden="true">
        <svg viewBox="0 0 60 60" fill="none">
          <path d="M4 4 L28 4 L4 28" stroke="rgba(197,157,39,.5)" stroke-width="1.2" stroke-linecap="round"/>
          <path d="M4 4 L4 12" stroke="rgba(197,157,39,.8)" stroke-width="1.8" stroke-linecap="round"/>
          <path d="M4 4 L12 4" stroke="rgba(197,157,39,.8)" stroke-width="1.8" stroke-linecap="round"/>
          <circle cx="20" cy="20" r="3" fill="none" stroke="rgba(197,157,39,.3)" stroke-width=".8"/>
        </svg>
      </div>
      <div class="rune-corner rc-br" aria-hidden="true">
        <svg viewBox="0 0 60 60" fill="none">
          <path d="M4 4 L28 4 L4 28" stroke="rgba(197,157,39,.5)" stroke-width="1.2" stroke-linecap="round"/>
          <path d="M4 4 L4 12" stroke="rgba(197,157,39,.8)" stroke-width="1.8" stroke-linecap="round"/>
          <path d="M4 4 L12 4" stroke="rgba(197,157,39,.8)" stroke-width="1.8" stroke-linecap="round"/>
          <circle cx="20" cy="20" r="3" fill="none" stroke="rgba(197,157,39,.3)" stroke-width=".8"/>
        </svg>
      </div>

      <div class="enter-content" :class="{ 'is-leaving': leaving }">

        <div class="circle-wrap" aria-hidden="true">
          <svg class="magic-ring magic-ring--outer" viewBox="0 0 140 140" fill="none">
            <circle cx="70" cy="70" r="66" stroke="rgba(197,157,39,.25)" stroke-width=".8" stroke-dasharray="4 6"/>
            <circle cx="70" cy="70" r="58" stroke="rgba(197,157,39,.15)" stroke-width=".5"/>
            <polygon points="70,20 95,62 45,62" fill="none" stroke="rgba(197,157,39,.3)" stroke-width=".8"/>
            <polygon points="70,120 95,78 45,78" fill="none" stroke="rgba(197,157,39,.3)" stroke-width=".8"/>
            <g stroke="rgba(197,157,39,.5)" stroke-width="1.2" stroke-linecap="round">
              <line x1="70" y1="4"   x2="70"  y2="14"/>
              <line x1="70" y1="126" x2="70"  y2="136"/>
              <line x1="4"  y1="70"  x2="14"  y2="70"/>
              <line x1="126" y1="70" x2="136" y2="70"/>
              <line x1="23"  y1="23"  x2="30"  y2="30"/>
              <line x1="117" y1="23"  x2="110" y2="30"/>
              <line x1="23"  y1="117" x2="30"  y2="110"/>
              <line x1="117" y1="117" x2="110" y2="110"/>
            </g>
            <rect x="67.5" y="1.5"   width="5" height="5" transform="rotate(45 70 4)"   fill="rgba(197,157,39,.6)"/>
            <rect x="67.5" y="129.5" width="5" height="5" transform="rotate(45 70 132)" fill="rgba(197,157,39,.6)"/>
            <rect x="1.5"  y="67.5"  width="5" height="5" transform="rotate(45 4 70)"   fill="rgba(197,157,39,.6)"/>
            <rect x="129.5" y="67.5" width="5" height="5" transform="rotate(45 132 70)" fill="rgba(197,157,39,.6)"/>
          </svg>

          <svg class="magic-ring magic-ring--inner" viewBox="0 0 90 90" fill="none">
            <circle cx="45" cy="45" r="42" stroke="rgba(197,157,39,.2)" stroke-width=".6" stroke-dasharray="2 5"/>
            <circle cx="45" cy="45" r="34" stroke="rgba(197,157,39,.12)" stroke-width=".4"/>
          </svg>

          <!-- ← Logo image -->
          <div class="center-icon">
            <img src="@/assets/logo.png" alt="logo" class="center-logo" />
          </div>
        </div>

        <h1 class="enter-title">
          A Night Full of<br />Music &amp; Lights
        </h1>

        <div class="enter-line" aria-hidden="true">
          <div class="line-seg"></div>
          <span class="line-rune">ᚱ</span>
          <div class="line-diamond"></div>
          <span class="line-rune">ᚨ</span>
          <div class="line-seg"></div>
        </div>

        <p class="enter-sub">The Grand Concert Experience</p>

        <div class="enter-line" aria-hidden="true">
          <div class="line-seg"></div>
          <span class="line-rune">ᛗ</span>
          <div class="line-diamond"></div>
          <span class="line-rune">ᚢ</span>
          <div class="line-seg"></div>
        </div>

        <p class="enter-text">✦ &nbsp; Touch to Enter &nbsp; ✦</p>

      </div>

      <div class="rune-h rune-h--bot">
        <div class="rune-h-line"></div>
        <span class="rune-h-symbol">✦ MUSICA LUMEN ✦</span>
        <div class="rune-h-line"></div>
      </div>

    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const emit = defineEmits(['entered'])

const visible  = ref(true)
const leaving  = ref(false)
const bursting = ref(false)
const starsRef = ref(null)
const burstRef = ref(null)

function spawnStars() {
  const container = starsRef.value
  if (!container) return
  for (let i = 0; i < 60; i++) {
    const s = document.createElement('div')
    s.className = 'star'
    const size = Math.random() * 2 + 0.5
    s.style.cssText = `
      left:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      width:${size}px; height:${size}px;
      --d:${2 + Math.random() * 4}s;
      --delay:${Math.random() * 4}s;
      --op:${0.3 + Math.random() * 0.7};
    `
    container.appendChild(s)
  }
}

// ── Grand opening burst effect ──
// Big multi-layer explosion: shockwaves, light rays, sparks, confetti, screen shake.
const confettiColors = ['#f5d97a', '#fffbe6', '#c9a227', '#e8c15e', '#ffffff', '#8b6914']

function spawnBurst(x, y) {
  const container = burstRef.value
  if (!container) return

  // Shockwave rings — bigger, more of them
  for (let r = 0; r < 5; r++) {
    const ring = document.createElement('div')
    ring.className = 'burst-ring'
    ring.style.cssText = `
      left:${x}px; top:${y}px;
      --delay:${r * 0.1}s;
    `
    container.appendChild(ring)
  }

  // Second wave of rings, slower and larger
  for (let r = 0; r < 3; r++) {
    const ring = document.createElement('div')
    ring.className = 'burst-ring burst-ring--slow'
    ring.style.cssText = `
      left:${x}px; top:${y}px;
      --delay:${0.25 + r * 0.18}s;
    `
    container.appendChild(ring)
  }

  // Radiating light rays — doubled
  const rayCount = 24
  for (let i = 0; i < rayCount; i++) {
    const ray = document.createElement('div')
    ray.className = 'burst-ray'
    const angle = (360 / rayCount) * i
    ray.style.cssText = `
      left:${x}px; top:${y}px;
      --angle:${angle}deg;
      --delay:${Math.random() * 0.1}s;
    `
    container.appendChild(ray)
  }

  // Golden particle sparks flying outward — much more, wider spread
  const particleCount = 220
  for (let i = 0; i < particleCount; i++) {
    const p = document.createElement('div')
    p.className = 'burst-particle'
    const angle = Math.random() * Math.PI * 2
    const dist = 150 + Math.random() * 520
    const dx = Math.cos(angle) * dist
    const dy = Math.sin(angle) * dist
    const size = Math.random() * 5 + 2
    p.style.cssText = `
      left:${x}px; top:${y}px;
      width:${size}px; height:${size}px;
      --dx:${dx}px; --dy:${dy}px;
      --dur:${0.9 + Math.random() * 0.9}s;
      --delay:${Math.random() * 0.25}s;
    `
    container.appendChild(p)
  }

  // Confetti pieces — fall from the top across the whole screen
  const confettiCount = 90
  for (let i = 0; i < confettiCount; i++) {
    const c = document.createElement('div')
    c.className = 'confetti-piece'
    const left = Math.random() * 100
    const color = confettiColors[Math.floor(Math.random() * confettiColors.length)]
    const size = 6 + Math.random() * 8
    const rotate = Math.random() * 360
    c.style.cssText = `
      left:${left}%;
      background:${color};
      width:${size}px; height:${size * (Math.random() > 0.5 ? 1.6 : 1)}px;
      --rot:${rotate}deg;
      --sway:${(Math.random() - 0.5) * 160}px;
      --dur:${2.2 + Math.random() * 1.8}s;
      --delay:${Math.random() * 0.6}s;
    `
    container.appendChild(c)
  }

  // Golden fireworks bursting at random points across the sky
  const fireworkCount = 6
  for (let i = 0; i < fireworkCount; i++) {
    const fx = 15 + Math.random() * 70
    const fy = 10 + Math.random() * 45
    const delay = 0.15 + Math.random() * 0.9
    for (let s = 0; s < 26; s++) {
      const spark = document.createElement('div')
      spark.className = 'firework-spark'
      const angle = (360 / 26) * s + Math.random() * 10
      const rad = (angle * Math.PI) / 180
      const dist = 60 + Math.random() * 60
      spark.style.cssText = `
        left:${fx}%; top:${fy}%;
        --dx:${Math.cos(rad) * dist}px; --dy:${Math.sin(rad) * dist}px;
        --delay:${delay}s;
      `
      container.appendChild(spark)
    }
  }
}

function handleEnter(e) {
  if (leaving.value) return
  leaving.value = true
  bursting.value = true

  const x = e?.clientX ?? window.innerWidth / 2
  const y = e?.clientY ?? window.innerHeight / 2
  spawnBurst(x, y)

  // Screen shake for extra impact
  const screenEl = document.querySelector('.enter-screen')
  if (screenEl) {
    screenEl.classList.add('screen-shake')
    setTimeout(() => screenEl.classList.remove('screen-shake'), 600)
  }

  setTimeout(() => {
    visible.value = false
    emit('entered')
  }, 4500)
}

function onKeydown(e) {
  if (e.key === 'Enter' || e.key === ' ') handleEnter()
}

onMounted(() => {
  spawnStars()
  window.addEventListener('keydown', onKeydown)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;600;700&display=swap');

:root {
  --black: #000000;
  --g1: #fffbe6;
  --g2: #f5d97a;
  --g3: #c9a227;
  --g4: #8b6914;
  --gold: linear-gradient(135deg, #fffbe6 0%, #f5d97a 28%, #c9a227 62%, #8b6914 100%);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.enter-screen {
  position: fixed; inset: 0; z-index: 99999;
  background: var(--black);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; overflow: hidden;
}

.screen-fade-enter-active { transition: opacity .5s ease; }
.screen-fade-leave-active  { transition: opacity .7s ease; }
.screen-fade-enter-from,
.screen-fade-leave-to      { opacity: 0; }

.bg-radial {
  position: absolute; inset: 0; pointer-events: none;
  background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(197,157,39,.13) 0%, transparent 70%);
  animation: breathe 4s ease-in-out infinite alternate;
}
@keyframes breathe {
  from { opacity: .6; transform: scale(1);    }
  to   { opacity: 1;  transform: scale(1.14); }
}

.stars { position: absolute; inset: 0; pointer-events: none; }
:deep(.star) {
  position: absolute; border-radius: 50%; background: #f5d97a;
  animation: twinkle var(--d) ease-in-out infinite alternate var(--delay);
}
@keyframes twinkle {
  from { opacity: 0;   transform: scale(.5); }
  to   { opacity: var(--op); transform: scale(1); }
}

/* ── Grand opening burst ── */
.burst-layer {
  position: absolute; inset: 0; pointer-events: none; z-index: 50;
  overflow: hidden;
}

.flash-overlay {
  position: absolute; inset: 0; z-index: 40; pointer-events: none;
  background: radial-gradient(circle, rgba(255,251,230,.9) 0%, rgba(197,157,39,.4) 35%, transparent 72%);
  animation: flashPulse 1.1s ease-out forwards;
}
.flash-overlay--second {
  animation-delay: .35s;
  animation-duration: 1.4s;
  background: radial-gradient(circle, rgba(255,255,255,.6) 0%, rgba(245,217,122,.25) 40%, transparent 75%);
}
@keyframes flashPulse {
  0%   { opacity: 0; }
  12%  { opacity: 1; }
  100% { opacity: 0; }
}

.grand-title {
  position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
  z-index: 60; pointer-events: none;
  display: flex; flex-direction: column; align-items: center; gap: 14px;
  width: 90%;
  animation: titlePop 4.5s ease-out forwards;
  opacity: 0;
}
@keyframes titlePop {
  0%   { opacity: 0; transform: translate(-50%, -50%) scale(.6); }
  8%   { opacity: 1; transform: translate(-50%, -50%) scale(1.08); }
  14%  { transform: translate(-50%, -50%) scale(1); }
  88%  { opacity: 1; }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(1.04); }
}
.grand-title-line1 {
  font-family: 'Cinzel', serif;
  font-size: clamp(.85rem, 2vw, 1.2rem);
  font-weight: 600; letter-spacing: .5em; text-transform: uppercase;
  color: rgba(245,217,122,.9);
  text-shadow: 0 0 14px rgba(197,157,39,.7);
}
.grand-title-line2 {
  font-family: 'Cinzel Decorative', serif;
  font-size: clamp(3rem, 11vw, 7rem);
  font-weight: 900; letter-spacing: .18em; text-transform: uppercase;
  background: linear-gradient(135deg, #fffbe6 0%, #f5d97a 25%, #c9a227 55%, #f5d97a 80%, #fffbe6 100%);
  background-size: 220% auto;
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  animation: shimmerText 4s linear infinite;
  filter: drop-shadow(0 0 30px rgba(197,157,39,.7));
  line-height: 1.1;
}
.grand-title-line3 {
  font-family: 'Cinzel Decorative', serif;
  font-size: clamp(1.1rem, 3.6vw, 2.2rem);
  font-weight: 700; letter-spacing: .16em; text-transform: uppercase;
  color: #fffbe6;
  text-shadow: 0 0 18px rgba(197,157,39,.9), 0 0 42px rgba(197,157,39,.6);
  text-align: center;
}

.screen-shake { animation: shakeIt .55s ease-in-out; }
@keyframes shakeIt {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-6px, 4px); }
  20% { transform: translate(6px, -4px); }
  30% { transform: translate(-8px, -2px); }
  40% { transform: translate(8px, 3px); }
  50% { transform: translate(-5px, 3px); }
  60% { transform: translate(5px, -3px); }
  70% { transform: translate(-4px, 2px); }
  80% { transform: translate(4px, -2px); }
  90% { transform: translate(-2px, 1px); }
}

:deep(.burst-ring) {
  position: absolute;
  width: 10px; height: 10px;
  margin-left: -5px; margin-top: -5px;
  border-radius: 50%;
  border: 2px solid rgba(245, 217, 122, .9);
  box-shadow: 0 0 18px rgba(197,157,39,.8);
  animation: ringExpand 1.1s var(--delay) ease-out forwards;
  opacity: 0;
}
:deep(.burst-ring--slow) {
  border-color: rgba(255, 251, 230, .7);
  animation-name: ringExpandSlow;
  animation-duration: 1.6s;
}
@keyframes ringExpand {
  0%   { width: 10px; height: 10px; margin-left: -5px; margin-top: -5px; opacity: 1; border-width: 3px; }
  100% { width: 720px; height: 720px; margin-left: -360px; margin-top: -360px; opacity: 0; border-width: .5px; }
}
@keyframes ringExpandSlow {
  0%   { width: 10px; height: 10px; margin-left: -5px; margin-top: -5px; opacity: .9; border-width: 4px; }
  100% { width: 1100px; height: 1100px; margin-left: -550px; margin-top: -550px; opacity: 0; border-width: .5px; }
}

:deep(.burst-ray) {
  position: absolute;
  width: 4px; height: 0;
  background: linear-gradient(to top, rgba(245,217,122,0) 0%, rgba(255,251,230,.95) 60%, rgba(197,157,39,.9) 100%);
  transform-origin: bottom center;
  transform: translate(-50%, -100%) rotate(var(--angle));
  animation: rayShoot .7s var(--delay) ease-out forwards;
  opacity: 0;
}
@keyframes rayShoot {
  0%   { height: 0;   opacity: 1; }
  70%  { height: 340px; opacity: 1; }
  100% { height: 400px; opacity: 0; }
}

:deep(.burst-particle) {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, #fffbe6 0%, #f5d97a 55%, #c9a227 100%);
  box-shadow: 0 0 8px rgba(197,157,39,.9);
  margin-left: -2px; margin-top: -2px;
  animation: particleFly var(--dur) var(--delay) cubic-bezier(.2,.7,.3,1) forwards;
  opacity: 0;
}
@keyframes particleFly {
  0%   { transform: translate(0, 0) scale(1);   opacity: 1; }
  100% { transform: translate(var(--dx), var(--dy)) scale(.2); opacity: 0; }
}

:deep(.confetti-piece) {
  position: absolute;
  top: -20px;
  border-radius: 1px;
  animation: confettiFall var(--dur) var(--delay) ease-in forwards;
  opacity: 0;
}
@keyframes confettiFall {
  0%   { opacity: 1; transform: translate(0, 0) rotate(0deg); }
  100% { opacity: .9; transform: translate(var(--sway), 780px) rotate(var(--rot)); }
}

:deep(.firework-spark) {
  position: absolute;
  width: 4px; height: 4px;
  border-radius: 50%;
  background: radial-gradient(circle, #fffbe6 0%, #f5d97a 60%, #c9a227 100%);
  box-shadow: 0 0 10px rgba(245,217,122,.9);
  margin-left: -2px; margin-top: -2px;
  animation: sparkBurst 1s var(--delay) ease-out forwards;
  opacity: 0;
}
@keyframes sparkBurst {
  0%   { transform: translate(0, 0) scale(1);   opacity: 1; }
  70%  { opacity: 1; }
  100% { transform: translate(var(--dx), var(--dy)) scale(.3); opacity: 0; }
}

.rune-h {
  position: absolute; left: 50%; transform: translateX(-50%);
  display: flex; align-items: center; gap: 14px;
  width: 80%; pointer-events: none;
}
.rune-h--top { top: 26px;    }
.rune-h--bot { bottom: 26px; }
.rune-h-line {
  flex: 1; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(197,157,39,.45), transparent);
}
.rune-h-symbol {
  font-family: 'Cinzel', serif;
  font-size: .6rem; letter-spacing: .3em;
  color: rgba(197,157,39,.55); white-space: nowrap;
}

.rune-corner {
  position: absolute; width: 62px; height: 62px; pointer-events: none;
}
.rc-tl { top: 18px;    left: 18px;  }
.rc-tr { top: 18px;    right: 18px; transform: scaleX(-1); }
.rc-bl { bottom: 18px; left: 18px;  transform: scaleY(-1); }
.rc-br { bottom: 18px; right: 18px; transform: scale(-1);  }

.enter-content {
  display: flex; flex-direction: column; align-items: center; gap: 22px;
  animation: float 4s ease-in-out infinite;
  position: relative; z-index: 2;
  transition: opacity .6s ease, transform .6s ease;
}
.enter-content.is-leaving {
  opacity: 0; transform: scale(1.06) translateY(-10px);
}
@keyframes float {
  0%, 100% { transform: translateY(0);     }
  50%       { transform: translateY(-13px); }
}

.circle-wrap {
  position: relative; width: 140px; height: 140px;
  display: flex; align-items: center; justify-content: center;
}
.magic-ring {
  position: absolute; top: 0; left: 0;
  filter: drop-shadow(0 0 10px rgba(197,157,39,.4));
}
.magic-ring--outer {
  width: 140px; height: 140px;
  animation: ringCW 20s linear infinite;
}
.magic-ring--inner {
  width: 90px; height: 90px;
  top: 25px; left: 25px;
  animation: ringCCW 12s linear infinite;
}
@keyframes ringCW  { to { transform: rotate( 360deg); } }
@keyframes ringCCW { to { transform: rotate(-360deg); } }

/* ── CENTER LOGO ── */
.center-icon {
  position: absolute; z-index: 3;
  display: flex; align-items: center; justify-content: center;
}
.center-logo {
  width: 204px;
  height: 74px;
  object-fit: contain;
  animation: iconPulse 2.5s ease-in-out infinite alternate;
  filter: drop-shadow(0 0 10px rgba(197,157,39,.6));
}
@keyframes iconPulse {
  from { filter: drop-shadow(0 0 6px rgba(197,157,39,.4));  transform: scale(1);    }
  to   { filter: drop-shadow(0 0 22px rgba(197,157,39,.9)); transform: scale(1.08); }
}

.enter-title {
  font-family: 'Cinzel Decorative', serif;
  font-size: clamp(1.5rem, 4vw, 2.6rem);
  font-weight: 900; text-align: center;
  line-height: 1.35; letter-spacing: .12em; text-transform: uppercase;
  background: linear-gradient(135deg, #fffbe6 0%, #f5d97a 25%, #c9a227 55%, #f5d97a 80%, #fffbe6 100%);
  background-size: 220% auto;
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  animation: shimmerText 5s linear infinite, float 4s ease-in-out infinite;
  filter: drop-shadow(0 0 20px rgba(197,157,39,.5));
}
@keyframes shimmerText {
  0%   { background-position: 0% center;   }
  100% { background-position: 220% center; }
}

.enter-line {
  display: flex; align-items: center; gap: 12px;
  width: clamp(260px, 55%, 380px);
}
.line-seg {
  flex: 1; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(197,157,39,.6), transparent);
}
.line-diamond {
  width: 8px; height: 8px;
  background: #c9a227; transform: rotate(45deg);
  box-shadow: 0 0 14px rgba(197,157,39,.85);
  animation: diamondPulse 2s ease-in-out infinite alternate;
}
@keyframes diamondPulse {
  from { transform: rotate(45deg) scale(.7); opacity: .6; }
  to   { transform: rotate(45deg) scale(1.2); opacity: 1; }
}
.line-rune {
  font-family: 'Cinzel', serif;
  font-size: .7rem; color: rgba(197,157,39,.5); letter-spacing: .08em;
}

.enter-sub {
  font-family: 'Cinzel', serif;
  font-size: clamp(.7rem, 1.6vw, .95rem);
  letter-spacing: .38em; text-align: center; text-transform: uppercase;
  color: rgba(197,157,39,.75);
  animation: glowPulse 2.8s ease-in-out infinite;
}
@keyframes glowPulse {
  0%,100% { opacity: .65; text-shadow: 0 0 8px  rgba(197,157,39,.2); }
  50%     { opacity: 1;   text-shadow: 0 0 18px rgba(197,157,39,.65), 0 0 36px rgba(197,157,39,.3); }
}

.enter-text {
  font-family: 'Cinzel', serif;
  font-size: .65rem; letter-spacing: .5em; text-transform: uppercase;
  color: rgba(255,255,255,.5);
  animation: blink 2.5s ease-in-out infinite;
  margin-top: 4px;
}
@keyframes blink {
  0%,100% { opacity: .45; text-shadow: none; }
  50%     { opacity: 1;   text-shadow: 0 0 12px rgba(197,157,39,.6), 0 0 26px rgba(197,157,39,.3); }
}

@media (max-width: 480px) {
  .rune-corner { width: 44px; height: 44px; }
  .circle-wrap { width: 110px; height: 110px; }
  .magic-ring--outer { width: 110px; height: 110px; }
  .magic-ring--inner { width: 70px; height: 70px; top: 20px; left: 20px; }
  .rune-h { width: 90%; }
  .enter-line { width: 85%; }
}
</style>