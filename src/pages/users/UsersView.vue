<template>
  <div class="flex flex-row justify-between items-end w-full mb-15">
    <div class="w-full">
      <h1 class="text-4xl mb-4 font-bold">Usuários</h1>
      <BarraPesquisa/>
    </div>
  </div>
  
  <div class="w-full">
    <table class="w-full bg-white shadow rounded-lg">
      <thead class="bg-indigo-900 text-white sticky top-0 z-10">
        <tr>
          <th class="px-6 py-4 text-left text-sm font-semibold uppercase">Nome</th>
          <th class="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">Role</th> 
          <th class="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wide">Ações</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr v-for="user in users" :key="user.id" class="hover:bg-gray-50 transition-colors duration-200">

          <td class="px-6 py-4 text-sm font-semibold text-gray-900 bg-gray-50">
            {{ user.name }}
          </td>

          <td class="px-6 py-4 text-sm font-semibold text-gray-700 bg-gray-50">
            {{ user.role == 'client' ? 'Cliente' : 'Prestador' }}
          </td>

          <td class="px-6 py-4 text-sm text-center text-gray-700 bg-gray-50 relative">

            <button 
              @click="toggleMenu(user.id)"
              class="p-2 hover:bg-gray-200 rounded-full transition-colors duration-200"
            >
              <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
              </svg>
            </button>

            <div 
              v-if="openMenuId === user.id"
              class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200"
            >
              <button 
                @click="editUser(user)" 
                class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 flex items-center gap-2"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Editar
              </button>

              <button 
                @click="deleteUser(user)" 
                class="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                Excluir
              </button>
            </div>
          </td>

        </tr>
      </tbody>
    </table>
  </div>

  <Toast :show="showToast" :mensagem="toastMensagem" />
</template>



<script setup>
import { onMounted, ref } from 'vue';
import UserController from '@/controllers/UserController';
import Toast from '@/components/toast.vue';

const users = ref([]);
const openMenuId = ref(null);

const showToast = ref(false);
const toastMensagem = ref('');

onMounted(async () => {
  users.value = await UserController.index();
});

const toggleMenu = (userId) => {
  openMenuId.value = openMenuId.value === userId ? null : userId;
};

const editUser = async (user) => {
  openMenuId.value = null;
};


const deleteUser = async (user) => {
  if (!confirm('Tem certeza que deseja excluir este usuário?')) {
    openMenuId.value = null;
    return;
  }

  try {
    await UserController.excluir(user.id);
    users.value = await UserController.index();

    toastMensagem.value = `O usuário ${user.name} foi excluído com sucesso`;
    showToast.value = true;

    setTimeout(() => (showToast.value = false), 3000);

  } catch (error) {
    console.error('Erro ao excluir:', error);

    toastMensagem.value = 'Erro ao excluir usuário. Tente novamente.';
    showToast.value = true;

    setTimeout(() => (showToast.value = false), 3000);
  } 
  finally {
    openMenuId.value = null;
  }
};
</script>
