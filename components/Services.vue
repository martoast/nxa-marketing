<template>
    <div class="py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <!-- Service Cards -->
          <NuxtLink
            v-for="(service, index) in services"
            :key="index"
            :to="service.href"
            :class="[
              'group relative animate-fadeIn',
              `delay-${Math.min(index * 100, 1000)}`
            ]"
          >
            <!-- Gradient border wrapper -->
            <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-500 via-blue-300 to-primary opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
            
            <!-- Card content -->
            <div class="bg-gray-900 relative h-full rounded-lg p-7 ring-1 ring-slate-800/25 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
              <div class="relative h-28 flex items-center">
                <h3 class="font-monument text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-300">
                  {{ service.title }}
                </h3>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const services = [
    {
      title: 'Customer Relationship Management (CRM)',
      href: '#service_1'
    },
    {
      title: 'All-In-One Communication Platform',
      href: '#service_2'
    },
    {
      title: '5-Star Google Review Reputation Boosting',
      href: '#service_3'
    },
    {
      title: 'Google My Business (GMB) Profile Optimization',
      href: '#service_4'
    },
    {
      title: 'Local SEO for Google',
      href: '#service_5'
    },
    {
      title: 'AI Chat Bots & Live Chat Widgets',
      href: '#service_6'
    },
    {
      title: 'Automated Workflows',
      href: '#service_7'
    },
    {
      title: 'Call Tracking & Missed Call Text-Back',
      href: '#service_8'
    },
    {
      title: 'Custom Surveys & Forms',
      href: '#service_9'
    },
    {
      title: 'Custom Dashboards & Analytics',
      href: '#service_10'
    }
  ]
  </script>
  
  <style>
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
  </style>