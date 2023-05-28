<template>
    <PokedexComponent></PokedexComponent>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PokedexComponent from "@/components/PokedexComponent.vue";

export default defineComponent({
    name: "PokedexView",
    components: {
        PokedexComponent,
    }
})
</script>