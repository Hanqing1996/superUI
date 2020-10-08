<template>
    <div>
        <topNav/>
        <div class="banner">
            <h1>superUI</h1>
            <h2>超厉害哦</h2>
            <p class="actions">
                <a href="">Github</a>
                <a href="">开始</a>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
    import topNav from "../components/topNav.vue"
    export default {
        name: "Home",
        components:{
            topNav
        }
    }
</script>

<style lang="scss" scoped>

</style>