<template>
  <div class="pl-20 pr-20 py-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-2">Serviços Aceitos</h1>
      <p class="text-gray-600">Visualize todos os serviços que foram aceitos</p>
    </div>

    <div 
      v-if="servicosFiltrados.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <div 
        v-for="servico in servicosFiltrados" 
        :key="servico.id"
        class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
      >
        <CardsServicosAceitos 
          :servico="servico" 
          :show-btn="false"
        />
      </div>
    </div>

    <!-- Mensagem quando não há serviços -->
    <div 
      v-else
      class="text-center py-12 text-gray-500"
    >
      <svg class="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
      </svg>
      <p class="text-lg">
        {{ filtroAceito === true ? 'Nenhum serviço aceito' : filtroAceito === false ? 'Nenhum serviço pendente' : 'Nenhum serviço disponível' }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import ServicoController from '@/controllers/ServicosController/ServicoController';

const servicos = ref([]);
const filtroAceito = ref(true); // true = apenas aceitos

const servicosFiltrados = computed(() => {
  if (filtroAceito.value === null) {
    return servicos.value;
  }
  return servicos.value.filter(servico => servico.aceito === filtroAceito.value);
});

async function obterServicos() {
  try {
    servicos.value = await ServicoController.listarServicos();
  } catch (error) {
    console.error('Erro ao obter serviços:', error);
  }
}

onMounted(async () => {
  await obterServicos();
});
</script>