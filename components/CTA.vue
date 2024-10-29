<template>
  <div class="py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="flex flex-col items-center text-center motion-safe:animate-fadeIn"
      >
        <!-- Main Heading -->
        <h2
          class="font-monument text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Ready to Scale? Let's Make It Happen
        </h2>

        <!-- Subheading -->
        <p class="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          Our platform gives you everything you need to drive growth, boost
          efficiency, and increase revenue. Don't leave your business potential
          on the table—let's get started.
        </p>

        <!-- CTA Button -->
        <div class="mt-10">
          <NuxtLink
            to="#contact"
            class="group relative inline-flex items-center gap-2"
          >
            <!-- Gradient border wrapper -->
            <div
              class="absolute -inset-1 rounded-full bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 opacity-75 blur transition duration-500 group-hover:opacity-100"
            ></div>

            <!-- Button content -->
            <div
              class="relative flex items-center rounded-full bg-black px-8 py-4 text-lg font-semibold text-white transition-all duration-300 group-hover:transform group-hover:scale-[1.02]"
            >
              <span>Get Your Free Consultation</span>
              <svg
                class="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 448 512"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                />
              </svg>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
