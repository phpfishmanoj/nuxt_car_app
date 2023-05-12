<template>
    <div>
        <!-- CAR DETAIL PAGE -->
        <!-- CAR HERO -->
        <CarDetailsPics />
        <!-- CAR HERO -->

        <!-- CAR ATTRIBUTES -->
        <CarDetailsAttribute />
        <!-- CAR ATTRIBUTES -->
        <!-- CAR DESCRISPTION -->
        <CarDetailsDescription />
        <!-- CAR DESCRISPTION -->
        <!-- CAR CONTACT -->
        <CarDetailsContact />
        <!-- CAR CONTACT -->
        <!-- CAR DETAIL PAGE   -->
    </div>
</template>

<script setup>
const { toTitleCase } = useUtilities();
const route = useRoute();
useHead({
    title: toTitleCase(route.params.name)
});
definePageMeta({
    layout: 'custom-inner-page'
});
</script>

<style scoped></style>