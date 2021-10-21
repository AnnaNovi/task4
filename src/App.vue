<template>
  <div id="app">
    <p>(Визуализация)</p>
    <p>Вывод данных из store.state приложения:</p>
    <p>{{this.$store.state.usersReviews["userName"]}}</p>
    <p>{{this.$store.state.usersReviews["userSurname"]}}</p>
    <p>{{this.$store.state.usersReviews.userAge}}</p>
    <p>{{this.$store.state.usersReviews.userReview}}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
