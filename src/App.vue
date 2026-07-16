<template>
  <div id="app">

    <!-- Loader -->
    <EnterScreen :show="showEnter" @entered="enterSite" />

    <Navbar />
    <main><RouterView /></main>
    <Footer />

    <audio ref="bgMusic" loop>
      <source src="../src/assets/music/me-hitha-sanasa-uvindu-ayshcharya.mp3" type="audio/mpeg" />
    </audio>

    <!-- Music Control -->
    <div class="music-control" v-if="!showEnter">
      <div class="volume-popup" :class="{ visible: showVolume }">
        <span class="vol-label">{{ Math.round(volume * 100) }}%</span>
        <input
          type="range" min="0" max="1" step="0.01"
          :value="volume" @input="setVolume"
          class="vol-slider"
        />
        <span class="vol-icon-small">🔈</span>
      </div>

      <button
        @click="toggleMusic"
        @mouseenter="showVolume = true"
        @mouseleave="showVolume = false"
        class="music-btn" :class="{ playing: isPlaying }"
      >
        <template v-if="isPlaying">
          <span class="bar" v-for="n in 4" :key="n"></span>
        </template>
        <span v-else class="pause-icon">❚❚</span>
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import EnterScreen from './components/Enterscreen.vue'

const bgMusic    = ref(null)
const isPlaying  = ref(false)
const showVolume = ref(false)
const volume     = ref(0.2)
const showEnter  = ref(true)

const enterSite = async () => {
  showEnter.value = false
  bgMusic.value.volume = volume.value
  try {
    await bgMusic.value.play()
    isPlaying.value = true
  } catch (e) {
    console.warn('Autoplay blocked:', e)
  }
}

const toggleMusic = (e) => {
  e.stopPropagation()
  if (isPlaying.value) {
    bgMusic.value.pause()
    isPlaying.value = false
  } else {
    bgMusic.value.play()
    isPlaying.value = true
  }
}

const setVolume = (e) => {
  volume.value = parseFloat(e.target.value)
  bgMusic.value.volume = volume.value
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600&family=Baloo+2:wght@400;500;600;700&family=Pacifico&family=Chewy&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --gold:        #d4a017;
  --gold-light:  #f0c040;
  --gold-dark:   #b8860b;
  --black:       #050300;
  --black-soft:  #0e0b04;
  --white:       #ffffff;
  --white-muted: rgba(255,255,255,0.7);
  --font-display: 'Cinzel', serif;
  --font-body:    'Cormorant Garamond', serif;
}

html { scroll-behavior: smooth; }
body {
  background: var(--black);
  color: var(--white);
  font-family: var(--font-body);
  overflow-x: hidden;
}
#app { min-height: 100vh; display: flex; flex-direction: column; }
main { flex: 1; }
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--black); }
::-webkit-scrollbar-thumb { background: var(--gold-dark); border-radius: 3px; }

/* ───── Music Control ───── */
.music-control {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.volume-popup {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background: rgba(5, 3, 0, 0.85);
  border: 1px solid var(--gold-dark);
  border-radius: 12px;
  padding: 10px 8px;
  backdrop-filter: blur(10px);
  opacity: 0;
  transform: translateY(8px);
  pointer-events: none;
  transition: opacity 0.3s, transform 0.3s;
}

.volume-popup.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: all;
}

.vol-label {
  font-family: var(--font-display);
  font-size: 11px;
  color: var(--gold);
  letter-spacing: 1px;
}

.vol-icon-small { font-size: 14px; }

.vol-slider {
  -webkit-appearance: slider-vertical;
  appearance: slider-vertical;
  writing-mode: vertical-lr;
  direction: rtl;
  width: 4px;
  height: 80px;
  cursor: pointer;
  accent-color: var(--gold);
  background: var(--gold-dark);
  border-radius: 4px;
  outline: none;
  border: none;
}

.music-btn {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: 1.5px solid var(--gold-dark);
  background: rgba(5, 3, 0, 0.75);
  backdrop-filter: blur(8px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.2s;
  overflow: hidden;
}

.music-btn:hover {
  border-color: var(--gold-light);
  transform: scale(1.1);
  box-shadow: 0 0 14px rgba(212, 160, 23, 0.5);
}

.music-btn.playing {
  border-color: var(--gold);
  box-shadow: 0 0 10px rgba(212, 160, 23, 0.4);
}

.music-btn.playing::before,
.music-btn.playing::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid var(--gold);
  animation: pulse-ring 2s ease-out infinite;
}
.music-btn.playing::after { animation-delay: 1s; }

@keyframes pulse-ring {
  0%   { width: 54px; height: 54px; opacity: 0.7; }
  100% { width: 90px; height: 90px; opacity: 0; }
}

.bar {
  display: inline-block;
  width: 3px;
  border-radius: 2px;
  background: var(--gold);
  animation: eq-bounce 0.8s ease-in-out infinite alternate;
}
.bar:nth-child(1) { height: 10px; animation-delay: 0.00s; }
.bar:nth-child(2) { height: 18px; animation-delay: 0.15s; }
.bar:nth-child(3) { height: 14px; animation-delay: 0.30s; }
.bar:nth-child(4) { height: 20px; animation-delay: 0.45s; }

@keyframes eq-bounce {
  0%   { transform: scaleY(0.4); }
  100% { transform: scaleY(1); }
}

.pause-icon {
  font-size: 13px;
  color: var(--gold-dark);
  letter-spacing: 2px;
}
</style>