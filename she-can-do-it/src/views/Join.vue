<template>
  <section class="join-section">
    <h1 class="join-heading">Be Part of Something Bigger</h1>
    <p class="join-subtext">
      SHE CAN DO I.T.<sup class="trademark">™</sup> is a movement — and you're invited. Whether you're writing your first line
      of code or leading the next big tech breakthrough, this space is for you. 💻✨
    </p>

    <div class="options-grid">
      <!-- Option 1 -->
      <div class="join-card">
        <h3>Become a Member</h3>
        <p>Get early access to events, exclusive resources, and mentorship opportunities.</p>
        <RouterLink to="/newsletter" class="btn primary">Join the Email List</RouterLink>
      </div>

      <!-- Option 2 -->
      <div class="join-card">
        <h3>Join Our Facebook Group</h3>
        <p>Connect with other women in tech, share wins, ask questions, and grow together.</p>
        <a
          href="https://www.facebook.com/groups/shecandoitmovement"
          target="_blank"
          rel="noopener noreferrer"
          class="btn outline"
        >
          Visit the Group
        </a>
      </div>

      <!-- Option 3 -->
      <div class="join-card">
        <h3>Get Mentorship Info</h3>
        <p>Interested in mentoring or being mentored? Let us know — we're building bridges.</p>
        <a
          href="mailto:hello@shecandoitmovement.com?subject=Mentorship Inquiry"
          class="btn primary"
        >
          Email Us
        </a>
      </div>
    </div>

    <p class="closing-line">
      This isn’t just tech. This is legacy. 🚀
    </p>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.join-section {
  padding: 4rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.join-heading {
  font-size: 2.5rem;
  color: var(--hot-pink);
  margin-bottom: 1rem;
}

.join-subtext {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}

.options-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .options-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.join-card {
  border: 2px solid var(--hot-pink);
  border-radius: 1rem;
  padding: 2rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
}

.join-card h3 {
  font-size: 1.3rem;
  color: var(--hot-pink);
  margin-bottom: 0.5rem;
}

.join-card p {
  font-size: 1rem;
  line-height: 1.6;
}

.btn {
  padding: 0.6rem 1.5rem;
  font-weight: bold;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
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

.closing-line {
  margin-top: 4rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: #444;
}

.trademark {
  font-size: 0.6em;
  vertical-align: top;
  margin-left: 0.1em;
}
</style>