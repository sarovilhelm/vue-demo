<template>
    <nav>
        <h1>Vuex Auth</h1>
        <!-- for all users -->
        <div>
            <router-link to="/">Home</router-link>
        </div>
        <!-- for logged in users -->
        <div>
            <span>Logged in as...</span>
            <button>Logout</button>
        </div>
        <!-- for logged out users -->
        <div>
            <router-link to="/todos">WANNA SEE SOME TODOS>?</router-link>
        </div>
    </nav>
</template>

<script>
export default {};
</script>
