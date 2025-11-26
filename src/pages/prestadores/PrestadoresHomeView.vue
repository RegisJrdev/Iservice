<template>
  <div class="min-h-screen p-6">
    <div class="max-w-6xl mx-auto">
      <div class="mb-16 flex justify-between">
        <div>
            <h1 class="text-3xl font-bold text-gray-800">Dashboard</h1>
            <p class="text-gray-600 mt-2">Visão geral do seu desempenho</p>
        </div>
  <ContagemRegressiva/>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          v-for="card in cards" 
          :key="card.titulo"
          class="bg-gray-50 rounded-lg shadow p-6"
        >
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-500 font-bold text-sm">{{ card.titulo }}</p>
              <h3 class="text-4xl text-gray-800 mt-2">{{ card.valor }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import ContagemRegressiva from '@/components/ContagemRegressiva.vue';

const cards = [
  {
    titulo: 'Total de Clientes',
    valor: '127'
  },
  {
    titulo: 'Receita Total',
    valor: 'R$ 5.280'
  },
  {
    titulo: 'Serviços Concluídos',
    valor: '342'
  }
];
</script>