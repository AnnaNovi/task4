<template>
  <div class="v-form">
    <form action="" class="v-form__form">
      <input v-model="userName" type="text" class="v-input__item" placeholder="Введите Имя">
      <input v-model="userSurname" type="text" class="v-input__item" placeholder="Введите Фамилию">
      <input v-model="userAge" type="text" class="v-input__item" placeholder="Введите возраст">
    </form>
  </div>
</template>

<script>

export default {
  name: 'v-form',
  components: {
  },
  props: {},
  data(){
    return{
      userName: '',
      userSurname: '',
      userAge: '',
    }
  },
  computed: {},
  methods: {},
  watch: {},
  mounted(){}
}
</script>

<style>
  .v-form__form{
    width: 200px;
    margin: 0 auto;
  }
  .v-input__item {
    width: 100%;
    height: 50px;
    padding: 20px;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 400;
    font-size: 14px;
    box-sizing: border-box;
    background: transparent;
    border: 1px solid #aecfde;
    border-radius: 10px;
    color: black;
    outline: none;
    margin-bottom: 20px;
  }
  .v-input__item:last-of-type{
    margin-bottom: 0px;
  }
  .v-input__item::placeholder{
    color: #adc6de;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 400;
    font-size: 14px;
  }
</style>
