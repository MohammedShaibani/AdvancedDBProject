<template>
    <div>
      <div class="card-container mx-auto mt-10 mb-10">
        <h1 class="ml-2 mt-2">Hostel Staff</h1>
        <div class="column-container ml-2">
            <label class="my-auto">Staff</label>
            <label class="my-auto">Lease</label>
            <label class="my-auto">Inspection</label>
            <label class="my-auto">Logout</label>
        </div>
        <hostelStaff/>
      </div>
    </div>
  </template>
  
  <script>
// import loginForm from '@/components/login-form.vue';
  import hostelStaff from '@/Pages/hostel-staff.vue'
  export default {
    components:{
        // loginForm
        hostelStaff
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