<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-buttons @click='openMenu()' slot='start'>
					<ion-icon :icon='menu' slot='start'></ion-icon>
				</ion-buttons>
				<ion-title>{{pageTitle}}</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<slot></slot>
		</ion-content>
	</ion-page>
</template>
<script>
	import {IonPage, IonHeader, IonToolbar, menuController, IonTitle, IonContent, IonIcon, IonButtons} from "@ionic/vue";
	import { menu } from "ionicons/icons"
	export default{
		props:['pageTitle'],
		components:{
			IonPage,
			IonHeader,
			IonTitle,
			IonToolbar,
			IonContent,
			IonButtons,
			IonIcon
		},
		data(){
			return{
				menu
			}
		},
		methods:{
			openMenu(){
				menuController.open('sidemenu');
			}
		}
	}
</script>