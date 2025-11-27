<template>
    <div :class="[
        'bg-indigo-900 transition-all duration-300 ease-in-out overflow-hidden',
        isOpen ? 'w-56' : 'w-0'
    ]">
        <ul class="menu bg-base-200 font-bold rounded-box w-56 text">
            <li v-for="link in links" :key="link.name" class="">
                <router-link :to="{ name: link.name }" class="text-white hover:bg-white hover:text-indigo-900 rounded">{{ link.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
const links = [
    { title: 'Usuários', name: 'users.view' },
    { title: 'Prestadores', name: 'prestadores.view' },
];

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
}
)
</script>

<style lang="scss" scoped></style>
