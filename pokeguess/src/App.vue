<template>
  <main>
    <NavBarComponent></NavBarComponent>
    <RouterView></RouterView>
  </main>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBarComponent from "@/components/NavBarComponent.vue";

export default defineComponent({
    components: {
        NavBarComponent,
    },
    
})
</script>

<style>
body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}
body {
  background-color: #39475e;
}
</style>
