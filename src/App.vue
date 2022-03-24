<template>
  <ion-app>
    <SideMenu></SideMenu>
    <ion-router-outlet id='mymenu'/>
  </ion-app>
</template>

<script >
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import SideMenu from "@/components/SideMenu.vue"

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    SideMenu
  }
});
</script>