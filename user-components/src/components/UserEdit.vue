<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Name: <input type="text" v-model="name"></p>
        <p>Age : <input type="text" v-model="age"></p>
        
        <button @click="save">
            Save
        </button>
    </div>
</template>

<script>
    export default {
        props: ['name', 'age', 'editUserFn'],
        methods: {
            save() {
                this.editUserFn('Gabriel Borges Nogueira Suaki', 25)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
