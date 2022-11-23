<template>
    <div class="flex-container mx-auto">
        <h1>Hostel Login</h1>
        <loginForm />
    </div>
</template>

<script>
    import loginForm from '@/components/login-form.vue';

    export default {
        components: { loginForm },
        name: 'hostelLogin',
        loginForm,
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