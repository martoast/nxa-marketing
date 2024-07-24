<template>
    <section class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <div class="text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Boost Your Brand with Our Proven Results</h2>
            <p class="mt-4 text-lg leading-8 text-gray-600">Our digital marketing strategies have helped businesses achieve remarkable growth. Here's what you can expect:</p>
          </div>
          <dl class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="stat in stats" :key="stat.id" class="flex flex-col bg-gray-400/5 p-8">
              <dt class="text-sm font-semibold leading-6 text-gray-600">{{ stat.name }}</dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">{{ stat.value }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const stats = ref([
    { id: 1, name: 'Average Increase in Organic Traffic', value: '150%' },
    { id: 2, name: 'Typical Improvement in Conversion Rates', value: '80%' },
    { id: 3, name: 'Average ROI on Ad Spend', value: '300%' },
    { id: 4, name: 'Clients Ranking on First Page of Google', value: '90%' },
  ])
  </script>