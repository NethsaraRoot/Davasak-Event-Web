<template>
  <footer class="footer">

    <!-- Ambient top glow line -->
    <div class="footer__top-rule">
      <span class="footer__rule-line"></span>
      <span class="footer__rule-gem"></span>
      <span class="footer__rule-line"></span>
    </div>

    <!-- Background decoration -->
    <div class="footer__orb footer__orb--l"></div>
    <div class="footer__orb footer__orb--r"></div>

    <div class="footer__inner">

      <!-- ── Brand block ── -->
      <div class="footer__brand">
        <a href="https://centryxit.com" target="_blank" rel="noopener noreferrer" class="footer__logo-link">
        <div class="footer__logo-wrap">
          <img src="../assets/image/Logo/Logo.png" alt="SOUNDFEST logo" class="footer__logo" />
        </div>
      </a>

        <h2 class="footer__title">Centryx It</h2>  
      </div>

      <!-- ── Divider ── -->
      <div class="footer__vdivider"></div>

      <!-- ── Contact block ── -->
      <div class="footer__contact">

        <p class="footer__contact-label">Get In Touch</p>

        <!-- Phone -->
        <a href="tel:+94771234567" class="footer__contact-item">
          <span class="footer__contact-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.64A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
            </svg>
          </span>
          <span class="footer__contact-text">+94 77 123 4567</span>
        </a>

        <!-- Facebook -->
        <a
          href="https://www.facebook.com/YOUR_PAGE"
          target="_blank"
          rel="noopener noreferrer"
          class="footer__contact-item"
        >
          <span class="footer__contact-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </span>
          <span class="footer__contact-text">Follow on Facebook</span>
        </a>

      </div>

    </div>

    <!-- ── Bottom bar ── -->
    <div class="footer__bottom">
      <div class="footer__bottom-line"></div>
      <div class="footer__bottom-content">
        <span class="footer__copy">
          © 2026 All Rights Reserved &nbsp;·&nbsp;
          <a href="https://centryxit.com" target="_blank" rel="noopener noreferrer" class="footer__brand-link">CentryxIT</a>
        </span>
        <span class="footer__powered">
          Technology Partner
         <a href="https://centryxit.com" target="_blank" rel="noopener noreferrer" class="footer__brand-link">CentryxIT</a>
        </span>
      </div>
    </div>

  </footer>
</template>

<style scoped>


.footer {
  position: relative;
  background: var(--black, #050300);
  font-family: var(--font-body, 'Cormorant Garamond', serif);
  overflow: hidden;
  padding: 0;
}

/* ── Top ornamental rule ── */
.footer__top-rule {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0 6%;
  margin-bottom: 0;
}
.footer__rule-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold, #d4a017), transparent);
}
.footer__rule-gem {
  width: 7px; height: 7px;
  background: var(--gold, #d4a017);
  transform: rotate(45deg);
  box-shadow: 0 0 12px var(--gold, #d4a017);
  flex-shrink: 0;
}

/* ── Ambient glow orbs ── */
.footer__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(110px);
  pointer-events: none;
  z-index: 0;
}
.footer__orb--l {
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(212,160,23,.1) 0%, transparent 70%);
  bottom: -140px; left: -100px;
}
.footer__orb--r {
  width: 350px; height: 350px;
  background: radial-gradient(circle, rgba(184,134,11,.07) 0%, transparent 70%);
  bottom: -100px; right: -80px;
}

/* ── Main inner layout ── */
.footer__inner {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  padding: 60px 8% 44px;
  max-width: 1100px;
  margin: 0 auto;
}

/* ── Brand block ── */
.footer__brand {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
}


.footer__logo-wrap {
  width: 86px; height: 82px;
  border-radius: 12px;
  background: rgba(212,160,23,.08);
  border: 1px solid rgba(212,160,23,.2);
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
  margin-bottom: 14px;
}
.footer__logo {
  width: 458px;
  height: 48px;
  object-fit: contain;
}

