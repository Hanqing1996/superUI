<template>
    <div class="topNav">
        <div class="logo">LOGO</div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
    </div>
</template>

<script lang="ts">
    export default {
        name: "topNav"
    }
</script>

<style lang="scss" scoped>
    .topNav {
        background: pink;
        display: flex;
        padding: 16px;
        position: relative;
        z-index: 10;
    > .logo {
        max-width: 6em;
        margin-right: auto;
    }
    > .menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
    > li {
        margin: 0 1em;
    }
    }
    }
</style>