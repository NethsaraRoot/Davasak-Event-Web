<template>
  <header class="navbar" :class="{ scrolled: isScrolled }">

    <!-- Logo → clicks scroll to #home -->
    <div class="logo-wrap">
      <a @click="scrollToHero" class="logo-link">
        <img src="../assets/logo.png" alt="logo" class="logo-img" />
      </a>
    </div>

    <!-- Desktop Nav -->
    <nav class="nav-links">
      <a href="#home">HOME</a>
      <a href="#story">THE STORY</a>
      <a href="#artists">ARTISTS</a>
      <a href="#band">BAND</a>
      <a href="#gallery">GALLERY</a>
      <!-- <a href="#contact">CONTACT</a> -->
    </nav>

    <!-- Desktop Ticket Btn -->
    <a href="#tickets" class="ticket-btn">
      <span class="btn-shimmer" />
      GET TICKET
    </a>

    <!-- Hamburger -->
    <button
      class="hamburger"
      :class="{ open: menuOpen }"
      @click="toggleMenu"
      aria-label="Toggle menu"
    >
      <span />
      <span />
      <span />
    </button>

    <!-- Mobile Overlay Menu -->
    <Transition name="menu-fade">
      <div class="mobile-menu" v-if="menuOpen">

        <button class="menu-close" @click="closeMenu" aria-label="Close menu">
          <span /><span />
        </button>

        <div class="menu-deco-line" />

        <img src="../assets/logo.png" alt="logo" class="menu-logo" />

        <nav class="menu-links">
          <a href="#home"    @click="closeMenu"><span class="link-num">01</span>HOME</a>
          <a href="#story"   @click="closeMenu"><span class="link-num">02</span>THE STORY</a>
          <a href="#artists" @click="closeMenu"><span class="link-num">03</span>ARTISTS</a>
          <a href="#band"    @click="closeMenu"><span class="link-num">04</span>BAND</a>
          <a href="#gallery" @click="closeMenu"><span class="link-num">05</span>GALLERY</a>
          <!-- <a href="#contact" @click="closeMenu"><span class="link-num">06</span>CONTACT</a> -->
        </nav>

        <div class="menu-deco-line" />

        <a href="#tickets" class="mobile-ticket-btn" @click="closeMenu">
          <span class="btn-shimmer" />
          GET TICKET
        </a>

      </div>
    </Transition>

  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen   = ref(false)
const isScrolled = ref(false)

/* ── Logo click → smooth scroll to hero ── */
function scrollToHero() {
  closeMenu()
  const hero = document.getElementById('home')
  if (hero) {
    hero.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

function closeMenu() {
  menuOpen.value = false
  document.body.style.overflow = ''
}

function handleScroll() {
  isScrolled.value = window.scrollY > 40
}

/* Close menu on Escape key */
function handleKeydown(e) {
  if (e.key === 'Escape') closeMenu()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap');

/* ── Navbar ── */
.navbar {
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 7%;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition:
    background      0.45s ease,
    border-color    0.45s ease,
    backdrop-filter 0.45s ease,
    padding         0.35s ease;
  box-sizing: border-box;
}

.navbar.scrolled {
  background: rgba(6, 4, 0, 0.78);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(201, 149, 42, 0.22);
  padding: 13px 7%;
}

/* ── Logo ── */
.logo-wrap {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
}

.logo-img {
  height: 48px;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 0 10px rgba(201, 149, 42, 0.4));
  transition: filter 0.3s ease, transform 0.3s ease;
  display: block;
}

.logo-link:hover .logo-img {
  filter: drop-shadow(0 0 22px rgba(240, 200, 74, 0.75));
  transform: scale(1.06);
}

/* ── Desktop Nav ── */
.nav-links {
  display: flex;
  gap: 32px;
  align-items: center;
}

.nav-links a {
  font-family: 'Cinzel', serif;
  color: rgba(255, 255, 255, 0.82);
  text-decoration: none;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.2em;
  position: relative;
  padding-bottom: 5px;
  transition: color 0.3s ease;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0%;
  height: 1.5px;
  border-radius: 2px;
  background: linear-gradient(90deg, #8a5c00, #f0c84a, #c9952a);
  transition: width 0.35s ease;
}

.nav-links a:hover {
  color: #f0c84a;
  text-shadow: 0 0 14px rgba(240, 200, 74, 0.5);
}

.nav-links a:hover::after {
  width: 100%;
}

/* ── Ticket Button ── */
.ticket-btn,
.mobile-ticket-btn {
  font-family: 'Cinzel', serif;
  padding: 12px 28px;
  border-radius: 50px;
  text-decoration: none;
  color: #0a0700;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.22em;
  background: linear-gradient(
    110deg,
    #8a5c00 0%,
    #c9952a 22%,
    #f0c84a 48%,
    #fff8dc 62%,
    #c9952a 78%,
    #8a5c00 100%
  );
  background-size: 220% auto;
  animation: btnShim 3.5s linear infinite;
  box-shadow:
    0 0 32px rgba(201, 149, 42, 0.55),
    0 4px 20px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  transition: transform 0.25s ease, box-shadow 0.3s ease;
  display: inline-flex;
  align-items: center;
}

@keyframes btnShim {
  0%   { background-position: 0% center; }
  100% { background-position: 220% center; }
}

.btn-shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 38%,
    rgba(255, 255, 255, 0.28) 50%,
    transparent 62%
  );
  background-size: 200% 100%;
  animation: sweep 2.5s ease-in-out infinite;
}

@keyframes sweep {
  0%   { background-position: -100% center; }
  100% { background-position: 250% center; }
}

.ticket-btn:hover,
.mobile-ticket-btn:hover {
  transform: translateY(-3px) scale(1.04);
  box-shadow:
    0 0 60px rgba(201, 149, 42, 0.85),
    0 10px 35px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);
}

