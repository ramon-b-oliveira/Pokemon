<template>
    <PokemonComponent></PokemonComponent>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PokemonComponent from "@/components/PokemonComponent.vue";

export default defineComponent({
    name: "PlayView",
    components: {
        PokemonComponent,
    }
})
</script>