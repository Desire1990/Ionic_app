<template>
  <main-layout :pageTitle="pageTitle">
    <ion-card>
      <ion-card-header>
        <ion-card-title></ion-card-title>
      </ion-card-header>
      <ion-card-content v-if="userInfo">
        <ion-item>
          <ion-label position="floating">Title</ion-label>
          <ion-input v-model="userInfo.title"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Description</ion-label>
          <ion-input v-model="userInfo.description"></ion-input>v
        </ion-item>
        <ion-button expand="full" @click="saveorupdate()">{{
          btnText
        }}</ion-button>
      </ion-card-content>
    </ion-card>
  </main-layout>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import {
IonCard,IonCardHeader,IonCardTitle,IonCardContent,IonItem,IonLabel,IonInput,IonButton,
} from "@ionic/vue";
export default {
  components: {
    IonCard,IonCardHeader,IonCardTitle,IonCardContent,IonItem,IonLabel,IonInput,IonButton,
  },
  data() {
    return {
	  todoInfo:null,
      routeId: this.$route.params.id,
      btnText: "",
      pageTitle: ""
    };
  },
  computed: {
    ...mapGetters("users", {
      todoById: "todoById",
    }),
  },
  mounted() {
    if (this.routeId == 0) {
      this.todoInfo = {
        title: "",
        description: "",
      };
      this.btnText = "Add Todo";
      this.pageTitle = "Create A Todo";
    } else {
      this.todoInfo = this.todoById(this.routeId);
      this.btnText = "Update User";
      this.pageTitle = "Update A User";
    }
  },
  methods: {
    ...mapActions("myTodos", {
      addUser: "addUser",
      updateUser: "updateUser",
    }),
    saveorupdate() {
      if (this.userInfo.id == 0) {
        this.addUser(this.userInfo);
        this.$router.push("/todos");
      } else {
        this.updateUser(this.userInfo);
        this.$router.push("/todos");
      }
    },
  },
};
</script>