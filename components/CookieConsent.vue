<template>
    <div v-if="isOpen" class="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t px-4 py-6 sm:px-6 z-50">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
        <div class="flex-1">
          <p class="text-sm text-gray-700">
            We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience. 
            By clicking 'Accept', you agree to this use of cookies.
          </p>
        </div>
        <div class="flex gap-4">
          <button
            @click="declineCookies"
            class="flex-none rounded-md bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Decline
          </button>
          <button
            @click="acceptCookies"
            class="flex-none rounded-md bg-primary px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 "
          >
            Accept
          </button>
        </div>
      </div>
    </div>
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