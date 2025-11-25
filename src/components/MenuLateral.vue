<template>
    <div :class="[
        'bg-indigo-900 transition-all duration-300 ease-in-out overflow-hidden',
        isOpen ? 'w-56' : 'w-0'
    ]">
        <ul class="menu bg-base-200 rounded-box w-56 text">
            <li v-for="link in links" :key="link.name">
                <router-link :to="{ name: link.name }" class="text-white">{{ link.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
const links = [
    { title: 'Usuários', name: 'users.view' },
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
