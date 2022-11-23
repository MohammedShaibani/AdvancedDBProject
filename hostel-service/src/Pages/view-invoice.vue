<template>
    <div class="flex-container mx-auto">
        <InvoiceTemplate />
    </div>
</template>

<script>
    import InvoiceTemplate from '../components/invoice-template.vue';

    export default {
        components: { InvoiceTemplate },
        name: 'App',
        InvoiceTemplate,
    };
</script>

<style scoped>

.flex-container {
    display: flex;
    flex-direction: column;
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