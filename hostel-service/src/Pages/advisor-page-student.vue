<template>
  <div>
    <div class="card-container mx-auto mt-10 mb-10">
      <h1 class="ml-2 mt-2">Advisor</h1>
      <div class="column-container ml-2">
        <router-link to="/advisorPage" tag="button"
          >Personal Information</router-link
        >
        <label class="my-auto" style="font-weight: bold">My Students</label>
        <label class="my-auto">Logout</label>
        <div class="column-student mx-auto">
          <label class="my-auto">Student Name</label>
          <router-link
            to="/students"
            tag="button"
            class="mt-5 text-color px-3"
            >Information</router-link
          >
          <v-btn class="my-auto mt-5 btn-style" rounded outlined>Monitor</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    
  },
};
</script>

<style scoped>
.column-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  color: #eef0f2;
}

.column-student {
    display: inline;
    float: left;

    color: #EEF0F2;
}
.column-right {
  display: flex;
  flex-direction: column;
  justify-content: flex-center;
  align-content: flex-center;
  color: #eef0f2;
}
.card-container {
  display: flex;
  flex-direction: column;
  background-color: #06a77d;
  width: 50vw;
  padding: 5px;
  border-radius: 20px;
}

.information-style {
  color: #eef0f2;
}

.buttons-container {
  color: #eef0f2;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>
