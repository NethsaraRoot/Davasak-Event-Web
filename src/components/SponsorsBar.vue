<template>
  <section class="sponsors">
    <p class="sponsors__label">PROUDLY SUPPORTED BY</p>
    <div class="sponsors__track-wrapper">
      <div class="sponsors__track">
        <span v-for="(sponsor, i) in [...sponsors, ...sponsors]" :key="i" class="sponsor-item">
          {{ sponsor }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
const sponsors = [
  'DIALOG AXIATA',
  'LION LAGER',
  'CARGILLS CEYLON',
  'HEMAS',
  'JOHN KEELLS',
  'SRI LANKA TELECOM',
  'AITKEN SPENCE',
  'COMMERCIAL BANK',
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap');
* { box-sizing: border-box; margin: 0; padding: 0; }

.sponsors {
  border-top: 1px solid rgba(201,149,42,0.12);
  border-bottom: 1px solid rgba(201,149,42,0.12);
  padding: 2rem 0;
  background: rgba(201,149,42,0.02);
  overflow: hidden;
}
.sponsors__label {
  text-align: center;
  font-family: 'Cinzel', serif;
  font-size: 0.48rem; letter-spacing: 0.45em;
  color: rgba(201,149,42,0.4); margin-bottom: 1.2rem;
}
.sponsors__track-wrapper { overflow: hidden; }
.sponsors__track {
  display: flex; gap: 3rem; width: max-content;
  animation: marquee 24s linear infinite;
}
.sponsors__track:hover { animation-play-state: paused; }
.sponsor-item {
  font-family: 'Cinzel', serif;
  font-size: 0.6rem; letter-spacing: 0.28em;
  color: rgba(255,255,255,0.22);
  white-space: nowrap; padding: 0 1rem;
  transition: color 0.3s;
}
.sponsor-item:hover { color: rgba(201,149,42,0.6); }

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
</style>