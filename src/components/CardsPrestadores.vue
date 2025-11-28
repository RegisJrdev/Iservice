<template>
  <div
    class="w-full max-w-sm mx-auto flex flex-col overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer mt-10 bg-white"
  >
    <div
      class="relative h-36 sm:h-40 bg-gradient-to-br from-[#11192D] via-[#1a2542] to-[#11192D] flex items-center justify-center overflow-hidden"
    >
      <div class="relative z-10 bg-white/10 backdrop-blur-sm p-4 rounded-full">
        <svg
          class="w-12 h-12 sm:w-16 sm:h-16 text-white"
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

    </div>

    <div 
      @click="$emit('abrir-modal', prestador)" 
      class="p-4 sm:p-5 flex-1 flex flex-col hover:bg-gray-50 transition-colors duration-200"
    >
      <h3 class="text-lg sm:text-xl font-bold text-gray-800 mb-2 truncate">
        {{ prestador.nome }}
      </h3>
      
      <div class="flex items-start gap-2 mb-4">
        <svg 
          class="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <p class="text-sm text-gray-600 leading-relaxed">
          {{ prestador.endereco.cidade }}, {{ prestador.endereco.bairro }}
        </p>
      </div>
      
      <div class="mt-auto">
        <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
          Serviços
        </p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="(categorie, index) in prestador.categorie"
            :key="index"
            class="inline-flex items-center text-xs font-medium bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200 px-3 py-1.5 rounded-full hover:from-blue-100 hover:to-indigo-100 transition-colors duration-200"
          >
            <span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1.5"></span>
            {{ categorie }}
          </span>
        </div>
      </div>

      <div class="mt-4 pt-4 border-t border-gray-100">
        <div class="flex items-center justify-between text-sm">
          <span class="text-gray-500 font-medium">Ver detalhes</span>
          <svg 
            class="w-5 h-5 text-gray-400 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
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