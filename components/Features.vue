<template>
  <section class="bg-white" aria-labelledby="features-heading">
    <div class="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h1 id="features-heading" class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Grow your brand</h1>
        <p class="mt-4 text-lg text-gray-500">In the digital landscape, your online presence is crucial. Our agency provides comprehensive solutions to elevate your brand, increase visibility, and drive conversions across all digital channels.</p>
      </div>

      <div class="mt-16 space-y-16">
        <div v-for="(feature, featureIdx) in features" :key="feature.name" class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
          <div :class="[featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9', 'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4']">
            <h2 class="text-lg font-medium text-gray-900">{{ feature.name }}</h2>
            <p class="mt-2 text-sm text-gray-500">{{ feature.description }}</p>
          </div>
          <div :class="[featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1', 'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8']">
            <div class="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
              <NuxtImg 
                :src="feature.imageSrc" 
                :alt="feature.imageAlt" 
                class="object-cover object-center" 
                :width="feature.imageWidth"
                :height="feature.imageHeight"
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const features = ref([
  {
    name: 'Improve your ROI with scalable PPC marketing.',
    description:
      'Blending performance with exceptional customer service, our PPC specialists are some of the best in the industry with a track record for growing successful businesses.',
    href: '#',
    imageSrc: '/1.webp',
    imageAlt: 'Digital marketing dashboard showing PPC campaign performance metrics.',
    imageWidth: 640,
    imageHeight: 427,
  },
  {
    name: 'Drive more organic traffic to your website.',
    description:
      'Get more qualified traffic on the search terms that matter most to your business. We achieve measurable results by working on every variable that impacts SERPs. Trust our proven track record to maximize your visibility online. Set your business up for long-term success.',
    href: '#',
    imageSrc: '/organic-traffic-shit.webp',
    imageAlt: 'Graph showing increase in organic search traffic over time.',
    imageWidth: 800,
    imageHeight: 600,
  },
  {
    name: 'Get a beautiful website that wins customers.',
    description:
      'Elevate your business with a trusted website that your customers will love. Our award-winning website designers will represent your brand in the best possible way. Your website will load extremely fast and look great on all devices.',
    href: '#',
    imageSrc: '/3.webp',
    imageAlt: 'Responsive website design mockups showing desktop, tablet, and mobile views.',
    imageWidth: 800,
    imageHeight: 600,
  },
])
</script>