<template>
    <div class="form-container mx-auto pa-5 my-10">
        <label class="text-color">Username</label>
        <input type="text" class="input-color"/>
        <label class="text-color">Password</label>
        <input type="password" class="input-color"/>
        <router-link :to="url" tag="button" class="mt-5 text-color">Log In</router-link>
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

.input-color {
    text-align: center;
    background-color: #EEF0F2;
}

.text-color {
    color: #EEF0F2;
}

</style>