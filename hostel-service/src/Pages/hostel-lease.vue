<template>
    <div>
      <div class="card-container mx-auto mt-10 mb-10">
        <h1 class="ml-2 mt-2">Hostel Lease</h1>
        <div class="column-container ml-2">
            <router-link to="/hostelPage" tag="button" class="mt-5 text-color px-3">Staff</router-link>
            <label class="my-auto" style="font-weight: bold">Lease</label>
            <router-link to="/hostelInspection" tag="button" class="mt-5 text-color px-3">Inspection</router-link>
            <label class="my-auto">Logout</label>

        </div>
        <div class="column-info mx-auto">
        <h2>Leases</h2>
          <label class="my-auto">Lease #</label>
          <router-link to="/hostelStaffInfo" tag="button" class="mt-5 text-color px-3">Information</router-link>
          <v-btn class="my-auto mt-5 btn-style" rounded outlined >Close</v-btn>
        </div>
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