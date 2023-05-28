<template>
    <FilterHeaderComponent @search="emitSearch" @sort="emitSort" />
    <div class="pokedex">
        <CardComponent v-for="(pokemon, index) in displayedList" :key="index" :url="pokemon.url"
            :class="reveal ? 'reveal' : ''" />
        <div v-if="displayedList.length === 0" class="no-match">
            <h2>We couldn't find a Pokémon with that name or ID :(</h2>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { fetchPokemonList, Pokemon } from '@/interfaces/pokemon';
import CardComponent from './CardComponent.vue';
import FilterHeaderComponent from './FilterHeaderComponent.vue';

export default defineComponent({
    name: "PokedexComponent",
    components: {
        CardComponent,
        FilterHeaderComponent,
    },
    data() {
        return {
            pokemonList: [] as Pokemon[],
            displayedList: [] as Pokemon[],
            reveal: true,
            totalDisplayed: 0,
            searchTerm: '',
            selectedSort: 'low-high',
        };
    },
    computed: {
        filteredItems(): Pokemon[] {
            let sortedList = this.pokemonList.slice();
            if (this.selectedSort === "low-high") {
                sortedList.sort((a, b) => a.id - b.id);
            } else if (this.selectedSort === "high-low") {
                sortedList.sort((a, b) => b.id - a.id);
            } else if (this.selectedSort === "a-z") {
                sortedList.sort((a, b) => a.name.localeCompare(b.name));
            } else if (this.selectedSort === "z-a") {
                sortedList.sort((a, b) => b.name.localeCompare(a.name));
            }
            const searchNumber = /^\d+$/.test(this.searchTerm) ? parseInt(this.searchTerm) : NaN;
            if (isNaN(searchNumber)) {
                sortedList = sortedList.filter((pokemon: Pokemon) =>
                    pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
                );
            } else {
                sortedList = sortedList.filter((pokemon: Pokemon) => pokemon.id === searchNumber);
            }
            return sortedList.slice(0, this.totalDisplayed)
        },
    },
    watch: {
        filteredItems(filteredList: Pokemon[]) {
            this.displayedList = filteredList
        }
    },
    async created() {
        this.pokemonList = await fetchPokemonList();
        this.totalDisplayed = 12;
    },
    mounted() {
        window.addEventListener('scroll', this.loadMore);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.loadMore);
    },
    methods: {
        emitSort(sortOption: string) {
            this.selectedSort = sortOption;
        },
        emitSearch(searchTerm: string) {
            this.searchTerm = searchTerm;
        },

        async loadMore() {
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY || window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight;

            if (windowHeight + scrollY >= docHeight) {
                this.totalDisplayed += 12;
            }
        },
    },
});
</script>

<style scoped>
.reveal {
    opacity: 0;
    animation: reveal 2.5s ease-out 1 forwards;

}

@keyframes reveal {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.pokedex {
    margin: 0 auto;
    height: auto;
    max-width: 1280px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: space-between;
    padding: 1rem;
    background-color: #d1d1d1;
    overflow: hidden;
    vertical-align: baseline;
}

.no-match h2 {
    font-weight: bolder;
    color: #b90000;
}

@media only screen and (max-width: 768px) {
    .pokedex {
        flex-direction: column;
    }
}

</style>
