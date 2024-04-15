<template>
    <div class="card">
        <img :src="image" class="card-img-top" :alt="title">
        <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-text">{{ archetype }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: ['image', 'name', 'archetype']
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;

    div.card-body{
        background-color: $bg-yugi;
    }
</style>