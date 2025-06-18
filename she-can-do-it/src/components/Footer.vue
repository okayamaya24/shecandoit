<template>
  <footer class="footer">
    <div class="footer-content">
      <p>Got questions, partnership ideas, or media inquiries?</p>
      <p>
        Email:
        <a href="mailto:hello@shecandoitmovement.com" class="footer-link">
          hello@shecandoitmovement.com
        </a>
      </p>
      <div class="social-links">
        <a href="https://instagram.com" target="_blank" class="footer-link">Instagram</a>
        <a href="https://linkedin.com" target="_blank" class="footer-link">LinkedIn</a>
        <a href="https://facebook.com" target="_blank" class="footer-link">Facebook</a>
      </div>
      <p class="footer-rights">© 2025 SHE CAN DO I.T.™ All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background-color: var(--black);
  color: var(--white);
  padding: 2rem 1rem;
  text-align: center;
  font-size: 0.95rem;
  line-height: 1.6;
}

.footer-link {
  color: var(--hot-pink);
  margin: 0 0.5rem;
  text-decoration: none;
  font-weight: 500;
}

.footer-link:hover {
  text-decoration: underline;
}

.social-links {
  margin-top: 0.5rem;
}

.footer-rights {
  margin-top: 1.5rem;
  font-size: 0.85rem;
  color: #ccc;
}
</style>