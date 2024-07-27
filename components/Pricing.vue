<template>
    <!-- Pricing section -->
<div class="py-24 sm:pt-48">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-4xl text-center">
      <h2 class="text-base font-semibold leading-7 text-primary">Pricing</h2>
      <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Invest in Your Growth</p>
    </div>
    <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">Choose the plan that best fits your business needs and start scaling your brand today.</p>
    <div class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <div v-for="(tier, tierIdx) in tiers" :key="tier.id" :class="[tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8', tierIdx === 0 ? 'lg:rounded-r-none' : '', tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '', 'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10']">
        <div>
          <div class="flex items-center justify-between gap-x-4">
            <h3 :id="tier.id" :class="[tier.mostPopular ? 'text-primary' : 'text-gray-900', 'text-lg font-semibold leading-8']">{{ tier.name }}</h3>
            <p v-if="tier.mostPopular" class="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary">Most popular</p>
          </div>
          <p class="mt-4 text-sm leading-6 text-gray-600">{{ tier.description }}</p>
          <div class="mt-6 flex flex-col">
            <p class="flex items-baseline gap-x-1">
              <span class="text-4xl font-bold tracking-tight text-gray-900">{{ tier.priceSetup }}</span>
              <span class="text-sm font-semibold leading-6 text-gray-600">setup</span>
            </p>
            <p class="flex items-baseline gap-x-1">
              <span class="text-3xl font-bold tracking-tight text-gray-900">{{ tier.priceMonthly }}</span>
              <span class="text-sm font-semibold leading-6 text-gray-600">/month</span>
            </p>
          </div>
          <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600">
            <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
              <CheckIcon class="h-6 w-5 flex-none text-primary" aria-hidden="true" />
              {{ feature }}
            </li>
          </ul>
        </div>
        <a :href="tier.href" :aria-describedby="tier.id" :class="[tier.mostPopular ? 'bg-primary text-white shadow-sm hover:bg-green-600' : 'text-primary ring-1 ring-inset ring-secondary hover:ring-secondary', 'mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary']">Get started</a>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>

import {CheckIcon} from '@heroicons/vue/24/outline'

const tiers = [
  {
    name: 'Launchpad',
    id: 'tier-launchpad',
    href: '#',
    priceSetup: '$500',
    priceMonthly: '$199',
    description: 'Ignite your online presence and start attracting customers.',
    features: [
      'Custom 5-page responsive website',
      'Strategic SEO optimization',
      'Targeted email marketing campaigns',
      'Proactive lead generation strategies',
      'Monthly performance analytics',
      '24/7 email support',
    ],
    mostPopular: false,
  },
  {
    name: 'Accelerator',
    id: 'tier-accelerator',
    href: '#',
    priceSetup: '$1000',
    priceMonthly: '$299',
    description: 'Supercharge your growth with comprehensive digital solutions.',
    features: [
      'Everything in Launchpad, plus:',
      'Dynamic social media management',
      'Advanced lead nurturing techniques',
      'Dedicated administrative support',
      'Bi-weekly strategy calls',
    ],
    mostPopular: true,
  },
  {
    name: 'Dominator',
    id: 'tier-dominator',
    href: '#',
    priceSetup: '$1500',
    priceMonthly: '$399',
    description: 'Dominate your market with our all-inclusive growth package.',
    features: [
      'Everything in Accelerator, plus:',
      'Unlimited-page custom website',
      'E-commerce integration (if needed)',
      'Advanced marketing automation',
      'Conversion rate optimization',
      'Competitor analysis and strategy',
      'Executive virtual assistance',
      'Personalized brand strategy',
      'Priority 24/7 support',
      'Monthly executive strategy sessions',
    ],
    mostPopular: false,
  },
]


</script>