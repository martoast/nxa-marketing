<template>
  <div class="relative bg-black">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <!-- Left Column - Contact Info -->
      <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <!-- Decorative background -->
          <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden lg:w-1/2">
            <div class="absolute inset-0 bg-gradient-to-tr from-black via-slate-900 to-slate-800 opacity-90"></div>
            <svg 
              class="absolute inset-0 h-full w-full stroke-gray-200/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" 
              aria-hidden="true"
            >
              <defs>
                <pattern id="contact-pattern" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
                  <path d="M130 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" stroke-width="0" fill="url(#contact-pattern)" />
            </svg>
          </div>

          <!-- Content -->
          <h2 class="font-monument text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's make things happen
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            Partner with us - before your competitor does.
          </p>
          
          <!-- Contact Details -->
          <dl class="mt-10 space-y-4 text-base leading-7 text-gray-300">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <PhoneIcon class="h-7 w-6 text-brand-400" aria-hidden="true" />
              </dt>
              <dd>
                <a class="hover:text-brand-400 transition-colors duration-200" href="tel:+1(602)626-4274">
                  +1 (602) 626-4274
                </a>
              </dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <EnvelopeIcon class="h-7 w-6 text-brand-400" aria-hidden="true" />
              </dt>
              <dd>
                <a class="hover:text-brand-400 transition-colors duration-200" href="mailto:support@marketbenders.com">
                  support@marketbenders.com
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <!-- Right Column - Contact Form -->
      <form @submit.prevent="submitForm" class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <!-- First Name -->
            <div>
              <label for="first-name" class="block text-sm font-semibold leading-6 text-white">
                First name
              </label>
              <div class="mt-2.5">
                <input 
                  v-model="form.firstName" 
                  type="text" 
                  name="first-name" 
                  id="first-name" 
                  autocomplete="given-name"
                  required
                  maxlength="50"
                  pattern="[A-Za-z\s]+"
                  :disabled="isSubmitting"
                  class="block w-full rounded-lg border-0 bg-slate-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-400 sm:text-sm sm:leading-6" 
                />
              </div>
            </div>

            <!-- Last Name -->
            <div>
              <label for="last-name" class="block text-sm font-semibold leading-6 text-white">
                Last name
              </label>
              <div class="mt-2.5">
                <input 
                  v-model="form.lastName" 
                  type="text" 
                  name="last-name" 
                  id="last-name" 
                  autocomplete="family-name"
                  required
                  maxlength="50"
                  pattern="[A-Za-z\s]+"
                  :disabled="isSubmitting"
                  class="block w-full rounded-lg border-0 bg-slate-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-400 sm:text-sm sm:leading-6" 
                />
              </div>
            </div>

            <!-- Email -->
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-semibold leading-6 text-white">
                Email
              </label>
              <div class="mt-2.5">
                <input 
                  v-model="form.email" 
                  type="email" 
                  name="email" 
                  id="email" 
                  autocomplete="email"
                  required
                  maxlength="100"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  :disabled="isSubmitting"
                  class="block w-full rounded-lg border-0 bg-slate-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-400 sm:text-sm sm:leading-6" 
                />
              </div>
            </div>

            <!-- Phone -->
            <div class="sm:col-span-2">
              <label for="phone-number" class="block text-sm font-semibold leading-6 text-white">
                Phone number
              </label>
              <div class="mt-2.5">
                <input 
                  v-model="form.phone" 
                  type="tel" 
                  name="phone-number" 
                  id="phone-number" 
                  autocomplete="tel"
                  required
                  maxlength="20"
                  pattern="[\d\s\+\-\(\)]+"
                  :disabled="isSubmitting"
                  class="block w-full rounded-lg border-0 bg-slate-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-400 sm:text-sm sm:leading-6" 
                />
              </div>
            </div>

            <!-- Message -->
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold leading-6 text-white">
                Project details
              </label>
              <div class="mt-2.5">
                <textarea 
                  v-model="form.message" 
                  name="message" 
                  id="message" 
                  rows="4" 
                  required
                  maxlength="1000"
                  :disabled="isSubmitting"
                  class="block w-full rounded-lg border-0 bg-slate-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-400 sm:text-sm sm:leading-6" 
                />
              </div>
            </div>

            <!-- Privacy Policy -->
            <div class="sm:col-span-2">
              <div class="flex items-center mb-4">
                <input 
                  v-model="form.privacyPolicy" 
                  id="privacy-policy" 
                  name="privacy-policy" 
                  type="checkbox" 
                  required
                  :disabled="isSubmitting"
                  class="h-4 w-4 rounded border-gray-300 bg-slate-800 text-brand-400 focus:ring-brand-400" 
                />
                <label for="privacy-policy" class="ml-2 block text-sm text-gray-300">
                  I consent to receive SMS notifications and marketing communication from Market Benders. Message frequency varies. Message & Data rates may apply. You can reply STOP to unsubscribe at any time.
                </label>
                
              </div>
              <a href="/privacy-policy" class="text-white underline text-center mr-6">Privacy policy</a>
              <a href="/terms-of-service" class="text-white underline text-center">Terms of service</a>

            </div>
          </div>

          <!-- Submit Button -->
          <div class="mt-8 flex justify-end">
            <div class="relative group">
              <!-- Gradient border wrapper -->
              <div 
                class="absolute -inset-1 rounded-lg bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 opacity-75 blur transition duration-500 group-hover:opacity-100"
                :class="{ 'opacity-40': !isFormValid || isSubmitting }"
              ></div>
              
              <!-- Button -->
              <button 
                type="submit" 
                :disabled="isSubmitting || !isFormValid" 
                class="relative rounded-lg bg-black px-8 py-3 text-base font-semibold text-white shadow-sm transition-all duration-300 group-hover:transform group-hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ isSubmitting ? 'Submitting...' : 'Get Your Free Proposal' }}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline';