.footer__title {
  font-family: var(--font-display, 'Cinzel', serif);
  font-size: 26px;
  font-weight: 700;
  letter-spacing: .18em;
  background: linear-gradient(110deg, var(--gold-light, #f0c040), var(--gold, #d4a017), var(--gold-dark, #b8860b));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  line-height: 1;
}

.footer__tagline {
  font-family: var(--font-body, 'Cormorant Garamond', serif);
  font-size: 14px;
  font-style: italic;
  color: var(--white-muted, rgba(255,255,255,.55));
  margin: 0;
  margin-top: 108px;
}

.footer__brand {
  gap: 46px;
  
  margin-bottom: 18px; 
  

}

/* ── Vertical divider ── */
.footer__vdivider {
  width: 3px;
  height: 100px;
  background: linear-gradient(180deg, transparent, rgba(212,160,23,.3), transparent);
  margin: 0 60px;
  flex-shrink: 0;
}

/* ── Contact block ── */
.footer__contact {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.footer__contact-label {
  font-family: var(--font-display, 'Cinzel', serif);
  font-size: 9px;
  letter-spacing: .4em;
  text-transform: uppercase;
  color: var(--gold, #d4a017);
  margin: 0 0 4px;
}

.footer__contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--white-muted, rgba(255,255,255,.7));
  font-size: 15px;
  transition: color .25s, transform .25s;
  width: fit-content;
}
.footer__contact-item:hover {
  color: var(--gold-light, #f0c040);
  transform: translateX(4px);
}

.footer__contact-icon {
  width: 36px; height: 36px;
  border-radius: 9px;
  background: rgba(212,160,23,.07);
  border: 1px solid rgba(212,160,23,.18);
  display: flex; align-items: center; justify-content: center;
  color: var(--gold, #d4a017);
  flex-shrink: 0;
  transition: background .25s, border-color .25s, box-shadow .25s;
}
.footer__contact-icon svg { width: 15px; height: 15px; }
.footer__contact-item:hover .footer__contact-icon {
  background: rgba(212,160,23,.14);
  border-color: var(--gold, #d4a017);
  box-shadow: 0 0 14px rgba(212,160,23,.2);
}

/* ── Bottom bar ── */
.footer__bottom {
  position: relative;
  z-index: 1;
}
.footer__bottom-line {
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(212,160,23,.2) 30%, rgba(212,160,23,.2) 70%, transparent 100%);
  margin: 0 6%;
}
.footer__bottom-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 26px 8%;        /* ← 18px → 26px */
  max-width: 1100px;
  margin: 0 auto;
}

.footer__copy {
  font-family: var(--font-display, 'Cinzel', serif);
  font-size: 13px;         /* ← 10px → 13px */
  letter-spacing: .12em;
  color: rgba(255, 255, 255, 0.993);
}
.footer__brand-name {
  color: var(--gold, #d4a017);
  letter-spacing: .1em;
}

.footer__powered {
  font-family: var(--font-body, 'Cinzel', serif);
  font-size: 25px;         /* ← 12px → 15px */
  font-style: italic;
  color: rgb(255, 255, 255);
}
.footer__brand-link {
  color: var(--gold, #d4a017);
  letter-spacing: .1em;
  text-decoration: none;
  transition: color .2s;
}
.footer__brand-link:hover { color: var(--gold-light, #f0c040); }
.footer__powered-link:hover { color: var(--gold-light, #f0c040); }

/* ── Responsive ── */
@media (max-width: 720px) {
  .footer__inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 36px;
    padding: 48px 6% 36px;
  }
  .footer__brand { align-items: flex-start; }
  .footer__vdivider {
    width: 56px; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(212,160,23,.3), transparent);
    margin: 0;
  }
  .footer__bottom-content {
    flex-direction: column;
    gap: 8px;
    text-align: center;
    padding: 16px 6%;
  }
}
</style>