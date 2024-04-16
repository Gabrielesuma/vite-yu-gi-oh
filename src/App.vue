<template>
  <HeaderComponent @statusSearch="setParams"/>
  <MainComponent/>
</template>

<script>
  import {store} from './store';
  import axios from 'axios';
  import HeaderComponent from './components/HeaderComponent.vue';
  import MainComponent from './components/MainComponent.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent
    },
    data(){
      return{
        store
      }
    },
    methods: {
      setParams(){
        if(this.store.statusFilter){
          this.store.options.params.archetype = this.store.statusFilter;
        } else {
          delete this.store.options.params.archetype;
        }
        this.getCards();
      },
      getCards(){
        axios.get(this.store.apiUrl + this.store.endPoint.cards, this.store.options).then((res) => {
          this.store.cards = res.data.data.map((card) => {
            return {
              id: card.id,
              name: card.name,
              image: card.card_images[0].image_url,
              archetype: card.archetype
            }
          });
          this.store.total = res.data.meta.total_rows;
        })
      },
      getArchetype(){
        axios.get(this.store.apiUrl + this.store.endPoint.archetype).then((res) => {
          this.store.archetypeList = res.data.slice(0, 10);
        })
      }
    },
    created(){
      this.getCards();
      this.getArchetype();
    }
  }
</script>

<style lang="scss" scoped>

</style>