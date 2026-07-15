<template>
  <section class="hero" id="home">
    <!-- Background -->
    <div class="hero__bg">
      <img src="@/assets/bg2.png" alt="" class="hero__bg-img" />
      <div class="hero__bg-overlay" />
      <div class="hero__bg-vignette" />
    </div>

    <!-- Particles -->
    <div class="hero__particles" aria-hidden="true">
      <span
        v-for="n in 22"
        :key="n"
        class="particle"
        :style="particleStyle(n)"
      />
    </div>

    <!-- Streaks -->
    <div class="hero__streaks" aria-hidden="true">
      <div class="streak streak--1" />
      <div class="streak streak--2" />
      <div class="streak streak--3" />
    </div>

    <!-- Gold wave bottom -->
    <div class="hero__wave" aria-hidden="true">
      <svg
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wg" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#8a5c00" stop-opacity="0.2" />
            <stop offset="35%" stop-color="#f0c84a" stop-opacity="0.7" />
            <stop offset="65%" stop-color="#c9952a" stop-opacity="0.85" />
            <stop offset="100%" stop-color="#8a5c00" stop-opacity="0.2" />
          </linearGradient>
        </defs>
        <path
          d="M0,90 C200,160 400,20 600,90 C800,160 1000,30 1200,100 C1300,135 1380,115 1440,95 L1440,180 L0,180 Z"
          fill="url(#wg)"
          opacity="0.18"
        />
        <path
          d="M0,90 C200,160 400,20 600,90 C800,160 1000,30 1200,100 C1300,135 1380,115 1440,95"
          fill="none"
          stroke="url(#wg)"
          stroke-width="2.5"
          opacity="0.75"
        />
        <path
          d="M0,120 C300,60 700,160 1000,90 C1150,60 1320,140 1440,108"
          fill="none"
          stroke="url(#wg)"
          stroke-width="1.2"
          opacity="0.35"
        />
      </svg>
    </div>

    <!-- Content -->
    <div class="hero__content">
      <p class="hero__tagline" ref="el0">
        <span class="tline" />
        A Celebration of Music. A Story of Soul.
        <span class="tline tline--r" />
      </p>

      <div class="hero__title-block" ref="el1">
        <!-- Decorative camera & harp -->
        <div class="hero__deco" aria-hidden="true">
          <div class="deco-camera">
            <svg
              viewBox="0 0 90 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="cg"
                  x1="0"
                  y1="0"
                  x2="90"
                  y2="78"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stop-color="#fff8dc" />
                  <stop offset="50%" stop-color="#f0c84a" />
                  <stop offset="100%" stop-color="#8a5c00" />
                </linearGradient>
              </defs>
              <rect
                x="10"
                y="24"
                width="54"
                height="36"
                rx="7"
                fill="url(#cg)"
                opacity="0.88"
              />
              <rect
                x="4"
                y="33"
                width="9"
                height="20"
                rx="3.5"
                fill="url(#cg)"
                opacity="0.65"
              />
              <circle
                cx="37"
                cy="42"
                r="12"
                fill="#100900"
                stroke="url(#cg)"
                stroke-width="2.2"
              />
              <circle
                cx="37"
                cy="42"
                r="7.5"
                fill="none"
                stroke="url(#cg)"
                stroke-width="1.5"
                opacity="0.7"
              />
              <rect
                x="20"
                y="14"
                width="18"
                height="12"
                rx="3.5"
                fill="url(#cg)"
                opacity="0.55"
              />
              <circle
                cx="65"
                cy="30"
                r="8"
                fill="none"
                stroke="url(#cg)"
                stroke-width="1.5"
                opacity="0.65"
              />
              <circle cx="65" cy="30" r="2.5" fill="url(#cg)" opacity="0.75" />
              <rect
                x="64"
                y="24"
                width="3"
                height="2"
                rx="0.5"
                fill="url(#cg)"
                opacity="0.5"
              />
              <rect
                x="70"
                y="24"
                width="3"
                height="2"
                rx="0.5"
                fill="url(#cg)"
                opacity="0.5"
              />
              <rect
                x="76"
                y="24"
                width="3"
                height="2"
                rx="0.5"
                fill="url(#cg)"
                opacity="0.5"
              />
              <rect
                x="10"
                y="56"
                width="8"
                height="4"
                rx="1"
                fill="url(#cg)"
                opacity="0.4"
              />
              <rect
                x="21"
                y="56"
                width="8"
                height="4"
                rx="1"
                fill="url(#cg)"
                opacity="0.4"
              />
              <rect
                x="32"
                y="56"
                width="8"
                height="4"
                rx="1"
                fill="url(#cg)"
                opacity="0.4"
              />
            </svg>
          </div>
          <div class="deco-harp">
            <svg
              viewBox="0 0 52 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="hg"
                  x1="0"
                  y1="0"
                  x2="52"
                  y2="88"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stop-color="#fff8dc" />
                  <stop offset="50%" stop-color="#f0c84a" />
                  <stop offset="100%" stop-color="#8a5c00" />
                </linearGradient>
              </defs>
              <path
                d="M8,76 Q6,44 15,14 Q23,2 38,4 L38,9 Q26,9 19,18 Q12,42 15,76 Z"
                fill="url(#hg)"
                opacity="0.82"
              />
              <rect
                x="36"
                y="4"
                width="7"
                height="72"
                rx="3.5"
                fill="url(#hg)"
                opacity="0.65"
              />
              <rect
                x="6"
                y="74"
                width="38"
                height="9"
                rx="4.5"
                fill="url(#hg)"
                opacity="0.75"
              />
              <line
                x1="17"
                y1="18"
                x2="38"
                y2="22"
                stroke="url(#hg)"
                stroke-width="1"
                opacity="0.55"
              />
              <line
                x1="16"
                y1="30"
                x2="38"
                y2="32"
                stroke="url(#hg)"
                stroke-width="1"
                opacity="0.55"
              />
              <line
                x1="15"
                y1="42"
                x2="38"
                y2="42"
                stroke="url(#hg)"
                stroke-width="1"
                opacity="0.55"
              />
              <line
                x1="15"
                y1="54"
                x2="38"
                y2="52"
                stroke="url(#hg)"
                stroke-width="1"
                opacity="0.55"
              />
              <line
                x1="15"
                y1="64"
                x2="38"
                y2="60"
                stroke="url(#hg)"
                stroke-width="1"
                opacity="0.55"
              />
            </svg>
          </div>
        </div>

        <div class="hero__sinhala">
          <img src="../assets/logo.png" alt="Dashaka Logo" class="hero-logo" />
        </div>

        <div class="hero__en-titles">
          <span class="hero__film-concert">THE FILM IN CONCERT</span>
          <span class="hero__badge">
            <span class="bdot" />&nbsp;STORY OF THE SOUL MUSIC&nbsp;<span
              class="bdot"
            />
          </span>
        </div>
      </div>

      <!-- Info strip -->
      <div class="hero__strip" ref="el2">
        <div class="si">
          <div class="si-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <rect
                x="7"
                y="14"
                width="2"
                height="2"
                rx="0.5"
                fill="currentColor"
              />
              <rect
                x="11"
                y="14"
                width="2"
                height="2"
                rx="0.5"
                fill="currentColor"
              />
            </svg>
          </div>
          <div class="si-text">
            <span class="si-lbl">COMING SOON</span>
            <span class="si-sub">STAY TUNED</span>
          </div>
        </div>
        <div class="sdiv" />
        <div class="si">
          <div class="si-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
              />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
          </div>
          <div class="si-text">
            <span class="si-lbl">SLTC AMPHITHEATRE</span>
            <span class="si-sub">SRI LANKA</span>
          </div>
        </div>
        <div class="sdiv" />
        <div class="si">
          <div class="si-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </div>
          <div class="si-text">
            <span class="si-lbl">MIUSIC</span>
            <span class="si-sub">THE SOUL OF MUSIC</span>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="hero__cta-wrap" ref="el3">
        <button class="hero__cta">
          <span class="cta-shimmer" />
          GET TICKETS
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Bottom CTA -->
    <div class="mobile-cta">
      <button class="mobile-cta-btn">GET TICKETS</button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const el0 = ref(null);
