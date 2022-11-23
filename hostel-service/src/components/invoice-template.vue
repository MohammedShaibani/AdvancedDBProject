<template>
    <div class="form-container mx-auto my-5">
        <div class="column-container mx-auto">
            <div class="row-container mx-auto">
                <v-btn class="my-auto btn-style mr-1" rounded outlined >EXIT</v-btn>
            </div>

            <div class="row-container mx-auto">
                <label class="my-auto mr-2">Invoice #</label>
                <input class="input-style my-auto ml-2" type="text">
            </div>

            <div class="row-container mx-auto">
                <label class="my-auto mr-2">Lease #</label>
                <input class="input-style my-auto ml-2" type="text">
            </div>
            
            <div class="row-container mx-auto">
                <label class="my-auto mr-2">Semester</label>
                <input class="input-style my-auto ml-2" type="text">
            </div>
            
            <div class="row-container mx-auto">
                <label class="my-auto mr-2">Payment Due</label>
                <input class="input-style my-auto ml-2" type="text">
            </div>
            
            <div class="row-container mx-auto">
                <label class="my-auto mr-2">Payment Deadline</label>
                <input class="input-style my-auto ml-2" type="text">
            </div>
            
            <div class="row-container mx-auto">
                <label class="my-auto mr-2"> Most Recent Paid Date</label>
                <input class="input-style my-auto ml-2" type="text">
            </div>
            
            <div class="row-container mx-auto">
                <label class="my-auto mr-2">Total Amount Paid</label>
                <input class="input-style my-auto ml-2" type="text">
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
    justify-content: space-between;
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