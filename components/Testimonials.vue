<template>
  <div ref="componentRef" class="bg-black py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Header -->
      <div class="mx-auto max-w-2xl text-center motion-safe:animate-fadeIn">
        <h2
          class="font-monument text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          What Our Clients Say
        </h2>
        <p class="mt-4 text-lg text-gray-300">
          Don't just take our word for it - hear from some of our satisfied
          clients.
        </p>
      </div>

      <!-- Carousel Section -->
      <div
        class="mt-16 relative motion-safe:animate-fadeIn motion-safe:animate-delay-200"
        @mouseenter="pauseAutoScroll"
        @mouseleave="resumeAutoScroll"
      >
        <!-- Left Arrow -->
        <button
          @click="scrollLeft"
          class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800 shadow-lg rounded-full p-3 z-10 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <!-- Testimonials Container -->
        <div
          ref="scrollContainer"
          class="flex overflow-x-auto space-x-6 py-4 px-8 hide-scrollbar"
        >
          <!-- Individual Testimonial Cards -->
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="flex-none w-[384px]"
          >
            <div class="group relative h-[400px]">
              <!-- Added fixed height here -->
              <!-- Gradient border wrapper -->
              <div
                class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 opacity-75 blur transition duration-500 group-hover:opacity-100"
              ></div>

              <!-- Card Content -->
              <div
                class="relative h-full rounded-2xl bg-slate-900 p-8 transition-all duration-300 group-hover:transform group-hover:scale-[1.02] flex flex-col"
              >
                <!-- Star Rating -->
                <div class="flex gap-1 mb-6 flex-shrink-0">
                  <svg
                    v-for="star in 5"
                    :key="star"
                    class="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>

                <!-- Testimonial Text -->
                <p class="text-lg text-gray-300 flex-grow overflow-y-auto">
                  {{ testimonial.body }}
                </p>

                <!-- Author Info -->
                <div class="flex items-center mt-8 flex-shrink-0">
                  <img
                    :src="testimonial.author.imageUrl"
                    :alt="testimonial.author.name"
                    class="h-12 w-12 rounded-full object-cover"
                  />
                  <div class="ml-4">
                    <h4 class="text-base font-semibold text-white">
                      {{ testimonial.author.name }}
                    </h4>
                    <p class="text-sm text-gray-400">
                      @{{ testimonial.author.handle }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Arrow -->
        <button
          @click="scrollRight"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800 shadow-lg rounded-full p-3 z-10 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const testimonials = ref([
  {
    body: "The service exceeded all my expectations. The team was incredibly responsive and delivered a product that perfectly met our needs. I couldn't be happier with the results!",
    author: {
      name: "Sarah Johnson",
      handle: "sarahjohnson",
      imageUrl: "/testimonial.webp",
    },
  },
  {
    body: "I was impressed by the attention to detail and the quality of work. The project was completed on time and within budget. I highly recommend their services to anyone looking for top-notch results.",
    author: {
      name: "Michael Chen",
      handle: "michaelchen",
      imageUrl: "/testimonial3.webp",
    },
  },
  {
    body: "Working with this team was a game-changer for our business. Their innovative solutions and dedication to customer satisfaction set them apart from the competition.",
    author: {
      name: "Emily Rodriguez",
      handle: "emilyrodriguez",
      imageUrl: "/testimonial2.webp",
    },
  },
  {
    body: "The level of professionalism and expertise demonstrated throughout our project was outstanding. They not only met but exceeded our expectations at every turn.",
    author: {
      name: "David Thompson",
      handle: "davidthompson",
      imageUrl: "/testimonial4.webp",
    },
  },
  {
    body: "I was blown away by the creativity and efficiency of this team. They took our vague idea and turned it into a brilliant reality. We'll definitely be working with them again in the future.",
    author: {
      name: "Chris Patel",
      handle: "amandapatel",
      imageUrl: "/testimonial5.webp",
    },
  },
  {
    body: "I was impressed by the attention to detail and the quality of work. The project was completed on time and within budget. I highly recommend their services to anyone looking for top-notch results.",
    author: {
      name: "Erick Ayala",
      handle: "ErickAyala",
      imageUrl: "/testimonial6.webp",
    },
  },
]);

const componentRef = ref(null);
const scrollContainer = ref(null);
let autoScrollInterval = null;
let observer = null;

const scrollLeft = () => {
  scrollContainer.value.scrollBy({ left: -400, behavior: "smooth" });
};

const scrollRight = () => {
  scrollContainer.value.scrollBy({ left: 400, behavior: "smooth" });
};

// Auto-scroll functionality
const startAutoScroll = () => {
  autoScrollInterval = setInterval(() => {
    if (scrollContainer.value) {
      const isAtEnd =
        scrollContainer.value.scrollLeft + scrollContainer.value.clientWidth >=
        scrollContainer.value.scrollWidth;
      if (isAtEnd) {
        scrollContainer.value.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRight();
      }
    }
  }, 3000); // Scroll every 5 seconds
};

const pauseAutoScroll = () => {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval);
    autoScrollInterval = null;
  }
};

const resumeAutoScroll = () => {
  if (document.visibilityState === "visible") {
    pauseAutoScroll(); // Clear any existing interval
    startAutoScroll();
  }
};

// Intersection Observer callback
const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startAutoScroll();
    } else {
      pauseAutoScroll();
    }
  });
};

// Visibility change handler
const handleVisibilityChange = () => {
  if (document.visibilityState === "hidden") {
    pauseAutoScroll();
  } else {
    resumeAutoScroll();
  }
};

// Lifecycle hooks
onMounted(() => {
  // Set up intersection observer
  observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.3, // Start when 30% of the component is visible
  });

  if (componentRef.value) {
    observer.observe(componentRef.value);
  }

  // Handle tab visibility
  document.addEventListener("visibilitychange", handleVisibilityChange);
});

onUnmounted(() => {
  pauseAutoScroll();
  if (observer) {
    observer.disconnect();
  }
  document.removeEventListener("visibilitychange", handleVisibilityChange);
});
</script>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
