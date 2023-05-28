<template>
    <GreetingsComponent></GreetingsComponent>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GreetingsComponent from "../components/GreetingsComponent.vue";

export default defineComponent({
    name: "HomeView",
    components: {
        GreetingsComponent
    }
})
</script>