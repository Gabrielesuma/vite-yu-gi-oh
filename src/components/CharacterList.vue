<template>
    <div class="container">
        <div class="row gy-4">
            <div class="col-12 col-md-6 col-lg-3" v-for="character in store.characters" :key="character.id">
                <CardComponent :image="character.card_images[0].image_url" :name="character.name" :archetype="character.archetype"/>
            </div>
        </div>
        <!--<ul>
            <li v-for="character in store.characters" :key="character.id">
                {{ character.name }} {{ character.archetype }}</li>
        </ul>-->
    </div>
</template>

<script>
    import {store} from '../store.js';
    import CardComponent from './CardComponent.vue';
    export default {
        name: 'CharacterList',
        components: {
            CardComponent
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>