<template>
  <div class="upload-slip">
    <h2>Submit Payment Proof</h2>
    <p class="upload-sub">Fill in your details and attach your payment slip.</p>

    <form @submit.prevent="submitSlip">
      <label class="field">
        <span>Full Name</span>
        <input v-model="buyerName" type="text" placeholder="Your name" required />
      </label>

      <label class="field">
        <span>Email</span>
        <input v-model="buyerEmail" type="email" placeholder="you@example.com" required />
      </label>

      <label class="field">
        <span>Payment Slip</span>
        <input type="file" accept="image/*" @change="onFileChange" required />
      </label>

      <div v-if="previewUrl" class="preview">
        <img :src="previewUrl" alt="Selected payment slip preview" />
      </div>

      <button type="submit" :disabled="!canSubmit || submitting">
        {{ submitting ? 'Uploading…' : 'Submit' }}
      </button>

      <p v-if="successMsg" class="msg success">{{ successMsg }}</p>
      <p v-if="errorMsg" class="msg error">{{ errorMsg }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeUnmount } from 'vue'
import api from '@/api/axios'

const buyerName = ref('')
const buyerEmail = ref('')
const file = ref(null)
const previewUrl = ref(null)

const submitting = ref(false)
const successMsg = ref('')
const errorMsg = ref('')

const canSubmit = computed(() => buyerName.value && buyerEmail.value && file.value)

function onFileChange(e) {
  const selected = e.target.files[0]
  file.value = selected

  if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
  previewUrl.value = selected ? URL.createObjectURL(selected) : null
}

onBeforeUnmount(() => {
  if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
})

async function submitSlip() {
  submitting.value = true
  errorMsg.value = ''
  successMsg.value = ''

  const formData = new FormData()
  formData.append('buyer_name', buyerName.value)
  formData.append('buyer_email', buyerEmail.value)
  formData.append('slip_image', file.value)

  try {
    await api.post('/tickets/upload/', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })

    successMsg.value = 'Slip uploaded! Your ticket will be confirmed shortly by email.'
    buyerName.value = ''
    buyerEmail.value = ''
    file.value = null
    if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
    previewUrl.value = null
  } catch (err) {
    if (err.response?.data) {
      // surface Django/DRF field errors (e.g. invalid email) if present
      const fieldErrors = Object.values(err.response.data).flat().join(' ')
      errorMsg.value = fieldErrors || 'Upload failed. Please try again.'
    } else {
      errorMsg.value = 'Upload failed. Please check your connection and try again.'
    }
    console.error(err)
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.upload-slip {
  max-width: 420px;
  margin: 0 auto;
  padding: 32px;
}

h2 {
  margin: 0 0 6px;
}

.upload-sub {
  margin: 0 0 24px;
  opacity: 0.75;
  font-size: 14px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 13px;
}

.field input[type='text'],
.field input[type='email'] {
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #444;
  background: transparent;
  color: inherit;
  font-size: 14px;
}

.preview img {
  width: 100%;
  max-height: 240px;
  object-fit: contain;
  border-radius: 8px;
  border: 1px solid #444;
}

button {
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.msg {
  font-size: 13px;
  margin: 0;
}

.msg.success {
  color: #6fae7f;
}

.msg.error {
  color: #c06856;
}
</style>
