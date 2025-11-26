<template>
  <div class="min-h-screen bg-white flex items-center justify-center p-4">
    <div class="w-full max-w-md bg-indigo-900 rounded-lg shadow-xl p-8">
      <h2 class="text-2xl font-bold text-white mb-6 text-center">Criar Conta</h2>
      
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-white mb-1">Nome</label>
          <input 
            v-model="form.nome" 
            placeholder="Digite seu nome" 
            required 
            class="w-full px-4 py-2 border border-indigo-700 bg-indigo-800 text-white placeholder-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none transition"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-white mb-1">Email</label>
          <input 
            v-model="form.email" 
            placeholder="seu@email.com" 
            required 
            type="email"
            class="w-full px-4 py-2 border border-indigo-700 bg-indigo-800 text-white placeholder-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none transition"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-white mb-1">Senha</label>
          <input 
            v-model="form.senha" 
            placeholder="Mínimo 6 caracteres" 
            required 
            type="password"
            class="w-full px-4 py-2 border border-indigo-700 bg-indigo-800 text-white placeholder-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none transition"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-white mb-2">Tipo de conta</label>
          <div class="flex gap-4">
            <label class="flex items-center cursor-pointer">
              <input 
                type="radio" 
                v-model="form.role" 
                value="client"
                class="w-4 h-4 text-indigo-400 focus:ring-indigo-400"
              />
              <span class="ml-2 text-white">Cliente</span>
            </label>
            <label class="flex items-center cursor-pointer">
              <input 
                type="radio" 
                v-model="form.role" 
                value="provider"
                class="w-4 h-4 text-indigo-400 focus:ring-indigo-400"
              />
              <span class="ml-2 text-white">Prestador</span>
            </label>
          </div>
        </div>

        <div v-if="form.role === 'provider'" class="transition-all">
          <label class="block text-sm font-medium text-white mb-2">Categorias de Serviço</label>
          <select 
            v-model="form.selectedCategories" 
            multiple 
            required
            class="w-full px-4 py-2 border border-indigo-700 bg-indigo-800 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none transition h-40"
          >
            <option v-for="(categorie, index) in categories" :key="index" :value="categorie">
              {{ categorie }}
            </option>
          </select>
          <p class="text-xs text-indigo-300 mt-1">Segure Ctrl (ou Cmd) para selecionar múltiplas categorias</p>
        </div>

        <div v-if="error" class="bg-red-500 bg-opacity-20 border border-red-400 text-red-200 px-4 py-3 rounded-lg">
          {{ error }}
        </div>

        <button 
          @click="onRegister" 
          :disabled="loading"
          class="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ loading ? 'Cadastrando...' : 'Cadastrar' }}
        </button>

        <p class="text-center text-sm text-indigo-200 mt-4">
          Já tem uma conta? 
          <a href="#" class="text-white hover:text-indigo-300 font-medium">Faça login</a>
        </p>
      </div>
    </div>
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
    
    await UserController.registrar(payload)
    
    if (form.role === 'provider') {
      router.push('{ name: 'prestadores.home' }')
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