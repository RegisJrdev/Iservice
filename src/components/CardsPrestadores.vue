<template>
  <div
    class="w-full h-64 flex flex-col overflow-hidden shadow-md rounded duration-300 cursor-pointer hover:shadow-xl hover:scale-105 transition"
  >
    <div
      class="w-full h-32 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center"
    >
      <svg
        class="w-16 h-16 text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        ></path>
      </svg>
    </div>
    <div @click="$emit('abrir-modal', prestador)" class="p-3 bg-white hover:bg-gray-50 transition flex-1">
      <h3 class="text-lg font-bold text-gray-800">{{ prestador.nome }}</h3>
      <p>{{ prestador.endereco.cidade }}, {{ prestador.endereco.bairro }}</p>
      <div class="flex flex-wrap gap-1 mt-3">
        <span
          v-for="(categorie, index) in prestador.categorie"
          :key="index"
          class="text-xs bg-gray-200 text-gray-600 text-black px-2 py-1 rounded"
        >
          {{ categorie }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  prestador: {
    type: Object,
    required: true,
  },
});
</script>
