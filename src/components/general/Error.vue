<template>
    <section class="error-wrapper">
        <div>
            <font-awesome-icon icon="fa-solid fa-bug" />
            <span>Ocorreu um erro</span>
        </div>
        <p>{{errors[0]}}</p>
        <p>Verifique o console para mais informações</p>
    </section>
</template>

<style scoped>
    @import './error.css';
</style>

<script>
    export default {
        name: "Error",
        props: ["errors"],
    }
</script>