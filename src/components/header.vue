<template>
    <header>

        <nav class="navbar navbar-expand-sm navbar-light bg-light">

            <div class="container">

                <a class="navbar-brand" href="#"><img src="../assets/logo.svg" alt=""></a>

                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> <!-- Menu toggle button for small-screen devices -->

                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                        
                        <li class="nav-item dropdown" v-for="(element, index) in navigations" :key="index">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ element.title }}</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#" v-for="(subElement, subIndex) in element.content" :key="subIndex">{{ subElement.name }}</a>
                            </div>
                        </li>

                    </ul>
                    <!-- <form class="d-flex my-2 my-lg-0">
                        <input class="form-control me-sm-2" type="text" placeholder="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> -->
                </div>

            </div>

        </nav>

    </header>

</template>

<script>
export default {
    props: [
        'navigations',
    ]
}
</script>

<style lang="scss">
    a.navbar-brand {
        width: 100%;
        max-width: 180px;
        height: auto;
    }

    .dropdown-toggle::after {
        display: none !important;
    }
</style>