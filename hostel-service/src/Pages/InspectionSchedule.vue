<template>
    <div class="form-container mx-auto pa-5 my-10">
        <label class="text-color">Flat #</label>
        <input type="text" class="input-color"/>
        <label class="text-color">Inspect Date</label>
        <input type="password" class="input-color"/>
        
        <div class="buttons-container my-2 mr-2">
            <v-btn rounded outlined class="information-style mr-1">Schedule</v-btn>
            <v-btn rounded outlined class="information-style ml-1">Close</v-btn>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            url: String
        }
    }
</script>

<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #06A77D;
    width: 400px;
    border-radius: 20px;
    text-align: center;
}
.column-info {
    display: inline;
    float: left;

    color: #EEF0F2;
}

.input-color {
    text-align: center;
    background-color: #EEF0F2;
}

.text-color {
    color: #EEF0F2;
}
.buttons-container {
    color: #EEF0F2;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
</style>