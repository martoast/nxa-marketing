<template>
    <Popover class="relative">
      <nav class="relative mx-auto flex max-w-7xl items-center justify-between px-6 pt-6" aria-label="Global">
        <div class="flex flex-1 items-center">
          <div class="flex w-full items-center justify-between md:w-auto">
            <NuxtLink to="/">
              <span class="sr-only">Your Company</span>
              <img src="/logo.svg" class="h-16 w-16" alt="logo" />
            </NuxtLink>
            <div class="-mr-2 flex items-center md:hidden">
              <PopoverButton
                class="focus-ring-inset relative inline-flex items-center justify-center rounded-md bg-slate-900 p-2 text-gray-400 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span class="absolute -inset-0.5" />
                <span class="sr-only">Open main menu</span>
                <Bars3Icon class="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
          </div>
          <div class="hidden space-x-10 md:ml-10 md:flex">
            <NuxtLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              class="font-monument text-base font-medium text-white transition-colors duration-300 hover:text-brand-300"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
      </nav>
  
      <transition
        enter-active-class="duration-150 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <PopoverPanel
          focus
          class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
        >
          <div class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
            <div class="flex items-center justify-between px-5 pt-4">
              <div>
                <img class="h-8 w-auto" src="/logo.svg" alt="" />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-400"
                >
                  <span class="absolute -inset-0.5" />
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="space-y-1 px-2 pb-3 pt-2">
              <NuxtLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </template>
  
  <script setup>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  
  const navigation = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#stats' },
    { name: 'Services', href: '#features' },
    { name: 'Contact', href: '#contact' }
  ]
  </script>