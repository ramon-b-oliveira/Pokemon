<template>
    <div class="card" @mouseenter="details = true" @mouseleave="details = false">
        <div class="card-front">
            <h2>{{ pokemon?.name }}</h2>
            <span class="pokemon-id">#{{ pokemon?.id }}</span>
            <img :src="imageUrl" :alt="pokemon?.name" />
        </div>
        <div class="stats" :class="{ active: details }">
            <div class="stats-text">
                <p>Height:</p>
                <p>{{ pokemon?.height }}m</p>
            </div>
            <div class="stats-text">
                <p>Weight:</p>
                <p>{{ pokemon?.weight }}Kg</p>
            </div>
            <div class="types">
                <p>Types:</p>
                <span v-for="(type, index) in pokemon?.types" :key="index" :class="type.toLowerCase()">{{ type }}</span>
            </div>
            <div class="abilities">
                <p>Abilities:</p>
                <div class="abilities-list">
                    <span v-for="(ability, index) in pokemon?.abilities" :key="index" :class="ability.toLowerCase()">{{
                        ability.replace("-", " ") }}</span>
                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import axios from 'axios';
import { PokemonCard } from '@/interfaces/pokemon-card';

export default defineComponent({
    name: 'CardComponent',
    props: {
        url: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            details: false,
        }
    },
    setup(props) {
        const pokemon = ref<PokemonCard | null>(null);

        watch(
            () => props.url,
            async () => {
                try {
                    const response = await axios.get(props.url);
                    pokemon.value = {
                        id: response.data.id,
                        name: response.data.name,
                        height: convertHeight(response.data.height),
                        weight: convertWeight(response.data.weight),
                        types: response.data.types.map((type: any) => type.type.name),
                        abilities: response.data.abilities.map((ability: any) => ability.ability.name)
                    };
                } catch (error) {
                    console.error(error);
                }
            },
            { immediate: true }
        );

        function convertHeight(heightInDm: number): number {
            return heightInDm / 10;
        }

        function convertWeight(weightInHectograms: number): number {
            return weightInHectograms / 10;
        }

        const imageUrl = ref("");

        watch(
            () => pokemon.value,
            () => {
                if (pokemon.value) {
                    const id = pokemon.value.id.toString().padStart(3, "0");
                    imageUrl.value = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;
                }
            },
            { immediate: true }
        )
        return {
            pokemon,
            imageUrl,
        };
    },
});
</script>

<style scoped>
.card {
    padding: 0.7rem;
    margin: 0 0.5% 1em 0.5%;
    position: relative;
    width: 24%;
    height: auto;
    text-align: center;
    background-color: #c0c0c0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.card-front h2 {
    display: inline;
    float: center;
    text-transform: capitalize;
    font-size: 1.5rem;
    font-weight: bold;
    color: #f1f1f1;
}

.card-front span {
    position: absolute;
    display: inline;
    right: 1em;
    font-size: 1.5rem;
    color: #f1f1f1;
}

.stats {
    border-radius: 0.6rem 0.6rem 0.3rem 0.3rem;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    left: 0;
    top: 15%;
    background: rgba(0, 0, 0, 0.85);
    width: 100%;
    height: 85%;
    position: absolute;
    text-align: left;
    padding: 1.5em;
    color: white;
}

.active {
    opacity: 1;
    height: 85%;
}

.stats-text {
    display: flex;
    margin-bottom: 0.7rem;
    border-bottom: solid 1px #5a5a5a;
    flex-direction: row;
    justify-content: space-between;
}

.types {
    margin-bottom: 0.7rem;
}

.types p {
    margin-bottom: 0.7em;
}

.types span {
    border-radius: 0.4em;
    padding: 0.2em 0.5em 0.2em 0.5em;
    margin-right: 1em;
}

.fire {
    background-color: #FF4422;
}

.water {
    background-color: #3399FF;
}

.grass {
    background-color: #77CC55;
}

.electric {
    background-color: #FFCC33;
}

.normal {
    background-color: #A8A878;
}

.fighting {
    background-color: #C03028;
}

.flying {
    background-color: #A890F0;
}

.poison {
    background-color: #A040A0;
}

.ground {
    background-color: #E0C068;
}

.rock {
    background-color: #B8A038;
}

.bug {
    background-color: #A8B820;
}

.ghost {
    background-color: #705898;
}

.steel {
    background-color: #B8B8D0;
}

.psychic {
    background-color: #F85888;
}

.ice {
    background-color: #98D8D8;
}

.dragon {
    background-color: #7038F8;
}

.dark {
    background-color: #705848;
}

.fairy {
    background-color: #EE99AC;
}

.abilities {
    width: 100%;
}

.abilities-list span {
    display: inline-block;
    margin-bottom: 0.5em;
}

.abilities span {
    background-color: #ffad33;
    border-radius: 0.4em;
    padding: 0.2em 0.5em 0.2em 0.5em;
    margin-right: 1em;
}

@media only screen and (max-width: 768px) {
    .card {
        padding: 0.7rem;
        margin: 0.3rem auto;
        position: relative;
        width: 100%;
        height: auto;
        text-align: center;
        background-color: #c0c0c0;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .card {
        padding: 0.7rem;
        margin: 0.3rem auto;
        position: relative;
        width: 48%;
        height: auto;
        text-align: center;
        background-color: #c0c0c0;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
}
</style>