<template>
    <div class="container p-2">
        <ResultsComponent/>
        <div class="row gy-4">
            <div class="col-12 col-md-6 col-lg-3" v-for="character in store.characters" :key="character.id">
                <CardComponent :image="character.card_images[0].image_url" :name="character.name" :archetype="character.archetype"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {store} from '../store.js';
    import CardComponent from './CardComponent.vue';
    import ResultsComponent from './ResultsComponent.vue';
    export default {
        name: 'CharacterList',
        components: {
            CardComponent,
            ResultsComponent
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    div.container{
        background-color: white;
    }
</style>