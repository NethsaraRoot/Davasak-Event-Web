<template>
  <section class="ticket-page">
    <!-- Hero -->
    <div class="hero">
      <span class="eyebrow">Reserve your spot</span>
      <h1>Book your ticket</h1>
      <p class="sub">
        Pick a ticket type, transfer the amount below, then upload your slip to
        confirm your seat.
      </p>
    </div>

    <!-- Ticket shell — one physical ticket, torn into two stubs -->
    <div class="ticket-shell">
      <!-- Info stub -->
      <div class="stub stub-info">
        <div class="ticket-art">
          <img src="../assets/image/Ticket.png" alt="Event ticket" />
        </div>

        <div class="stub-block">
          <span class="block-label">01 — Select your ticket</span>
          <div class="ticket-types">
            <button
              type="button"
              class="ticket-type-card"
              :class="{ selected: form.ticketType === 'general' }"
              @click="form.ticketType = 'general'"
            >
              <span class="check-dot" aria-hidden="true" />
              <div class="type-info">
                <span class="type-name">General Admission</span>
                <span class="type-desc">Standard entry</span>
              </div>
              <span class="type-price">Rs. 1,200</span>
            </button>

            <button
              type="button"
              class="ticket-type-card"
              :class="{ selected: form.ticketType === 'vip' }"
              @click="form.ticketType = 'vip'"
            >
              <span class="check-dot" aria-hidden="true" />
              <div class="type-info">
                <span class="type-name">VIP Admission</span>
                <span class="type-desc">Priority entry & perks</span>
              </div>
              <span class="type-price">Rs. 1,700</span>
            </button>
          </div>
        </div>

        <div class="stub-block">
          <span class="block-label">02 — Transfer payment</span>
          <ul class="bank-list">
            <li><span>Bank</span><strong>BOC</strong></li>
            <li>
              <span>Account name</span><strong>B.M.N.S.Buddhasinghe</strong>
            </li>
            <li><span>Account number</span><strong>90803600</strong></li>
            <li><span>Branch</span><strong>Ruwanwella Branch</strong></li>
          </ul>
          <p class="bank-note">Use your full name as the payment reference.</p>
        </div>
      </div>

      <!-- Perforation -->
      <div class="perforation" aria-hidden="true">
        <span class="notch notch-top" />
        <span class="tear-line" />
        <span class="notch notch-bottom" />
      </div>

      <!-- Form stub -->
      <div class="stub stub-form">
        <div class="amount-due">
          <span class="block-label">03 — Amount due</span>
          <div class="amount-row">
            <span class="amount-value">{{ selectedPrice }}</span>
            <span class="amount-type">{{ ticketTypeLabel }}</span>
          </div>
        </div>

        <form
          v-if="!submitted"
          @submit.prevent="handleSubmit"
          class="ticket-form"
        >
          <div class="field">
            <label for="fullName">Full name</label>
            <input
              id="fullName"
              v-model.trim="form.name"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div class="field">
            <label for="email">Email</label>
            <input
              id="email"
              v-model.trim="form.email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div class="field">
            <label for="slip">Payment slip</label>
            <label
              class="upload-box"
              :class="{ 'has-file': form.slip }"
              for="slip"
            >
              <span v-if="!form.slip"
                >Click to upload payment slip (image)</span
              >
              <span v-else class="file-chosen">✓ {{ form.slip.name }}</span>
            </label>
            <input
              id="slip"
              type="file"
              accept="image/*"
              @change="handleFile"
              required
              class="sr-only"
            />
          </div>

          <p v-if="error" class="error-text">{{ error }}</p>

          <button type="submit" class="submit-btn" :disabled="loading">
            <span class="btn-shimmer" />
            {{ loading ? "SUBMITTING..." : "CONFIRM BOOKING" }}
          </button>
        </form>

        <div v-else class="success-state">
          <div class="success-icon">&#10003;</div>
          <h3>Booking received</h3>
          <p>
            We've got your details, {{ form.name }}. Your
            <strong>{{ ticketTypeLabel }}</strong> confirmation will be sent to
            <strong>{{ form.email }}</strong> once your slip is verified.
          </p>
          <router-link to="/" class="submit-btn back-link">
            <span class="btn-shimmer" />
            BACK TO HOME
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import api from "../api/axios";

const loading = ref(false);
const submitted = ref(false);
const error = ref("");

const form = reactive({
  name: "",
  email: "",
  ticketType: "general",
  slip: null,
});

const ticketTypeLabel = computed(() =>
  form.ticketType === "vip" ? "VIP Admission" : "General Admission",
);

