<template>
  <!-- Navbar button - copy this <button> into your existing navbar markup -->
  <button class="get-ticket-btn" @click="isOpen = true">GET TICKET</button>

  <!-- Modal -->
  <Teleport to="body">
    <div v-if="isOpen" class="overlay" @click.self="closeModal">
      <div class="modal">
        <button class="close-btn" @click="closeModal" aria-label="Close">&times;</button>

        <div class="modal-header">
          <span class="eyebrow">Reserve your spot</span>
          <h2>Book your ticket</h2>
        </div>

        <form v-if="!submitted" @submit.prevent="handleSubmit" class="ticket-form">
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
            <label class="upload-box" :class="{ 'has-file': form.slip }" for="slip">
              <span v-if="!form.slip">Click to upload payment slip (image or PDF)</span>
              <span v-else>{{ form.slip.name }}</span>
            </label>
            <input
              id="slip"
              type="file"
              accept="image/*,.pdf"
              @change="handleFile"
              required
              class="sr-only"
            />
          </div>

          <p v-if="error" class="error-text">{{ error }}</p>

          <button type="submit" class="submit-btn" :disabled="loading">
            {{ loading ? 'Submitting...' : 'Confirm booking' }}
          </button>
        </form>

        <div v-else class="success-state">
          <div class="success-icon">&#10003;</div>
          <h3>Booking received</h3>
          <p>We've got your details, {{ form.name }}. Confirmation will be sent to
            <strong>{{ form.email }}</strong> once your payment slip is verified.</p>
          <button class="submit-btn" @click="closeModal">Done</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { reactive, ref } from 'vue'

const isOpen = ref(false)
const loading = ref(false)
const submitted = ref(false)
const error = ref('')

const form = reactive({
  name: '',
  email: '',
  slip: null
})

function handleFile(e) {
  form.slip = e.target.files[0] || null
}

function closeModal() {
  isOpen.value = false
  submitted.value = false
  error.value = ''
  form.name = ''
  form.email = ''
  form.slip = null
}

async function handleSubmit() {
  error.value = ''
  if (!form.slip) {
    error.value = 'Please upload your payment slip.'
    return
  }
  loading.value = true
  try {
    // Replace this block with your real API call, e.g.:
    // const data = new FormData()
    // data.append('name', form.name)
    // data.append('email', form.email)
    // data.append('slip', form.slip)
    // await fetch('/api/book-ticket', { method: 'POST', body: data })

    await new Promise((resolve) => setTimeout(resolve, 900))
    submitted.value = true
  } catch (err) {
    error.value = 'Something went wrong. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.get-ticket-btn {
  background: linear-gradient(180deg, #f3d576, #c9a227);
  color: #1a1204;
  border: none;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 10px 22px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.get-ticket-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 14px rgba(201, 162, 39, 0.4);
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(8, 7, 4, 0.72);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
}

.modal {
  position: relative;
  width: 100%;
  max-width: 420px;
  background: #16140f;
  border: 1px solid #c9a227;
  border-radius: 12px;
  padding: 32px 28px 28px;
  box-shadow: 0 0 0 1px rgba(201, 162, 39, 0.15), 0 20px 60px rgba(0, 0, 0, 0.5);
  color: #f5f0e1;
  font-family: 'Inter', system-ui, sans-serif;
}

.close-btn {
  position: absolute;
  top: 14px;
  right: 16px;
  background: none;
  border: none;
  color: #c9a227;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
}

.modal-header {
  margin-bottom: 22px;
}
.eyebrow {
  color: #c9a227;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.modal-header h2 {
  margin: 6px 0 0;
  font-size: 22px;
  font-weight: 700;
  color: #f8ecc7;
}

.field {
  margin-bottom: 16px;
}
.field label {
  display: block;
  font-size: 13px;
  color: #d9c98a;
  margin-bottom: 6px;
}
.field input[type='text'],
.field input[type='email'] {
  width: 100%;
  background: #0f0d09;
  border: 1px solid #453b21;
  border-radius: 6px;
  padding: 10px 12px;
  color: #f5f0e1;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s ease;
}
.field input:focus {
  border-color: #c9a227;
}

.upload-box {
  display: block;
  width: 100%;
  border: 1px dashed #6b5b25;
  border-radius: 6px;
  padding: 14px 12px;
  font-size: 13px;
  color: #b8ac83;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  transition: border-color 0.15s ease, color 0.15s ease;
}
.upload-box:hover {
  border-color: #c9a227;
  color: #e8c766;
}
.upload-box.has-file {
  border-style: solid;
  border-color: #c9a227;
  color: #e8c766;
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
  font-size: 13px;
  margin: -6px 0 14px;
}

.submit-btn {
  width: 100%;
  background: linear-gradient(180deg, #f3d576, #c9a227);
  color: #1a1204;
  border: none;
  font-weight: 700;
  padding: 12px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.15s ease;
}
.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.success-state {
  text-align: center;
  padding: 12px 0 4px;
}
.success-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #c9a227;
  color: #16140f;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 14px;
}
.success-state h3 {
  margin: 0 0 8px;
  color: #f8ecc7;
}
.success-state p {
  color: #d9c98a;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 20px;
}
</style>