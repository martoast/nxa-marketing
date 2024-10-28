<template>
  <div class="relative overflow-hidden py-16">
    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-5xl text-center">
        <!-- Main heading -->
        <h1
          class="font-monument font-extrabold tracking-tight text-white text-3xl md:text-4xl"
        >
          Unlock Explosive Growth with Our Automation Powerhouse
        </h1>

        <!-- Subheading -->
        <p class="mt-6 text-lg leading-8 text-gray-300 sm:text-xl">
          Ready to 10x your business? Our all-in-one platform delivers
          everything you need to scale fast—automating operations, maximizing
          lead generation, and exploding your online presence. Whether it's CRM,
          local SEO, or powerful automations, we've got you covered.
        </p>

          

          <!-- CTA Button -->
        <div class="mt-10">
          <NuxtLink
            to="#contact"
            class="group relative inline-flex items-center gap-2"
          >
            <!-- Gradient border wrapper -->
            <div 
              class="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 via-blue-300 to-primary opacity-75 blur transition duration-500 group-hover:opacity-100"
            ></div>
            
            <!-- Button content -->
            <div 
              class="relative flex items-center rounded-full bg-black px-8 py-4 text-lg font-semibold text-white transition-all duration-300 group-hover:transform group-hover:scale-[1.02]"
            >
              <span>Unlock Explosive Growth</span>
              <svg 
                class="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 448 512"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/>
              </svg>
            </div>
          </NuxtLink>
    
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { ChevronRightIcon } from "@heroicons/vue/20/solid";

const navigation = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#stats" },
  { name: "Services", href: "#features" },
  { name: "Contact", href: "#contact" },
];

const social = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61563478781170",
    icon: defineComponent({
      render: () =>
        h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", {
            "fill-rule": "evenodd",
            d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
            "clip-rule": "evenodd",
          }),
        ]),
    }),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/market_benders",
    icon: defineComponent({
      render: () =>
        h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", {
            "fill-rule": "evenodd",
            d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
            "clip-rule": "evenodd",
          }),
        ]),
    }),
  },
];

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  privacyPolicy: false,
});

const validateForm = () => {
  return (
    form.value.firstName.trim() !== "" &&
    form.value.lastName.trim() !== "" &&
    form.value.email.trim() !== "" &&
    form.value.phone.trim() !== "" &&
    form.value.message.trim() !== "" &&
    form.value.privacyPolicy
  );
};

const submitForm = async () => {
  if (validateForm()) {
    try {
      const payload = {
        lead: {
          firstName: form.value.firstName,
          lastName: form.value.lastName,
          email: form.value.email,
          phone: form.value.phone,
          message: form.value.message,
        },
      };

      console.log("Payload:", payload);

      const headers = {
        "Content-Type": "application/json",
      };

      const response = await fetch("/.netlify/functions/leadWebhook", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      alert("Submitted!!! We will be in touch.");
      // Reset form
      form.value = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        privacyPolicy: false,
      };
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting your data. Please try again.");
    }
  } else {
    alert(
      "Please fill in all required fields and accept the privacy policy before submitting."
    );
  }
};
</script>
