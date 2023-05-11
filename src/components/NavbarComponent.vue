<template>
    <nav>
        <h1>TODOs demo</h1>
        <!-- for all users -->
        <div>
            <router-link to="/">Home</router-link>
        </div>
        <!-- for logged in users -->
        <!-- for logged out users -->
        <div>
                <router-link to="/todos">see todo list</router-link>
        </div>
    </nav>
</template>

<script>

export default {};
</script>