const el1 = ref(null);
const el2 = ref(null);
const el3 = ref(null);

function particleStyle(n) {
  const size = (n % 3) * 1.5 + 2;
  return {
    width: size + "px",
    height: size + "px",
    left: ((n * 4.7 + 3) % 100) + "%",
    bottom: ((n * 3.9 + 5) % 55) + "%",
    animationDelay: ((n * 0.35) % 7) + "s",
    animationDuration: 3 + (n % 5) + "s",
    opacity: 0.15 + (n % 6) * 0.1,
  };
}

onMounted(() => {
  [el0, el1, el2, el3].forEach((r, i) => {
    const el = r.value;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    el.style.transition = `opacity 0.85s ease ${i * 0.18}s, transform 0.85s ease ${i * 0.18}s`;
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }),
    );
  });
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;1,300&display=swap");

/* ── CSS Variables ── */
.hero {
  --gold: #c9952a;
  --gold-light: #f0c84a;
  --gold-pale: #fff8dc;
  --gold-glow: rgba(201, 149, 42, 0.6);
  --gold-glow2: rgba(240, 200, 74, 0.35);
  --dark: #060400;

  position: relative;
  width: 100%;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--dark);
  font-family: "Cinzel", serif;
  padding-top: 76px;
}

/* ── Background ── */
.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 60%;
  /* Full opacity image — premium cinematic look */
  filter: brightness(1) saturate(1.4) contrast(1.05);
}

