<template>
  <div class="py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Features Grid -->
      <div class="flex flex-col space-y-24">
        <!-- Feature Section -->
        <div
          v-for="(feature, index) in features"
          :key="index"
          :class="[
            'group relative animate-fadeIn',
            `delay-${Math.min(index * 100, 1000)}`,
            'grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16',
          ]"
        >
          <!-- Image Column -->
          <div :class="['relative', index % 2 === 1 ? 'md:order-2' : '']">
            <img
              :src="feature.image"
              :alt="feature.title"
              class="w-full rounded-lg shadow-xl"
            />
          </div>

          <!-- Content Column -->
          <div class="flex flex-col justify-center">
            <!-- Small Title -->
            <!-- <h3 class="font-monument text-lg font-bold text-brand-400">
              {{ feature.smallTitle }}
            </h3> -->

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
              <li
                v-for="(item, itemIndex) in feature.list"
                :key="itemIndex"
                class="flex items-start space-x-3"
              >
                <svg
                  class="h-6 w-6 flex-shrink-0 text-brand-400"
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
                <div
                  class="absolute -inset-1 rounded-full bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 opacity-75 blur transition duration-500 group-hover:opacity-100"
                ></div>

                <!-- Button content -->
                <div
                  class="relative rounded-full bg-black px-8 py-4 text-lg font-semibold text-white transition-all duration-300 group-hover:transform group-hover:scale-[1.02]"
                >
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
    title: "CRM",
    description:
      "Unite all client interactions in one powerful platform for better relationships and faster growth.",
    image: "/crm.jpeg",
    list: [
      "Complete client history and interaction tracking",
      "Seamless appointment and task management",
      "Smart reminders for timely follow-ups",
    ],
    buttonText: "Enhance Your CRM",
    buttonLink: "#contact",
  },
  {
    title: "Conversations",
    description:
      "Streamline all communications through one efficient hub. Set it on autopilot and watch your business thrive.",
    image: "/conversation.jpg",
    list: [
      "Integrated email, SMS, and social messaging",
      "Smart automation for consistent follow-ups",
      "Comprehensive messaging analytics",
    ],
    buttonText: "Streamline Communications",
    buttonLink: "#contact",
  },
  {
    title: "Rep management",
    description:
      "Create a powerful online presence through genuine customer testimonials.",
    image: "/reputation.png",
    list: [
      "Build customer confidence with authentic reviews",
      "Boost search rankings through positive feedback",
      "Convert prospects with social proof",
    ],
    buttonText: "Enhance Your Reviews",
    buttonLink: "#contact",
  },
  {
    title: "GMB optimization",
    description:
      "Stand out in local searches with an expertly managed Google Business Profile.",
    image: "/googlereview.png",
    list: [
      "Strategic profile optimization",
      "Systematic review generation",
      "Performance tracking insights",
    ],
    buttonText: "Enhance GMB Profile",
    buttonLink: "#contact",
  },
  {
    title: "AI Lead Generation",
    description:
      "Automate your outreach with AI that sounds human, not robotic.",
    image: "/automation.png",
    list: [
      "24/7 automated calling campaigns",
      "Natural conversation flow",
      "Instant lead qualification",
    ],
    buttonText: "Start Automating",
    buttonLink: "#contact",
  },

  {
    title: "Missed call text back ",
    description:
      "Transform missed calls into successful connections with instant follow-up.",
    image: "/missedcall.png",
    list: [
      "Detailed call monitoring",
      "Instant missed call response",
      "Data-driven call insights",
    ],
    buttonText: "Optimize Call Handling",
    buttonLink: "#contact",
  },
  {
    title: "Custom surveys and forms",
    description:
      "Gather valuable insights to enhance your service quality and retention.",
    image: "/feedback.png",
    list: [
      "Intuitive survey creation tools",
      "Customer feedback analysis",
      "Targeted response segmentation",
    ],
    buttonText: "Start Collecting Feedback",
    buttonLink: "#contact",
  },
  {
    title: "Dashboard analytics",
    description: "Transform raw data into strategic growth decisions.",
    image: "dashboard.png",
    list: [
      "Comprehensive performance tracking",
      "Real-time business metrics",
      "Future trend forecasting",
    ],
    buttonText: "Access Analytics",
    buttonLink: "#contact",
  },
];
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

.delay-100 {
  animation-delay: 100ms;
}
.delay-200 {
  animation-delay: 200ms;
}
.delay-300 {
  animation-delay: 300ms;
}
.delay-400 {
  animation-delay: 400ms;
}
.delay-500 {
  animation-delay: 500ms;
}
.delay-600 {
  animation-delay: 600ms;
}
.delay-700 {
  animation-delay: 700ms;
}
.delay-800 {
  animation-delay: 800ms;
}
.delay-900 {
  animation-delay: 900ms;
}
.delay-1000 {
  animation-delay: 1000ms;
}
</style>
