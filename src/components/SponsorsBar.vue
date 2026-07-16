<template>
  <section class="sponsors">
    <p class="sponsors__label">PROUDLY SUPPORTED BY</p>
    <div class="sponsors__track-wrapper">
      <div class="sponsors__track">
        <span
          v-for="(sponsor, i) in [...sponsors, ...sponsors, ...sponsors]"
          :key="i"
          class="sponsor-item"
        >
          <img :src="sponsor.logo" :alt="sponsor.name" class="sponsor-item__img" />
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import logo1 from '../assets/image/Logo/Logo.png'
import logo2 from '../assets/image/Logo/logo white view.png'
import logo3 from '../assets/image/Logo/MAIN PNG@4x.png'
import logo4 from '../assets/image/Logo/PAC LOGO white.png'
import logo5 from '../assets/image/Logo/SLTC LOGO Learn Research Transform 2025.07.18_white.png'

const sponsors = [
  { name: 'CentryxIT',       logo: logo1 },
  { name: 'PAC',             logo: logo2 },
  { name: 'LUNA', logo: logo3 },
  { name: 'Hemas',           logo: logo4 },
  { name: 'SLTC',            logo: logo5 },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap');
* { box-sizing: border-box; margin: 0; padding: 0; }

.sponsors {
  border-top: 1px solid rgba(201,149,42,0.14);
  border-bottom: 1px solid rgba(201,149,42,0.14);
  padding: 3.2rem 0;
  background: rgba(201,149,42,0.025);
  overflow: hidden;
}

.sponsors__label {
  text-align: center;
  font-family: 'Cinzel', serif;
  font-size: 0.62rem;
  letter-spacing: 0.5em;
  color: rgba(201,149,42,0.55);
  margin-bottom: 2.2rem;
}

.sponsors__track-wrapper {
  overflow: hidden;
  /* fade the logos out at both edges for a polished, infinite-scroll feel */
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent 0%,
    #000 12%,
    #000 88%,
    transparent 100%
  );
  mask-image: linear-gradient(
    90deg,
    transparent 0%,
    #000 12%,
    #000 88%,
    transparent 100%
  );
}

.sponsors__track {
  display: flex;
  align-items: center;
  gap: 5.5rem;
  width: max-content;
  animation: marquee 28s linear infinite;
}

.sponsors__track:hover {
  animation-play-state: paused;
}

.sponsor-item {
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  padding: 0 0.5rem;
}

.sponsor-item__img {
  height: 52px;
  width: auto;
  max-width: 160px;
  object-fit: contain;
  filter: grayscale(1) brightness(1.7) opacity(0.5);
  transition: filter 0.35s ease, transform 0.35s ease;
}

.sponsor-item:hover .sponsor-item__img {
  filter: grayscale(0) brightness(1) opacity(1);
  transform: scale(1.08);
}

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-33.333%); }
}

@media (max-width: 640px) {
  .sponsors {
    padding: 2.4rem 0;
  }
  .sponsors__label {
    font-size: 0.52rem;
    letter-spacing: 0.38em;
    margin-bottom: 1.6rem;
  }
  .sponsors__track {
    gap: 3.5rem;
    animation-duration: 20s;
  }
  .sponsor-item__img {
    height: 32px;
    max-width: 120px;
  }
}
</style>