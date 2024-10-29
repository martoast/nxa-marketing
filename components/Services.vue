<template>
  <div class="py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <!-- Service Cards -->
        <div
          v-for="(service, index) in services"
          :key="index"
          @click="service.isFlipped = !service.isFlipped"
          :class="[
            'group relative animate-fadeIn cursor-pointer',
            `delay-${Math.min(index * 100, 1000)}`
          ]"
        >
          <!-- Gradient border wrapper -->
          <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
          
          <!-- Card content -->
          <div class="flip-card bg-black relative h-[250px] rounded-lg ring-1 ring-slate-800/25 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
            <!-- Card Inner -->
            <div class="flip-card-inner" :class="{ 'is-flipped': service.isFlipped }">
              <!-- Front -->
              <div class="flip-card-front p-7">
                <div class="relative h-28 flex items-center">
                  <h3 class="font-monument text-xl font-bold text-white transition-colors duration-300 group-hover:text-brand-400">
                    {{ service.title }}
                  </h3>
                </div>
                <!-- Flip Indicator -->
                <div class="absolute bottom-4 right-4 flex items-center gap-2 text-sm text-gray-400 opacity-70 group-hover:opacity-100 transition-opacity">
                  <ArrowPathIcon class="h-4 w-4 animate-pulse" />
                  <span class="font-light">Click to flip</span>
                </div>
              </div>
              
              <!-- Back -->
              <div class="flip-card-back p-7">
                <ul class="space-y-3 text-sm text-gray-300">
                  <li 
                    v-for="(point, pointIndex) in service.bulletPoints" 
                    :key="pointIndex"
                    class="flex items-start gap-x-3"
                  >
                    <CheckIcon class="h-5 w-5 flex-none text-brand-400" aria-hidden="true" />
                    <span>{{ point }}</span>
                  </li>
                </ul>
                <!-- Back Flip Indicator -->
                <div class="absolute bottom-4 right-4 flex items-center gap-2 text-sm text-gray-400 opacity-70 group-hover:opacity-100 transition-opacity">
                  <ArrowPathIcon class="h-4 w-4 animate-pulse" />
                  <span class="font-light">Click to flip back</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CheckIcon, ArrowPathIcon } from '@heroicons/vue/20/solid'

const services = ref([
  {
    title: 'Generate More Leads',
    href: '#service_1',
    isFlipped: false,
    bulletPoints: [
      'AI-powered targeting strategies',
      'Multi-platform ad management',
      'Real-time budget optimization',
      'Advanced A/B/C/D testing',
      'Performance analytics dashboard',
      'Google, Meta, TikTok & LinkedIn'
    ]
  },
  {
    title: 'Rank Higher on Google',
    href: '#service_2',
    isFlipped: false,
    bulletPoints: [
      'Five-star review generation',
      'GMB profile optimization',
      'Local search optimization',
      'Review response management',
      'Search ranking monitoring',
      'Competitor analysis'
    ]
  },
  {
    title: 'Local SEO Optimization',
    href: '#service_3',
    isFlipped: false,
    bulletPoints: [
      'Local keyword optimization',
      'GMB profile enhancement',
      'Local citation building',
      'Geographic targeting',
      'Local content strategy',
      'Maps ranking optimization'
    ]
  },
  {
    title: 'Customer Relationship Management',
    href: '#service_4',
    isFlipped: false,
    bulletPoints: [
      'Unified communication hub',
      'AI chatbot integration',
      'Automated workflows',
      'Call tracking & text-back',
      'Custom surveys & analytics',
      'Smart lead management'
    ]
  }
])

</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-out forwards;
}

.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }
.delay-600 { animation-delay: 600ms; }
.delay-700 { animation-delay: 700ms; }
.delay-800 { animation-delay: 800ms; }
.delay-900 { animation-delay: 900ms; }
.delay-1000 { animation-delay: 1000ms; }

/* Flip Card Styles */
.flip-card {
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: left;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card-inner.is-flipped {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: black;
  border-radius: 0.5rem;
}

.flip-card-back {
  transform: rotateY(180deg);
}

/* Add animation for the flip indicator */
@keyframes pulse {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

</style>