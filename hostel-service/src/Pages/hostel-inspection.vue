<template>
    <div>
      <div class="card-container mx-auto mt-10 mb-10">
        <h1 class="ml-2 mt-2">Hostel Inspection</h1>
        <div class="column-container ml-2">
            <router-link to="/hostelPage" tag="button" class="mt-5 text-color px-3">Staff</router-link>
            <router-link to="/hostelLease" tag="button" class="mt-5 text-color px-3">Lease</router-link>
            <label class="my-auto" style="font-weight: bold">Inspection</label>
            <label class="my-auto">Logout</label>
        </div>
        <div class="column-info mx-auto">
        <h2>Inspection Reports</h2>
          <label class="my-auto">Inspection #</label>
          <router-link to="/hostelStaffInfo" tag="button" class="mt-5 text-color px-3">Information</router-link>
        </div>
        <router-link to="/scheduleInspection" tag="button" class="mt-5 text-color px-3">Schedule Inspection</router-link>
      </div>
    </div>
  </template>
  
  <script>
// import loginForm from '@/components/login-form.vue';
  export default {
    components:{
        // loginForm
        
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

.column-info {
    display: inline;
    float: left;

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
      width: 40vw;
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