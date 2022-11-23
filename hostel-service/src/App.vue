<template>
  <v-app>
    <v-main class="app-container">
      <login-form></login-form>
      <information-card></information-card>
      <my-students></my-students>
      <advisor-profile></advisor-profile>
      <student-profile/>
      <residence-info />
    </v-main>
  </v-app>
</template>

<script>
import AdvisorProfile from './components/advisor-profile.vue';
import InformationCard from './components/information-card.vue';
import loginForm from './components/login-form.vue';
import MyStudents from './components/my-students.vue';
import StudentProfile from './Pages/student-profile.vue';
import ResidenceInfo from './Pages/student-residence-info.vue';

export default {
  components: { loginForm, InformationCard, MyStudents, AdvisorProfile, StudentProfile, ResidenceInfo },
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
