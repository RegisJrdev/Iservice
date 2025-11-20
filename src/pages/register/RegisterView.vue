<template>
  <div class="p-4 max-w-md mx-auto">
    <h2 class="text-xl mb-4">Cadastro</h2>

    <form @submit.prevent="onRegister" class="space-y-3">
      <input v-model="form.nome" placeholder="Nome" required class="w-full p-2 border rounded" />
      <input v-model="form.email" placeholder="Email" type="email" required class="w-full p-2 border rounded" />
      <input v-model="form.senha" placeholder="Senha" type="password" required class="w-full p-2 border rounded" />

      <div>
        <label class="mr-4"><input type="radio" v-model="form.role" value="client" /> Cliente</label>
        <label><input type="radio" v-model="form.role" value="provider" /> Prestador</label>
      </div>

      <div v-if="form.role === 'provider'">
        <label class="block mb-1">Categorias</label>
        <select v-model="form.selectedCategories" multiple class="w-full p-2 border rounded">
          <option v-for="categorie in categories" :key="categorie.id" :value="categorie.id">{{ categorie.name }}</option>
        </select>

        <div class="mt-2 flex gap-2">
          <input v-model="newCategory" placeholder="Nova categoria" class="flex-1 p-2 border rounded" />
          <button type="button" @click="criarCategoria" class="px-3 py-2 border rounded">Criar</button>
        </div>
      </div>

      <div>
        <button type="submit" :disabled="loading" class="px-4 py-2 bg-blue-600 text-white rounded">
          {{ loading ? 'Cadastrando...' : 'Cadastrar' }}
        </button>
      </div>

      <div v-if="error" class="text-red-600 mt-2">{{ error }}</div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import UserController from '@/controllers/UserController'
import CategoriasController from '@/controllers/CategoriasController'

const router = useRouter()

const form = reactive({
  nome: '',
  email: '',
  senha: '',
  role: 'client',
  selectedCategories: []
})

const categories = ref([])
const newCategory = ref('')
const loading = ref(false)
const error = ref(null)

onMounted(async () => {
  categories.value = await CategoriasController.listar()
})

async function onRegister() {
  loading.value = true
  error.value = null
  try {
    const payload = {
      nome: form.nome,
      email: form.email,
      senha: form.senha,
      role: form.role,
      categories: form.role === 'prestador' ? form.selectedCategories : []
    }

    await UserController.registrar(payload)

    if (form.role === 'provider') {
      router.push('/prestador/dashboard')
    } else {
      router.push('/buscar') 
    }
  } catch (error) {
    console.log(error);
    
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* estilos mínimos — opcional */
</style>
