<template>
    <!-- CARS PAGE -->

    <div class="mt-32 flex">
        <!-- CAR SIDE BAR -->
        <SideBar />
        <!-- CAR SIDE BAR -->

        <!-- CAR CARDS -->
        <NuxtPage />
        <!-- CAR CARDS -->
    </div>
    <!-- CARS PAGE -->
</template>

<script setup>
const { toTitleCase } = useUtilities();
const route = useRoute();
useHead({
    title: `${route.params.make ? toTitleCase(route.params.make) : 'Cars'} in ${toTitleCase(route.params.city)}`
});
definePageMeta({
    layout: 'custom-inner-page'
});
</script>

<style scoped></style>