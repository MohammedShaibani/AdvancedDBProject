<template>
  <div class="flex-container mx-auto my-5">
        <label class="my-auto">Name</label>
        <input class="input-style my-auto" type="text">
        <label class="my-auto">Position</label>
        <input class="input-style my-auto" type="text">
        <label class="my-auto">Telephone</label>
        <input class="input-style my-auto" type="text">
        <label class="my-auto">Department</label>
        <input class="input-style my-auto" type="text">
        <label class="my-auto">Room</label>
        <input class="input-style my-auto" type="text">
        <div class="btn-container mt-5">
            <v-btn class="my-auto btn-style mr-1" rounded outlined >Save</v-btn>
            <v-btn class="my-auto btn-style ml-1" rounded outlined >Update</v-btn>
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
    flex-direction: column;
    background-color: #06A77D;
    color: #EEF0F2;
    justify-content: center;
    align-content: center;
    padding: 20px;
    width: 40vw;
    border-radius: 20px;
}

.input-style {
    background-color: #EEF0F2;
}

.btn-style {
    color: #EEF0F2;
}

.btn-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>