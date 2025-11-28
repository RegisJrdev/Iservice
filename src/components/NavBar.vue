<template>
<div class="navbar bg-base-100 mb-15 shadow-sm">
  <div class="navbar-start">
    <div class="dropdown">
      <button type="button" class="btn btn-ghost btn-circle" @click='toggleMenu'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
    </button>
    </div>
  </div>  
  <div class="navbar-center">
      <a class="btn btn-ghost text-xl" @click="handleGoToHome">iServ</a>
  </div>
</div>
</template>

<script setup>
import router from '@/router'

const handleGoToHome = () => {
  router.push({ name: 'users.home'})
}
const emit = defineEmits(['toggle-menu'])

function toggleMenu() {
  emit('toggle-menu')
}
</script>