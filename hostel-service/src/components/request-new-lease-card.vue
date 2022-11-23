<template>
    <div class="form-container mx-auto my-5">
        <div class="title-container mx-auto">
            <p>Lease Request</p>
        </div>
        
        <div class="column-container mx-auto">
            <label class="my-auto"># Terms</label>
            <input class="input-style my-auto" type="text">
        </div>
        
        <div class="row-container mx-auto">
            <div class="column-container mx-auto mr-2">
                <label class="my-auto">Start Date</label>
                <input class="input-style my-auto" type="text">
            </div>

            <div class="column-container mx-auto ml-2">
                <label class="my-auto">End Date</label>
                <input class="input-style my-auto" type="text">
            </div>
        </div>

        

        

        <div class="column-container mx-auto">
            <div class="row-container mx-auto">
                <div class="column-container mx-auto ml-2">
                    <label class="my-auto">Accomodation Details</label>
                    <input class="input-style my-auto" type="text">
                </div>
            </div>

            <div class="row-container mx-auto">
                <div class="column-container mx-auto mr-2">
                    <v-btn class="my-auto btn-style mr-1" rounded outlined >Request Lease</v-btn>
                </div>

                <div class="column-container mx-auto ml-2">
                    <v-btn class="my-auto btn-style mr-1" rounded outlined >Cancel</v-btn>
                </div>
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
    flex-direction: column;
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
    padding: 10px;
}

.row-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: flex-start;
    padding: 10px;
    margin: 10px;
}

.title-container {
    text-decoration: underline;
    margin: 50px;
}

.input-style {
    background-color: #EEF0F2;
}

.btn-style {
    color: #EEF0F2;
}
</style>