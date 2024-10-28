<template>
  <Transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="transform translate-y-full opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform translate-y-full opacity-0"
  >
    <div 
      v-if="isOpen" 
      class="fixed bottom-0 left-0 right-0 bg-slate-900 shadow-lg border-t border-gray-800 px-4 py-6 sm:px-6 z-50 backdrop-blur-sm bg-opacity-95"
    >
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
        <!-- Cookie Message -->
        <div class="flex-1">
          <p class="text-sm text-gray-300">
            We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience. 
            By clicking 'Accept', you agree to this use of cookies.
          </p>
        </div>

        <!-- Buttons -->
        <div class="flex gap-4">
          <!-- Decline Button -->
          <div class="relative group">
            <button
              @click="declineCookies"
              class="relative rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-gray-300 shadow-sm ring-1 ring-gray-700 transition-all duration-300 hover:bg-slate-700"
            >
              Decline
            </button>
          </div>

          <!-- Accept Button -->
          <div class="relative group">
            <!-- Gradient border wrapper -->
            <div 
              class="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-500 via-blue-300 to-primary opacity-75 blur transition duration-500 group-hover:opacity-100"
            ></div>
            
            <!-- Button -->
            <button
              @click="acceptCookies"
              class="relative rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 group-hover:transform group-hover:scale-[1.02]"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const isOpen = ref(true)
const hasConsented = ref(false)
const { gtag, initialize } = useGtag()

// Check for existing consent on mount
onMounted(() => {
  const consent = useCookie('cookie-consent')
  if (consent.value === 'accepted') {
    hasConsented.value = true
    isOpen.value = false
    initialize()
  } else if (consent.value === 'declined') {
    hasConsented.value = false
    isOpen.value = false
  }
})

const acceptCookies = () => {
  const consent = useCookie('cookie-consent', {
    maxAge: 60 * 60 * 24 * 365 // 1 year
  })
  consent.value = 'accepted'
  hasConsented.value = true
  isOpen.value = false

  // Initialize Google Analytics
  initialize()

  // Track consent event
  gtag('event', 'cookie_consent', {
    consent_action: 'accept'
  })
}

const declineCookies = () => {
  const consent = useCookie('cookie-consent', {
    maxAge: 60 * 60 * 24 * 365 // 1 year
  })
  consent.value = 'declined'
  hasConsented.value = false
  isOpen.value = false

  // Track decline event (if allowed)
  gtag('event', 'cookie_consent', {
    consent_action: 'decline'
  })
}
</script>