<template>
    <div class="pokebox">
        <Transition name="notification">
            <div v-if="processingGuess" class="notification"
                :class="{ 'is-success': correctGuess, 'is-danger': !correctGuess }">
                It was <strong>{{ pokemonName }}</strong>!
            </div>
        </Transition>

        <div class="pokemon">
            <div class="image-box">
                <Transition name="pokemon" appear @after-leave="nextPokemon">
                    <img v-if="!processingGuess" :src="imageUrl" alt="who's that pokemon?">
                </Transition>
            </div>


            <input type="text" class="input " v-model="guess" @keyup.enter="processGuess" :disabled="disabled">
        </div>
        <div class="counts">
            <div class="box">
                <h2>Streak:</h2>
                {{ streak }}
            </div>
            <div class="box">
                <h2>Best:</h2>
                {{ maxStreak }}
            </div>
            <div class="box">
                <h2>Total:</h2>
                {{ guessCount }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { fetchPokemonList, Pokemon } from '@/interfaces/pokemon';


export default defineComponent({
    name: "PokemonComponent",
    data() {
        return {
            guessingList: [] as Pokemon[],
            streak: 0,
            maxStreak: 0,
            guessCount: 0,
            pokemonName: "",
            guess: "",
            pokemonIndex: 0,
            imageUrl: ref(""),
            disabled: false,
            processingGuess: false,
            correctGuess: false,
        }
    },
    computed: {
        currentPokemon(): { id: number; name: string; url: string; } {
            return this.guessingList[this.pokemonIndex]
        },
    },
    async created() {
        this.guessingList = await fetchPokemonList();
        this.shuffle(this.guessingList);
    },
    methods: {
        shuffle(array: Pokemon[]) {
            let currentIndex = array.length, temporaryValue, randomIndex;
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        },
        processGuess() {
            if (this.guess === "") {
                return
            }
            this.disabled = true;
            if (this.guess.toLocaleLowerCase() != this.pokemonName.toLocaleLowerCase()) {
                this.correctGuess = false
                this.processingGuess = true
                this.guess = ""
                this.streak = 0
                return
            }
            if (this.guess.toLocaleLowerCase() === this.pokemonName.toLocaleLowerCase()) {
                this.correctGuess = true
                this.processingGuess = true
                this.guess = ""
                this.guessCount += 1
                this.streak += 1

            }
            if (this.streak >= this.maxStreak) {
                this.maxStreak = this.streak
            }
        },
        nextPokemon() {
            this.pokemonIndex += 1
            this.processingGuess = false
            this.disabled = false
        }
    },
    watch: {
        async currentPokemon(pokemon) {
            const id = pokemon.id.toString().padStart(3, "0");
            this.imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
            this.pokemonName = pokemon.name
            console.log(pokemon.name)
        }
    }

})
</script>

<style scoped>
.notification {
    text-align: center;
    width: 20%;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
}

.notification strong {
    text-transform: capitalize;
}

.pokebox {
    display: flex;
    justify-content: space-between;
    padding: 3em;
    margin: 0 auto;
    width: 1280px;
    height: 732px;
    background-image: url(../assets/pokemonbg.png);
    background-repeat: no-repeat;
    background-size: contain;
}

.pokemon {
    display: flex;
    flex-direction: column;
    height: 60%;
    width: 60%;
    margin: auto;
}

.pokemon img {
    width: auto;
    height: 17rem;
    pointer-events: none;
    filter: brightness(0);
}

.image-box {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
}

.input {
    bottom: 0;
    width: 17em;
    margin-top: 2em;
    background-color: rgb(255, 255, 255);
    text-align: center;
}

.box {
    padding: 1em;
    text-align: center;
    width: 5em;
    margin: 0.7em;
}

.pokemon-enter-from {
    transform: scale(0);
}

.pokemon-enter-to {
    transform: scale(1);
}

.pokemon-enter-active {
    transition: all 0.5s ease;
}

.pokemon-leave-from {
    transform: scale(1);
    filter: brightness(0);
}

.pokemon-leave-to {
    transform: scale(0);
    filter: brightness(1);
}

.pokemon-leave-active {
    animation: leaves 2.5s ease;
}

@keyframes leaves {
    0% {
        transform: scale(1);
        filter: brightness(0);
    }

    20% {
        filter: brightness(1)
    }

    90% {
        transform: scale(1)
    }

    100% {
        transform: scale(0);
        filter: brightness(1);
    }
}

.notification-enter-from {
    opacity: 0;
    transform: translateY(-60px);
}

.notification-enter-active {
    transition: all 0.3s ease;
}

.notification-leave-to {
    opacity: 0;
    transform: translateY(-60px);
}

.notification-leave-active {
    transition: all 0.3s ease;
}

@media only screen and (max-width: 768px) {
    .pokebox {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0;
        margin: 0 auto;
        width: auto;
        height: auto;
        background-image: none;
    }

    .pokemon {
        margin-top: 20vh;
        width: auto;
        height: auto;
        justify-content: center;
    }

    .image-box {
        width: 100%;
        height: 20rem;
    }

    .counts {
        position: absolute;
        left: 0;
        top: 3em;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
    }

    .counts .box {
        height: 5rem;
    }

    .input {
        position: absolute;
        bottom: 2rem;
        left: 10%;
        width: 80%;
    }

    .notification {
        width: 70%;
        margin: 0 auto;
        top: 20%;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {

    .pokebox {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        margin: 0;
        width: 100%;
        height: calc(100vh - 52px);
        background-image: url(../assets/pokemonbg.png);
        background-repeat: no-repeat;
        background-size: contain;
        background-position-y: center;
    }

    .pokemon {
        width: auto;
        height: auto;
        justify-content: center;
        margin-left: 15%;
    }

    .image-box {
        width: 100%;
        height: 15rem;
    }

    .pokemon img {
        width: auto;
        height: 10rem;
        filter: brightness(0);
    }

    .notification {
        width: 25%;
        position: absolute;
        top: 20%;
    }

    .input {
        width: 13em;
        height: 2em;
        margin-top: 0;
        background-color: rgb(255, 255, 255);
        text-align: center;
    }
}

@media (min-width: 1024px) and (max-width: 1280px) {
    .pokebox {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        margin: 0;
        width: 100%;
        height: calc(100vh - 52px);
        background-image: url(../assets/pokemonbg.png);
        background-repeat: no-repeat;
        background-size: contain;
        background-position-y: center;
    }

    .notification {
        width: 25%;
        position: absolute;
        top: 20%;
    }
}</style>