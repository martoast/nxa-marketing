<template>
  <div class="relative overflow-hidden bg-gray-800">
    <div class="hidden sm:absolute sm:inset-0 sm:block" aria-hidden="true">
      <svg class="absolute bottom-0 right-0 mb-48 translate-x-1/2 transform text-gray-700 lg:top-0 lg:mb-0 lg:mt-28 xl:translate-x-0 xl:transform-none" width="364" height="384" viewBox="0 0 364 384" fill="none">
        <defs>
          <pattern id="eab71dd9-9d7a-47bd-8044-256344ee00d0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="364" height="384" fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
      </svg>
    </div>
    <div class="relative pb-16 pt-6 sm:pb-24">
      <Popover>
        <nav class="relative mx-auto flex max-w-7xl items-center justify-between px-6" aria-label="Global">
          <div class="flex flex-1 items-center">
            <div class="flex w-full items-center justify-between md:w-auto">
              <a href="#">
                <span class="sr-only">Your Company</span>
                <img src="/logo.svg" style="height: 64px; width: 64px;" alt="logo">
              </a>
              <div class="-mr-2 flex items-center md:hidden">
                <PopoverButton class="focus-ring-inset relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white">
                  <span class="absolute -inset-0.5" />
                  <span class="sr-only">Open main menu</span>
                  <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="hidden space-x-10 md:ml-10 md:flex">
              <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-medium text-white hover:text-gray-300">{{ item.name }}</a>
            </div>
          </div>
        </nav>

        <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
          <PopoverPanel focus class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
            <div class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
              <div class="flex items-center justify-between px-5 pt-4">
                <div>
                  <img class="h-8 w-auto" src="/logo.svg" alt="" />
                </div>
                <div class="-mr-2">
                  <PopoverButton class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                    <span class="absolute -inset-0.5" />
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="space-y-1 px-2 pb-3 pt-2">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">{{ item.name }}</a>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>

      <main class="mt-16 sm:mt-24">
        <div class="mx-auto max-w-7xl">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <div class="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
              <div>
                <div class="hidden sm:mb-4 sm:flex sm:justify-center lg:justify-start">
                  <a href="#" class="flex items-center rounded-full bg-gray-900 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base">
                    <span class="rounded-full bg-primary px-3 py-0.5 text-sm font-semibold leading-5 text-white">Grow your brand</span>
                    <span class="ml-4 text-sm">Learn more</span>
                    <ChevronRightIcon class="ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                  </a>
                </div>
                <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Best-in-class digital marketing services</h1>
                <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">We help businesses achieve remarkable growth.</p>
                <!-- <p class="mt-8 text-base font-semibold text-white sm:mt-10">Used by</p>
                <div class="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                  <div class="flex flex-wrap items-start justify-between">
                    <div class="flex justify-center px-1">
                      <img class="h-9 sm:h-10" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                    </div>
                    <div class="flex justify-center px-1">
                      <img class="h-9 sm:h-10" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation" />
                    </div>
                    <div class="flex justify-center px-1">
                      <img class="h-9 sm:h-10" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
                    </div>
                  </div>
                </div> -->
              </div>
            </div>
            <div class="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
              <div class="bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg">
                <div class="px-6 py-8 sm:px-10">
                  <h2 class="text-2xl font-bold text-gray-900">Get Your Free Proposal Today!</h2>
                  <form @submit.prevent="submitForm" class="mt-6 space-y-6">
                    <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                      <div>
                        <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                        <div class="mt-1">
                          <input v-model="form.firstName" type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
                        </div>
                      </div>
                      <div>
                        <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                        <div class="mt-1">
                          <input v-model="form.lastName" type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                      <div class="mt-1">
                        <input v-model="form.email" id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
                      </div>
                    </div>
                    <div>
                      <label for="phone-number" class="block text-sm font-medium text-gray-700">Phone number</label>
                      <div class="mt-1">
                        <input v-model="form.phone" id="phone-number" name="phone-number" type="tel" autocomplete="tel" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
                      </div>
                    </div>
                    <div>
                      <label for="message" class="block text-sm font-medium text-gray-700">Project details</label>
                      <div class="mt-1">
                        <textarea v-model="form.message" id="message" name="message" rows="4" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"></textarea>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <input v-model="form.privacyPolicy" id="privacy-policy" name="privacy-policy" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                      <label for="privacy-policy" class="ml-2 block text-sm text-gray-900">I agree to the privacy policy</label>
                    </div>
                    <div>
                      <button type="submit" class="flex w-full justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Get Your Free Proposal</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronRightIcon } from '@heroicons/vue/20/solid'

const navigation = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#stats' },
  { name: 'Services', href: '#features' },
  { name: 'Contact', href: '#contact' }
]

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  privacyPolicy: false
})

const validateForm = () => {
  return (
    form.value.firstName.trim() !== '' &&
    form.value.lastName.trim() !== '' &&
    form.value.email.trim() !== '' &&
    form.value.phone.trim() !== '' &&
    form.value.message.trim() !== '' &&
    form.value.privacyPolicy
  )
}

const submitForm = async () => {
  if (validateForm()) {
    try {
      const payload = {
        lead: {
          firstName: form.value.firstName,
          lastName: form.value.lastName,
          email: form.value.email,
          phone: form.value.phone,
          message: form.value.message
        }
      };

      console.log('Payload:', payload);

      const headers = {
        'Content-Type': 'application/json'
      };

      const response = await fetch('/.netlify/functions/leadWebhook', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      alert('Lead submitted successfully!')
      // Reset form
      form.value = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        privacyPolicy: false
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('An error occurred while submitting your data. Please try again.')
    }
  } else {
    alert('Please fill in all required fields and accept the privacy policy before submitting.')
  }
}
</script>