<template>
    <div class="form-container mx-auto my-5">
        <div class="column-container mx-auto">
            <label class="my-auto">Username</label>
            <input class="input-style my-auto" type="text">
            <label class="my-auto">Name</label>
            <input class="input-style my-auto" type="text">
            <label class="my-auto">Birth Date</label>
            <input class="input-style my-auto" type="text">
            <label class="my-auto">Current Status</label>
            <input class="input-style my-auto" type="text">
            <label class="my-auto">Comments</label>
            <input class="input-style my-auto py-10" type="text">
            <router-link :to="url" tag="button" class="my-auto mt-5 text-color">Back</router-link>
        </div>
        <div class="column-container mx-auto">
            <label class="my-auto">Home Address</label>
            <input class="input-style my-auto" type="text">
            <label class="my-auto">Nationality</label>
            <input class="input-style my-auto" type="text">
            <label class="my-auto">Course</label>
            <input class="input-style my-auto py-6" type="text">
            <label class="my-auto">Special Needs</label>
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