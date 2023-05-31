<template>
    <div class="pokebox">
        <div v-if="processingGuess" class="notification" :class="{ 'is-success': correctGuess, 'is-danger': !correctGuess }"> 
            It was <strong>{{ pokemonName }}</strong>!
        </div>
        <div class="pokemon">
            <div class="image-box">
                <img :src="imageUrl" :class="{ visible: visible, goingAway: goingAway }" alt="who's that pokemon?">
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
import { defineComponent, nextTick, ref } from 'vue';
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
            count: 0,
            imageUrl: ref(""),
            visible: false,
            goingAway: false,
            disabled: false,
            processingGuess: false,
            correctGuess: false,
        }
    },
    computed: {
        currentPokemon(): { id: number; name: string; url: string; } {
            return this.guessingList[this.count]
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
            this.visible = true;
            if (this.guess.toLocaleLowerCase() === this.pokemonName.toLocaleLowerCase()) { // early termination //
                this.correctGuess = true
                this.processingGuess = true
                setTimeout(this.guessText, 2000)
                this.guess = ""
                this.guessCount += 1
                this.streak += 1
                setTimeout(this.nextPokemon, 2500)
                if (this.streak >= this.maxStreak) {
                    this.maxStreak = this.streak
                }
            } else {
                this.correctGuess = false
                this.processingGuess = true
                setTimeout(this.guessText, 2000)
                setTimeout(this.nextPokemon, 2500)
                this.guess = ""
                this.streak = 0
            }
        },
        async nextPokemon() {
            this.goingAway = true
            await nextTick()
            setTimeout(this.styleReset, 20)
        },
        async styleReset() {
            this.visible = false
            await nextTick()
            setTimeout(this.countIncrease, 100)
        },
        async countIncrease() {
            this.count += 1
            await nextTick()
            setTimeout(this.comingBack, 200)
        },
        async comingBack() {
            this.goingAway = false
            await nextTick()
            this.disabled = false
            await nextTick()
        },
        async guessText() {
            this.correctGuess = false
            this.processingGuess = false
            await nextTick()
        },
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
    width: 10%;
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
    width: 60%;
    margin: auto;
}

.pokemon img {
    width: auto;
    height: 17rem;
    filter: brightness(0);
    pointer-events: none;
}

.image-box {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
}

.pokemon img.visible {
    animation: fade-in 0.5s ease-in-out forwards;
}

@keyframes fade-in {
    from {
        filter: brightness(0);
    }

    to {
        filter: brightness(1);
    }
}

.pokemon img.goingAway {
    animation: fade-out 0.2s ease-in-out forwards;
}

@keyframes fade-out {
    from {
        height: 17rem;
        width: auto;
        filter: brightness(1);
    }

    to {
        height: 0rem;
        width: auto;
        filter: brightness(1);
    }
}

.input {
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
        position: absolute;
        top: 20%;
        left: 15%;
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

    .pokemon img.visible {
        animation: fade-in 0.5s ease-in-out forwards;
    }

    @keyframes fade-in {
        from {
            filter: brightness(0);
        }

        to {
            filter: brightness(1);
        }
    }

    .pokemon img.goingAway {
        animation: fade-out 0.2s ease-in-out forwards;
    }

    @keyframes fade-out {
        from {
            width: auto;
            height: 10rem;
            filter: brightness(1);
        }

        to {
            height: 0rem;
            width: auto;
            filter: brightness(1);
        }
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
}
</style>