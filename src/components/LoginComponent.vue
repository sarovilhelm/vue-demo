<!--<template>-->
<!--  &lt;!&ndash;    <form @submit.prevent="handleSubmit">&ndash;&gt;-->
<!--  &lt;!&ndash;        <h3>Login</h3>&ndash;&gt;-->

<!--  &lt;!&ndash;        <label for="email">Email:</label>&ndash;&gt;-->
<!--  &lt;!&ndash;        <input type="email" name="email" v-model="email" required />&ndash;&gt;-->

<!--  &lt;!&ndash;        <label for="email">Password:</label>&ndash;&gt;-->
<!--  &lt;!&ndash;        <input type="password" name="password" v-model="password" required />&ndash;&gt;-->

<!--  &lt;!&ndash;        <button>Login</button>&ndash;&gt;-->
<!--  &lt;!&ndash;    </form>&ndash;&gt;-->
<!--    <v-main>-->
<!--        <v-container fluid fill-height>-->
<!--            <v-layout align-center justify-center>-->
<!--                <v-flex xs12 sm8 md4>-->
<!--                    <v-card class="elevation-12">-->
<!--                        <v-toolbar dark color="primary">-->
<!--                            <v-toolbar-title>Login form</v-toolbar-title>-->
<!--                        </v-toolbar>-->
<!--                        <v-card-text>-->
<!--                            <form ref="form" @submit.prevent="handleLogin()">-->
<!--                                <v-text-field-->
<!--                                        v-model="email"-->
<!--                                        name="email"-->
<!--                                        label="email"-->
<!--                                        type="text"-->
<!--                                        placeholder="email"-->
<!--                                        required-->
<!--                                ></v-text-field>-->

<!--                                <v-text-field-->
<!--                                        v-model="password"-->
<!--                                        name="password"-->
<!--                                        label="Password"-->
<!--                                        type="password"-->
<!--                                        placeholder="password"-->
<!--                                        required-->
<!--                                ></v-text-field>-->
<!--                                <v-btn type="submit" class="mt-4" value="log in">Login</v-btn>-->
<!--                            </form>-->
<!--                        </v-card-text>-->
<!--                    </v-card>-->

<!--                </v-flex>-->
<!--            </v-layout>-->
<!--        </v-container>-->
<!--    </v-main>-->
<!--</template>-->

<!--<script>-->
<!--import {mapActions} from "vuex";-->
<!--export default {-->
<!--    // setup() {-->
<!--    //-->
<!--    //     function handleLogin() {-->
<!--    //         console.log(email.value, password.value);-->
<!--    //         //todo create this with action-->
<!--    //         signInWithEmailAndPassword(auth, email.value, password.value)-->
<!--    //             .then(user => {-->
<!--    //                 console.log('user.data', user)-->
<!--    //                 this.$router.replace('todos')-->
<!--    //             }, err => alert(err))-->
<!--    //     }-->
<!--    //-->
<!--    //     return { handleSubmit, email, password };-->
<!--    // },-->
<!--    data() {-->
<!--        return {-->
<!--            email: "",-->
<!--            password: ""-->
<!--        }-->
<!--    },-->
<!--    methods: {-->
<!--        ...mapActions(['handleSubmit']),-->
<!--        async handleLogin() {-->
<!--            // const email = ref("");-->
<!--            // const password = ref("");-->

<!--            console.log('[IN handleLogin]')-->
<!--            const resp = await this.handleSubmit({email: this.email, password: this.password});-->
<!--            console.log('email', this.email)-->
<!--            if (resp.success) {-->
<!--                console.log('user.data', resp)-->
<!--                this.$router.replace('todos')-->
<!--            } else alert(resp.err);-->
<!--            console.log('end')-->
<!--        }-->
<!--    }-->
<!--};-->
<!--</script>-->
