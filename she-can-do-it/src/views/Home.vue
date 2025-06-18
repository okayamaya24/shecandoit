<template>
  <!-- HERO SECTION -->
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-headline">
        SHE CAN DO I.T.<sup class="trademark">™</sup>
      </h1>
      <p class="hero-subheadline">Empowering Women in Tech, Period.</p>
      <RouterLink to="/join" class="hero-cta" aria-label="Join the Movement">Join the Movement</RouterLink>
    </div>
  </section>

  <!-- MOVEMENT SNAPSHOT -->
  <section class="snapshot-section">
    <h3>Movement Snapshot</h3>
    <p>
      We’re more than a brand. We’re a movement rooted in real experience, representation, and results.
      Founded by Caryn Warren, a trailblazing woman in tech with nearly 30 years of experience, this platform is here
      to remind every woman in tech that she belongs, she leads, and she CAN do it.
    </p>
    <h4 class="subtagline">Founded by Caryn Warren. Powered by purpose.</h4>
  </section>

  <!-- EVENT TEASER -->
  <section class="teaser-card">
    <h3>The SHE CAN DO I.T.<sup class="trademark">™</sup> Experience 2025 – Napa</h3>
    <p>
      Join us in beautiful Napa Valley for a transformative retreat that blends luxury, sisterhood, and strategy.
    </p>
    <a
  href="https://www.carynwarren.com/napa-retreat-2025-sales-page"
  class="cta"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Learn More About the Napa Retreat"
>
  Learn More
</a>
  </section>

  <!-- STORE TEASER -->
  <section class="teaser-card light">
    <h3>Rock the Movement</h3>
    <p>
      Show up and show out with gear that celebrates your strength. Explore exclusive merch curated for bold women in tech.
    </p>
    <a
  href="https://shecandoit.shop"
  class="cta"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Shop SHE CAN DO I.T.™ Merch"
>
  Shop Now
</a>
  </section>

  <!-- NEWSLETTER SIGNUP -->
  <section class="newsletter-section">
    <h3>Stay Connected</h3>
    <p>
      Stay in the loop for event announcements, resources, and inspiration.
    </p>
    <RouterLink to="/newsletter" class="cta" aria-label="Sign Up for Email Newsletter">Join the Email List</RouterLink>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
:root {
  --hot-pink: #ff038e;
  --white: #ffffff;
  --black: #000000;
}

/* HERO SECTION */
.hero-section {
  background: linear-gradient(to bottom right, var(--black), var(--hot-pink));
  color: var(--white);
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-headline {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  margin-bottom: 1rem;
  color: var(--hot-pink);
}

.hero-subheadline {
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  margin-bottom: 2rem;
  color: var(--black);
}

.hero-cta {
  background-color: var(--hot-pink);
  color: var(--white);
  border: none;
  padding: 0.9rem 2rem;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}
.hero-cta:hover {
  background-color: #e5037f;
}

/* SNAPSHOT */
.snapshot-section {
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.snapshot-section h3 {
  font-size: 1.75rem;
  font-weight: bold;
  color: var(--hot-pink);
  margin-bottom: 1rem;
}

.snapshot-section p {
  font-size: 1.125rem;
  line-height: 1.6;
}

.subtagline {
  font-style: italic;
  color: #444;
  margin-top: 1rem;
  font-size: 1rem;
}

/* CARD BLOCKS */
.teaser-card {
  background-color: var(--black);
  color: var(--white);
  border-radius: 1rem;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 800px;
  text-align: center;
  box-shadow: 0 0 20px rgba(255, 3, 142, 0.15);
}

.teaser-card.light {
  background-color: var(--white);
  color: var(--black);
  border: 2px solid var(--hot-pink);
}

.teaser-card h3 {
  font-size: 1.5rem;
  color: var(--hot-pink);
  margin-bottom: 1rem;
}

.teaser-card p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* NEWSLETTER */
.newsletter-section {
  padding: 4rem 2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.newsletter-section h3 {
  font-size: 1.5rem;
  color: var(--hot-pink);
  margin-bottom: 1rem;
}

.newsletter-section p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

/* CTA BUTTON (shared) */
.cta {
  background-color: var(--hot-pink);
  color: var(--white);
  border: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
  text-decoration: none;
  display: inline-block;
}

.cta:hover {
  background-color: #e5037f;
  transform: scale(1.05);
}

.trademark {
  font-size: 0.6em;
  vertical-align: top;
  margin-left: 0.1em;
}

/* MOBILE TWEAKS */
@media (max-width: 600px) {
  .hero-cta,
  .cta {
    width: 100%;
    padding: 1rem;
  }

  .hero-section {
    padding: 2rem 1rem;
  }

  .teaser-card,
  .newsletter-section,
  .snapshot-section {
    padding: 2rem 1rem;
  }
}
</style>