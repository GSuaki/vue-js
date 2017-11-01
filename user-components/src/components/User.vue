<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User called {{ name }}!</p>
        <button @click="changeName">Change my name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name="user.name" :age="user.age" :editUserFn="editUser"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :name="user.name" :age="user.age" :editUserFn="editUser"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data() {
            return {
                user: {
                    name: 'Gabriel',
                    age: 22
                }
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        methods: {
            changeName() {
                this.user.name = 'Ana'
            },
            editUser(name, age) {
                this.user.name = name;
                this.user.age = age;
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
