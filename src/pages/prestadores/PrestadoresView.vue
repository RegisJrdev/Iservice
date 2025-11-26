<template>
  <div class="flex justify-between mb-8">
    <BarraPesquisa />
    <select 
        v-model="filtroStore.filtro"
        class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
      >
        <option value="">Todas as categorias</option>
        <option v-for="categorie in categorias" :key="categorie" :value="categorie">
          {{ categorie }}
        </option>
      </select>
  </div>  
  <div class="pr-2">
    <section class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-8">
      <CardsPrestadores
        v-for="DadosPrestador in prestadoresFiltrados" 
        :key="DadosPrestador.id"
        :prestador="DadosPrestador"
      />
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import PrestadoresController from '@/controllers/prestadores/PrestadoresController';
import { useFiltroStore } from '@/stores/filtroStore';

const prestadores = ref([]);
const filtroStore = useFiltroStore(); ;

async function obterPrestadores() {
  prestadores.value = await PrestadoresController.listarPrestadores();
}

const prestadoresFiltrados = computed(() => {
  if (!filtroStore.filtro) {
    return prestadores.value;
  }
  return prestadores.value.filter(prestador => prestador.categorie.includes(filtroStore.filtro));
});

const categorias = computed(() => {
  const cats = prestadores.value.flatMap(prestador => prestador.categorie);
  return Array.from(new Set(cats));
})

onMounted(async () => {
  await obterPrestadores();
});
</script>