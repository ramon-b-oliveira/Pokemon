<template>
    <div class="navbar">
        <img :src="charmanderSprite" alt="Charmander" class="sprites" :class="{ 'animate-sprite': isMouseOverPlay }">
        <RouterLink to="/play">
            <button class="play-button" @mouseover="isMouseOverPlay = true"
                @mouseout="isMouseOverPlay = false">Play</button>
        </RouterLink>
        <RouterLink to="/pokedex">
            <button class="pokedex-button" @mouseover="isMouseOverPokedex = true"
                @mouseout="isMouseOverPokedex = false">PokeDex</button>
        </RouterLink>
        <img :src="bulbasaurSprite" alt="Bulbasaur" class="sprites" :class="{ 'animate-sprite': isMouseOverPokedex }">
        <div class="home-div" v-if="isNotHome">
            <img :src="mewtwoSprite" alt="Mewtwo" class="mewtwo-sprite" :class="{ 'animate-mewtwo': isMouseOverHome }">
            <router-link to="/">
                <button class="home-button" @mouseover="isMouseOverHome = true" @mouseout="isMouseOverHome = false"
                    @click="isMouseOverHome = false">Home</button>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router';

export default defineComponent({
    components: { RouterLink },
    name: "NavBarComponent",
    data(): {
        bulbasaurSprite: string;
        charmanderSprite: string;
        mewtwoSprite: string;
        isMouseOverPlay: boolean;
        isMouseOverPokedex: boolean;
        isMouseOverHome: boolean;
    } {
        return {
            bulbasaurSprite: "",
            charmanderSprite: "",
            mewtwoSprite: "",
            isMouseOverPlay: false,
            isMouseOverPokedex: false,
            isMouseOverHome: false,
        };
    },
    computed: {
        isNotHome(): boolean {
            return this.$route.path !== '/';
        },
    },
    mounted() {
        fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
            .then(response => response.json())
            .then(data => {
                this.bulbasaurSprite = data.sprites.front_default;
            });
        fetch("https://pokeapi.co/api/v2/pokemon/charmander")
            .then(response => response.json())
            .then(data => {
                this.charmanderSprite = data.sprites.front_default;
            });
        fetch("https://pokeapi.co/api/v2/pokemon/mewtwo")
            .then(response => response.json())
            .then(data => {
                this.mewtwoSprite = data.sprites.front_default;
            });
    },
});

</script>


<style scoped>
.navbar {
    justify-content: center;
    background-color: #252e3d;
}

button {
    display: inline-block;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    padding: 1rem 2rem;
    margin: 1rem 0.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.5s ease;
}

.play-button {
    background-color: #d15e00;
    color: white;
}

.play-button:hover {
    background-color: white;
    color: #d15e00;
    box-shadow: 0 0 10px #d15e00;
}

.pokedex-button {
    background-color: #00910c;
    color: white;
}

.pokedex-button:hover {
    background-color: white;
    color: #00910c;
    box-shadow: 0 0 10px #00910c;
}

.home-button {
    z-index: 1;
    position: absolute;
    margin-left: 15rem;
    background-color: #c5b6ff;
    color: white;
}

.home-button:hover {
    background-color: white;
    color: #c5b6ff;
    box-shadow: 0 0 10px #c5b6ff;
}

.sprites {
    opacity: 1;
    transition: all 0.3s ease;
}

.animate-sprite {
    opacity: 1;
    transform: rotate(360deg);
}

.mewtwo-sprite {
    margin-top: 0.5rem;
    height: 4.5rem;
    position: absolute;
    margin-left: 15rem;
    transition: all 0.3s ease;
}

.animate-mewtwo {
    margin-left: 10rem;
}

@media only screen and (max-width: 768px) {
    .navbar {
        display: flex;
        justify-content: space-around;
    }

    button {
        display: inline;
        font-size: 0.7rem;
        font-weight: bold;
        text-transform: uppercase;
        padding: 0.7rem 1.5rem;
        margin: 0.3rem 0.2rem;
        border: none;
        border-radius: 5px;
        transition: all 0.5s ease;
    }

    .home-div {
        display: inline;
    }

    .home-button {
        display: inline;
        z-index: 1;
        position: inherit;
        margin: 0.3rem 0.2rem;
        background-color: #c5b6ff;
        color: white;
    }

    .sprites {
        display: none;
    }

    .mewtwo-sprite {
        display: none;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {

    .navbar {
        display: flex;
        justify-content: center;
    }

    button {
        display: inline;
        font-size: 0.7rem;
        font-weight: bold;
        text-transform: uppercase;
        padding: 0.7rem 1.5rem;
        margin: 0.3rem 0.2rem;
        border: none;
        border-radius: 5px;
        transition: all 0.5s ease;
    }

    .home-div {
        display: inline;
    }

    .home-button {
        display: inline;
        z-index: 1;
        position: inherit;
        margin: 0.3rem 0.2rem;
        background-color: #c5b6ff;
        color: white;
    }

    .sprites {
        display: none;
    }

    .mewtwo-sprite {
        display: none;
    }

}

@media (min-width: 1024px) and (max-width: 1280px) {
    .home-button {
        z-index: 1;
        position: absolute;
        right: 0;
        background-color: #c5b6ff;
        color: white;
    }

    .mewtwo-sprite {
        margin-top: 0.5rem;
        height: 4.5rem;
        position: absolute;
        right: 70px;
        transition: all 0.3s ease;
    }

    .animate-mewtwo {
        right: 135px;
    }

}
</style>