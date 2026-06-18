<template>
  <section class="gallery section" id="gallery">

    <div class="top">
      <div class="top-badge">GALLERY</div>
      <h2>Concert Moments</h2>
      <p>Captured memories from the stage</p>
    </div>

    <div class="gallery-grid">

      <div
        class="gal-item"
        v-for="(photo, index) in photos"
        :key="index"
        @click="openLightbox(index)"
      >
        <img :src="photo.src" :alt="photo.tag">
        <div class="zoom-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            <line x1="11" y1="8" x2="11" y2="14"/>
            <line x1="8" y1="11" x2="14" y2="11"/>
          </svg>
        </div>
        <div class="gal-overlay">
          <div class="gal-tag">{{ photo.tag }}</div>
          <p>{{ photo.caption }}</p>
        </div>
      </div>

    </div>

    <div class="gal-footer">
      <div class="gal-count">Showing <span>{{ photos.length }}</span> of <span>24</span> photos</div>
      <button class="btn-ghost">View All Photos ›</button>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <div class="lightbox" v-if="lightboxIndex !== null" @click="closeLightbox">
        <div class="lightbox-inner" @click.stop>

          <button class="lb-close" @click="closeLightbox">✕</button>
          <button class="lb-prev" @click="prevPhoto">‹</button>
          <button class="lb-next" @click="nextPhoto">›</button>

          <img :src="photos[lightboxIndex].src" :alt="photos[lightboxIndex].tag">

          <div class="lb-info">
            <div class="gal-tag">{{ photos[lightboxIndex].tag }}</div>
            <p>{{ photos[lightboxIndex].caption }}</p>
          </div>

        </div>
      </div>
    </Teleport>

  </section>
</template>

<script setup>
import { ref } from 'vue'

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1974&auto=format&fit=crop',
    tag: 'Main Stage',
    caption: 'Opening night performance'
  },
  {
    src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1974&auto=format&fit=crop',
    tag: 'Live Set',
    caption: 'Crowd energy at its peak'
  },
  {
    src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1974&auto=format&fit=crop',
    tag: 'Backstage',
    caption: 'Behind the scenes magic'
  },
  {
    src: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1974&auto=format&fit=crop',
    tag: 'Crowd',
    caption: 'Thousands united by music'
  }
]

const lightboxIndex = ref(null)

function openLightbox(index) {
  lightboxIndex.value = index
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxIndex.value = null
  document.body.style.overflow = ''
}

function prevPhoto() {
  lightboxIndex.value = (lightboxIndex.value - 1 + photos.length) % photos.length
}

function nextPhoto() {
  lightboxIndex.value = (lightboxIndex.value + 1) % photos.length
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;600;700&display=swap');

.section {
  padding: 120px 8%;
}

.gallery {
  background: #0a0a0a;
  color: white;
  font-family: 'Inter', sans-serif;
}

.top {
  text-align: center;
  margin-bottom: 50px;
}

.top-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 4px;
  color: #c9a84c;
  border: 1px solid #c9a84c44;
  padding: 5px 18px;
  border-radius: 30px;
  margin-bottom: 14px;
  background: #c9a84c0d;
}

.top h2 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 64px;
  letter-spacing: 2px;
  background: linear-gradient(135deg, #f5d376 0%, #c9a84c 40%, #a67c2e 70%, #f5d376 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  line-height: 1;
}

.top p {
  color: #555;
  font-size: 13px;
  letter-spacing: 1px;
  margin-top: 10px;
}

/* ✅ Masonry-style grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 350px 350px;
  gap: 16px;
}

/* First photo tall — 2 rows span */
.gal-item:first-child {
  grid-row: span 2;
}

.gal-item {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid #1e1e1e;
  transition: border-color 0.4s ease;
}

.gal-item:hover {
  border-color: #c9a84c55;
}

.gal-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #c9a84c22 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
  pointer-events: none;
}

.gal-item:hover::before { opacity: 1; }

.gal-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), filter 0.4s ease;
  display: block;
}

.gal-item:hover img {
  transform: scale(1.08);
  filter: brightness(0.6) saturate(1.2);
}

/* Zoom icon */
.zoom-icon {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%) scale(0.6);
  width: 52px; height: 52px;
  background: linear-gradient(135deg, #f5d376, #c9a84c);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.23,1,0.32,1);
  z-index: 3;
}

.zoom-icon svg {
  width: 20px; height: 20px;
}

.gal-item:hover .zoom-icon {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

/* Slide-up overlay */
.gal-overlay {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  background: linear-gradient(to top, #000000ee 0%, transparent 100%);
  padding: 28px 20px 18px;
  z-index: 2;
  transform: translateY(100%);
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.gal-item:hover .gal-overlay {
  transform: translateY(0);
}

.gal-tag {
  display: inline-block;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #c9a84c;
  background: #c9a84c18;
  border: 1px solid #c9a84c44;
  padding: 2px 8px;
  border-radius: 20px;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.gal-overlay p {
  font-size: 12px;
  color: #aaa;
  margin: 0;
  font-weight: 300;
}

/* Footer */
.gal-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 28px;
}

.gal-count {
  font-size: 12px;
  color: #444;
  letter-spacing: 2px;
}

.gal-count span { color: #c9a84c; }

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #c9a84c44;
  color: #c9a84c;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 10px 24px;
  border-radius: 50px;
  background: #c9a84c0d;
  cursor: pointer;
  text-transform: uppercase;
  transition: background 0.3s, box-shadow 0.3s;
}

.btn-ghost:hover {
  background: #c9a84c22;
  box-shadow: 0 8px 24px #c9a84c22;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(10px);
  animation: fadeIn 0.25s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.lightbox-inner {
  position: relative;
  max-width: 900px;
  width: 90%;
  animation: slideUp 0.3s cubic-bezier(0.23,1,0.32,1);
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

.lightbox-inner img {
  width: 100%;
  max-height: 75vh;
  object-fit: contain;
  border-radius: 16px;
  border: 1px solid #c9a84c33;
  display: block;
}

.lb-info {
  padding: 16px 0 0;
  display: flex;
  align-items: center;
  gap: 12px;
}

.lb-info p {
  color: #888;
  font-size: 13px;
  margin: 0;
}

.lb-close {
  position: absolute;
  top: -44px; right: 0;
  width: 36px; height: 36px;
  background: #1e1e1e;
  border: 1px solid #333;
  border-radius: 50%;
  color: #aaa;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s;
}

.lb-close:hover { background: #c9a84c; color: #000; }

.lb-prev,
.lb-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px; height: 44px;
  background: #1e1e1e;
  border: 1px solid #333;
  border-radius: 50%;
  color: #c9a84c;
  font-size: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, border-color 0.2s;
  z-index: 10;
}

.lb-prev { left: -60px; }
.lb-next { right: -60px; }

.lb-prev:hover,
.lb-next:hover {
  background: #c9a84c;
  border-color: #c9a84c;
  color: #000;
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  .gal-item:first-child { grid-row: span 1; }
  .gal-item { height: 280px; }
  .lb-prev { left: -10px; }
  .lb-next { right: -10px; }
  .top h2 { font-size: 42px; }
}
</style>