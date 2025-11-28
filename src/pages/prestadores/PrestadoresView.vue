<template>
  <div class="pl-20 pr-20">
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
      <section v-show="show" class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-8">

      <ModalInfosPrestador v-model:showModal="showModal" :prestador="prestadorSelecionado"/>

        <CardsPrestadores
          v-for="DadosPrestador in prestadoresFiltrados"
          :key="DadosPrestador.id"
          :prestador="DadosPrestador"
          @abrir-modal="abrirModal"

        />
      </section>

      <section v-show="!show" class="flex items-center justify-center h-40 mt-40">
        <p class="text-4xl text-gray-500">Nenhum prestador encontrado</p>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import PrestadoresController from '@/controllers/PrestadoresController/PrestadoresController';
import { useFiltroStore } from '@/stores/filtroStore';

const prestadores = ref([]);
const filtroStore = useFiltroStore();
const showModal = ref(false);
const prestadorSelecionado = ref(null);
const show = ref(true);

async function obterPrestadores() {
  prestadores.value = await PrestadoresController.listarPrestadores();
}

function abrirModal(prestador) {
  prestadorSelecionado.value = prestador;
  showModal.value = true; 
}

const prestadoresFiltrados = computed(() => {
  let prests;
  if (!filtroStore.filtro) {
    console.log(prestadores.value);
    return prestadores.value;
  }

  prests = prestadores.value.filter(prestador => prestador.categorie.includes(filtroStore.filtro));

  if (prests.length === 0) {
    show.value = false
  } else {
    show.value = true
  }
  return prests;
});

const categorias = computed(() => {
  const cats = prestadores.value.flatMap(prestador => prestador.categorie);
  return Array.from(new Set(cats)); 
})

onMounted(async () => {
  await obterPrestadores();
});
</script>