const isSubmitting = ref(false);
const submitAttempts = ref(0);
const lastSubmitTime = ref(0);

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  privacyPolicy: false
});

const isFormValid = computed(() => {
  return (
    form.value.firstName.trim() !== '' &&
    form.value.lastName.trim() !== '' &&
    form.value.email.trim() !== '' &&
    form.value.phone.trim() !== '' &&
    form.value.message.trim() !== '' &&
    form.value.privacyPolicy &&
    validateEmail(form.value.email) &&
    validatePhone(form.value.phone)
  );
});

const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};

const validatePhone = (phone) => {
  const re = /^[\d\s\+\-\(\)]{10,20}$/;
  return re.test(phone);
};

const sanitizeInput = (input) => {
  return input.replace(/<[^>]*>/g, '').trim();
};

const submitForm = async () => {
  if (!isFormValid.value || isSubmitting.value) {
    return;
  }

  // Rate limiting
  const now = Date.now();
  if (now - lastSubmitTime.value < 1000) { // 1 second cooldown
    alert('Please wait before submitting again.');
    return;
  }

  if (submitAttempts.value >= 5) { // Max 5 attempts per session
    alert('Maximum submission attempts reached. Please try again later.');
    return;
  }

  isSubmitting.value = true;
  submitAttempts.value++;
  lastSubmitTime.value = now;

  try {
    const payload = {
      lead: {
        firstName: sanitizeInput(form.value.firstName),
        lastName: sanitizeInput(form.value.lastName),
        email: sanitizeInput(form.value.email).toLowerCase(),
        phone: sanitizeInput(form.value.phone),
        message: sanitizeInput(form.value.message)
      }
    };

    const response = await fetch('/.netlify/functions/leadWebhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-Source': 'contact-form'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Reset form on success
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      privacyPolicy: false
    };

    alert('Thank you! We will be in touch soon.');
    
  } catch (error) {
    console.error('Form submission error:', error);
    alert('An error occurred. Please try again later or contact us directly.');
  } finally {
    isSubmitting.value = false;
  }
};
</script>