<template>
  <v-app>
    <v-main class="app-container">
      <router-view></router-view>
      <login-form></login-form>
      <information-card></information-card>
      <my-students></my-students>
      <advisor-profile></advisor-profile>
      <student-profile/>
      <residence-info />
      <new-lease-vue />
      <cancel-lease-vue />
      <pay-screen-vue />
      <view-invoice-vue />
      <invoices-page />
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
import newLeaseVue from './Pages/new-lease.vue';
import cancelLeaseVue from './Pages/cancel-lease.vue';
import payScreenVue from './Pages/pay-screen.vue';
import viewInvoiceVue from './Pages/view-invoice.vue';
import InvoicesPage from './Pages/InvoicesPage.vue';

export default {
  components: { loginForm, InformationCard, MyStudents, AdvisorProfile, StudentProfile, ResidenceInfo, newLeaseVue, cancelLeaseVue, payScreenVue, viewInvoiceVue, InvoicesPage },
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
