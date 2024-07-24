<template>
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-xl text-center">
          <h2 class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We have worked with many amazing people</p>
        </div>
        <div class="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div class="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            <div v-for="testimonial in testimonials" :key="testimonial.author.handle" class="pt-8 sm:inline-block sm:w-full sm:px-4">
              <figure class="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                <blockquote class="text-gray-900">
                  <p>{{ `"${testimonial.body}"` }}</p>
                </blockquote>
                <figcaption class="mt-6 flex items-center gap-x-4">
                  <NuxtImg
                    class="h-10 w-10 rounded-full bg-gray-50"
                    :src="testimonial.author.imageUrl"
                    :alt="`Avatar of ${testimonial.author.name}`"
                    width="40"
                    height="40"
                    sizes="40px"
                  />
                  <div>
                    <div class="font-semibold text-gray-900">{{ testimonial.author.name }}</div>
                    <div class="text-gray-600">{{ `@${testimonial.author.handle}` }}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const testimonials = ref([
    {
      body: "The service exceeded all my expectations. The team was incredibly responsive and delivered a product that perfectly met our needs. I couldn't be happier with the results!",
      author: {
        name: 'Sarah Johnson',
        handle: 'sarahjohnson',
        imageUrl: '/testimonial.webp',
      },
    },
    {
      body: 'I was impressed by the attention to detail and the quality of work. The project was completed on time and within budget. I highly recommend their services to anyone looking for top-notch results.',
      author: {
        name: 'Michael Chen',
        handle: 'michaelchen',
        imageUrl: '/testimonial.webp',
      },
    },
    {
      body: 'Working with this team was a game-changer for our business. Their innovative solutions and dedication to customer satisfaction set them apart from the competition.',
      author: {
        name: 'Emily Rodriguez',
        handle: 'emilyrodriguez',
        imageUrl: '/testimonial.webp',
      },
    },
    {
      body: 'The level of professionalism and expertise demonstrated throughout our project was outstanding. They not only met but exceeded our expectations at every turn.',
      author: {
        name: 'David Thompson',
        handle: 'davidthompson',
        imageUrl: '/testimonial.webp',
      },
    },
    {
      body: "I was blown away by the creativity and efficiency of this team. They took our vague idea and turned it into a brilliant reality. We'll definitely be working with them again in the future.",
      author: {
        name: 'Amanda Patel',
        handle: 'amandapatel',
        imageUrl: '/testimonial.webp',
      },
    },
  ])
  </script>