const selectedPrice = computed(() =>
  form.ticketType === "vip" ? "Rs. 1,700" : "Rs. 1,200",
);

function handleFile(e) {
  form.slip = e.target.files[0] || null;
}

async function handleSubmit() {
  error.value = "";
  if (!form.slip) {
    error.value = "Please upload your payment slip.";
    return;
  }

  loading.value = true;
  try {
    const data = new FormData();
    data.append("buyer_name", form.name);
    data.append("buyer_email", form.email);
    data.append("ticket_type", form.ticketType);
    data.append("slip_image", form.slip);

    await api.post("/tickets/upload/", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    submitted.value = true;
  } catch (err) {
    if (err.response?.data) {
      const fieldErrors = Object.values(err.response.data).flat().join(" ");
      error.value = fieldErrors || "Something went wrong. Please try again.";
    } else {
      error.value =
        "Could not reach the server. Please check your connection and try again.";
    }
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Playfair+Display:ital,wght@0,700;1,600&display=swap");

.ticket-page {
  min-height: 100vh;
  background:
    radial-gradient(
      ellipse 900px 500px at 50% -10%,
      rgba(201, 149, 42, 0.1),
      transparent 60%
    ),
    #08070a;
  padding: 150px 6% 100px;
  box-sizing: border-box;
  color: #f3ead9;
}

/* ── Hero ── */
.hero {
  text-align: center;
  max-width: 560px;
  margin: 0 auto 56px;
}

.eyebrow {
  font-family: "Cinzel", serif;
  font-size: 11.5px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #d4af5a;
}

.hero h1 {
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: clamp(34px, 5vw, 46px);
  margin: 12px 0 14px;
  color: #f8ecc7;
  letter-spacing: 0.01em;
}

.sub {
  color: #a8987a;
  font-size: 14.5px;
  line-height: 1.65;
}

/* ── Ticket shell ── */
.ticket-shell {
  max-width: 920px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.15fr auto 1fr;
  background: linear-gradient(165deg, #17130d 0%, #0c0a07 100%);
  border: 1px solid rgba(212, 175, 90, 0.28);
  border-radius: 16px;
  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.55),
    0 0 0 1px rgba(212, 175, 90, 0.04);
  overflow: hidden;
}

.stub {
  padding: 40px 38px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.stub-info {
  background: linear-gradient(
    165deg,
    rgba(255, 255, 255, 0.02) 0%,
    transparent 60%
  );
}

.block-label {
  display: block;
  font-family: "Cinzel", serif;
  font-size: 10.5px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #d4af5a;
  margin-bottom: 14px;
}

/* ── Ticket art ── */
.ticket-art img {
  width: 100%;
  display: block;
  border-radius: 10px;
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(212, 175, 90, 0.18);
}

/* ── Ticket type cards ── */
.ticket-types {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.ticket-type-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(212, 175, 90, 0.22);
  border-radius: 8px;
  padding: 13px 16px;
  cursor: pointer;
  text-align: left;
  transition:
    border-color 0.2s ease,
    background 0.2s ease;
}

.ticket-type-card:hover {
  border-color: rgba(240, 200, 74, 0.55);
}

.ticket-type-card.selected {
  border-color: #f0c84a;
  background: rgba(240, 200, 74, 0.07);
}

.check-dot {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1.5px solid rgba(212, 175, 90, 0.45);
  flex-shrink: 0;
  position: relative;
  transition: border-color 0.2s ease;
}

.ticket-type-card.selected .check-dot {
  border-color: #f0c84a;
}

.ticket-type-card.selected .check-dot::after {
  content: "";
  position: absolute;
  inset: 3px;
  border-radius: 50%;
  background: #f0c84a;
}

.type-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}

.type-name {
  font-family: "Cinzel", serif;
  font-size: 12.5px;
  letter-spacing: 0.06em;
  color: #f3ead9;
}

.type-desc {
  font-size: 11.5px;
  color: #a8987a;
}

.type-price {
  font-family: "Cinzel", serif;
  font-weight: 700;
  color: #f0c84a;
  font-size: 14px;
  white-space: nowrap;
}

/* ── Bank details ── */
.bank-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.bank-list li {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid rgba(212, 175, 90, 0.1);
  font-size: 13px;
}

.bank-list li:last-child {
  border-bottom: none;
}

.bank-list span {
  color: #a8987a;
}

.bank-list strong {
  color: #f3ead9;
  font-weight: 500;
  letter-spacing: 0.02em;
}

.bank-note {
  font-size: 11.5px;
  color: #7d715a;
  margin: 12px 0 0;
  line-height: 1.5;
}

/* ── Perforation ── */
.perforation {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0 3px;
}

.notch {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #08070a;
  flex-shrink: 0;
}

.notch-top {
  margin-top: -11px;
}
.notch-bottom {
  margin-bottom: -11px;
}

.tear-line {
  flex: 1;
  width: 0;
  border-left: 2px dashed rgba(212, 175, 90, 0.3);
  margin: 6px 0;
}

/* ── Form stub ── */
.stub-form {
  background: linear-gradient(
    165deg,
    rgba(240, 200, 74, 0.03) 0%,
    transparent 55%
  );
}

.amount-due {
  border-bottom: 1px solid rgba(212, 175, 90, 0.15);
  padding-bottom: 24px;
}

.amount-row {
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
}

.amount-value {
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: 32px;
  color: #f0c84a;
}

.amount-type {
  font-family: "Cinzel", serif;
  font-size: 11px;
  letter-spacing: 0.1em;
  color: #a8987a;
}

.ticket-form {
  display: flex;
  flex-direction: column;
}

.field {
  margin-bottom: 18px;
}

.field label {
  display: block;
  font-family: "Cinzel", serif;
  font-size: 10.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #d4af5a;
  margin-bottom: 8px;
}

.field input[type="text"],
.field input[type="email"] {
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(212, 175, 90, 0.25);
  border-radius: 6px;
  padding: 12px 14px;
  color: #f3ead9;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
  transition:
    border-color 0.2s ease,
    background 0.2s ease;
}

.field input::placeholder {
  color: #5e5540;
}

.field input:focus {
  border-color: rgba(240, 200, 74, 0.75);
  background: rgba(255, 255, 255, 0.045);
}

.upload-box {
  display: block;
  width: 100%;
  border: 1px dashed rgba(212, 175, 90, 0.4);
  border-radius: 6px;
  padding: 16px 12px;
  font-size: 12.5px;
  color: #a8987a;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  transition:
    border-color 0.2s ease,
    color 0.2s ease;
}

.upload-box:hover {
  border-color: rgba(240, 200, 74, 0.8);
  color: #f0c84a;
}

.upload-box.has-file {
  border-style: solid;
  border-color: rgba(240, 200, 74, 0.8);
  background: rgba(240, 200, 74, 0.06);
}

.file-chosen {
  color: #f0c84a;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}

.error-text {
  color: #e0685c;
  font-size: 12.5px;
  margin: -8px 0 16px;
}

.submit-btn {
  font-family: "Cinzel", serif;
  width: 100%;
  padding: 14px;
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
    0 0 30px rgba(201, 149, 42, 0.4),
    0 4px 20px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    transform 0.25s ease,
    box-shadow 0.3s ease;
  margin-top: 8px;
}

@keyframes btnShim {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 220% center;
  }
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
  0% {
    background-position: -100% center;
  }
  100% {
    background-position: 250% center;
  }
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow:
    0 0 48px rgba(201, 149, 42, 0.65),
    0 8px 28px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);
}

.submit-btn:disabled {
  opacity: 0.55;
  cursor: not-allowed;
  animation: none;
  transform: none;
}

.submit-btn:focus-visible,
.ticket-type-card:focus-visible,
.upload-box:focus-visible {
  outline: 2px solid #f0c84a;
  outline-offset: 2px;
}

/* ── Success ── */
.success-state {
  text-align: center;
  padding: 8px 0 4px;
}

.success-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(180deg, #f0c84a, #c9952a);
  color: #0a0700;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}

.success-state h3 {
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: 24px;
  color: #f3ead9;
  margin: 0 0 10px;
}

.success-state p {
  color: #a8987a;
  font-size: 13.5px;
  line-height: 1.65;
  margin-bottom: 24px;
}

.back-link {
  text-decoration: none;
}

/* ── Responsive ── */
@media (max-width: 860px) {
  .ticket-shell {
    grid-template-columns: 1fr;
    max-width: 460px;
  }

  .perforation {
    flex-direction: row;
    padding: 3px 0;
  }

  .notch-top {
    margin-top: 0;
    margin-left: -11px;
  }
  .notch-bottom {
    margin-bottom: 0;
    margin-right: -11px;
  }

  .tear-line {
    width: auto;
    height: 0;
    flex: 1;
    border-left: none;
    border-top: 2px dashed rgba(212, 175, 90, 0.3);
    margin: 0 6px;
  }

  .stub {
    padding: 34px 28px;
  }
}

@media (max-width: 480px) {
  .ticket-page {
    padding: 120px 5% 70px;
  }

  .stub {
    padding: 28px 22px;
  }

  .amount-value {
    font-size: 27px;
  }
}
</style>
