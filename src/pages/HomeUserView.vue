<template>
  <div class="flex flex-col gap-20 justify-center items-center text-center">
    <h1 class="text-6xl font-bold">
      ENCONTRE O PROFISSIONAL PARA O <br />
      SERVIÇO QUE DESEJA!
    </h1>

    <div class="relative w-full max-w-4xl">
      <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </span>

      <input
        type="text"
        placeholder="Buscar por serviços ou prestadores..."
        class="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <CardsCategories />

    <section class="w-full pb-20">
      <h1 class="text-2xl uppercase font-bold">Profissionais em Destaque</h1>
      <p class="text-gray-500 mb-14">
        Conheça os prestadores mais bem avaliados da plataforma
      </p>
      <span></span>

      <ModalInfosPrestador v-model:showModal="showModal" :prestador="prestadorSelecionado" />
      <pre>{{ showModal }}</pre>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-8">
        <CardsPrestadores
          v-for="DadosPrestador in prestadores"
          :key="DadosPrestador.id"
          :prestador="DadosPrestador"
          @abrir-modal="abrirModal"
        />
      </div>
    </section>

    <RouterView />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import PrestadoresController from "@/controllers/prestadores/PrestadoresController";
import ModalInfosPrestador from "@/components/ModalInfosPrestador.vue";

const prestadores = ref([]);
const showModal = ref(false);
const prestadorSelecionado = ref(null);

function abrirModal(prestador) {
  prestadorSelecionado.value = prestador;
  showModal.value = true; 
}

async function obterPrestadores() {
  prestadores.value = await PrestadoresController.listarPrestadores();
}

onMounted(async () => {
  await obterPrestadores();
});
</script>

<style scoped>
.fade-zoom-enter-active,
.fade-zoom-leave-active {
  transition: all 0.25s ease;
}

.fade-zoom-enter-from,
.fade-zoom-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
