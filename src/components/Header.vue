<template>
  <ul class="nav nav-pills">
    <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
    <router-link to="/movies" tag="li" active-class="active"><a>Movies</a></router-link>
    <router-link to="/cars" tag="li" active-class="active"><a>Cars</a></router-link>
    <router-link to="/about?a=100" tag="li" active-class="active"><a>About</a></router-link>

  </ul>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
