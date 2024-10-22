<template>
  <section>

    <Hero id="hero"/>
    <LogoCloud/>

    <Stats id="stats"/>
    
    <Features id="features"/>
    
    <CTA2/>
    <Pricing/>
    
    <Testimonials/>
    <Contact id="contact"/>
    <Footer/>
    
   
  </section>
</template>

<script setup>

useServerSeoMeta({
  ogType: 'website',
  type: 'website',
  author: 'Alex Martos',
  robots: 'index, follow',
  title: 'Market Benders - Grow Your Brand',
  ogTitle: 'Market Benders - Grow Your Brand',
  description: 'We help businesses achieve remarkable growth.',
  ogDescription: 'We help businesses achieve remarkable growth.',
  ogImage: '/cta2.webp',
  twitterCard: 'summary_large_image',
});


</script>