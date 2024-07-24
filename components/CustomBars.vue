<template>
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <div class="space-y-8">
        <div v-for="bar in bars" :key="bar.name" class="relative">
          <h5 class="text-sm font-bold mb-2">{{ bar.name }}</h5>
          <div class="relative h-8 bg-gray-200 rounded-full overflow-hidden">
            <div 
              class="absolute top-0 left-0 h-full rounded-full transition-all duration-1000"
              :class="bar.color"
              :style="{ width: bar.percentage }"
            ></div>
            <div 
              class="absolute top-1/2 transform -translate-y-1/2 right-0 flex items-center justify-center w-16 h-16 rounded-full border-4"
              :class="[`border-${bar.borderColor}`, `bg-${bar.bgColor}`]"
              :style="{ right: `calc(100% - ${bar.percentage} - 2rem)` }"
            >
              <span class="text-lg font-bold">{{ bar.percentage }}</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  
  const bars = [
    { 
      name: 'SMARTSITES PERFORMANCE', 
      percentage: '99%', 
      color: 'bg-yellow-400',
      borderColor: 'yellow-400',
      bgColor: 'yellow-100',
    },
    { 
      name: 'BESTCOMPANY™ OVERALL', 
      percentage: '83%', 
      color: 'bg-blue-500',
      borderColor: 'blue-500',
      bgColor: 'blue-100'
    },
    { 
      name: 'BESTCOMPANY™ MINIMUM', 
      percentage: '40%', 
      color: 'bg-gray-500',
      borderColor: 'gray-500',
      bgColor: 'gray-100'
    },
  ];
  </script>