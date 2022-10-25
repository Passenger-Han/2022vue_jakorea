<template>
<div class="container mx-auto py-5">
    <div class="row">
        <div class="col-12 col-md-6 recruit">
            <div class="category d-flex justify-content-between align-items-center">
                <h4>모집공고</h4>
                <a href="#!">+</a>
            </div>
            <ul>
                <li v-for="index in 4" :key="index" class="p-3">
                    <p class="title">{{ recruits[index - 1].title }}</p>
                    <p class="date">{{ recruits[index - 1].recruitment }}</p>
                </li>
            </ul>
        </div>
        <div class="col-12 col-md-6 announce">
            <div class="category d-flex justify-content-between align-items-center">
                <h4>결과발표</h4>
                <a href="#!">+</a>
            </div>
            <ul>
                <li v-for="index in 4" :key="index" class="p-3">
                    <p class="title">{{ results[index - 1].title }}</p>
                    <p class="date">{{ results[index - 1].date }}</p>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: [
        'recruits',
        'results',
    ],
}
</script>

<style scoped lang="scss">
* {margin: 0; padding: 0; box-sizing: border-box;}
ul, ol, li {list-style: none;}
p {overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}

h4 {
    font-size: 2rem;
    font-weight: bold;
    padding: 2rem 0;
    
    border-bottom: 2px solid #000;
}

.container {min-height: 640px;}

.row {
    height: 100%;
}

.col {
    max-width: 50%;

    display: flex;
    flex-direction: column;
}

.category {
    a {
        font-size: 2rem;
        opacity: 0.5;
    }
}

ul {
    flex: 1;

    display: flex;
    flex-direction: column;

    li {
        flex: 1;

        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.25rem 0;

        border-top: 1px solid #00000023;

        .title {
            font-weight: bold;
        }

        .date {
            font-size: 0.875rem;
            opacity: 0.75;
        }
    }
}
</style>