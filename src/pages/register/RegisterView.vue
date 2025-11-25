<template>
  <div class="p-4 max-w-md mx-auto bg-indigo-900 rounded text-white">
    <h2 class="text-xl mb-4">Cadastro</h2>
    <form @submit.prevent="onRegister" class="space-y-3">
      <input v-model="form.nome" placeholder="Nome" required class="w-full p-2 border rounded text-gray-900" />
      <input v-model="form.email" placeholder="Email" required type="email"  class="w-full p-2 border rounded text-gray-900" />
      <input v-model="form.senha" placeholder="Senha" required type="password"  class="w-full p-2 border rounded text-gray-900" />
      <div>
        <label class="mr-4"><input type="radio" v-model="form.role"  value="client" /> Cliente</label>
        <label><input type="radio" v-model="form.role" value="provider" /> Prestador</label>
      </div>
      <div v-if="form.role === 'provider'">
        <label class="block mb-1">Categorias</label>
        <select v-model="form.selectedCategories" multiple required class="w-full p-2 border rounded text-gray-900">
          <option v-for="(categorie, index) in categories" :key="index" :value="categorie">
            {{ categorie }}
          </option>
        </select>
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
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import UserController from '@/controllers/UserController'

const router = useRouter()

const form = reactive({
  nome: '',
  email: '',
  senha: '',
  role: 'client',
  selectedCategories: []
})

const loading = ref(false)
const error = ref(null)

const categories = [
  "Construção Civil",
  "Reparos e Manutenção",
  "Eletricista",
  "Encanador",
  "Pintura",
  "Limpeza",
  "Jardinagem",
  "Culinária",
  "Beleza e Estética",
  "Educação"
]

async function onRegister() {
  loading.value = true
  error.value = null
  try {
    const payload = {
      nome: form.nome,
      email: form.email,
      senha: form.senha,
      role: form.role,
      categorie: form.role === 'provider' ? [...form.selectedCategories] : []
    }
    console.log(payload)
    await UserController.registrar(payload)
    
    if (form.role === 'provider') {
      router.push('/prestador/dashboard')
    } else {
      router.push({ name: 'users.home' }) 
    }
  } catch (err) {
    error.value = 'Erro ao cadastrar. Tente novamente.'
    console.log(err)
  } finally {
    loading.value = false
  }
}
</script>