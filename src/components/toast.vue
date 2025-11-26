<template>
  <div v-if="show" class="fixed top-20 right-4 z-50 animate-fade-in">
    <div class="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3">
      <span class="font-medium">{{ mensagem }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  mensagem: {
    type: String,
    default: 'Ação realizada com sucesso!'
  }
});
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
</style>