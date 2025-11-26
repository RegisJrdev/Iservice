<template>
  <div class="w-full flex flex-col justify-center items-center p-4">
    <h1 class="mb-8">
      <strong class="text-xl">Categorias de Serviços</strong> <br />
      Escolha a categoria do serviço que você procura
    </h1>
    <div class="grid gap-8 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      <div
        v-for="categorie in Categorias"
        :key="categorie.name"
        @click="handleGoToPrestadoresView(categorie.name)"
        class="w-full flex flex-col justify-center items-center p-4 h-40 shadow-md rounded duration-300 cursor-pointer hover:bg-gray-200 hover:scale-110 transition"
      >
        <div
          class="w-16 h-16 mb-4 rounded-full flex items-center justify-center transition-transform"
          :style="{ backgroundColor: categorie.color + '20' }"
        >
          <component
            :is="categorie.icon"
            class="w-8 h-8"
            :style="{ color: categorie.color }"
          />
        </div>
        <strong class="text-center">{{ categorie.name }}</strong>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useFiltroStore } from "@/stores/filtroStore";

const router = useRouter();
import {
  WrenchScrewdriverIcon,
  BoltIcon,
  BeakerIcon,
  PaintBrushIcon,
  SparklesIcon,
  ScissorsIcon,
  HomeModernIcon,
  CakeIcon,
  AcademicCapIcon,    
} from "@heroicons/vue/24/outline";

const Categorias = [
  {
    name: "Construção Civil",
    icon: HomeModernIcon,
    color: "#f59e0b",
    count: 89,
    popular: true,
  },
  {name: "Reparos e Manutenção", icon: WrenchScrewdriverIcon, color: "#3b82f6", count: 127, popular: true,},
  { name: "Eletricista", icon: BoltIcon, color: "#eab308", count: 64 },
  { name: "Encanador", icon: BeakerIcon, color: "#06b6d4", count: 52 },
  { name: "Pintura", icon: PaintBrushIcon, color: "#8b5cf6", count: 73 },
  { name: "Limpeza", icon: SparklesIcon, color: "#10b981", count: 95, popular: true },
  { name: "Jardinagem", icon: ScissorsIcon, color: "#22c55e", count: 41 },
  { name: "Culinária", icon: CakeIcon, color: "#ef4444", count: 38 },
  { name: "Beleza e Estética", icon: ScissorsIcon, color: "#ec4899", count: 56 },
  { name: "Educação", icon: AcademicCapIcon, color: "#6366f1", count: 47 },
];

function handleGoToPrestadoresView(categoria) {
  const filtroStore = useFiltroStore();
  filtroStore.setCategoria(categoria)
  router.push({ name: 'prestadores.view'})
}
</script>