.ticket-btn:active,
.mobile-ticket-btn:active {
  transform: scale(0.97);
}

/* ── Hamburger ── */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  padding: 6px;
  background: none;
  border: none;
  z-index: 1100;
}

.hamburger span {
  display: block;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(90deg, #c9952a, #f0c84a);
  transition: all 0.38s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  transform-origin: center;
}

.hamburger span:nth-child(1) { width: 26px; }
.hamburger span:nth-child(2) { width: 19px; }
.hamburger span:nth-child(3) { width: 26px; }

.hamburger.open span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
  width: 26px;
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.hamburger.open span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
  width: 26px;
}

/* ── Mobile Menu ── */
.mobile-menu {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100dvh;
  background: rgba(5, 3, 0, 0.97);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1050;
  padding: 2rem 1.5rem;
  box-sizing: border-box;
}

.menu-close {
  position: absolute;
  top: 22px;
  right: 6%;
  width: 40px;
  height: 40px;
  background: none;
  border: 1px solid rgba(201, 149, 42, 0.3);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s, background 0.3s, transform 0.3s;
}

.menu-close:hover {
  background: rgba(201, 149, 42, 0.12);
  border-color: rgba(201, 149, 42, 0.65);
  transform: rotate(90deg);
}

.menu-close span {
  position: absolute;
  width: 16px;
  height: 1.5px;
  background: linear-gradient(90deg, #c9952a, #f0c84a);
  border-radius: 2px;
}

.menu-close span:first-child { transform: rotate(45deg); }
.menu-close span:last-child  { transform: rotate(-45deg); }

.menu-logo {
  height: 54px;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 0 16px rgba(201, 149, 42, 0.55));
  margin-bottom: 1.2rem;
}

.menu-deco-line {
  width: 130px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(201,149,42,0.7), transparent);
  margin: 0.5rem 0 1.2rem;
}

.menu-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 340px;
  margin-bottom: 1.2rem;
}

.menu-links a {
  font-family: 'Cinzel', serif;
  color: rgba(255, 255, 255, 0.78);
  text-decoration: none;
  font-size: 0.98rem;
  font-weight: 700;
  letter-spacing: 0.35em;
  padding: 0.95rem 0;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-bottom: 1px solid rgba(201, 149, 42, 0.1);
  transition:
    color          0.3s ease,
    letter-spacing 0.3s ease,
    text-shadow    0.3s ease;
}

.menu-links a:first-child {
  border-top: 1px solid rgba(201, 149, 42, 0.1);
}

.menu-links a:hover {
  color: #f0c84a;
  letter-spacing: 0.44em;
  text-shadow: 0 0 22px rgba(240, 200, 74, 0.55);
}

.link-num {
  font-size: 0.6rem;
  color: rgba(201, 149, 42, 0.5);
  font-weight: 400;
  letter-spacing: 0.08em;
  min-width: 22px;
  transition: color 0.3s;
}

.menu-links a:hover .link-num {
  color: rgba(240, 200, 74, 0.85);
}

.mobile-ticket-btn {
  margin-top: 0.5rem;
  padding: 14px 44px;
  font-size: 0.82rem;
  letter-spacing: 0.26em;
}

/* ── Vue Transition ── */
.menu-fade-enter-active {
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.menu-fade-leave-active {
  transition: opacity 0.28s ease, transform 0.28s ease;
}
.menu-fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* ── Responsive ── */
@media (max-width: 960px) {
  .nav-links,
  .ticket-btn {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .navbar {
    padding: 16px 5%;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 14px 5%;
  }

  .logo-img {
    height: 40px;
  }

  .menu-links a {
    font-size: 0.88rem;
    letter-spacing: 0.28em;
    padding: 0.85rem 0;
  }

  .mobile-ticket-btn {
    padding: 12px 32px;
    font-size: 0.76rem;
  }
}

@media (max-width: 360px) {
  .logo-img {
    height: 34px;
  }

  .menu-links a {
    font-size: 0.8rem;
    letter-spacing: 0.2em;
    padding: 0.78rem 0;
  }

  .menu-logo {
    height: 44px;
  }
}
</style>