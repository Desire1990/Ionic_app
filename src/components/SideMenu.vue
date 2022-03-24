<template>
	<ion-menu side='start' menu-id='sidemenu' content-id='mymenu'>
		<ion-header>
			<ion-toolbar>
				<ion-title>Welcome! </ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<ion-list>
				<ion-item button @click="toPage('/home')">
					<ion-icon :icon='home' slot='start'></ion-icon>
					<ion-label>Home</ion-label>
				</ion-item>
				<ion-item button @click="toPage('/todos')">
					<ion-icon :icon='build' slot='start'></ion-icon>
					<ion-label>Todos</ion-label>
				</ion-item>
			</ion-list>
		</ion-content>
	</ion-menu>
</template>
<script>
	import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel, menuController} from "@ionic/vue";
	import {  home, build} from "ionicons/icons";
	// import { UseRouter } from "vue-router";
	export default{
		data() {
			return {
				home,
				build
			}
		},
		components: {
			IonMenu,
			IonHeader,
			IonToolbar,
			IonTitle,
			IonContent,
			IonList, 
			IonItem, 
			IonIcon, 
			IonLabel
		},
		// setUp(){
		// 	let router = UseRouter();
		// 	return{
		// 		router
		// 	}
		// },
		methods: {
			toPage(path){
				menuController.close('sidemenu');
				this.$router.replace(path)
			},
		}
	}
</script>