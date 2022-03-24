<template>
	<main-layout pageTitle='Todos'>
		<div>
			<h4>Todos List</h4>
			<!-- <ion-button expand='full' @click='showTodos()'> Show Todos</ion-button> -->
			<ion-card v-for='todo in allTodos' :key='todo.id'>
				<ion-card-content>
					<ion-card-title>{{ todo.description }}</ion-card-title>
				</ion-card-content>
				<ion-card-content>
					<ion-iem>{{todo.title}}</ion-iem>					
				</ion-card-content>
			    <ion-item> 
		           <ion-buttons slot="end">
		             <ion-icon @click="edit(user.id)" style='color: blue;' :icon="create" slot="end"></ion-icon>
		             <ion-icon :icon="trash" style='color: red;' slot="end"></ion-icon>
		           </ion-buttons>
		        </ion-item>
		      </ion-card>
		</div>
		<template v-slot:footerdata>
	      <ion-fab vertical="bottom" horizontal="end">
	        <ion-fab-button routerLink="/todos/add/">
	          <ion-icon :icon="add"></ion-icon>
	        </ion-fab-button>
	      </ion-fab>
	    </template>
	</main-layout>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import {IonCard, IonCardContent, IonButton,IonList, IonCardTitle,IonItem,IonLabel,IonFab,IonFabButton,IonIcon,IonButtons
} from "@ionic/vue";
import { add, create,trash } from "ionicons/icons";
export default {
  components: {
    IonButton,IonCardTitle,IonLabel,IonFab,IonFabButton,IonIcon,IonButtons, IonList, IonItem,IonCard, IonCardContent
  },
  computed: {
    ...mapGetters("myTodos", {
      allTodos: "allTodos",
    }),
  },
  mounted(){
  	this.fetchTodos()
  },
  methods: {
    ...mapActions("myTodos", {
      fetchTodos: "fetchTodos",
      deletTodoAction: "deleteTodo"
    }),
    deleteTodo(id){
      this.deletTodoAction(id);
    },
    async showTodos() {
      await this.fetchTodos();
    },
    edit(id){
      this.$router.push(`/add-or-update/${id}`);
    }
  },
    data() {
    return {
      add,
      create,
      trash
    };
  },
  
};
</script>