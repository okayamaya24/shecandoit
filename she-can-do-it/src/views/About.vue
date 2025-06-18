<template>
  <section class="about">
    <h2>About SHE CAN DO I.T.<sup class="trademark">™</sup></h2>

    <!-- MISSION SECTION -->
    <div class="section stagger">
      <div class="text">
        <h3>Our Mission</h3>
        <p>
          SHE CAN DO I.T.<sup class="trademark">™</sup> was created to ignite power and confidence in women who work, lead,
          and innovate in technology. We exist to help women feel seen, heard, and supported in an industry that doesn’t always
          make space for them. We’re here to shift that.
        </p>
      </div>
      <div class="image">
        <img src="https://via.placeholder.com/500x300?text=Mission+Photo" alt="Mission visual placeholder" />
      </div>
    </div>

    <!-- FOUNDER SECTION -->
    <div class="section stagger reverse">
      <div class="text">
        <h3>Our Founder</h3>
        <p>
          Caryn Warren is a tech leader, mother, wife, speaker, and movement maker with nearly three decades in IT. She knows
          firsthand the challenges women face in male-dominated environments—and she’s made it her mission to open doors,
          lift voices, and celebrate wins.
        </p>
      </div>
      <div class="image">
        <img src="/Caryn.jpg" alt="Portrait of Caryn Warren, Founder" />
      </div>
    </div>

    <!-- WHY IT MATTERS SECTION -->
    <div class="section stagger">
      <div class="text">
        <h3>Why This Movement Matters</h3>
        <p>
          Representation matters. Visibility matters. Opportunity matters.
          SHE CAN DO I.T.<sup class="trademark">™</sup> isn’t just a phrase—it’s a battle cry. It’s time we built a future in
          tech that reflects our brilliance.
        </p>
      </div>
      <div class="image">
        <img src="https://via.placeholder.com/500x300?text=Impact+Visual" alt="Why it matters placeholder" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 4rem 2rem;
  background-color: var(--white);
  color: var(--black);
  max-width: 1200px;
  margin: auto;
}

h2 {
  font-size: 2.5rem;
  color: var(--hot-pink);
  text-align: center;
  margin-bottom: 3rem;
}

.section {
  margin-bottom: 4rem;
}

.stagger {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.stagger.reverse {
  flex-direction: column;
}

@media (min-width: 768px) {
  .stagger {
    flex-direction: row;
    justify-content: space-between;
  }

  .stagger.reverse {
    flex-direction: row-reverse;
  }
}

.text {
  flex: 1;
  max-width: 600px;
}

.image {
  flex: 1;
  max-width: 500px;
  height: auto;
  border-radius: 8px;
  background-color: #f0f0f0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

h3 {
  font-size: 1.75rem;
  color: var(--hot-pink);
  margin-bottom: 1rem;
}

p {
  font-size: 1.125rem;
  line-height: 1.7;
}

.trademark {
  font-size: 0.6em;
  vertical-align: top;
  margin-left: 0.1em;
}
</style>