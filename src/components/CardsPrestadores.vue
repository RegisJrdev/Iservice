<template>
  <!-- Opção 1: Altura fixa menor -->
  <div class="w-full h-64 flex flex-col overflow-hidden shadow-md rounded duration-300 cursor-pointer hover:shadow-xl hover:scale-105 transition">
    <div class="w-full h-32 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
      <svg class="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
      </svg>
    </div>
    <div class="p-3 bg-white hover:bg-gray-50 transition flex-1">
      <h3 class="text-lg font-bold text-gray-800">{{ prestador.name }}</h3>
      <p class="text-sm text-gray-600 mt-1">{{ prestador.categorie[0] }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  prestador: {
    type: Object,
    required: true
  }
})
</script>