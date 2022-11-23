<template>
    <div>
    <div class="form-container mx-auto my-5">
        <div class="column-container mx-auto">
          <label class="my-auto">Staff Name</label>
          <router-link to="/hostelStaffInfo" tag="button" class="mt-5 text-color px-3">Information</router-link>
          <v-btn class="my-auto mt-5 btn-style" rounded outlined >Remove</v-btn>
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
    display: inline;
    float: left;

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
