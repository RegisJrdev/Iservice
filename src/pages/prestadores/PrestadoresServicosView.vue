<template>
  <div class="pl-20 pr-20 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="servico in servicos" 
        :key="servico.id"
        class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
      >
        <CardsServicos :servico="servico" :show-btn="authUser" />
      </div>
    </div>
</div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import ServicoController from '@/controllers/ServicosController/ServicoController';
import { useRoute } from 'vue-router';
import CardsServicos from '@/components/CardsServicos.vue';

const route = useRoute();
const servicos = ref([]);

const authUser = computed(() => route.path.includes('/users'));

async function obterServicos() {
  servicos.value = await ServicoController.listarServicos();
  console.log(servicos.value);
}

onMounted(async () => {
    await obterServicos();
});
</script>