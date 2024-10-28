<template>
    <div class="py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <!-- Features Grid -->
        <div class="flex flex-col space-y-24">
          <!-- Feature Section -->
          <div v-for="(feature, index) in features" :key="index"
            :class="[
              'group relative animate-fadeIn',
              `delay-${Math.min(index * 100, 1000)}`,
              'grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16'
            ]"
          >
            <!-- Image Column -->
            <div :class="[
              'relative',
              index % 2 === 1 ? 'md:order-2' : ''
            ]">
              <img
                :src="feature.image"
                :alt="feature.title"
                class="w-full rounded-lg shadow-xl"
              />
            </div>
  
            <!-- Content Column -->
            <div class="flex flex-col justify-center">
              <!-- Small Title -->
              <h3 class="font-monument text-lg font-bold text-blue-300">
                {{ feature.smallTitle }}
              </h3>
  
              <!-- Main Title -->
              <h2 class="mt-2 font-monument text-3xl font-bold text-white">
                {{ feature.title }}
              </h2>
  
              <!-- Description -->
              <p class="mt-4 text-lg text-gray-300">
                {{ feature.description }}
              </p>
  
              <!-- Feature List -->
              <ul class="mt-8 space-y-4">
                <li v-for="(item, itemIndex) in feature.list" :key="itemIndex" 
                  class="flex items-start space-x-3">
                  <svg
                    class="h-6 w-6 flex-shrink-0 text-blue-300"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                    />
                  </svg>
                  <span class="text-white">{{ item }}</span>
                </li>
              </ul>
  
              <!-- CTA Button -->
              <div class="mt-8">
                <NuxtLink
                  :to="feature.buttonLink"
                  class="group relative inline-flex items-center gap-2"
                >
                  <!-- Gradient border wrapper -->
                  <div class="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 via-blue-300 to-primary opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
                  
                  <!-- Button content -->
                  <div class="relative rounded-full bg-black px-8 py-4 text-lg font-semibold text-white transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                    {{ feature.buttonText }}
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

const features = [
  {
    smallTitle: 'Customer Relationship Management (CRM)',
    title: 'Dominate Client Relationships Like Never Before',
    description: 'Streamline everything in one place—save time, scale faster, and build unbeatable client relationships.',
    image: '/ghl1.png',
    list: [
      'Centralized client data, notes, and activity tracking.',
      'Manage appointments, follow-ups, and interactions with ease.',
      'Automated reminders to never miss an important task or client interaction.'
    ],
    buttonText: 'Unlock the Power of CRM',
    buttonLink: '#contact'
  },
  {
    smallTitle: 'All-In-One Communication',
    title: 'Conquer Every Communication Channel in One Click',
    description: 'Eliminate chaos and stay in control of every interaction. Automate it all and focus on what matters most—growing your business.',
    image: '/ghl1.png',
    list: [
      'Unified platform for emails, texts, and social media.',
      'Automate follow-ups, bulk messaging, and responses.',
      'Track all communication performance for better decision-making.'
    ],
    buttonText: 'Simplify Your Communication Now',
    buttonLink: '#contact'
  },
  {
    smallTitle: '5-Star Google Review Reputation Boosting',
    title: 'Turn Every Customer Into a Raving Fan',
    description: 'Build a fortress of 5-star reviews and attract high-paying clients effortlessly.',
    image: '/ghl1.png',
    list: [
      'Enhance Trust: Leverage positive reviews to build credibility and attract more clients.',
      'Increase Visibility: Improve your search rankings with consistent high-quality reviews.',
      'Drive Conversions: Use customer feedback as social proof to encourage new business.'
    ],
    buttonText: 'Boost Your Reputation Today',
    buttonLink: '#contact'
  },
  {
    smallTitle: 'Google My Business Profile Optimization',
    title: 'Own Your Local Market with GMB Optimization',
    description: 'Dominate local searches and stay ahead of your competition with a fully optimized Google My Business profile.',
    image: '/ghl4.png',
    list: [
      'Full GMB management and optimization.',
      'Regular updates and automated review requests.',
      'Detailed analytics to track local search performance.'
    ],
    buttonText: 'Optimize My GMB Now',
    buttonLink: '#contact'
  },
  {
    smallTitle: 'Local SEO for Google',
    title: 'Crush Your Local Competition with Google SEO',
    description: 'Get found first. Outrank competitors and flood your business with high-quality local leads.',
    image: '/seo.png',
    list: [
      'Proven SEO strategies for top local rankings.',
      'Complete business listings and Google Maps optimization.',
      'Ongoing local keyword research to maintain top rankings.'
    ],
    buttonText: 'Maximize My Local SEO',
    buttonLink: '#contact'
  },
  {
    smallTitle: 'AI Chat Bots & Live Chat Widgets',
    title: 'Capture Leads 24/7—Even While You Sleep',
    description: "Turn every visitor into a lead with smart automation. Don't miss a single opportunity.",
    image: '/ghl3.png',
    list: [
      '24/7 AI chatbots for customer interaction and bookings.',
      'Customizable live chat widgets for instant engagement.',
      'Seamless integration with your CRM for better lead tracking.'
    ],
    buttonText: 'Activate My Chatbot Now',
    buttonLink: '#contact'
  },
  {
    smallTitle: 'Automated Workflows',
    title: 'Put Your Business on Autopilot and Scale Faster',
    description: 'Set it and forget it. Consistent follow-ups, zero manual effort, and maximum efficiency.',
    image: '/ghl5.png',
    list: [
      'Automate emails, follow-ups, and client interactions.',
      'Pre-built workflows for every stage of the customer journey.',
      'Customizable triggers to fit your business needs perfectly.'
    ],
    buttonText: 'Automate My Workflow',
    buttonLink: '#contact'
  },
  {
    smallTitle: 'Call Tracking & Missed Call Text-Back',
    title: 'Never Lose a Lead Again',
    description: 'Follow up with missed calls instantly and turn lost opportunities into conversions.',
    image: '/ghl1.png',
    list: [
      'Full call tracking for every customer interaction.',
      'Automatic text-back for missed calls.',
      'Comprehensive call analytics to identify trends and optimize sales.'
    ],
    buttonText: 'Track My Calls Now',
    buttonLink: '#contact'
  },
  {
    smallTitle: 'Custom Surveys & Forms',
    title: 'Get Inside Your Customers Minds with Custom Surveys',
    description: 'Boost customer satisfaction and learn exactly how to serve them better.',
    image: '/ghl1.png',
    list: [
      'Easy-to-build, customizable surveys and feedback forms.',
      'Actionable insights to improve services and retention.',
      'Segment survey responses to tailor your marketing efforts.'
    ],
    buttonText: 'Create My Custom Surveys',
    buttonLink: '#contact'
  },
  {
    smallTitle: 'Custom Dashboards & Analytics',
    title: 'Make Data-Driven Decisions',
    description: 'Stop guessing. Use real data to make smart, growth-focused decisions.',
    image: '/ghl6.png',
    list: [
      'Custom dashboards that track leads, sales, and marketing.',
      'Powerful analytics for real-time decision-making.',
      'Predictive analytics to forecast trends and stay ahead of the competition.'
    ],
    buttonText: 'Get My Custom Dashboard',
    buttonLink: '#contact'
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