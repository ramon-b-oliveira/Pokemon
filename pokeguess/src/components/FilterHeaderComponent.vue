<template>
    <div class="pokedex-header">
        <div class="search-bar">
            <label class="search-text">Name or ID</label>
            <div class="search-input">
                <input class="input is-inline" type="text" v-model="searchTerm" @keyup.enter="emitSearch">
                <button class="button" @click="emitSearch()">
                    <span class="icon">
                        <i class="fa fa-magnifying-glass"></i>
                    </span>
                </button>
            </div>
        </div>
        <div class="sort-by column is-narrow is-flex is-flex-direction-column">
            <div class="selection">
                <label for="sort-select">Sort by</label>
                <select id="sort-select" v-model="selectedSort" @change="emitSort">
                    <option value="low-high">Low to high</option>
                    <option value="high-low">High to low</option>
                    <option value="a-z">A to Z</option>
                    <option value="z-a">Z to A</option>
                </select>
            </div>
            <div class="box info">
                <p>Only Generation I Pokémon are displayed in this Pokédex</p>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FilterHeaderComponent',
    props: {
        searchQuery: String,
        sortAscending: Boolean,
    },
    emits: {
        search: (searchTerm: string) => true,
        sort: (selectedSort: string) => true,
    },
    data() {
        return {
            searchTerm: '',
            selectedSort: 'low-high',
        }
    },
    methods: {
        emitSearch() {
            this.$emit('search', this.searchTerm);
        },
        emitSort() {
            this.$emit('sort', this.selectedSort);
        }
    }
});
</script>

<style>
.pokedex-header {
    margin: 0 auto;
    height: 10rem;
    max-width: 1280px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0rem;
    background-color: #313131;
}

.search-bar {
    padding: 2rem;
    display: flex;
    flex-direction: column;
}

.search-text {
    margin-bottom: 1rem;
    font-size: 1.7rem;
    font-weight: bolder;
    color: #FFFFFF;
}

.search-bar input[type="text"] {
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #CCCCCC;
    margin-right: 0.5rem;
}

.search-bar button {
    border: #d15e00;
    background-color: #d15e00;
    color: #FFFFFF;
}

.sort-by {
    display: flex;
    align-items: center;
}

.sort-by label {
    color: #FFFFFF;
    margin-right: 0.5rem;
}

.sort-by select {
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #CCCCCC;
    margin-right: 0.5rem;
}

.sort-by button {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: none;
    background-color: #4CAF50;
    color: #FFFFFF;
    cursor: pointer;
}

.sort-by button:hover {
    background-color: #3E8E41;
}

.box {
    width: 16rem;
    padding: 0.7em;
}

.info {
    margin-top: 1rem;
    background-color: #3E8E41;
    color: #ffffff;
    font-weight: 500;
}

@media only screen and (max-width: 768px) {
    .pokedex-header {
        margin: 0 auto;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0rem;
        background-color: #313131;
    }
}
</style>