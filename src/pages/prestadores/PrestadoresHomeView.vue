  <template>
    <div class="min-h-screen p-6 bg-[#F5F6F8]">
      <div class="max-w-6xl mx-auto">

        <!-- Header -->
        <header
          class="mb-12 rounded-xl p-6 bg-white shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between gap-6"
        >
          <div>
            <h1 class="text-3xl font-bold tracking-tight text-[#11192D]">
              Dashboard
            </h1>
            <p class="text-gray-500 mt-1">
              Visão geral do seu desempenho
            </p>
          </div>

          <div class="w-full md:w-auto">
            <ContagemRegressiva />
          </div>
        </header>

        <!-- Cards -->
        <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <article
            v-for="card in cards"
            :key="card.titulo"
            class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all"
          >
            <p class="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              {{ card.titulo }}
            </p>

            <h3 class="mt-3 text-4xl font-extrabold text-[#11192D]">
              {{ card.valor }}
            </h3>

            <div class="mt-6 flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-lg flex items-center justify-center"
                :style="{ background: 'rgba(17,25,45,0.08)' }"
              >
                <span v-html="card.icon" class="w-6 h-6"></span>
              </div>
            </div>
          </article>
        </section>

        <!-- Ações rápidas minimalistas -->
        <section class="mt-12 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 class="text-lg font-semibold text-[#11192D] mb-4">
            Ações rápidas
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <button
              v-for="btn in botoes"
              :key="btn"
              class="w-full px-4 py-3 text-left rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition text-[#11192D] font-medium"
            >
              {{ btn }}
            </button>
          </div>
        </section>

      </div>
    </div>
  </template>

  <script setup>
  import ContagemRegressiva from '@/components/ContagemRegressiva.vue';

  const corBase = "#11192D";

  const cards = [
    {
      titulo: "Total de Clientes",
      valor: "127",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="${corBase}" viewBox="0 0 24 24"><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/></svg>`
    },
    {
      titulo: "Receita Total",
      valor: "R$ 5.280",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="${corBase}" viewBox="0 0 24 24"><path d="M12 21c4.9 0 9-4.1 9-9s-4.1-9-9-9S3 7.1 3 12s4.1 9 9 9zm1-13h3l-5 8v-6H8l5-8v6z"/></svg>`
    },
    {
      titulo: "Serviços Concluídos",
      valor: "342",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="${corBase}" viewBox="0 0 24 24"><path d="M9 21H7a2 2 0 01-2-2V5a2 2 0 012-2h2v18zm2 0h4V3h-4v18zm6 0h2a2 2 0 002-2V5a2 2 0 00-2-2h-2v18z"/></svg>`
    }
  ];

  const botoes = [
    "Gerenciar Clientes",
    "Ver Relatórios",
    "Configurações",
    "Cadastrar Serviço",
    "Histórico",
    "Preferências"
  ];
  </script>

  <style scoped>
  article {
    transition: 0.25s ease;
  }
  article:hover {
    transform: translateY(-2px);
  }
  </style>