/* Dual-layer overlay: preserve image but darken edges + add gold tint */
.hero__bg-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      rgba(6, 4, 0, 0.72) 0%,
      rgba(6, 4, 0, 0.18) 28%,
      rgba(6, 4, 0, 0.08) 52%,
      rgba(6, 4, 0, 0.45) 78%,
      rgba(6, 4, 0, 0.88) 100%
    ),
    linear-gradient(
      90deg,
      rgba(6, 4, 0, 0.55) 0%,
      transparent 35%,
      transparent 65%,
      rgba(6, 4, 0, 0.55) 100%
    );
}

/* Subtle gold tone bleed across lower portion */
.hero__bg-vignette {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      ellipse 100% 40% at 50% 100%,
      rgba(140, 90, 0, 0.28) 0%,
      transparent 70%
    ),
    radial-gradient(
      ellipse 60% 20% at 50% 0%,
      rgba(6, 4, 0, 0.5) 0%,
      transparent 100%
    );
}

/* ── Logo ── */
.hero-logo {
  width: 640px;
  max-width: 82vw;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 0 40px rgba(201, 149, 42, 0.5))
    drop-shadow(0 4px 24px rgba(0, 0, 0, 0.8));
}

/* ── Particles ── */
.hero__particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}
.particle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    var(--gold-pale) 0%,
    var(--gold-light) 55%,
    transparent 100%
  );
  animation: floatUp linear infinite;
  will-change: transform, opacity;
}
@keyframes floatUp {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0;
  }
  12% {
    opacity: 1;
  }
  88% {
    opacity: 0.4;
  }
  100% {
    transform: translateY(-340px) scale(0.25);
    opacity: 0;
  }
}

/* ── Streaks ── */
.hero__streaks {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}
.streak {
  position: absolute;
  height: 1px;
  border-radius: 100px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--gold-light),
    transparent
  );
  opacity: 0;
  animation: stk 7s ease-in-out infinite;
}
.streak--1 {
  width: 430px;
  top: 40%;
  left: -6%;
  transform: rotate(-6deg);
  animation-delay: 0s;
}
.streak--2 {
  width: 260px;
  top: 66%;
  left: 6%;
  transform: rotate(-3deg);
  animation-delay: 2.6s;
}
.streak--3 {
  width: 190px;
  top: 27%;
  left: 54%;
  transform: rotate(5deg);
  animation-delay: 5s;
}
@keyframes stk {
  0% {
    opacity: 0;
    transform: translateX(-80px) rotate(-6deg);
  }
  35% {
    opacity: 0.5;
  }
  70% {
    opacity: 0.2;
  }
  100% {
    opacity: 0;
    transform: translateX(100px) rotate(-6deg);
  }
}

/* ── Gold Wave ── */
/* .hero__wave {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  pointer-events: none;
  height: 180px;
}
.hero__wave svg {
  width: 100%;
  height: 100%;
} */

/* ── Main Content ── */
.hero__content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 2rem 6rem;
  max-width: 880px;
  width: 100%;
}

