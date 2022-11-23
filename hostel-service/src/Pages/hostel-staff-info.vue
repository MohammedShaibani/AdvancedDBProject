<template>
    <div class="form-container mx-auto my-5">
        <div class="column-container mx-auto">
            <label class="my-auto">Staff Number</label>
            <input class="input-style my-auto" type="text">
            <label class="my-auto">First Name</label>
            <input class="input-style my-auto" type="text">
            <label class="my-auto">Last Name</label>
            <input class="input-style my-auto py-6" type="text">
            <label class="my-auto">Home Address</label>
            <input class="input-style my-auto py-10" type="text">
            <v-btn class="my-auto mt-5 btn-style" rounded outlined >Back</v-btn>
        </div>
        <div class="column-container mx-auto">
            <label class="my-auto">Home Address</label>
            <input class="input-style my-auto" type="text">
            <label class="my-auto">Gender</label>
            <input class="input-style my-auto" type="text">
            <label class="my-auto">Position</label>
            <input class="input-style my-auto py-6" type="text">
            <label class="my-auto">Location</label>
            <input class="input-style my-auto py-10" type="text">
            <div class="btn-container mt-5">
                <v-btn class="my-auto btn-style mr-1" rounded outlined >Save</v-btn>
                <v-btn class="my-auto btn-style ml-1" rounded outlined >Update</v-btn>
            </div>
        </div>
    </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
.form-container {
    display: flex;
    flex-direction: row;
    background-color: #06A77D;
    color: #EEF0F2;
    justify-content: center;
    align-content: center;
    padding: 20px;
    width: 40vw;
    border-radius: 20px;
}

.column-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;

}

.input-style {
    background-color: #EEF0F2;
}

.btn-style {
    color: #EEF0F2;
}
</style>