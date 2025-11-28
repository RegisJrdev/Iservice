<template>
  <div>
    <div class="color-blue p-4">
      <h3 class="text-white text-xl font-bold">
        {{ servico.prestador.nome }}
      </h3>
      <p class="text-blue-100 text-sm">
        {{ servico.prestador.email }}
      </p>
    </div>

    <div class="p-4">
      <div class="mb-4">
        <h4 class="text-gray-700 font-semibold mb-2 flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Serviços Oferecidos
        </h4>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="(categoria, index) in servico.prestador.categorie" 
            :key="index"
            class="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
          >
            {{ categoria }}
          </span>
        </div>
      </div>

      <!-- Endereço -->
      <div class="mb-4">
        <h4 class="text-gray-700 font-semibold mb-2 flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Localização
        </h4>
        <p class="text-gray-600 text-sm">
          {{ servico.prestador.endereco.rua }}, {{ servico.prestador.endereco.numero }}
        </p>
        <p class="text-gray-600 text-sm">
          {{ servico.prestador.endereco.bairro }} - {{ servico.prestador.endereco.cidade }}/{{ servico.prestador.endereco.estado }}
        </p>
        <p class="text-gray-500 text-xs mt-1">
          CEP: {{ servico.prestador.endereco.cep }}
        </p>
      </div>

      <!-- Botões de Ação -->
      <button 
        v-if="showBtn && authUser"
        class="w-full color-blue-btn text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer"
        @click="handleCancelar"
      >
        Cancelar Agendamento
      </button>

      <button 
        v-if="showBtn && !authUser"
        class="w-full color-blue-btn-success text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer"
        @click="handleAceitar"
      >
        Aceitar Serviço
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const props = defineProps({
  servico: {
    type: Object,
    required: true
  },
  showBtn: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['cancelar-servico', 'aceitar-servico']);

const authUser = computed(() => route.path.includes('/users'));

function handleCancelar() {
  emit('cancelar-servico', props.servico);
}

function handleAceitar() {
  emit('aceitar-servico', props.servico);
}
</script>

<style scoped>
.color-blue {
  background-color: #11192D;
}

.color-blue-btn {
  background-color: #11192D;
}

.color-blue-btn:hover {
  background-color: rgb(245, 0, 0);
}

.color-blue-btn-success {
  background-color: #11192D;
}

.color-blue-btn-success:hover {
  background-color: rgb(5, 189, 5);
}
</style>