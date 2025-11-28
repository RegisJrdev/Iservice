<template>
    <div :class="[
        'color-blue transition-all duration-300 ease-in-out overflow-hidden',
        isOpen ? 'w-56' : 'w-0'
    ]">
    <h1 class="text-white font-bold text-center mt-5">iServ</h1>
        <ul class="menu bg-base-200 font-bold rounded-box w-56 text mt-10">
            <li v-if="authUser" v-for="link in linksUser" :key="link.name" class="">
                <router-link :to="{ name: link.name }" class="text-white p-3  mb-2 hover:bg-white hover:text-indigo-900 rounded">{{ link.title }}</router-link>
            </li>
            <li v-else v-for="link in linksPrestadores" :key="link.title" class="">
                <router-link :to="{ name: link.name }" class="text-white p-3  mb-2 hover:bg-white hover:text-indigo-900 rounded">{{ link.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const authUser = computed(() => route.path.includes('/users'));

const linksUser = [
    {meta: 'users', title: 'Usuários', name: 'users.view' },
    {meta: 'prestadores', title: 'Prestadores', name: 'prestadores.view' },
    {meta: 'users', title: 'Serviços Solicitados', name: 'users.servicos' },
];

const linksPrestadores = [
    {meta: 'prestadores', title: 'Serviços Agendados', name: 'prestadores.servicos' },
    {meta: 'prestadores', title: 'Serviços Aceitos', name: 'prestadores.servicos.aceitos' },
]
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
}
)
</script>
<style scoped>
.color-blue {
    background-color: #11192D;
}
</style>