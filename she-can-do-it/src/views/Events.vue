<template>
  <section class="events-section">
    <h1 class="events-heading">Upcoming Events</h1>

    <div class="flip-wrapper" @click="flipped = !flipped" :class="{ flipped }">
      <div class="card-inner">
        <!-- FRONT -->
        <div class="card front">
          <img src="/scdit napa art.png" alt="Napa Event" />
          <div class="front-text">
            <span class="month">OCT</span>
            <span class="day">23–26</span>
          </div>
          <span class="flip-hint">Tap to flip</span>
        </div>

        <!-- BACK -->
        <div class="card back">
          <h2>The SHE CAN DO I.T.<sup class="trademark">™</sup> Experience 2025 – Napa 🍇</h2>
          <p><em>October 23–26, 2025</em></p>
          <p><em>The Westin Verasa – Napa, California</em></p>
          <p>
            Join us for a 4-day, 3-night retreat designed to refuel your spirit and elevate your purpose.
            Expect intimate workshops, authentic connections, gourmet food, and moments of pure joy.
          </p>
          <ul>
            <li>Luxury lodging in single-occupancy king rooms</li>
            <li>All meals at the hotel, plus a gourmet experience aboard the Napa Valley Train</li>
            <li>Inspiring workshops and breakout sessions</li>
            <li>Swag bags, surprises, and more</li>
          </ul>
          <p class="note">*Note: The itinerary is subject to change.</p>
          <div class="buttons">
            <a
  href="https://www.carynwarren.com/napa-retreat-2025-sales-page"
  class="btn primary"
  target="_blank"
  rel="noopener noreferrer"
>
  Reserve Your Spot
</a>
<a
  href="/RetreatOverview2025.pdf"
  class="btn outline"
  target="_blank"
  rel="noopener noreferrer"
>
  Download Retreat Overview
</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- MORE EVENTS TEASER -->
<section class="more-events">
  <h2>More Events Coming Soon ✨</h2>
  <p>
    SHE CAN DO I.T.<sup class="trademark">™</sup> is just getting started. From virtual meetups to in-person power moves,
    we’re building bold spaces for women in tech to connect, grow, and rise together.
  </p>
  <p class="soft-text">Stay tuned for upcoming announcements, or <a href="/newsletter" class="inline-link">join our email list</a> to be the first to know.</p>
</section>
</template>

<script setup>
import { ref } from 'vue'
const flipped = ref(false)
</script>

<style scoped>
:root {
  --hot-pink: #ff038e;
  --white: #ffffff;
  --black: #000000;
}

.events-section {
  padding: 3rem 1rem;
  text-align: center;
}

.events-heading {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: var(--black);
}

.flip-wrapper {
  perspective: 1200px;
  width: 270px;
  margin: auto;
  min-height: 400px;
  transition: all 0.6s ease;
}

.flip-wrapper.flipped {
  width: 700px;
  min-height: 600px;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-wrapper.flipped .card-inner {
  transform: rotateY(180deg);
}

.card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  backface-visibility: hidden;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
}

.card.front {
  background: #fff;
  transition: transform 0.3s ease;
}

.card.front:hover {
  transform: scale(1.015);
  cursor: pointer;
}

.card.front img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.front-text {
  position: absolute;
  top: 20px;
  left: 20px;
  text-align: left;
  color: var(--hot-pink);
  font-weight: bold;
  font-size: 1.25rem;
}

.front-text .day {
  display: block;
  color: var(--white);
  font-size: 2rem;
  margin-top: -5px;
}

.flip-hint {
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 0.85rem;
  color: var(--white);
  background: rgba(0, 0, 0, 0.5);
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
}

.card.back {
  transform: rotateY(180deg);
  background: var(--black);
  color: var(--white);
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card.back h2 {
  color: var(--hot-pink);
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
}

.card.back p,
.card.back ul {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.card.back ul {
  list-style: disc;
  padding-left: 1.25rem;
}

.note {
  color: #aaa;
  font-size: 0.85rem;
  margin-top: -0.5rem;
}

.buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1.25rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.5rem 1.25rem;
  font-weight: bold;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn.primary {
  background-color: var(--hot-pink);
  color: var(--white);
}

.btn.primary:hover {
  background-color: #e5037f;
}

.btn.outline {
  border: 2px solid var(--hot-pink);
  color: var(--hot-pink);
  background-color: transparent;
}

.btn.outline:hover {
  background-color: var(--hot-pink);
  color: var(--white);
}

.trademark {
  font-size: 0.6em;
  vertical-align: top;
  margin-left: 0.1em;
}

.more-events {
  max-width: 800px;
  margin: 4rem auto 2rem;
  padding: 2rem;
  text-align: center;
  background-color: #f9f9f9;
  border: 2px dashed var(--hot-pink);
  border-radius: 1rem;
}

.more-events h2 {
  font-size: 1.75rem;
  color: var(--hot-pink);
  margin-bottom: 1rem;
}

.more-events p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--black);
}

.soft-text {
  color: #666;
  font-size: 0.95rem;
  margin-top: 1rem;
}

.inline-link {
  color: var(--hot-pink);
  font-weight: 600;
  text-decoration: underline;
}

.inline-link:hover {
  color: #e5037f;
}

@media (max-width: 768px) {
  .flip-wrapper.flipped {
    width: 100%;
  }

  .card.back {
    padding: 1.5rem 1rem;
  }

  .buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
    text-align: center;
  }
}
</style>

