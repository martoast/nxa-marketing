<template>
    <div class="bg-black py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="font-monument text-base font-semibold leading-7 text-brand-400">Business Growth Statistics</h2>
          <p class="mt-2 text-pretty font-monument text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-balance">
            Real Results for Real Businesses
          </p>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            Our comprehensive suite of tools and automation delivers measurable results across all aspects of your business.
          </p>
        </div>
  
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div v-for="stat in stats" :key="stat.title" 
              class="flex flex-col motion-safe:animate-fadeIn"
              :class="stat.animationDelay">
              <dt class="flex items-start gap-x-3">
                <component 
                  :is="stat.icon" 
                  class="h-6 w-6 flex-none text-brand-400 mt-1" 
                  aria-hidden="true" 
                />
                <div>
                  <div class="text-2xl font-bold font-monument text-white">{{ stat.percentage }}</div>
                  <div class="text-lg font-semibold leading-7 text-brand-400">{{ stat.title }}</div>
                </div>
              </dt>
              <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p class="flex-auto">{{ stat.description }}</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import {
    ChartBarIcon,
    ChatBubbleLeftRightIcon,
    ClipboardDocumentCheckIcon,
    MapPinIcon,
    PhoneArrowUpRightIcon,
    RocketLaunchIcon,
    Square3Stack3DIcon,
    UserGroupIcon,
    WindowIcon
  } from '@heroicons/vue/24/outline'
  
  const stats = [
    {
      percentage: '80%',
      title: 'Improve Satisfaction with Unified Communication',
      description: 'Businesses using unified communication platforms report improved customer satisfaction and faster response times.',
      icon: ChatBubbleLeftRightIcon,
      animationDelay: 'motion-safe:animate-delay-100'
    },
    {
      percentage: '76%',
      title: 'More Likely to Get Reviews with Automation',
      description: 'Consumers are more likely to leave a review after receiving an automated request.',
      icon: ClipboardDocumentCheckIcon,
      animationDelay: 'motion-safe:animate-delay-200'
    },
    {
      percentage: '50%',
      title: 'More Visits from Local Searches',
      description: 'Local searches result in a business visit within 24 hours, and optimized GMB profiles double the likelihood of these visits.',
      icon: MapPinIcon,
      animationDelay: 'motion-safe:animate-delay-300'
    },
    {
      percentage: '78%',
      title: 'of Local Searches Lead to Purchases',
      description: 'Location-based mobile searches result in a purchase, and businesses with top local SEO are 3x more likely to close these sales.',
      icon: ChartBarIcon,
      animationDelay: 'motion-safe:animate-delay-400'
    },
    {
      percentage: '92%',
      title: 'of Interactions Happen via Messaging',
      description: 'Customer interactions happen through messaging, and AI chatbots handle 80% of routine queries, saving businesses hours of work.',
      icon: WindowIcon,
      animationDelay: 'motion-safe:animate-delay-500'
    },
    {
      percentage: '60%',
      title: 'More Leads with Automated Workflows',
      description: 'Businesses using automated workflows report more leads and a 50% increase in productivity.',
      icon: RocketLaunchIcon,
      animationDelay: 'motion-safe:animate-delay-600'
    },
    {
      percentage: '35%',
      title: 'of Missed Calls Recovered Instantly',
      description: 'Missed call text-back systems recover lost leads instantly, with 70% of consumers expecting a response within 5 minutes.',
      icon: PhoneArrowUpRightIcon,
      animationDelay: 'motion-safe:animate-delay-700'
    },
    {
      percentage: '35%',
      title: 'Increase in Customer Feedback',
      description: 'Companies using custom surveys see an increase in customer feedback, resulting in 25% higher customer retention rates.',
      icon: UserGroupIcon,
      animationDelay: 'motion-safe:animate-delay-800'
    },
    {
      percentage: '66%',
      title: 'Make Smarter Decisions with Custom Dashboards',
      description: 'Businesses make smarter, faster decisions using real-time data from custom dashboards, leading to 45% faster revenue growth.',
      icon: Square3Stack3DIcon,
      animationDelay: 'motion-safe:animate-delay-900'
    }
  ]
  </script>