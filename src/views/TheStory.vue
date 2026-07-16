<template>
  <section class="story" id="story">
    <!-- Ambient background effects -->
    <div class="bg-layer">
      <div class="bg-spotlight"></div>
      <div class="noise"></div>
      <div class="gold-lines">
        <span v-for="n in 6" :key="n" class="gl" :style="{ '--i': n }"></span>
      </div>
    </div>

    <!-- Floating music notes -->
    <div class="notes-wrap" aria-hidden="true">
      <span
        class="note"
        v-for="(note, i) in notes"
        :key="i"
        :style="{
          '--x': note.x,
          '--d': note.d,
          '--s': note.s,
          '--delay': note.delay,
        }"
      >
        {{ note.char }}
      </span>
    </div>

    <!-- Sound wave visualiser bars -->
    <div class="wave-vis" aria-hidden="true">
      <span
        class="wv-bar"
        v-for="n in 28"
        :key="n"
        :style="{ '--i': n }"
      ></span>
    </div>

    <!-- LEFT — Image -->
    <div class="story-left">
      <div class="img-frame">
        <div class="frame-glow"></div>
        <div class="frame-corner fc-tl"></div>
        <div class="frame-corner fc-tr"></div>
        <div class="frame-corner fc-bl"></div>
        <div class="frame-corner fc-br"></div>
        <img
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1974&auto=format&fit=crop"
          alt="Concert night"
          class="story-img"
        />
        <div class="img-overlay"></div>
        <!-- vinyl spin overlay -->
        <div class="vinyl-ring">
          <div class="vinyl-inner"></div>
        </div>
      </div>

      <!-- Live badge -->
    </div>

    <!-- RIGHT — Content -->
    <div class="story-right">
      <div class="eyebrow-wrap">
        <div class="eyebrow-line"></div>
        <span class="eyebrow">THE STORY</span>
      </div>

      <h2 class="story-heading">
        <span class="line-1">THE FIRST CHAPTER OF A</span>
        <span class="line-2">SOULFUL MUSICAL STORY </span>
      </h2>

      <div class="divider-bar">
        <span class="db-fill"></span>
        <span class="db-dot"></span>
      </div>

      <p class="story-p p1">
        The Film in Concert organized by the 2028/2029 student batches in
        collaboration with the Media Unit of SLTC and the Performing Arts Club
        of SLTC is currently in progress, with all arrangements being actively
        carried out.
      </p>

      <p class="story-p p2">
        This historic Film in Concert, being organized for the first time in the
        university’s history, has been officially renamed as
        <strong>"දවසක්"</strong> Film in Concert
      </p>

      <!-- Stats row -->
      <div class="stats-row">
        <div class="stat" v-for="s in stats" :key="s.label">
          <span class="stat-num">{{ s.num }}</span>
          <span class="stat-lbl">{{ s.label }}</span>
        </div>
      </div>

      <!-- <button class="cta-btn">
        <span class="cta-text"></span>
        <span class="cta-icon">→</span>
        <span class="cta-shine"></span>
      </button> -->
    </div>
  </section>
</template>

