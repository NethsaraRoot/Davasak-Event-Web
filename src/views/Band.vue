<template>
  <section
    class="band section"
    id="band"
    :style="{ backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(10,8,3,0.75) 50%, rgba(0,0,0,0.7) 100%), url(${bandBg})` }"
  >

    <div class="band-content">
      <div class="top-badge">★ LIVE PERFORMANCE ★</div>

      <h2>
        Feel The Power Of
        <span class="gold-text">Live Band Music</span>
      </h2>

      <p>
        Our professional live band delivers unforgettable performances
        with stunning instrumentals and energetic stage presence.
      </p>

      <div class="band-stats">
        <div class="stat">
          <div class="stat-num">6+</div>
          <div class="stat-label">Members</div>
        </div>
        <div class="stat">
          <div class="stat-num">50+</div>
          <div class="stat-label">Shows</div>
        </div>
        <div class="stat">
          <div class="stat-num">10</div>
          <div class="stat-label">Years</div>
        </div>
      </div>

      <button class="image-btn">
        <img :src="buttonImg" alt="Explore Button">
      </button>
    </div>

  </section>
</template>

<script setup>
import bandBg from '../assets/image/Band.jpeg'
import buttonImg from '../assets/image/logo2.png'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;600;700&display=swap');

.section {
  padding: 120px 8%;
}

.band {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  text-align: center;
  color: white;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
}

.band::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #c9a84c88, transparent);
}

.band::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #c9a84c88, transparent);
}

.band-content {
  max-width: 800px;
  margin: auto;
  position: relative;
  z-index: 1;
}

.top-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 5px;
  color: #c9a84c;
  border: 1px solid #c9a84c44;
  padding: 6px 20px;
  border-radius: 30px;
  margin-bottom: 24px;
  background: #c9a84c0d;
}

.band-content h2 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 72px;
  line-height: 1.05;
  letter-spacing: 2px;
  margin: 0 0 24px;
  color: white;
}

.gold-text {
  display: block;
  background: linear-gradient(135deg, #f5d376 0%, #c9a84c 40%, #a67c2e 70%, #f5d376 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.band-content p {
  color: #aaa;
  line-height: 1.9;
  font-size: 16px;
  font-weight: 300;
  max-width: 560px;
  margin: 0 auto 40px;
}

.band-stats {
  display: flex;
  justify-content: center;
  gap: 88px;
  margin-bottom: 44px;
}

.image-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -100px auto;
  background: transparent;
  border: none;
  cursor: pointer;
}

.image-btn img {
  width: 320px;
  height: auto;
  object-fit: contain;
  transition: 0.3s ease;
}

.image-btn img:hover {
  transform: scale(1.05);
}

.stat {
  border-left: 2px solid #c9a84c44;
  padding-left: 18px;
  text-align: left;
}

.stat-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 40px;
  line-height: 1;
  background: linear-gradient(135deg, #f5d376, #c9a84c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 11px;
  color: #666;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 2px;
}

.btn-gold {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #f5d376, #c9a84c, #a67c2e);
  color: #000;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 2px;
  padding: 16px 40px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn-gold:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px #c9a84c55;
}

@media (max-width: 768px) {
  .band-content h2 { font-size: 48px; }
  .band-stats { gap: 24px; }
}

@media (max-width: 480px) {
  .band-content h2 { font-size: 38px; }
  .band-stats { flex-direction: column; align-items: center; gap: 16px; }
  .stat { border-left: none; border-top: 1px solid #c9a84c44; padding: 12px 0 0; text-align: center; }
}
</style>