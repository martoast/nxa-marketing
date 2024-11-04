<template>
  <div>
    <Navbar />
    <Hero id="hero" />
    <Services id="services" />
    <!-- <LogoCloud/> -->
    <Features3 id="features" />
    <Growth id="stats"/>
    

    

    <CTA/>
    <Pricing id="pricing" />

    <Testimonials />
    <Contact id="contact" />
    <Footer />
    <!-- <CookieConsent /> -->
  </div>
</template>

<script setup>
useSeoMeta({
  charset: "utf-8",
  ogType: "website",
  author: "Alex Martos",
  robots: "index, follow",
  title: "Market Benders - Digital Marketing & Brand Growth Agency",
  ogTitle: "Market Benders - Digital Marketing & Brand Growth Agency",
  description:
    "Market Benders is a professional digital marketing agency specializing in brand growth, SEO, social media marketing, and comprehensive digital strategy. Transform your online presence with our expert team.",
  ogDescription:
    "Market Benders is a professional digital marketing agency specializing in brand growth, SEO, social media marketing, and comprehensive digital strategy. Transform your online presence with our expert team.",
  ogImage: "/cta2.webp",
  twitterCard: "summary_large_image",
  canonical: "https://marketbenders.com",
});
</script>
