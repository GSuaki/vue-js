<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Name: {{ name }}</p>
        <p>Age : {{ age }}</p>

        <button @click="edit">
            Edit
        </button>
    </div>
</template>

<script>

    import { eventBus } from '../main';

    export default {
        props: {
            name: {
                type: String,
                required: true
            },
            age: {
                type: Number,
                default: 22
            },
            editUserFn: {
                type: Function,
                required: true
            }
        },
        methods: {
           edit() {
               this.editUserFn('Gabriel Suaki', 22)
           }
        },
        created() {
            eventBus.$on('userEdited', (value) => {
                this.name = value.name;
                this.age  = value.age;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
