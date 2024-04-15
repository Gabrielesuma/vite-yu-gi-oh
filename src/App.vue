<template>
  <HeaderComponent/>
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
      getCharacters(){
        axios.get(this.store.apiUrl).then((res) => {
          console.log(res.data.meta);
          this.store.characters = res.data.data;
          this.store.total = res.data.meta.current_rows;
        })
      }
    },
    created(){
      this.getCharacters();
    }
  }
</script>

<style lang="scss" scoped>

</style>