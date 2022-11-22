<template>
  <v-app>
    <v-main class="app-container">
      <login-form></login-form>
      <information-card></information-card>
      <my-students></my-students>
      <advisor-profile></advisor-profile>
    </v-main>
  </v-app>
</template>

<script>
import AdvisorProfile from './components/advisor-profile.vue';
import InformationCard from './components/information-card.vue';
import loginForm from './components/login-form.vue';
import MyStudents from './components/my-students.vue';

export default {
  components: { loginForm, InformationCard, MyStudents, AdvisorProfile },
  name: 'App',
    MyStudents,
};
</script>

<style scoped>
.app-container {
  background-color: #24272B;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>
