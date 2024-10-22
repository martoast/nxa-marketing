<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none lg:text-center">
        <div class="text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Elevate Your Business with Market Benders</h2>
            <p class="mt-4 text-lg leading-8 text-gray-600">Our tailored digital marketing services are designed to drive growth and maximize results for your business.</p>
          </div>
        
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
              <component :is="feature.icon" class="h-5 w-5 flex-none text-primary" aria-hidden="true" />
              {{ feature.name }}
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <p class="flex-auto">{{ feature.description }}</p>
              <p class="mt-6">
                <a :href="feature.href" class="text-sm font-semibold leading-6 text-primary">Learn more <span aria-hidden="true">→</span></a>
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  DevicePhoneMobileIcon, 
  ChartBarIcon, 
  ChatBubbleLeftRightIcon,
  MagnifyingGlassIcon,
  EnvelopeIcon,
  MegaphoneIcon 
} from '@heroicons/vue/20/solid'

const features = [
  {
    name: 'Responsive Landing Page Creation',
    description:
      'Capture more leads with optimized, mobile-friendly landing pages designed to showcase your listings and funnel qualified leads directly to your CRM.',
    href: '#',
    icon: DevicePhoneMobileIcon, // Better represents mobile-friendly/responsive design
  },
  {
    name: 'CRM Automation & Marketing Funnel',
    description:
      'We set up and manage your CRM, automating follow-ups and nurturing leads from initial contact to conversion—ensuring no opportunity slips through the cracks.',
    href: '#',
    icon: ChartBarIcon, // Better represents analytics and performance tracking
  },
  {
    name: 'Missed Call Text Back',
    description:
      'Never miss a chance to engage. Our service ensures that clients receive immediate text responses if you\'re unable to take their call, making them feel prioritized.',
    href: '#',
    icon: ChatBubbleLeftRightIcon, // Better represents messaging/communication
  },
  {
    name: 'Strategic Local SEO Optimization',
    description:
      'Improve your search rankings with our proven SEO strategies, making your listings and services more visible to potential clients in your area.',
    href: '#',
    icon: MagnifyingGlassIcon, // Better represents search/SEO
  },
  {
    name: '24/7 Email Customer Support',
    description:
      'Our dedicated team is here to address your inquiries promptly, ensuring everything runs smoothly from your website to your CRM.',
    href: '#',
    icon: EnvelopeIcon, // Better represents email support
  },
  {
    name: 'Facebook & Google Ads Management',
    description:
      'Maximize your reach with expertly crafted and managed social media and search advertising campaigns, targeting qualified leads through precise audience targeting and compelling ad creative.',
    href: '#',
    icon: MegaphoneIcon, // Keeping this one as it's perfect for advertising
  }
]
</script>