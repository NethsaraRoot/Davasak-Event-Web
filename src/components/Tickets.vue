```vue
<template>

  <section class="ticket-modal-overlay" id="tickets">

    <div class="ticket-modal">

      <!-- Close -->
      <button class="close-btn">
        ✕
      </button>

      <!-- Header -->
      <div class="modal-header">

        <span class="ticket-tag">
          LIVE IN CONCERT
        </span>

        <h2>
          Book Your Tickets
        </h2>

        <p>
          Experience the soul of music in a cinematic concert night.
        </p>

      </div>

      <!-- Form -->
      <form class="ticket-form">

        <div class="form-grid">

          <div class="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name">
          </div>

          <div class="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email">
          </div>

          <div class="form-group">
            <label>Phone Number</label>
            <input type="text" placeholder="+94 77 123 4567">
          </div>

          <div class="form-group">

            <label>Ticket Type</label>

            <select>
              <option>VIP GOLD</option>
              <option>PREMIUM</option>
              <option>STANDARD</option>
            </select>

          </div>

          <div class="form-group">
            <label>Number of Tickets</label>
            <input type="number" placeholder="2">
          </div>

          <div class="form-group">
            <label>Event Date</label>
            <input type="date">
          </div>

        </div>

        <!-- Card Section -->
        <div class="card-box">

          <h3>
            Card Payment
          </h3>

          <div class="form-group">
            <label>Card Holder Name</label>
            <input type="text" placeholder="John Doe">
          </div>

          <div class="form-group">
            <label>Card Number</label>
            <input type="text" placeholder="1234 5678 9012 3456">
          </div>

          <div class="card-grid">

            <div class="form-group">
              <label>Expiry Date</label>
              <input type="text" placeholder="MM/YY">
            </div>

            <div class="form-group">
              <label>CVV</label>
              <input type="text" placeholder="123">
            </div>

          </div>

        </div>

        <!-- Button -->
        <button class="pay-btn">
          PAY & BOOK NOW
        </button>

      </form>

    </div>

  </section>

</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&display=swap');

.ticket-modal-overlay{

  position: relative;

  width: 100%;

  padding: 120px 20px;

  background:
    radial-gradient(circle at top left, rgba(201,149,42,0.12), transparent 35%),
    radial-gradient(circle at bottom right, rgba(240,200,74,0.08), transparent 35%),
    linear-gradient(
      180deg,
      #050505 0%,
      #0d0903 40%,
      #050505 100%
    );

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  font-family: 'Cinzel', serif;
}

.ticket-modal{

  width: 95%;
  max-width: 950px;

  padding: 50px;

  border-radius: 32px;

  background:
    linear-gradient(
      180deg,
      rgba(12,8,2,0.96) 0%,
      rgba(20,12,3,0.94) 100%
    );

  border: 1px solid rgba(201,149,42,0.2);

  box-shadow:
    0 0 60px rgba(201,149,42,0.12),
    0 20px 80px rgba(0,0,0,0.7);

  position: relative;

  backdrop-filter: blur(16px);
}

.close-btn{

  position: absolute;

  top: 20px;
  right: 20px;

  width: 42px;
  height: 42px;

  border-radius: 50%;

  border: none;

  cursor: pointer;

  background: rgba(255,255,255,0.06);

  color: #f0c84a;

  font-size: 18px;

  transition: 0.3s ease;
}

.close-btn:hover{

  background: rgba(255,255,255,0.12);

  transform: rotate(90deg);
}

.modal-header{

  text-align: center;

  margin-bottom: 45px;
}

.ticket-tag{

  display: inline-block;

  padding: 8px 18px;

  border-radius: 999px;

  background: rgba(201,149,42,0.1);

  border: 1px solid rgba(201,149,42,0.22);

  color: #f0c84a;

  font-size: 0.72rem;

  letter-spacing: 0.22em;

  margin-bottom: 18px;
}

.modal-header h2{

  font-size: clamp(2.4rem,5vw,4rem);

  margin-bottom: 18px;

  background:
    linear-gradient(
      90deg,
      #fff8dc,
      #f0c84a,
      #c9952a
    );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.modal-header p{

  color: rgba(255,255,255,0.68);

  line-height: 1.8;

  max-width: 620px;

  margin: auto;
}

.ticket-form{

  width: 100%;
}

.form-grid{

  display: grid;

  grid-template-columns: repeat(2,1fr);

  gap: 24px;
}

.card-grid{

  display: grid;

  grid-template-columns: repeat(2,1fr);

  gap: 24px;
}

.form-group{

  display: flex;

  flex-direction: column;
}

.form-group label{

  margin-bottom: 12px;

  color: #f0c84a;

  font-size: 0.82rem;

  letter-spacing: 0.12em;
}

.form-group input,
.form-group select{

  width: 100%;

  padding: 18px 20px;

  border-radius: 16px;

  border: 1px solid rgba(201,149,42,0.15);

  background: rgba(255,255,255,0.04);

  color: white;

  outline: none;

  font-size: 0.95rem;

  transition: 0.3s ease;
}

.form-group input:focus,
.form-group select:focus{

  border-color: rgba(240,200,74,0.6);

  box-shadow:
    0 0 20px rgba(201,149,42,0.18);
}

.card-box{

  margin-top: 40px;

  padding: 35px;

  border-radius: 24px;

  background: rgba(255,255,255,0.03);

  border: 1px solid rgba(201,149,42,0.12);
}

.card-box h3{

  margin-bottom: 28px;

  color: #f0c84a;

  font-size: 1.2rem;

  letter-spacing: 0.12em;
}

.pay-btn{

  margin-top: 35px;

  width: 100%;

  border: none;

  cursor: pointer;

  padding: 20px;

  border-radius: 999px;

  font-family: 'Cinzel', serif;

  font-size: 0.88rem;

  font-weight: 700;

  letter-spacing: 0.22em;

  color: #080500;

  background:
    linear-gradient(
      135deg,
      #c9952a 0%,
      #fff8dc 45%,
      #f0c84a 70%,
      #c9952a 100%
    );

  box-shadow:
    0 0 30px rgba(201,149,42,0.35),
    0 10px 35px rgba(0,0,0,0.45);

  transition: 0.3s ease;
}

.pay-btn:hover{

  transform: translateY(-4px);

  box-shadow:
    0 0 50px rgba(201,149,42,0.5),
    0 16px 40px rgba(0,0,0,0.5);
}

/* Responsive */

@media (max-width: 768px){

  .ticket-modal-overlay{

    padding: 90px 18px;
  }

  .ticket-modal{

    padding: 32px 22px;

    border-radius: 24px;
  }

  .form-grid,
  .card-grid{

    grid-template-columns: 1fr;
  }

  .modal-header h2{

    font-size: 2.2rem;
  }

}

</style>
```