/* ── Tagline ── */
.hero__tagline {
  font-family: "Cormorant Garamond", serif;
  font-style: italic;
  font-size: clamp(0.65rem, 1.5vw, 0.88rem);
  letter-spacing: 0.22em;
  color: rgba(255, 245, 195, 0.75);
  margin: 0 0 1.4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  white-space: nowrap;
}
.tline {
  display: block;
  width: 42px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold));
  opacity: 0.55;
  flex-shrink: 0;
}
.tline--r {
  background: linear-gradient(90deg, var(--gold), transparent);
}

/* ── Title Block ── */
.hero__title-block {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.hero__deco {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 540px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  pointer-events: none;
}
.deco-camera {
  width: clamp(62px, 12vw, 100px);
  filter: drop-shadow(0 0 14px var(--gold-glow));
  animation: dFloat 4s ease-in-out infinite;
}
.deco-harp {
  width: clamp(34px, 7vw, 56px);
  filter: drop-shadow(0 0 12px var(--gold-glow));
  animation: dFloat 4s ease-in-out 2s infinite;
}
@keyframes dFloat {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-7px);
  }
}

.hero__sinhala {
  margin-top: 3.5rem;
}

.hero__en-titles {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.2rem;
}

.hero__film-concert {
  font-size: clamp(0.65rem, 2vw, 1.05rem);
  letter-spacing: 0.4em;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.8);
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  background: linear-gradient(
    90deg,
    var(--gold) 0%,
    var(--gold-pale) 50%,
    var(--gold) 100%
  );
  background-size: 200% auto;
  animation: badgeShim 5s linear infinite;
  color: #0a0700;
  font-size: clamp(0.46rem, 1.1vw, 0.68rem);
  font-weight: 700;
  letter-spacing: 0.28em;
  padding: 0.44em 1.7em;
  border-radius: 3px;
  box-shadow:
    0 2px 26px var(--gold-glow),
    0 0 0 1px rgba(201, 149, 42, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);
}
@keyframes badgeShim {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}
.bdot {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(10, 7, 0, 0.4);
}

/* ── Info Strip ── */
.hero__strip {
  display: flex;
  align-items: center;
  background: rgba(6, 4, 0, 0.55);
  border: 1px solid rgba(201, 149, 42, 0.28);
  border-radius: 60px;
  padding: 1rem 2.6rem;
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow:
    0 0 60px rgba(201, 149, 42, 0.06),
    0 1px 40px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  margin-bottom: 2rem;
  width: 100%;
  max-width: 720px;
}
.si {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex: 1;
  justify-content: center;
}
.si-icon {
  width: 28px;
  height: 28px;
  color: var(--gold-light);
  flex-shrink: 0;
  filter: drop-shadow(0 0 6px var(--gold-glow2));
}
.si-icon svg {
  width: 100%;
  height: 100%;
}
.si-text {
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 0.08rem;
}
.si-lbl {
  font-size: clamp(0.52rem, 1.2vw, 0.68rem);
  letter-spacing: 0.2em;
  color: var(--gold-light);
  font-weight: 700;
  line-height: 1;
  text-shadow: 0 0 10px var(--gold-glow2);
}
.si-sub {
  font-size: clamp(0.42rem, 0.9vw, 0.55rem);
  letter-spacing: 0.14em;
  color: rgba(255, 255, 255, 0.45);
  font-family: "Cormorant Garamond", serif;
}
.sdiv {
  width: 1px;
  height: 40px;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(201, 149, 42, 0.42),
    transparent
  );
  margin: 0 0.4rem;
  flex-shrink: 0;
}

/* ── CTA Button ── */
.hero__cta-wrap {
  margin-bottom: 1.5rem;
}

