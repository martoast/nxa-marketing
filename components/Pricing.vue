<template>
  <div class="bg-black py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Header -->
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="font-monument text-base font-semibold leading-7 text-blue-300">Pricing</h2>
        <p class="mt-2 text-balance font-monument text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Scale Your Success
        </p>
        <p class="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg text-gray-300 sm:text-xl/8">
          Choose a plan that aligns with your growth goals. From local dominance to digital powerhouse status, we've got you covered.
        </p>
      </div>

      <!-- Billing Toggle -->
      <div class="mt-16 flex justify-center">
        <fieldset aria-label="Payment frequency">
          <RadioGroup 
            v-model="frequency" 
            class="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 bg-slate-800 ring-1 ring-inset ring-gray-700"
          >
            <RadioGroupOption 
              v-for="option in frequencies" 
              :key="option.value" 
              :value="option" 
              v-slot="{ checked }"
            >
              <div 
                :class="[
                  checked ? 'bg-gradient-to-r from-indigo-500 via-blue-300 to-primary text-white' : 'text-gray-400 hover:text-gray-300',
                  'cursor-pointer rounded-full px-2.5 py-1 transition-colors duration-200'
                ]"
              >
                {{ option.label }}
              </div>
            </RadioGroupOption>
          </RadioGroup>
        </fieldset>
      </div>

      <!-- Pricing Cards - 2x2 Grid -->
      <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div 
          v-for="tier in tiers" 
          :key="tier.id" 
          class="relative group h-full"
        >
          <!-- Gradient border wrapper -->
          <div 
            :class="[
              'absolute -inset-[2px] rounded-3xl blur transition duration-500',
              tier.mostPopular 
                ? 'bg-gradient-to-r from-indigo-500 via-blue-300 to-primary opacity-100' 
                : 'bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 opacity-50 group-hover:opacity-75'
            ]"
          ></div>
          
          <!-- Card Content -->
          <div class="relative flex h-full flex-col rounded-2xl bg-slate-900 p-8 xl:p-10">
            <!-- Card Header -->
            <div class="mb-4">
              <div class="flex items-center justify-between">
                <h3 
                  :id="tier.id" 
                  class="font-monument text-xl font-bold leading-8"
                  :class="tier.mostPopular ? 'text-blue-300' : 'text-white'"
                >
                  {{ tier.name }}
                </h3>
                <p 
                  v-if="tier.mostPopular" 
                  class="rounded-full bg-blue-300/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-300"
                >
                  Most popular
                </p>
              </div>

              <!-- Description -->
              <p class="mt-4 text-sm leading-6 text-gray-300 min-h-[48px]">
                {{ tier.description }}
              </p>
            </div>

            <!-- Price -->
            <div class="mb-6">
              <p class="flex items-baseline gap-x-1">
                <span class="text-4xl font-bold text-white">{{ tier.price[frequency.value] }}</span>
                <span class="text-sm font-semibold leading-6 text-gray-400">{{ frequency.priceSuffix }}</span>
              </p>
            </div>

            <!-- Features List -->
            <div class="flex-grow">
              <ul role="list" class="space-y-3 text-sm leading-6 text-gray-300">
                <li 
                  v-for="feature in tier.features" 
                  :key="feature" 
                  class="flex gap-x-3"
                >
                  <CheckIcon 
                    class="h-6 w-5 flex-none text-blue-300" 
                    aria-hidden="true" 
                  />
                  {{ feature }}
                </li>
              </ul>
            </div>

            <!-- CTA Button - Fixed at bottom -->
            <div class="pt-8">
              <NuxtLink
                :to="tier.href"
                :aria-describedby="tier.id"
                class="block w-full"
              >
                <div class="relative group">
                  <div 
                    class="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-500 via-blue-300 to-primary opacity-75 blur transition duration-500 group-hover:opacity-100"
                  ></div>
                  <div 
                    class="relative flex items-center justify-center rounded-lg bg-black px-3 py-3 text-center text-sm font-semibold text-white transition-all duration-300 group-hover:transform group-hover:scale-[1.02]"
                  >
                    Get started with {{ tier.name }}
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/20/solid'

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]

const tiers = [
  {
    name: 'Launchpad',
    id: 'tier-launchpad',
    href: '#contact',
    price: { monthly: '$199', annually: '$1,990' },
    description: 'Propel Your Business to the Top of Google Rankings and Outshine Competitors',
    features: [
      'Customer Relationship Management (CRM)',
      'Local SEO Optimization',
      'Google Business Profile Management',
      'Review Management System',
      'Reputation Management',
      'Lead Generation Tools',
      'Analytics Dashboard',
      '24/7 Support',
    ],
    mostPopular: false,
  },
  {
    name: 'Growth Accelerator',
    id: 'tier-growth',
    href: '#contact',
    price: { monthly: '$299', annually: '$2,990' },
    description: 'Everything in Launchpad plus targeted ad management to supercharge your growth',
    features: [
      'All Launchpad features',
      'Google Ads Management',
      'Facebook Ads Management',
      'Advanced Analytics',
      'Campaign Optimization',
      'Conversion Tracking',
      'ROI Reporting',
      'Priority Support',
    ],
    mostPopular: false,
  },
  {
    name: 'Growth Accelerator PLUS',
    id: 'tier-growth-plus',
    href: '#contact',
    price: { monthly: '$349', annually: '$3,490' },
    description: 'Dominate across all major platforms with comprehensive ad management',
    features: [
      'All Growth Accelerator features',
      'TikTok Ads Management',
      'YouTube Ads Management',
      'Snapchat Ads Management',
      'Cross-Platform Strategy',
      'Advanced Targeting',
      'Custom Reporting',
      'VIP Support',
    ],
    mostPopular: true,
  },
  {
    name: 'Digital Powerhouse',
    id: 'tier-powerhouse',
    href: '#contact',
    price: { monthly: '$599', annually: '$5,990' },
    description: 'Complete digital dominance with full-service management and strategy',
    features: [
      'All Growth Accelerator PLUS features',
      'Social Media Management',
      'Content Creation',
      'Community Management',
      'Brand Strategy',
      'Competitor Analysis',
      'Monthly Strategy Sessions',
      'Dedicated Account Manager',
    ],
    mostPopular: false,
  },
]

const frequency = ref(frequencies[0])
</script>