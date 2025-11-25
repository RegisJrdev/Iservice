<template>
  <div class="flex justify-between">
    <BarraPesquisa />

      <!-- <select 
        v-model="filtroCategoria"
        class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
      >
        <option value="">Todas as categorias</option>
        <option v-for="categorie in prestadores" :key="cat" :value="categorie">
          {{ prestadores.categorie[0] }}
        </option>
      </select> -->
  </div>

  <section class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full h-full mt-10 gap-8">
    <CardsPrestadores
      v-for="DadosPrestador in prestadores" 
      :key="DadosPrestador.id"
      :prestador="DadosPrestador"
    />
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import PrestadoresController from '@/controllers/prestadores/PrestadoresController';

const prestadores = ref([]);

async function obterPrestadores() {
  prestadores.value = await PrestadoresController.listarPrestadores();
  console.log(prestadores.value);
}

onMounted(async () => {
  await obterPrestadores();
});
</script>
