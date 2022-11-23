<template>
    <div class="card-container mx-auto mt-10 mb-10">
      <h1>This is home page</h1>
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