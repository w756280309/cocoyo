<template>
    <nav class="navbar navbar-inverse navbar-static-top">
        <div class="container-fluid"></div>
    </nav>
</template>


<script>
    export default{

    }
</script>

<style scoped>
    #repbar {
        margin-left: -15px;
    }

    .navbar-nav {
        li {
            a {
                padding-top: 0px;
                padding-bottom: 0px;
                line-height: 60px;
            }
        }
    }

    .navbar-toggle {
        margin: 0;
        font-size: 20px;
        text-decoration: none;
        padding: 13px 10px;
        border: 0;
        color: #777;
        cursor: pointer;
    }

    .navbar-inverse .navbar-toggle:hover {
        border: 0;
        border-radius: 0;
        background-color: #fff !important;
        text-decoration: none;
        color: #888;
    }
</style>