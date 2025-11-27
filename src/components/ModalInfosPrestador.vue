<template>
  <transition name="fade-zoom">
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center"
      @click.self="close"
    >
      <div class="absolute inset-0 bg-black/60"></div>
      <div
        class="relative bg-gray-50 rounded-2xl shadow-2xl w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto p-8 mx-4 border border-gray-200"
        role="dialog"
        aria-modal="true"
      >
        <header class="flex items-start justify-between mb-6">
          <div class="flex items-center gap-5"></div>
          <button
            @click="close"
            class="p-1.5 rounded-full hover:bg-gray-200 text-gray-600 transition"
          ></button>
        </header>

        <main class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <section class="md:col-span-2 bg-white rounded-xl p-5 border border-gray-200">
            <h3 class="text-xs font-semibold text-gray-800 mb-3 tracking-wide uppercase">
              Informações Gerais
            </h3>

            <div class="space-y-3">
              <div class="flex gap-3">
                <span class="w-20 text-xs text-gray-500 font-medium">Nome</span>
                <span class="text-gray-900 font-medium">{{ prestador.nome }}</span>
              </div>

              <div class="flex gap-3">
                <span class="w-20 text-xs text-gray-500 font-medium">Email</span>
                <span class="text-gray-900">{{ prestador.email }}</span>
              </div>

              <div class="flex gap-3">
                <span class="w-20 text-xs text-gray-500 font-medium">Função</span>
                <span class="text-gray-900">{{ prestador.categorie }}</span>
              </div>

              <div class="flex gap-3">
                <span class="w-20 text-xs text-gray-500 font-medium">Endereço</span>
                <span class="text-gray-900 leading-tight">
                  {{ prestador.endereco.rua }}, {{ prestador.endereco.cidade }},
                  {{ prestador.endereco.bairro }}
                </span>
              </div>

              <div>
                <h4 class="text-xs font-semibold text-gray-800 mb-2 uppercase">
                  Descrição
                </h4>
                <p class="text-sm text-gray-700 leading-relaxed">
                  Profissional experiente, com atendimento rápido, confiável e
                  especializado. Ideal para serviços residenciais, comerciais e manutenção
                  geral.
                </p>
              </div>
            </div>
          </section>

          <aside class="flex flex-col gap-4">
            <div class="bg-white border border-gray-200 rounded-xl p-5">
              <h4 class="text-xs font-semibold text-gray-800 mb-2 uppercase">
                Especialidades
              </h4>

              <select multiple
                v-model="categoriaSelecionada"
                class="w-full px-3 py-2 text-sm border rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none"
              >
                <option disabled value="">Selecione uma categoria</option>
                <option v-for="cat in prestador.categorie" :key="cat" :value="cat">
                  {{ cat }}
                </option>
              </select>
            </div>

            <div class="flex flex-col gap-3">
              <button
                @click="AgendarServico"
                class="w-full bg-black text-white py-2.5 rounded-lg font-medium transition hover:opacity-90"
              >
                Agendar Serviço
              </button>
            </div>
          </aside>
        </main>

        <!-- FOOTER -->
        <footer class="mt-8 flex justify-end gap-3">
          <button
            @click="close"
            class="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Fechar
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { onMounted, onBeforeUnmount, toRaw } from "vue";
import { ref, unref } from "vue";
import ServicoController from "@/controllers/Servicos/ServicoController";

const props = defineProps({
  showModal: { type: Boolean, default: false },
  prestador: { type: Object, default: null },
});

const emit = defineEmits(["update:showModal"]);
const categoriaSelecionada = ref([]);
const categoria = unref(categoriaSelecionada)
function close() {
  emit("update:showModal", false);
}

async function AgendarServico() {
    const payload = {
        prestador: props.prestador,
        categoria: categoriaSelecionada.value
    }
    console.log(payload);
    
    await ServicoController.adicionarServico(payload)
}
</script>

<style scoped>
.fade-zoom-enter-active,
.fade-zoom-leave-active {
  transition: opacity 240ms ease, transform 240ms cubic-bezier(0.2, 0.9, 0.3, 1);
}
.fade-zoom-enter-from,
.fade-zoom-leave-to {
  opacity: 0;
  transform: scale(0.97) translateY(8px);
}
</style>
