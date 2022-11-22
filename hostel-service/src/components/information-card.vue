<template>
  <div class="card-container mx-auto mt-10 mb-10">
    <h3 class="information-style ml-2">
        Placeholder
    </h3>
    <div class="buttons-container my-2 mr-2">
        <v-btn rounded outlined class="information-style mr-1">Information</v-btn>
        <v-btn rounded outlined class="information-style ml-1">Monitor</v-btn>
    </div>
  </div>
</template>

<script>
export default {

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