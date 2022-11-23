<template>
    <div class="form-container mx-auto my-5">
        <div class="column-container mx-auto">
            <div class="title-container mx-auto">
                <p>Invoice Information</p>
            </div>

            <div class="row-container mx-auto">
                <div class="column-container mx-auto">
                    <p style="font-weight:bold;">Latest Bill</p>
                    
                    <label class="my-auto">Amount Due:</label>
                    <input class="input-style my-auto" type="text">
                
                    <label class="my-auto">Due By:</label>
                    <input class="input-style my-auto" type="text">

                    <v-btn class="my-auto btn-style mr-1" rounded outlined >Pay</v-btn>
                </div>

                <div class="invoices-container mx-auto">
                    <div class="invoice-container mx-auto">
                        <p style="margin-right: 20px;">Latest Invoice</p>
                        <p>View</p>
                    </div>

                    <div class="invoice-container mx-auto">
                        <p style="margin-right: 20px;">Past Invoice</p>
                        <p>View</p>
                    </div>
                    
                    <div class="invoice-container mx-auto">
                        <p style="margin-right: 20px;">Past Invoice</p>
                        <p>View</p>
                    </div>
                    
                    <div class="invoice-container mx-auto">
                        <p style="margin-right: 20px;">Past Invoice</p>
                        <p>View</p>
                    </div>
                </div>
            </div>
            
            <v-btn class="my-auto btn-style mr-1" rounded outlined >Leases</v-btn>
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

.invoices-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
    padding: 10px;
    border: 2px solid black;
}
.invoice-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: flex-start;
    padding: 10px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
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