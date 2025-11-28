<template>
  <!-- Layout principal -->
  <div class="flex h-screen bg-white">
    <!-- Sidebar (Menu Lateral) -->
    <MenuLateral :isOpen="isSideBarOpen"/>
    <!-- Conteúdo Principal -->
    <div class="flex flex-col flex-1 overflow-hidden">
      <!-- Navbar Superior -->
      <NavBar @toggle-menu="toggleSideBar" v-if="!isAuthPage"/>
      <!-- Área de Conteúdo (Rotas) -->
      <main class="h-full overflow-y-auto ">
        
        <router-view></router-view>

        <!-- Em React/Vue, você colocaria <Outlet /> ou <router-view> aqui -->
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isSideBarOpen = ref(false);

function toggleSideBar() {
  isSideBarOpen.value = !isSideBarOpen.value;
}

const isAuthPage = computed(() => {
  return route.path === '/register'
})

</script> <style lang="scss" scoped></style>
  