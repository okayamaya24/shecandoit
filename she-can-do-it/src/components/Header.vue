<template>
    <header class="header">
      <div class="logo-container">
        <img src="/shecandoit-logo.jpg" alt="SHE CAN DO I.T. logo" class="logo-img" />
    </div>
      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/events">Events</RouterLink>
        <a href="https://yourblogsite.com" target="_blank">Blog</a>
        <a href="https://yourshopsite.com" target="_blank">Shop</a>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>
  </template>
  
  <script setup>
  // no logic needed
  </script>
  
  <style scoped>
  .header {
    background-color: var(--white);
    color: var(--black);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 2rem;
    border-bottom: 3px solid var(--hot-pink);
    position: sticky;
    top: 0;
    z-index: 10;
  }
  
  .logo-img {
  height: 40px;
  width: auto;
  margin-right: 0.5rem;
}
  
  .nav a {
    margin-left: 1.5rem;
    text-decoration: none;
    color: var(--black);
    font-weight: 500;
    transition: color 0.2s ease-in-out;
  }
  
  .nav a:hover {
    color: var(--hot-pink);
  }
  </style>