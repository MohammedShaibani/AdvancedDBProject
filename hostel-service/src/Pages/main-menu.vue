<template>
  <div class="flex-container mx-auto my-auto mt-10">
    <H1 class="pa-10 text-center" >Welcome, what role would you like to access?</H1>
    <div class="option-container mx-auto my-auto">
        <router-link class="linkClass" to="/studentLogin">Students</router-link>
        <router-link class="linkClass" to="/advisorLogin">Advisor Of Studies</router-link>
        <router-link class="linkClass" to="/hostelLogin">Hostel Staff</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.flex-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: #24272B;
    color: #EEF0F2;

}

.option-container {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    text-align: center;
    background-color: #06A77D;
    border-radius: 20px;
    padding: 20px;
    width: 40vw;
}

.linkClass {
  color: white;
}

</style>