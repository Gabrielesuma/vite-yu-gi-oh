<template>
    <div class="container">
        <h4>Found {{ store.total }} cards</h4>
    </div>
</template>

<script>
    import {store} from '../store.js';
    export default {
        name: 'ResultsComponent',
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    div.container{
        color: white;
        background-color: black;
        padding: 5px;
    }
</style>