.hero__cta {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  padding: 1.05rem 3.4rem;
  border: none;
  border-radius: 60px;
  cursor: pointer;
  font-family: "Cinzel", serif;
  font-size: clamp(0.62rem, 1.6vw, 0.88rem);
  font-weight: 700;
  letter-spacing: 0.3em;
  color: #070500;
  background: linear-gradient(
    100deg,
    var(--gold) 0%,
    var(--gold-pale) 40%,
    var(--gold-light) 65%,
    var(--gold) 100%
  );
  background-size: 220% auto;
  animation: ctaShim 3s linear infinite;
  box-shadow:
    0 0 45px var(--gold-glow),
    0 8px 35px rgba(0, 0, 0, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  overflow: hidden;
  transition:
    transform 0.22s ease,
    box-shadow 0.3s ease;
}
@keyframes ctaShim {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 220% center;
  }
}
.hero__cta:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow:
    0 0 70px rgba(201, 149, 42, 0.88),
    0 14px 45px rgba(0, 0, 0, 0.65),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);
}
.hero__cta:active {
  transform: scale(0.97);
  box-shadow:
    0 0 30px var(--gold-glow),
    0 4px 20px rgba(0, 0, 0, 0.5);
}
.cta-shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 38%,
    rgba(255, 255, 255, 0.25) 50%,
    transparent 62%
  );
  background-size: 200% 100%;
  animation: shimPass 2.6s ease-in-out infinite;
}
@keyframes shimPass {
  0% {
    background-position: -100% center;
  }
  100% {
    background-position: 250% center;
  }
}
.hero__cta svg {
  width: 17px;
  height: 17px;
}

/* ═══════════════════════════════════════════
   RESPONSIVE BREAKPOINTS
═══════════════════════════════════════════ */

/* ── Large tablets / small laptops (max 1024px) ── */
@media (max-width: 1024px) {
  .hero__content {
    max-width: 720px;
    padding: 2rem 2rem 5.5rem;
  }
  .hero-logo {
    width: 300px;
  }
  .hero__deco {
    max-width: 460px;
  }
}

/* ── Tablets (max 768px) ── */
@media (max-width: 768px) {
  .hero {
    padding-top: 68px;
  }
  .hero__content {
    padding: 1.5rem 1.8rem 5rem;
    max-width: 600px;
  }
  .hero-logo {
    width: 270px;
    max-width: 80vw;
  }
  .hero__deco {
    max-width: 400px;
  }
  .deco-camera {
    width: clamp(54px, 10vw, 80px);
  }
  .deco-harp {
    width: clamp(30px, 6vw, 46px);
  }
  .hero__strip {
    padding: 1rem 1.8rem;
    max-width: 100%;
    border-radius: 20px;
    flex-direction: column;
    gap: 1rem;
  }
  .sdiv {
    width: 80px;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(201, 149, 42, 0.38),
      transparent
    );
    margin: 0 auto;
  }
  .si {
    width: 100%;
    justify-content: center;
  }
  .hero__tagline {
    font-size: 0.72rem;
  }
}

/* ── Large phones (max 600px) ── */
@media (max-width: 600px) {
  .hero {
    padding-top: 60px;
  }
  .hero__content {
    padding: 1.4rem 1.5rem 4.5rem;
    gap: 0.2rem;
  }
  .hero__tagline {
    font-size: 0.68rem;
    letter-spacing: 0.14em;
    gap: 0.6rem;
    white-space: normal;
    text-align: center;
  }
  .tline {
    width: 28px;
    flex-shrink: 0;
  }
  .hero__deco {
    display: none;
  }
  .hero__sinhala {
    margin-top: 0.5rem;
  }
  .hero-logo {
    width: 250px;
    max-width: 85vw;
  }
  .hero__title-block {
    margin-bottom: 1.4rem;
  }
  .hero__film-concert {
    font-size: 0.68rem;
    letter-spacing: 0.24em;
  }
  .hero__badge {
    font-size: 0.48rem;
    padding: 0.42em 1.1em;
    letter-spacing: 0.16em;
  }
  .hero__strip {
    border-radius: 18px;
    padding: 1.1rem 1.4rem;
    margin-bottom: 1.5rem;
    gap: 0.85rem;
  }
  .si-icon {
    width: 24px;
    height: 24px;
  }
  .si-lbl {
    font-size: 0.63rem;
  }
  .si-sub {
    font-size: 0.52rem;
  }
  .hero__cta {
    padding: 0.95rem 2.4rem;
    font-size: 0.72rem;
    letter-spacing: 0.2em;
  }
}

