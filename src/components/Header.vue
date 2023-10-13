<template>
    <div id="header__wrapper">
        <a id="header__logo" href="#default" target="././public/index.html">
            <svg src='./assets/logo-dark.svg'></svg>
        </a>
        <div id="header__right">
            <button>Web App Login</button>
            <nav></nav>
        </div>
    </div>
</template>

<script>

</script>

<style>
    #header__wrapper {
        background-color: var(--color-header-dark);
        display: flex;
        justify-content: space-between;
    }

    #header__logo {
        display: block;
    }

    #header__logo svg {
        width: 150px;
    }
</style>