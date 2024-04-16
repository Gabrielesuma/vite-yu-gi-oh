import {reactive} from 'vue';

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/',
    endPoint: {
        cards: 'cardinfo.php',
        archetype: 'archetypes.php'
    },
    options: {
        params: {
            num: 20,
            offset: 0,
            //archetype
        }
    },
    statusFilter: '',
    characters: [],
    cards: [],
    archetypeList: [],
    total: 0
});