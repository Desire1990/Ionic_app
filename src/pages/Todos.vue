<template>
	<main-layout pageTitle='Todos'>
		<h4>Todos List</h4>
		<!-- <ion-button expand='full' @click='showTodos()'> Show Todos</ion-button> -->
		<ion-list v-for='todo in myTodos' :key='todo.id'>
			<ion-item >{{ todo.title }}</ion-item>
		</ion-list>
	</main-layout>
</template>
<script>
	import { IonButton, IonList, IonItem} from "@ionic/vue";
	import axios from 'axios';
	export default{
		components:{
			IonButton, 
			IonList,
			IonItem
		},
		data(){
			return {
				myTodos:this.$store.state.myTodos
				// myTodos:[]
			}
		},
		mounted(){
			this.showTodos()
		},
		methods:{
			showTodos(){
				axios.get(this.$store.state.url, this.header
				).then((response) => {
				  this.myTodos = response.data;
				  // this.myTodos = response.data;
				  console.log(response.data)
				}).catch((error) => {
				  console.error(error);
				});
			}
		}
		
	}
</script>
