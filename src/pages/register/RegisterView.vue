<template>
  <div class="min-h-screen w-full bg-gray-50 flex flex-col items-center justify-center p-4">
    <h1 class="text-4xl mb-8 font-bold">iServ</h1>
    <div class="w-full max-w-md bg-white rounded-lg shadow-xl p-7 border border-gray-200">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Criar Conta</h2>
      
      <div class="space-y-4" v-if="step1">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nome</label>
          <input 
            v-model="form.nome" 
            placeholder="Digite seu nome" 
            required 
            class="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            v-model="form.email" 
            placeholder="seu@email.com" 
            required 
            type="email"
            class="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Senha</label>
          <input 
            v-model="form.senha" 
            placeholder="Mínimo 6 caracteres" 
            required 
            type="password"
            class="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Tipo de conta</label>
          <div class="flex gap-4">
            <label class="flex items-center cursor-pointer">
              <input 
                type="radio" 
                v-model="form.role" 
                value="client"
                class="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span class="ml-2 text-gray-700">Cliente</span>
            </label>
            <label class="flex items-center cursor-pointer">
              <input 
                type="radio" 
                v-model="form.role" 
                value="provider"
                class="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span class="ml-2 text-gray-700">Prestador</span>
            </label>
          </div>
        </div>

        <div v-if="form.role === 'provider'" class="transition-all">
          <label class="block text-sm font-medium text-gray-700 mb-2">Categorias de Serviço</label>
          <select 
            v-model="form.selectedCategories" 
            multiple 
            required
            class="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition h-40"
          >
            <option v-for="(categorie, index) in categories" :key="index" :value="categorie">
              {{ categorie }}
            </option>
          </select>
          <p class="text-xs text-gray-500 mt-1">Segure Ctrl (ou Cmd) para selecionar múltiplas categorias</p>
        </div>

        <div v-if="error" class="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
          {{ error }}
        </div>
        <button
          @click="toggleStep1" 
          :disabled="loading"
          class="w-full bg-black hover:bg-blue-700 text-white cursor-pointer font-semibold py-3 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Avançar
        </button>

      </div>

      <div class="space-y-4" v-if="!step1">
        <div class="flex gap-4">
          <div class="w-1/2">
            <label class="block text-sm font-medium text-gray-700 mb-1">CEP</label>
            <input
              v-model="form.cep"
              placeholder="Digite seu Cep"
              required
              type="text"
              class="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>
          <div class="w-1/2">
            <label class="block text-sm font-medium text-gray-700 mb-1">Rua</label>
            <input
              v-model="form.rua"
              placeholder="Informe sua rua"
              required
              type="text"
              class="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>
        </div>

        <div class="flex gap-4">
          <div class="w-1/2">
            <label class="block text-sm font-medium text-gray-700 mb-1">Número</label>
            <input
              v-model="form.numero"
              placeholder="Informe seu número"
              required
              type="text"
              class="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>
          <div class="w-1/2">
            <label class="block text-sm font-medium text-gray-700 mb-1">Bairro</label>
            <input
              v-model="form.bairro"
              placeholder="Informe seu bairro"
              required
              type="text"
              class="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
          <input
            v-model="form.cidade"
            placeholder="Informe sua cidade"
            required
            type="text"
            class="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          />
        </div>

        <div class="flex gap-4">
          <div class="w-1/2">
            <label class="block text-sm font-medium text-gray-700 mb-1">Estado</label>
            <input
              v-model="form.estado"
              placeholder="Informe seu estado"
              required
              type="text"
              class="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>
          <div class="w-1/2">
            <label class="block text-sm font-medium text-gray-700 mb-1">Complemento (opcional)</label>
            <input
              v-model="form.complemento"
              placeholder="Apto, bloco, referencia..."
              type="text"
              class="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>
        </div>

        <div v-if="error" class="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
          {{ error }}
        </div>
        <div class="flex flex-row gap-4">
          <button
            @click="toggleStep1"
            :disabled="loading"
            class="w-full bg-black hover:bg-blue-700 text-white cursor-pointer font-semibold py-3 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Voltar
          </button>
          <button
            @click="onRegister"
            :disabled="loading"
            class="w-full bg-black hover:bg-blue-700 text-white cursor-pointer font-semibold py-3 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ loading ? 'Cadastrando...' : 'Cadastrar' }}
          </button>
        </div>
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
  selectedCategories: [],
  cep: '',
  rua: '',
  numero: '',
  bairro: '',
  cidade: '',
  estado: '',
  complemento: ''
})

const step1 = ref(true)
const loading = ref(false)
const error = ref(null)
const showModal = ref(false)


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

function toggleStep1() {
  step1.value = !step1.value
}

async function onRegister() {
  loading.value = true
  error.value = null
  
  try {
    const payload = {
      nome: form.nome,
      email: form.email,
      senha: form.senha,
      role: form.role,
      endereco: {
        cep: form.cep,
        rua: form.rua,
        numero: form.numero,
        bairro: form.bairro,
        cidade: form.cidade,
        estado: form.estado,
        complemento: form.complemento
      },
      categorie: form.role === 'provider' ? [...form.selectedCategories] : []
    }
    
    await UserController.registrar(payload)
    
    if (form.role === 'provider') {
      router.push({ name: 'prestadores.home'})
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
