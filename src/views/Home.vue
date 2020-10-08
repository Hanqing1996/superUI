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
    .banner {
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: lightgreen;
        > .actions{
            padding: 8px 0;
            a {
                margin:0 8px;
                background: #fff;
                display: inline-block;
                $h: 28px;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 8px;
            }
        }
    }
</style>