/* ── Small phones: ZTE A55, compact Android (max 420px) ── */
@media (max-width: 420px) {
  .hero {
    padding-top: 56px;
    min-height: 100dvh;
  }
  .hero__content {
    padding: 1.2rem 1.2rem 4rem;
  }
  .hero__tagline {
    font-size: 0.6rem;
    letter-spacing: 0.1em;
    margin-bottom: 0.8rem;
  }
  .tline {
    width: 20px;
  }
  .hero-logo {
    width: 210px;
    max-width: 88vw;
  }
  .hero__title-block {
    margin-bottom: 1.1rem;
  }
  .hero__film-concert {
    font-size: 0.6rem;
    letter-spacing: 0.18em;
  }
  .hero__badge {
    font-size: 0.44rem;
    padding: 0.38em 0.9em;
    letter-spacing: 0.12em;
  }
  .hero__strip {
    border-radius: 14px;
    padding: 1rem 1.1rem;
    gap: 0.75rem;
    margin-bottom: 1.3rem;
  }
  .si {
    gap: 0.6rem;
  }
  .si-icon {
    width: 22px;
    height: 22px;
  }
  .si-lbl {
    font-size: 0.58rem;
    letter-spacing: 0.14em;
  }
  .si-sub {
    font-size: 0.48rem;
  }
  .sdiv {
    width: 60px;
  }
  .hero__cta {
    padding: 0.88rem 2rem;
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    gap: 0.6rem;
  }
  .hero__cta svg {
    width: 14px;
    height: 14px;
  }
}

/* ─────────────────────────
   HERO ONLY MOBILE CTA
───────────────────────── */

.mobile-cta {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;

  width: 100%;
  display: flex;
  justify-content: center;

  pointer-events: none;
}

.mobile-cta-btn {
  pointer-events: auto;

  border: none;
  cursor: pointer;

  padding: 14px 32px;
  border-radius: 999px;

  font-family: "Cinzel", serif;
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  font-weight: 700;

  color: #080500;

  background: linear-gradient(
    135deg,
    #c9952a 0%,
    #fff8dc 45%,
    #f0c84a 70%,
    #c9952a 100%
  );

  box-shadow:
    0 0 25px rgba(201, 149, 42, 0.45),
    0 8px 25px rgba(0, 0, 0, 0.45);

  transition: 0.3s ease;
}

.mobile-cta-btn:hover {
  transform: translateY(-2px);
}

/* Desktop hide */
@media (min-width: 769px) {
  .mobile-cta {
    display: none;
  }
}

/* ── Very small devices (max 360px) ── */
@media (max-width: 360px) {
  .hero__content {
    padding: 1rem 1rem 3.5rem;
    gap: 2rem;
  }
  .hero-logo {
    width: 385px;
  }
  .hero__tagline {
    display: filex;
  }
  .hero__strip {
    padding: 0.9rem 1rem;
    gap: 1rem;
  }
  .hero__cta {
    padding: 0.82rem 1.7rem;
    font-size: 0.6rem;
  }
}

/* ── Landscape phone ── */
@media (max-height: 500px) and (orientation: landscape) {
  .hero {
    min-height: 100svh;
    align-items: flex-start;
    padding-top: 56px;
  }
  .hero__content {
    padding: 1rem 2rem 2rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem 2rem;
    max-width: 100%;
  }
  .hero__tagline {
    width: 100%;
    justify-content: center;
    font-size: 0.6rem;
    margin-bottom: 0.4rem;
  }
  .hero__title-block {
    margin-bottom: 0;
  }
  .hero__deco {
    display: none;
  }
  .hero__sinhala {
    margin-top: 0;
  }
  .hero-logo {
    width: 160px;
  }
  .hero__strip {
    max-width: 100%;
    flex-direction: row;
    border-radius: 50px;
    padding: 0.7rem 1.5rem;
    margin-bottom: 0;
  }
  .sdiv {
    width: 1px;
    height: 30px;
    background: linear-gradient(
      180deg,
      transparent,
      rgba(201, 149, 42, 0.38),
      transparent
    );
    margin: 0 0.3rem;
  }
  .si-lbl {
    font-size: 0.52rem;
  }
  .si-sub {
    font-size: 0.44rem;
  }
  .hero__cta {
    padding: 0.75rem 1.8rem;
    font-size: 0.62rem;
    margin-bottom: 0;
  }
  .hero__cta-wrap {
    margin-bottom: 0;
  }
}
</style>
