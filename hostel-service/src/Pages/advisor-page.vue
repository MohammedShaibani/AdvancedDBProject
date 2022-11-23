<template>
    <div>
      <div class="card-container mx-auto mt-10 mb-10">
        <h1 class="ml-2 mt-2">Advisor</h1>
        <div class="column-container ml-2">
            <label class="my-auto" style="font-weight:bold">Personal Information</label>
            <router-link to="/myStudents" tag="button">My Students</router-link>
            <label class="my-auto">Logout</label>
            <AdvisorProfile/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
 import AdvisorProfile from '@/components/advisor-profile.vue';

  export default {
    components:{
    AdvisorProfile
}
  }
  </script>
  
  <style scoped>
  .column-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    color: #EEF0F2;
}
.column-right {
    display: flex;
    flex-direction: column;
    justify-content: flex-center;
    align-content: flex-center;
    color: #EEF0F2;
}
  .card-container {
      display: flex;
      flex-direction: column;
      background-color: #06A77D;
      width: 50vw;
      padding: 5px;
      border-radius: 20px;
  }
  
  .information-style {
      color: #EEF0F2;
  }
  
  .buttons-container {
      color: #EEF0F2;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
  }
  </style>