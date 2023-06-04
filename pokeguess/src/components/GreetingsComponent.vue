<template>
    <div class="greetings columns">
        <div class="column is-8 dialog">
            <div class="box">
                {{ currentBubble }}
            </div>
            <div class="control">
                <button class="button is-normal is-rounded is-outlined" @click="prevBubble">
                    prev
                </button>
                <button class="button is-normal is-rounded" @click="nextBubble">
                    next
                </button>
            </div>
        </div>

        <div class="column is-4">
            <img src="../assets/professor.png" alt="Professor Oak" class="professor">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'GreetingsComponent',
    data() {
        return {
            bubbles: [
                "Welcome, young trainer! I'm Professor Oak, and I'm here to help you on your journey to become a Pokemon master. Are you ready to learn more about the world of Pokemon?",
                "Well, for starters, we have an exciting 'Who's That Pokemon' game that will test your knowledge of these amazing creatures. You can also explore our Pokedex, which contains information about all the Pokemon from the first generation. From Bulbasaur to Mewtwo, you'll find everything you need to know about these fascinating creatures.",
                " Have fun, and remember, the journey to become a Pokemon master is a long one, but it's worth it in the end. Good luck!",
                "Goodbye, young trainer! Catch you later!"
            ],
            step: 0,
            currentBubble: ''
        }
    },
    mounted() {
        this.typer()
    },
    computed: {
        displayedSentence(): string {
            var bubble: string = this.bubbles[this.step]
            return bubble
        }
    },
    methods: {
        typer() {
            if (this.currentBubble.length < this.displayedSentence.length) {
                this.currentBubble += this.displayedSentence.charAt(this.currentBubble.length)
                setTimeout(this.typer, 10);
            }
        },
        nextBubble(): void {
            if (this.step <= (this.bubbles.length - 2)) {
                this.step++
                this.currentBubble = ''
                this.typer()
            }
        },
        prevBubble(): void {
            if (this.step > 0) {
                this.step--
                this.currentBubble = ''
                this.typer()
            }
        }
    }
});

</script>

<style scoped>
.control {
    float: right;
    margin-right: 5px;
    padding-left: auto;
}

.control>button {
    margin-left: 10px;
}

.box {
    margin-bottom: 1%;
    margin-top: 5%;
    border-radius: 1em;
    border: 4px solid #a1d0de;
    padding: 1.5em;
    height: 50%;
    width: auto;
    overflow-y: auto;
}

.greetings {
    padding-top: 1%;
    margin: auto;
    justify-content: center;
    display: flex;
    width: 50%;
    height: auto;
}

@media only screen and (max-width: 768px) {
    .greetings {
        flex-direction: column-reverse;
        width: auto;
        padding: 1rem;
        align-items: center;
    }

    .box {
        padding: 0.3rem 0.7rem;
        height: 7rem;
        width: 18rem;
        margin-top: -20%;
    }

    .professor {
        height: 80%;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .greetings {
        height: 100vh;
        width: auto;
        padding: 1rem;
        align-items: center;
        justify-content: center;
    }

    .dialog {
        display: flex;
        flex-direction: column;
    }

    .box {
        padding: 0.3rem 0.7rem;
        height: 8rem;
        width: 25rem;
        margin-top: -20%;
    }

    .professor {
        height: 80%;
    }

}
</style>