<script>
export default {
  name: "StorySection",
  data() {
    return {
      notes: [
        { char: "♪", x: "8%", d: "7s", s: "1.4rem", delay: "0s" },
        { char: "♫", x: "18%", d: "9s", s: "2rem", delay: "1.2s" },
        { char: "♩", x: "30%", d: "6s", s: "1.1rem", delay: "0.4s" },
        { char: "♬", x: "45%", d: "11s", s: "2.4rem", delay: "2s" },
        { char: "♪", x: "60%", d: "8s", s: "1.6rem", delay: "0.8s" },
        { char: "♫", x: "74%", d: "7s", s: "1.2rem", delay: "1.6s" },
        { char: "♩", x: "85%", d: "10s", s: "2rem", delay: "0.2s" },
        { char: "♬", x: "93%", d: "6s", s: "1.3rem", delay: "3s" },
      ],
      stats: [
        { num: "50K+", label: "Attendees" },
        { num: "30+", label: "Artists" },
        { num: "3", label: "Stages" },
        { num: "12h", label: "Non-Stop" },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap");

/* ── TOKENS ─────────────────────────────── */
:root {
  --black: #000000;
  --off-black: #080808;
  --rich: #0a0800;

  --g1: #fffbe6;
  --g2: #f5d97a;
  --g3: #c9a227;
  --g4: #8b6914;
  --g5: #3d2d06;

  --gold-grad: linear-gradient(
    135deg,
    #fffbe6 0%,
    #f5d97a 30%,
    #c9a227 65%,
    #8b6914 100%
  );
  --gold-glow: rgba(197, 157, 39, 0.35);
  --gold-glow-soft: rgba(197, 157, 39, 0.12);

  --white: #ffffff;
  --gray: rgba(255, 255, 255, 0.55);
  --subtle: rgba(255, 255, 255, 0.12);
}

/* ── RESET ──────────────────────────────── */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ── SECTION ────────────────────────────── */
.story {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: center;
  padding: 110px 7%;
  background: var(--black);
  overflow: hidden;
  font-family: "DM Sans", sans-serif;
}

/* ── BG LAYER ───────────────────────────── */
.bg-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.bg-spotlight {
  position: absolute;
  width: 900px;
  height: 900px;
  top: -300px;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(
    ellipse,
    rgba(197, 157, 39, 0.13) 0%,
    transparent 65%
  );
  filter: blur(40px);
  animation: spotlight 8s ease-in-out infinite alternate;
}
@keyframes spotlight {
  from {
    transform: translateX(-60%) scale(1);
    opacity: 0.8;
  }
  to {
    transform: translateX(-40%) scale(1.15);
    opacity: 1;
  }
}

.noise {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 180px;
  opacity: 0.025;
}

/* diagonal gold lines */
.gold-lines {
  position: absolute;
  inset: 0;
}
.gl {
  position: absolute;
  left: calc(var(--i) * 17% - 5%);
  top: -10%;
  bottom: -10%;
  width: 1px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(197, 157, 39, 0.18) 40%,
    rgba(197, 157, 39, 0.08) 60%,
    transparent 100%
  );
  transform: rotate(12deg) scaleY(1.3);
  transform-origin: center;
  animation: glShimmer calc(4s + var(--i) * 0.6s) ease-in-out infinite alternate;
  animation-delay: calc(var(--i) * 0.4s);
}
@keyframes glShimmer {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

/* ── FLOATING NOTES ─────────────────────── */
.notes-wrap {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}
.note {
  position: absolute;
  bottom: -10%;
  left: var(--x);
  font-size: var(--s);
  color: var(--g3);
  opacity: 0;
  animation: floatNote var(--d) ease-in infinite;
  animation-delay: var(--delay);
  text-shadow: 0 0 12px var(--gold-glow);
  filter: drop-shadow(0 0 6px rgba(197, 157, 39, 0.5));
}
@keyframes floatNote {
  0% {
    opacity: 0;
    transform: translateY(0) rotate(0deg) scale(0.8);
  }
  15% {
    opacity: 0.9;
  }
  85% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: translateY(-110vh) rotate(25deg) scale(1.2);
  }
}

/* ── WAVE VISUALISER ────────────────────── */
.wave-vis {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 3px;
  padding: 0 5%;
  pointer-events: none;
  z-index: 1;
}
.wv-bar {
  flex: 1;
  max-width: 10px;
  border-radius: 3px 3px 0 0;
  background: var(--gold-grad);
  opacity: 0.25;
  animation: waveBar calc(0.6s + var(--i) * 0.07s) ease-in-out infinite
    alternate;
  animation-delay: calc(var(--i) * 0.04s);
}
@keyframes waveBar {
  from {
    height: 4px;
    opacity: 0.15;
  }
  to {
    height: calc(8px + var(--i) * 1.8px);
    opacity: 0.35;
  }
}

/* ── LEFT — IMAGE ───────────────────────── */
.story-left {
  position: relative;
  z-index: 2;
}

.img-frame {
  position: relative;
  border-radius: 20px;
  overflow: visible;
  background: linear-gradient(
    135deg,
    #f5d376 0%,
    #c9a84c 40%,
    #a67c2e 70%,
    #f5d376 100%
  );
}
.frame-glow {
  position: absolute;
  inset: -2px;
  border-radius: 22px;
  background: var(--gold-grad);
  opacity: 0.55;
  filter: blur(18px);
  z-index: -1;
  animation: frameGlowPulse 4s ease-in-out infinite alternate;
}
@keyframes frameGlowPulse {
  from {
    opacity: 0.35;
    filter: blur(14px);
  }
  to {
    opacity: 0.65;
    filter: blur(22px);
  }
}

/* corner decorations */
.frame-corner {
  position: absolute;
  width: 22px;
  height: 22px;
  border-color: var(--g2);
  border-style: solid;
  border-width: 0;
  z-index: 4;
}
.fc-tl {
  top: -4px;
  left: -4px;
  border-top-width: 2px;
  border-left-width: 2px;
  border-radius: 4px 0 0 0;
}
.fc-tr {
  top: -4px;
  right: -4px;
  border-top-width: 2px;
  border-right-width: 2px;
  border-radius: 0 4px 0 0;
}
.fc-bl {
  bottom: -4px;
  left: -4px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-radius: 0 0 0 4px;
}
.fc-br {
  bottom: -4px;
  right: -4px;
  border-bottom-width: 2px;
  border-right-width: 2px;
  border-radius: 0 0 4px 0;
}

.story-img {
  width: 100%;
  display: block;
  border-radius: 20px;
  position: relative;
  z-index: 2;
  filter: saturate(0.85) contrast(1.05);
  transition:
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.4s;
}
.story-left:hover .story-img {
  transform: scale(1.025);
  filter: saturate(1) contrast(1.08);
}

.img-overlay {
  position: absolute;
  inset: 0;
  border-radius: 20px;
  z-index: 3;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.15) 40%,
    transparent 70%
  );
  pointer-events: none;
}

/* vinyl ring */
.vinyl-ring {
  position: absolute;
  bottom: 22px;
  right: 22px;
  z-index: 5;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    #1a1a1a,
    #333,
    #1a1a1a,
    #c9a227,
    #1a1a1a
  );
  border: 2px solid rgba(197, 157, 39, 0.4);
  animation: vinylSpin 4s linear infinite;
  box-shadow:
    0 0 18px rgba(0, 0, 0, 0.6),
    0 0 8px rgba(197, 157, 39, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}
@keyframes vinylSpin {
  to {
    transform: rotate(360deg);
  }
}
.vinyl-inner {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #111;
  border: 1.5px solid rgba(197, 157, 39, 0.5);
}

/* live badge */
.live-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 6;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(197, 157, 39, 0.35);
  color: var(--g2);
  font-family: "DM Sans", sans-serif;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  padding: 6px 13px;
  border-radius: 99px;
}
.live-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #ff3355;
  animation: livePulse 1.4s ease-in-out infinite;
  box-shadow: 0 0 8px #ff3355;
}
@keyframes livePulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.6);
    opacity: 0.5;
  }
}

