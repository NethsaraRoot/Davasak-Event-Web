// <template>
//   <div class="login-overlay" v-if="visible" @click.self="$emit('close')">
//     <div class="login-card">
//       <button class="close-btn" @click="$emit('close')" aria-label="Close">×</button>

//       <div class="login-header">
//         <span class="eyebrow">Members Only</span>
//         <h2 class="login-title">Step Inside</h2>
//         <p class="login-sub">Sign in to book tickets & track your orders</p>
//       </div>

//       <div class="divider">
//         <span></span>
//         <p>continue with</p>
//         <span></span>
//       </div>

//       <div class="google-wrap">
//         <GoogleLogin :callback="handleGoogleLogin" />
//       </div>

//       <p v-if="error" class="login-error">{{ error }}</p>

//       <p class="login-footnote">
//         By continuing you agree to our Terms & Privacy Policy
//       </p>
//     </div>
//   </div>
// </template>

// <script setup>
// import { ref } from 'vue'
// import { GoogleLogin } from 'vue3-google-login'
// import axios from 'axios'

// defineProps({
//   visible: { type: Boolean, default: false }
// })

// const emit = defineEmits(['close', 'success'])
// const error = ref('')

// async function handleGoogleLogin(response) {
//   error.value = ''
//   try {
//     const res = await axios.post('http://localhost:8000/api/auth/google/', {
//       token: response.credential
//     })

//     localStorage.setItem('access_token', res.data.access)
//     localStorage.setItem('user', JSON.stringify(res.data.user))

//     emit('success', res.data.user)
//     emit('close')
//   } catch (err) {
//     error.value = 'Login failed. Please try again.'
//     console.error(err)
//   }
// }
// </script>

// <style scoped>
// .login-overlay {
//   position: fixed;
//   inset: 0;
//   background: rgba(8, 6, 4, 0.82);
//   backdrop-filter: blur(6px);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 1000;
//   animation: fadeIn 0.25s ease;
// }

// .login-card {
//   position: relative;
//   width: 100%;
//   max-width: 380px;
//   background: linear-gradient(160deg, #17130d 0%, #0d0b08 100%);
//   border: 1px solid rgba(212, 175, 90, 0.25);
//   border-radius: 4px;
//   padding: 44px 36px 32px;
//   box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(212, 175, 90, 0.05);
//   animation: slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
// }

// .close-btn {
//   position: absolute;
//   top: 14px;
//   right: 16px;
//   background: none;
//   border: none;
//   color: #a8987a;
//   font-size: 22px;
//   line-height: 1;
//   cursor: pointer;
//   transition: color 0.2s ease;
// }
// .close-btn:hover { color: #d4af5a; }

// .login-header {
//   text-align: center;
//   margin-bottom: 28px;
// }

// .eyebrow {
//   display: inline-block;
//   font-size: 11px;
//   letter-spacing: 0.18em;
//   text-transform: uppercase;
//   color: #d4af5a;
//   margin-bottom: 10px;
//   font-family: 'Georgia', serif;
// }

// .login-title {
//   font-family: 'Playfair Display', 'Georgia', serif;
//   font-size: 28px;
//   font-weight: 700;
//   color: #f3ead9;
//   margin: 0 0 8px;
//   letter-spacing: 0.01em;
// }

// .login-sub {
//   font-size: 13.5px;
//   color: #a8987a;
//   margin: 0;
// }

// .divider {
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   margin: 22px 0 20px;
// }
// .divider span {
//   flex: 1;
//   height: 1px;
//   background: rgba(212, 175, 90, 0.2);
// }
// .divider p {
//   font-size: 10.5px;
//   letter-spacing: 0.12em;
//   text-transform: uppercase;
//   color: #776b52;
//   margin: 0;
//   white-space: nowrap;
// }

// .google-wrap {
//   display: flex;
//   justify-content: center;
//   margin-bottom: 20px;
// }

// .login-error {
//   text-align: center;
//   color: #e07a5f;
//   font-size: 13px;
//   margin: 8px 0 0;
// }

// .login-footnote {
//   text-align: center;
//   font-size: 11px;
//   color: #5e5540;
//   margin: 18px 0 0;
//   line-height: 1.5;
// }

// @keyframes fadeIn {
//   from { opacity: 0; }
//   to { opacity: 1; }
// }
// @keyframes slideUp {
//   from { opacity: 0; transform: translateY(16px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// </style>