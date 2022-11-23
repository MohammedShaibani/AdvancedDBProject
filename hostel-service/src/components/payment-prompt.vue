<template>
    <div class="form-container mx-auto my-5">
        <div class="column-container mx-auto">
            <div class="row-container mx-auto">
                <h1>Invoice Payment</h1>
            </div>

            <div class="row-container mx-auto">
                <v-btn class="my-auto btn-style mr-2" rounded outlined >Visa</v-btn>
                <v-btn class="my-auto btn-style mr-2 ml-2" rounded outlined >Cheque</v-btn>
                <v-btn class="my-auto btn-style ml-2" rounded outlined >Cash</v-btn>
            </div>
            
            <div class="prompt-container mx-auto">
                <div class="visa-container mx-auto">
                    <div class="column-container mx-auto">
                        <label class="my-auto">Cardholder Name</label>
                        <input class="input-style my-auto" type="text">
                    </div>
                    
                    <div class="column-container mx-auto">
                        <label class="my-auto">Card Number</label>
                        <input class="input-style my-auto" type="text">
                    </div>
                    
                    <div class="row-container mx-auto">
                        <div class="column-container mx-auto">
                            <label class="my-auto">Expiry Date</label>
                            <input class="input-style my-auto" type="text" placeholder="MM/YYYY">
                        </div>
                        
                        <div class="column-container mx-auto">
                            <label class="my-auto">CV</label>
                            <input class="input-style my-auto" type="text">
                        </div>
                    </div>
                    
                    <div class="row-container mx-auto">
                        <v-btn class="my-auto btn-style mr-2" rounded outlined >Pay</v-btn>
                        <v-btn class="my-auto btn-style ml-2" rounded outlined >Cancel</v-btn>
                    </div>
                </div>
                <div class="cheque-container mx-auto">
                    <p>To pay by cheque, mail the cheque to our office:
                        
                        Residence Services
                        Room 49, Vanier Hall
                        401 Sunset Avenue
                        Windsor, Ontario N9B 3P4
                    </p>
                </div>
                
                <div class="cash-container mx-auto">
                    <p>To pay by cash, visit us at our office:
                        
                        Residence Services
                        Room 49, Vanier Hall
                        401 Sunset Avenue
                        Windsor, Ontario N9B 3P4
                    </p>
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