/* ── RIGHT — CONTENT ────────────────────── */
.story-right {
  position: relative;
  z-index: 2;
}

.eyebrow-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 22px;
}
.eyebrow-line {
  height: 1px;
  width: 36px;
  background: var(--gold-grad);
}
.eyebrow {
  font-family: "DM Sans", sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.28em;
  background: var(--gold-grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* heading */
.story-heading {
  font-family: "Bebas Neue", sans-serif;
  font-size: clamp(2.8rem, 5.5vw, 5rem);
  line-height: 1;
  letter-spacing: 0.02em;
  color: linear-gradient(
    135deg,
    #f5d376 0%,
    #c9a84c 40%,
    #a67c2e 70%,
    #f5d376 100%
  );
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
}
.line-1 {
  animation: slideIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.line-2 {
  animation: slideIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.12s both;
}
.line-3 {
  animation: slideIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.24s both;
}
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-24px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* italic gradient words */
.story-heading em {
  font-style: italic;
  background: var(--gold-grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.energy {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.1em;
  display: inline-block;
  animation: energyGlow 3s ease-in-out infinite alternate;
}
@keyframes energyGlow {
  from {
    filter: drop-shadow(0 0 8px rgba(197, 157, 39, 0.4));
  }
  to {
    filter: drop-shadow(0 0 22px rgba(197, 157, 39, 0.8));
  }
}

/* divider */
.divider-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 26px 0;
}
.db-fill {
  height: 1px;
  width: 80px;
  border-radius: 1px;
  background: var(--gold-grad);
  animation: dbExpand 1s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both;
}
@keyframes dbExpand {
  from {
    width: 0;
  }
  to {
    width: 80px;
  }
}
.db-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--g2);
  box-shadow: 0 0 10px rgba(197, 157, 39, 0.7);
  animation: dotPop 1s cubic-bezier(0.22, 1, 0.36, 1) 0.7s both;
}
@keyframes dotPop {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

/* paragraphs */
.story-p {
  font-size: 0.94rem;
  line-height: 1.88;
  color: var(--gray);
  font-weight: 300;
  margin-bottom: 16px;
  max-width: 440px;
}
.story-p strong {
  color: var(--g2);
  font-weight: 600;
}
.p1 {
  animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both;
}
.p2 {
  animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.55s both;
}
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* stats */
.stats-row {
  display: flex;
  gap: 28px;
  margin: 28px 0 34px;
  animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.65s both;
}
.stat {
  display: flex;
  flex-direction: column;
  gap: 3px;
  position: relative;
  padding-bottom: 10px;
}
.stat::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1px;
  width: 100%;
  background: linear-gradient(90deg, var(--g3), transparent);
}
.stat-num {
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.9rem;
  line-height: 1;
  background: var(--gold-grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.02em;
}
.stat-lbl {
  font-size: 0.67rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gray);
}

/* CTA button */
.cta-btn {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 32px;
  border: none;
  border-radius: 6px;
  background: var(--gold-grad);
  color: #000;
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.05rem;
  letter-spacing: 0.12em;
  cursor: pointer;
  box-shadow: 0 6px 28px rgba(197, 157, 39, 0.35);
  transition:
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s;
  animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.75s both;
}
.cta-text {
  position: relative;
  z-index: 1;
}
.cta-icon {
  position: relative;
  z-index: 1;
  transition: transform 0.28s;
  font-size: 1.2rem;
}
.cta-shine {
  position: absolute;
  top: 0;
  left: -120%;
  width: 80%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.35),
    transparent
  );
  transform: skewX(-18deg);
  animation: btnShine 3s ease-in-out infinite;
}
@keyframes btnShine {
  0%,
  100% {
    left: -120%;
  }
  50% {
    left: 180%;
  }
}
.cta-btn:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 14px 40px rgba(197, 157, 39, 0.5);
}
.cta-btn:hover .cta-icon {
  transform: translateX(5px);
}
.cta-btn:active {
  transform: translateY(-1px);
}

/* ── RESPONSIVE ─────────────────────────── */
@media (max-width: 960px) {
  .story {
    grid-template-columns: 1fr;
    gap: 48px;
    padding: 72px 6%;
  }
  .wave-vis {
    display: none;
  }
}
@media (max-width: 560px) {
  .story {
    padding: 52px 5%;
    gap: 36px;
  }
  .stats-row {
    gap: 18px;
    flex-wrap: wrap;
  }
  .story-heading {
    font-size: clamp(2.4rem, 10vw, 3.2rem);
  }
}
</style>
